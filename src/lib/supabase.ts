import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qrqnxnfldvvtodxtntdo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFycW54bmZsZHZ2dG9keHRudGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4ODk1MjMsImV4cCI6MjEwNDQ2NTUyM30.GkMxo6AtSnILUXBgE_jpIhU1Iio9RFUJt3i-bGellJA';

// Build without these vars and createClient throws while the module is still
// being evaluated, which takes the whole site down before React can mount.
// Degrade to a disabled contact form instead.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. Contact form submissions are disabled.'
  );
}

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
