import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

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
