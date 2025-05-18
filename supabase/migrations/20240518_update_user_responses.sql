-- Update user_responses table to better support anonymous users

-- Add session_id column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'user_responses'
                 AND column_name = 'session_id') THEN
    ALTER TABLE public.user_responses ADD COLUMN session_id UUID;
    COMMENT ON COLUMN public.user_responses.session_id IS '익명 사용자 세션 ID';
  END IF;
END $$;

-- Add answer column if it doesn't exist (for A/B style answers)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'user_responses'
                 AND column_name = 'answer') THEN
    ALTER TABLE public.user_responses ADD COLUMN answer CHAR(1) CHECK (answer IN ('A', 'B'));
    COMMENT ON COLUMN public.user_responses.answer IS 'A 또는 B 응답';
  END IF;
END $$;

-- Add updated_at column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'user_responses'
                 AND column_name = 'updated_at') THEN
    ALTER TABLE public.user_responses ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();
    
    -- Create trigger to update updated_at column
    CREATE OR REPLACE FUNCTION update_user_responses_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    
    CREATE TRIGGER update_user_responses_updated_at
    BEFORE UPDATE ON public.user_responses
    FOR EACH ROW
    EXECUTE FUNCTION update_user_responses_updated_at();
  END IF;
END $$;

-- Add constraint to ensure either user_id or session_id is provided
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints 
                 WHERE constraint_schema = 'public' 
                 AND table_name = 'user_responses'
                 AND constraint_name = 'user_responses_user_session_check') THEN
    ALTER TABLE public.user_responses 
    ADD CONSTRAINT user_responses_user_session_check 
    CHECK ((user_id IS NOT NULL AND session_id IS NULL) OR 
           (user_id IS NULL AND session_id IS NOT NULL));
  END IF;
END $$;

-- Add unique constraint for session_id and question_id
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints 
                 WHERE constraint_schema = 'public' 
                 AND table_name = 'user_responses'
                 AND constraint_name = 'user_responses_session_question_unique') THEN
    ALTER TABLE public.user_responses 
    ADD CONSTRAINT user_responses_session_question_unique 
    UNIQUE (session_id, question_id);
  END IF;
END $$;

-- Create index on session_id for better query performance
CREATE INDEX IF NOT EXISTS user_responses_session_id_idx ON public.user_responses (session_id);

-- Update RLS policies
ALTER TABLE public.user_responses ENABLE ROW LEVEL SECURITY;

-- Users can view their own responses
DROP POLICY IF EXISTS "Users can view own responses" ON public.user_responses;
CREATE POLICY "Users can view own responses" ON public.user_responses
  FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Users can insert their own responses
DROP POLICY IF EXISTS "Users can insert own responses" ON public.user_responses;
CREATE POLICY "Users can insert own responses" ON public.user_responses
  FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Users can update their own responses
DROP POLICY IF EXISTS "Users can update own responses" ON public.user_responses;
CREATE POLICY "Users can update own responses" ON public.user_responses
  FOR UPDATE
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Users can delete their own responses
DROP POLICY IF EXISTS "Users can delete own responses" ON public.user_responses;
CREATE POLICY "Users can delete own responses" ON public.user_responses
  FOR DELETE
  USING (auth.uid() = user_id OR user_id IS NULL);
