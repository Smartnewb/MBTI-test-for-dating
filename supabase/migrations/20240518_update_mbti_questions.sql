-- Update mbti_questions table with additional fields and improvements

-- Add weight column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_questions'
                 AND column_name = 'weight') THEN
    ALTER TABLE public.mbti_questions ADD COLUMN weight INTEGER DEFAULT 1;
    COMMENT ON COLUMN public.mbti_questions.weight IS '질문의 가중치 (기본값: 1)';
  END IF;
END $$;

-- Add category column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_questions'
                 AND column_name = 'category') THEN
    ALTER TABLE public.mbti_questions ADD COLUMN category VARCHAR(50);
    COMMENT ON COLUMN public.mbti_questions.category IS '질문 카테고리 (연애, 일상, 취미 등)';
  END IF;
END $$;

-- Add version column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_questions'
                 AND column_name = 'version') THEN
    ALTER TABLE public.mbti_questions ADD COLUMN version VARCHAR(10) DEFAULT '1.0';
    COMMENT ON COLUMN public.mbti_questions.version IS '질문 버전 (테스트 버전 관리용)';
  END IF;
END $$;

-- Add active column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_questions'
                 AND column_name = 'active') THEN
    ALTER TABLE public.mbti_questions ADD COLUMN active BOOLEAN DEFAULT TRUE;
    COMMENT ON COLUMN public.mbti_questions.active IS '활성 상태 (비활성 질문은 테스트에 포함되지 않음)';
  END IF;
END $$;

-- Add order_index column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_questions'
                 AND column_name = 'order_index') THEN
    ALTER TABLE public.mbti_questions ADD COLUMN order_index INTEGER;
    COMMENT ON COLUMN public.mbti_questions.order_index IS '질문 표시 순서 (NULL이면 랜덤)';
  END IF;
END $$;

-- Add updated_at column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_questions'
                 AND column_name = 'updated_at') THEN
    ALTER TABLE public.mbti_questions ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();
    
    -- Create trigger to update updated_at column
    CREATE OR REPLACE FUNCTION update_mbti_questions_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    
    CREATE TRIGGER update_mbti_questions_updated_at
    BEFORE UPDATE ON public.mbti_questions
    FOR EACH ROW
    EXECUTE FUNCTION update_mbti_questions_updated_at();
  END IF;
END $$;

-- Create index on dimension and active columns for better query performance
CREATE INDEX IF NOT EXISTS mbti_questions_dimension_active_idx ON public.mbti_questions (dimension, active);

-- Create index on category for filtering questions by category
CREATE INDEX IF NOT EXISTS mbti_questions_category_idx ON public.mbti_questions (category);

-- Create index on version for filtering questions by version
CREATE INDEX IF NOT EXISTS mbti_questions_version_idx ON public.mbti_questions (version);

-- Update RLS policies
ALTER TABLE public.mbti_questions ENABLE ROW LEVEL SECURITY;

-- Everyone can view active questions
DROP POLICY IF EXISTS "Everyone can view active questions" ON public.mbti_questions;
CREATE POLICY "Everyone can view active questions" ON public.mbti_questions
  FOR SELECT
  USING (active = TRUE OR auth.role() = 'authenticated');

-- Only authenticated users can view inactive questions
DROP POLICY IF EXISTS "Authenticated users can view all questions" ON public.mbti_questions;
CREATE POLICY "Authenticated users can view all questions" ON public.mbti_questions
  FOR SELECT
  USING (auth.role() = 'authenticated');
