import { createClient } from "@supabase/supabase-js";

// Supabase URL and Anonymous Key
const supabaseUrl = "https://eqdhfqqwuhjwnkiromba.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZGhmcXF3dWhqd25raXJvbWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MzYwOTAsImV4cCI6MjA1MDExMjA5MH0.hCYQr4z3x7GPXXjY0K05c1UhymkdH7iAjd42PT-ajs8";

// Initialize Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
