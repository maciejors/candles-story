-- 1. Revoke write permissions on the public schema from all users
REVOKE INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public FROM public;

-- 2. Ensure future tables also default to read-only
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE INSERT, UPDATE, DELETE, TRUNCATE ON TABLES FROM public;

-- 3. Set the entire database configuration to read-only (Global safety switch)
ALTER DATABASE postgres SET default_transaction_read_only = on;
