/*
# Disable the database email trigger

1. Purpose
- Remove the experimental database trigger that attempted to call Resend directly from PostgreSQL.
- Email delivery remains in the Supabase Edge Function, where the protected Resend secret is available.

2. Modified database objects
- `contact_submissions`: no columns or stored submissions are changed.
- `on_contact_submission_insert`: removed so new submissions do not make an unauthenticated database-side HTTP request.
- `send_contact_email_trigger`: retained but no longer attached to the table, avoiding an unnecessary privileged execution path.

3. Security
- No public read access is added.
- The existing public insert policy for the contact form is unchanged.
- The existing `app_config` table is not used for secrets and remains inaccessible through public policies.

4. Important notes
- Contact emails are sent only by the deployed Edge Function, which reads `RESEND_API_KEY` from protected function secrets.
- Existing contact submissions remain untouched.
*/

DROP TRIGGER IF EXISTS on_contact_submission_insert ON contact_submissions;
