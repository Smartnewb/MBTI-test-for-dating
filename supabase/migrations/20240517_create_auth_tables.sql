-- Create refresh_tokens table
CREATE TABLE IF NOT EXISTS public.refresh_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  revoked BOOLEAN DEFAULT false NOT NULL
);

-- Create password_reset_tokens table
CREATE TABLE IF NOT EXISTS public.password_reset_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  used BOOLEAN DEFAULT false NOT NULL
);

-- Create session_logs table
CREATE TABLE IF NOT EXISTS public.session_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  ip_address INET,
  user_agent TEXT,
  login_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  logout_at TIMESTAMP WITH TIME ZONE,
  is_successful BOOLEAN DEFAULT true NOT NULL
);

-- Create RLS policies for refresh_tokens table
ALTER TABLE public.refresh_tokens ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own refresh tokens
CREATE POLICY "Users can view own refresh tokens" ON public.refresh_tokens
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy for users to insert their own refresh tokens
CREATE POLICY "Users can insert own refresh tokens" ON public.refresh_tokens
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy for users to update their own refresh tokens
CREATE POLICY "Users can update own refresh tokens" ON public.refresh_tokens
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Create RLS policies for password_reset_tokens table
ALTER TABLE public.password_reset_tokens ENABLE ROW LEVEL SECURITY;

-- Only allow system access to password reset tokens
CREATE POLICY "System only access for password reset tokens" ON public.password_reset_tokens
  USING (false);

-- Create RLS policies for session_logs table
ALTER TABLE public.session_logs ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own session logs
CREATE POLICY "Users can view own session logs" ON public.session_logs
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy for system to insert session logs
CREATE POLICY "System can insert session logs" ON public.session_logs
  FOR INSERT
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS refresh_tokens_user_id_idx ON public.refresh_tokens (user_id);
CREATE INDEX IF NOT EXISTS refresh_tokens_expires_at_idx ON public.refresh_tokens (expires_at);
CREATE INDEX IF NOT EXISTS password_reset_tokens_user_id_idx ON public.password_reset_tokens (user_id);
CREATE INDEX IF NOT EXISTS password_reset_tokens_expires_at_idx ON public.password_reset_tokens (expires_at);
CREATE INDEX IF NOT EXISTS session_logs_user_id_idx ON public.session_logs (user_id);
CREATE INDEX IF NOT EXISTS session_logs_login_at_idx ON public.session_logs (login_at);

-- Create function to log successful login
CREATE OR REPLACE FUNCTION public.log_successful_login()
RETURNS TRIGGER AS $$
DECLARE
  user_agent_text TEXT;
  ip_addr INET;
BEGIN
  -- Get user agent and IP from request headers
  user_agent_text := current_setting('request.headers', true)::json->'user-agent';
  ip_addr := (current_setting('request.headers', true)::json->>'x-forwarded-for')::INET;
  
  -- Insert login record
  INSERT INTO public.session_logs (user_id, ip_address, user_agent, is_successful)
  VALUES (NEW.id, ip_addr, user_agent_text, true);
  
  -- Update last_login in users table
  UPDATE public.users
  SET last_login = now()
  WHERE id = NEW.id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to log successful login
CREATE OR REPLACE TRIGGER on_auth_user_login
  AFTER UPDATE OF last_sign_in_at ON auth.users
  FOR EACH ROW
  WHEN (OLD.last_sign_in_at IS DISTINCT FROM NEW.last_sign_in_at)
  EXECUTE FUNCTION public.log_successful_login();
