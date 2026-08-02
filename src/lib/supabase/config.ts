import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
	'https://wvbgkjlbbwbeluzmgypw.supabase.co',
	'sb_publishable_Uj6ePMpJ_u8BE8EAVHHsmA_hD7kV7bt'
);
