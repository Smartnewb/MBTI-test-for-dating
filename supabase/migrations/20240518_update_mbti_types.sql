-- Update mbti_types table with additional fields and improvements

-- Add image_url column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'image_url') THEN
    ALTER TABLE public.mbti_types ADD COLUMN image_url TEXT;
    COMMENT ON COLUMN public.mbti_types.image_url IS 'MBTI 유형 대표 이미지 URL';
  END IF;
END $$;

-- Add icon_url column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'icon_url') THEN
    ALTER TABLE public.mbti_types ADD COLUMN icon_url TEXT;
    COMMENT ON COLUMN public.mbti_types.icon_url IS 'MBTI 유형 아이콘 URL';
  END IF;
END $$;

-- Add famous_people column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'famous_people') THEN
    ALTER TABLE public.mbti_types ADD COLUMN famous_people TEXT[];
    COMMENT ON COLUMN public.mbti_types.famous_people IS '이 유형의 유명인 목록';
  END IF;
END $$;

-- Add ideal_partner_types column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'ideal_partner_types') THEN
    ALTER TABLE public.mbti_types ADD COLUMN ideal_partner_types VARCHAR(4)[];
    COMMENT ON COLUMN public.mbti_types.ideal_partner_types IS '이상적인 파트너 MBTI 유형 목록';
  END IF;
END $$;

-- Add dating_tips column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'dating_tips') THEN
    ALTER TABLE public.mbti_types ADD COLUMN dating_tips TEXT[];
    COMMENT ON COLUMN public.mbti_types.dating_tips IS '연애 팁 목록';
  END IF;
END $$;

-- Add relationship_strengths column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'relationship_strengths') THEN
    ALTER TABLE public.mbti_types ADD COLUMN relationship_strengths TEXT[];
    COMMENT ON COLUMN public.mbti_types.relationship_strengths IS '연애 관계에서의 강점 목록';
  END IF;
END $$;

-- Add relationship_weaknesses column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'relationship_weaknesses') THEN
    ALTER TABLE public.mbti_types ADD COLUMN relationship_weaknesses TEXT[];
    COMMENT ON COLUMN public.mbti_types.relationship_weaknesses IS '연애 관계에서의 약점 목록';
  END IF;
END $$;

-- Add tarot_card column if it doesn't exist (for mystical theme)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'tarot_card') THEN
    ALTER TABLE public.mbti_types ADD COLUMN tarot_card VARCHAR(50);
    COMMENT ON COLUMN public.mbti_types.tarot_card IS '연관된 타로 카드';
  END IF;
END $$;

-- Add tarot_description column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'tarot_description') THEN
    ALTER TABLE public.mbti_types ADD COLUMN tarot_description TEXT;
    COMMENT ON COLUMN public.mbti_types.tarot_description IS '타로 카드 설명';
  END IF;
END $$;

-- Add tarot_image_url column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'mbti_types'
                 AND column_name = 'tarot_image_url') THEN
    ALTER TABLE public.mbti_types ADD COLUMN tarot_image_url TEXT;
    COMMENT ON COLUMN public.mbti_types.tarot_image_url IS '타로 카드 이미지 URL';
  END IF;
END $$;

-- Create index on type_code for better query performance
CREATE INDEX IF NOT EXISTS mbti_types_type_code_idx ON public.mbti_types (type_code);

-- Update RLS policies
ALTER TABLE public.mbti_types ENABLE ROW LEVEL SECURITY;

-- Everyone can view MBTI types
DROP POLICY IF EXISTS "Everyone can view MBTI types" ON public.mbti_types;
CREATE POLICY "Everyone can view MBTI types" ON public.mbti_types
  FOR SELECT
  USING (true);
