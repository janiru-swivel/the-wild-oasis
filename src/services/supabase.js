import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qpdaokefcxkjoptafoat.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwZGFva2VmY3hram9wdGFmb2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMjg2NDEsImV4cCI6MjA0MTYwNDY0MX0.Ok47r4FG8XaC3BHFT01oa0_osuox4np9II-rzxNDG7M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
