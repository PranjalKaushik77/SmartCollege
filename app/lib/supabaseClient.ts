import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zxqvkkobtxhxyugtfsfn.supabase.co';  // Found in your project settings
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cXZra29idHhoeHl1Z3Rmc2ZuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzA0OTcwMywiZXhwIjoyMDU4NjI1NzAzfQ.B6gvySrHxZuENTTd1M25fjtU4cy2my_5BFsBS5orxZo';  // Use the anon key from Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
