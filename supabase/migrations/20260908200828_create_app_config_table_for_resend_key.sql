-- Create a config table for storing app-level secrets needed by triggers
CREATE TABLE IF NOT EXISTS app_config (
  key text PRIMARY KEY,
  value text NOT NULL
);

ALTER TABLE app_config ENABLE ROW LEVEL SECURITY;

-- No policies: only the service role can read/write this table.
-- The trigger function is SECURITY DEFINER so it can read from it.

-- Store the Resend API key
INSERT INTO app_config (key, value) VALUES ('resend_api_key', '')
ON CONFLICT (key) DO NOTHING;
