import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
	'https://jitswxfrykrzjctloeog.supabase.co',
	'sb_publishable_jF0EKTFMAUSy_Wcijlt8-Q_2-HcjuiT'
);
