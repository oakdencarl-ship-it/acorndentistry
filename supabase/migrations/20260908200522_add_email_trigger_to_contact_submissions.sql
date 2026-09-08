-- Enable pg_net for HTTP requests from the database
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Add a column to track whether an email has been sent for each submission
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS email_sent boolean DEFAULT false;

-- Create a function that sends an email via Resend when a new submission is inserted
CREATE OR REPLACE FUNCTION send_contact_email_trigger()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  service_label text;
  email_html text;
  request_id bigint;
BEGIN
  service_label := CASE NEW.service
    WHEN 'checkup' THEN 'Routine Check-up'
    WHEN 'cleaning' THEN 'Professional Cleaning'
    WHEN 'whitening' THEN 'Teeth Whitening'
    WHEN 'cosmetic' THEN 'Cosmetic Dentistry'
    WHEN 'orthodontics' THEN 'Orthodontics'
    WHEN 'emergency' THEN 'Emergency Care'
    WHEN 'other' THEN 'Other'
    ELSE COALESCE(NEW.service, 'Not specified')
  END;

  email_html := '<h2>New Contact Form Enquiry</h2>' ||
    '<p><strong>From:</strong> ' || NEW.name || ' (' || NEW.email || ')</p>' ||
    '<p><strong>Phone:</strong> ' || COALESCE(NEW.phone, 'Not provided') || '</p>' ||
    '<p><strong>Service of Interest:</strong> ' || service_label || '</p>' ||
    '<p><strong>Message:</strong></p>' ||
    '<p>' || replace(NEW.message, E'\n', '<br>') || '</p>' ||
    '<hr><p style="color:#888;font-size:12px;">Submitted from the Acorn Dentistry Southport website at ' || NEW.created_at::text || '</p>';

  -- Send email asynchronously via pg_net (fire-and-forget)
  PERFORM net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.resend_api_key', true)
    ),
    body := jsonb_build_object(
      'from', 'Acorn Dentistry Website <onboarding@resend.dev>',
      'to', jsonb_build_array('acorndentist@gmail.com'),
      'reply_to', NEW.email,
      'subject', 'New Contact Form Enquiry from ' || NEW.name,
      'html', email_html
    )
  );

  NEW.email_sent := true;
  RETURN NEW;
END;
$$;

-- Create the trigger
DROP TRIGGER IF EXISTS on_contact_submission_insert ON contact_submissions;
CREATE TRIGGER on_contact_submission_insert
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION send_contact_email_trigger();
