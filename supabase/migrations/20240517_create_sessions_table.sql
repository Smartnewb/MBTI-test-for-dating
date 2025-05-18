-- Create sessions table for anonymous users
CREATE TABLE IF NOT EXISTS public.sessions (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  last_active TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  data JSONB DEFAULT '{}'::jsonb,
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (now() + interval '1 day') NOT NULL
);

-- Create index on last_active for cleanup operations
CREATE INDEX IF NOT EXISTS sessions_last_active_idx ON public.sessions (last_active);

-- Create index on expires_at for cleanup operations
CREATE INDEX IF NOT EXISTS sessions_expires_at_idx ON public.sessions (expires_at);

-- Create function to clean up expired sessions
CREATE OR REPLACE FUNCTION cleanup_expired_sessions()
RETURNS void AS $$
BEGIN
  DELETE FROM public.sessions
  WHERE expires_at < now();
END;
$$ LANGUAGE plpgsql;

-- Create function to extend session expiry
CREATE OR REPLACE FUNCTION extend_session_expiry(session_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.sessions
  SET 
    last_active = now(),
    expires_at = now() + interval '1 day'
  WHERE id = session_uuid;
END;
$$ LANGUAGE plpgsql;

-- Create RLS policies for sessions table
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;

-- Policy for system to manage sessions
CREATE POLICY "System can manage sessions" ON public.sessions
  USING (true)
  WITH CHECK (true);

-- Create scheduled job to clean up expired sessions (runs daily)
-- Note: This requires pg_cron extension to be enabled
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_extension WHERE extname = 'pg_cron'
  ) THEN
    -- Drop existing job if it exists
    PERFORM cron.unschedule('cleanup_expired_sessions');
    
    -- Schedule new job
    PERFORM cron.schedule(
      'cleanup_expired_sessions',
      '0 0 * * *', -- Run at midnight every day
      $$SELECT cleanup_expired_sessions()$$
    );
  END IF;
EXCEPTION
  WHEN OTHERS THEN
    -- pg_cron might not be available, ignore error
    RAISE NOTICE 'pg_cron extension not available, skipping scheduled job creation';
END $$;
