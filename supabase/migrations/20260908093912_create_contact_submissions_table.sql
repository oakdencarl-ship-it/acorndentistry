/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) - the sender's full name
  - `email` (text, not null) - the sender's email address
  - `phone` (text, nullable) - optional phone number
  - `service` (text, nullable) - the service of interest from a dropdown
  - `message` (text, not null) - the inquiry message
  - `created_at` (timestamptz, defaults to now) - when the submission was received

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public visitors can submit the contact form).
- No SELECT, UPDATE, or DELETE for anon or authenticated — only the database owner / service role can read submissions.
  This prevents anyone from reading or manipulating other people's submissions through the public API.

3. Important Notes
- This is a single-tenant, no-auth app (no sign-in screen). The contact form is public-facing.
- Only INSERT is exposed to the public; all other operations are denied by default (no policy = no access under RLS).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) to insert new contact submissions
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- No SELECT, UPDATE, or DELETE policies — submissions are read-only via the service role.
