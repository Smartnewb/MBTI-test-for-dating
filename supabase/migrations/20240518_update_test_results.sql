-- Update test_results table with additional fields and improvements

-- Add test_version column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'test_version') THEN
    ALTER TABLE public.test_results ADD COLUMN test_version VARCHAR(10) DEFAULT '1.0';
    COMMENT ON COLUMN public.test_results.test_version IS '테스트 버전';
  END IF;
END $$;

-- Add question_count column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'question_count') THEN
    ALTER TABLE public.test_results ADD COLUMN question_count INTEGER DEFAULT 0;
    COMMENT ON COLUMN public.test_results.question_count IS '응답한 질문 수';
  END IF;
END $$;

-- Add test_duration_seconds column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'test_duration_seconds') THEN
    ALTER TABLE public.test_results ADD COLUMN test_duration_seconds INTEGER;
    COMMENT ON COLUMN public.test_results.test_duration_seconds IS '테스트 완료 소요 시간(초)';
  END IF;
END $$;

-- Add device_info column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'device_info') THEN
    ALTER TABLE public.test_results ADD COLUMN device_info JSONB DEFAULT '{}'::jsonb;
    COMMENT ON COLUMN public.test_results.device_info IS '테스트 수행 기기 정보';
  END IF;
END $$;

-- Add name column if it doesn't exist (for optional name input)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'name') THEN
    ALTER TABLE public.test_results ADD COLUMN name VARCHAR(100);
    COMMENT ON COLUMN public.test_results.name IS '사용자 이름 (선택 사항)';
  END IF;
END $$;

-- Add age_range column if it doesn't exist (for optional age input)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'age_range') THEN
    ALTER TABLE public.test_results ADD COLUMN age_range VARCHAR(20);
    COMMENT ON COLUMN public.test_results.age_range IS '연령대 (선택 사항)';
  END IF;
END $$;

-- Add gender column if it doesn't exist (for optional gender input)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'gender') THEN
    ALTER TABLE public.test_results ADD COLUMN gender VARCHAR(20);
    COMMENT ON COLUMN public.test_results.gender IS '성별 (선택 사항)';
  END IF;
END $$;

-- Add tarot_card column if it doesn't exist (for mystical theme)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'tarot_card') THEN
    ALTER TABLE public.test_results ADD COLUMN tarot_card VARCHAR(50);
    COMMENT ON COLUMN public.test_results.tarot_card IS '연관된 타로 카드';
  END IF;
END $$;

-- Add tarot_reading column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'tarot_reading') THEN
    ALTER TABLE public.test_results ADD COLUMN tarot_reading TEXT;
    COMMENT ON COLUMN public.test_results.tarot_reading IS '타로 카드 해석';
  END IF;
END $$;

-- Add updated_at column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'test_results'
                 AND column_name = 'updated_at') THEN
    ALTER TABLE public.test_results ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();
    
    -- Create trigger to update updated_at column
    CREATE OR REPLACE FUNCTION update_test_results_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    
    CREATE TRIGGER update_test_results_updated_at
    BEFORE UPDATE ON public.test_results
    FOR EACH ROW
    EXECUTE FUNCTION update_test_results_updated_at();
  END IF;
END $$;

-- Add constraint to ensure either user_id or session_id is provided
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints 
                 WHERE constraint_schema = 'public' 
                 AND table_name = 'test_results'
                 AND constraint_name = 'test_results_user_session_check') THEN
    ALTER TABLE public.test_results 
    ADD CONSTRAINT test_results_user_session_check 
    CHECK ((user_id IS NOT NULL AND session_id IS NULL) OR 
           (user_id IS NULL AND session_id IS NOT NULL));
  END IF;
END $$;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS test_results_mbti_type_idx ON public.test_results (mbti_type);
CREATE INDEX IF NOT EXISTS test_results_created_at_idx ON public.test_results (created_at);
CREATE INDEX IF NOT EXISTS test_results_share_id_idx ON public.test_results (share_id);

-- Update RLS policies
ALTER TABLE public.test_results ENABLE ROW LEVEL SECURITY;

-- Users can view their own test results
DROP POLICY IF EXISTS "Users can view own test results" ON public.test_results;
CREATE POLICY "Users can view own test results" ON public.test_results
  FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Anyone can view shared test results
DROP POLICY IF EXISTS "Anyone can view shared test results" ON public.test_results;
CREATE POLICY "Anyone can view shared test results" ON public.test_results
  FOR SELECT
  USING (share_id IS NOT NULL);

-- Users can insert their own test results
DROP POLICY IF EXISTS "Users can insert own test results" ON public.test_results;
CREATE POLICY "Users can insert own test results" ON public.test_results
  FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Users can update their own test results
DROP POLICY IF EXISTS "Users can update own test results" ON public.test_results;
CREATE POLICY "Users can update own test results" ON public.test_results
  FOR UPDATE
  USING (auth.uid() = user_id OR user_id IS NULL);
