-- Update mbti_compatibility table with additional fields and improvements

-- Add strengths column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'strengths') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN strengths TEXT[];
    COMMENT ON COLUMN public.mbti_compatibility.strengths IS '이 조합의 관계 강점 목록';
  END IF;
END $$;

-- Add challenges column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'challenges') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN challenges TEXT[];
    COMMENT ON COLUMN public.mbti_compatibility.challenges IS '이 조합의 관계 도전 과제 목록';
  END IF;
END $$;

-- Add advice column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'advice') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN advice TEXT[];
    COMMENT ON COLUMN public.mbti_compatibility.advice IS '이 조합을 위한 관계 조언 목록';
  END IF;
END $$;

-- Add communication_tips column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'communication_tips') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN communication_tips TEXT[];
    COMMENT ON COLUMN public.mbti_compatibility.communication_tips IS '이 조합을 위한 의사소통 팁 목록';
  END IF;
END $$;

-- Add date_ideas column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'date_ideas') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN date_ideas TEXT[];
    COMMENT ON COLUMN public.mbti_compatibility.date_ideas IS '이 조합에게 추천하는 데이트 아이디어 목록';
  END IF;
END $$;

-- Add relationship_dynamic column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'relationship_dynamic') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN relationship_dynamic TEXT;
    COMMENT ON COLUMN public.mbti_compatibility.relationship_dynamic IS '이 조합의 관계 역학 설명';
  END IF;
END $$;

-- Add compatibility_level column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'compatibility_level') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN compatibility_level VARCHAR(20);
    COMMENT ON COLUMN public.mbti_compatibility.compatibility_level IS '궁합 수준 (매우 높음, 높음, 중간, 낮음, 매우 낮음)';
  END IF;
END $$;

-- Add updated_at column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'updated_at') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();
    
    -- Create trigger to update updated_at column
    CREATE OR REPLACE FUNCTION update_mbti_compatibility_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    
    CREATE TRIGGER update_mbti_compatibility_updated_at
    BEFORE UPDATE ON public.mbti_compatibility
    FOR EACH ROW
    EXECUTE FUNCTION update_mbti_compatibility_updated_at();
  END IF;
END $$;

-- Add created_at column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_compatibility'
                 AND column_name = 'created_at') THEN
    ALTER TABLE public.mbti_compatibility ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT now();
  END IF;
END $$;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS mbti_compatibility_type1_idx ON public.mbti_compatibility (type1);
CREATE INDEX IF NOT EXISTS mbti_compatibility_type2_idx ON public.mbti_compatibility (type2);
CREATE INDEX IF NOT EXISTS mbti_compatibility_score_idx ON public.mbti_compatibility (compatibility_score);

-- Update RLS policies
ALTER TABLE public.mbti_compatibility ENABLE ROW LEVEL SECURITY;

-- Everyone can view compatibility data
DROP POLICY IF EXISTS "Everyone can view compatibility data" ON public.mbti_compatibility;
CREATE POLICY "Everyone can view compatibility data" ON public.mbti_compatibility
  FOR SELECT
  USING (true);
