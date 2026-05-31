## Database Migrations (Supabase CLI)

### 1. Create a New Migration
Run this command to generate a blank timestamped `.sql` file in `supabase/migrations/`:
```bash
npx supabase migration new <migration_name>
```
*Paste your SQL schema/data into the newly created file.*

### 2. Push to Live Database
Apply all pending local migrations to your remote Supabase instance:
```bash
npx supabase db push
```

### 3. Alternative: Capture DB Changes (Schema Diff)
If you made changes directly via the Supabase Dashboard UI, pull them into a local migration file:
```bash
npx supabase db diff --use-migra -f <migration_name>
```