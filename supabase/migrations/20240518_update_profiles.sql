-- Update profiles table with additional fields and improvements

-- Add avatar_url column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'avatar_url') THEN
    ALTER TABLE public.profiles ADD COLUMN avatar_url TEXT;
    COMMENT ON COLUMN public.profiles.avatar_url IS '프로필 이미지 URL';
  END IF;
END $$;

-- Add bio column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'bio') THEN
    ALTER TABLE public.profiles ADD COLUMN bio TEXT;
    COMMENT ON COLUMN public.profiles.bio IS '자기소개';
  END IF;
END $$;

-- Add age_range column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'age_range') THEN
    ALTER TABLE public.profiles ADD COLUMN age_range VARCHAR(20);
    COMMENT ON COLUMN public.profiles.age_range IS '연령대';
  END IF;
END $$;

-- Add gender column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'gender') THEN
    ALTER TABLE public.profiles ADD COLUMN gender VARCHAR(20);
    COMMENT ON COLUMN public.profiles.gender IS '성별';
  END IF;
END $$;

-- Add dating_preferences column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'dating_preferences') THEN
    ALTER TABLE public.profiles ADD COLUMN dating_preferences JSONB DEFAULT '{}'::jsonb;
    COMMENT ON COLUMN public.profiles.dating_preferences IS '연애 선호도 설정';
  END IF;
END $$;

-- Add ideal_types column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'ideal_types') THEN
    ALTER TABLE public.profiles ADD COLUMN ideal_types VARCHAR(4)[];
    COMMENT ON COLUMN public.profiles.ideal_types IS '이상형 MBTI 유형 목록';
  END IF;
END $$;

-- Add interests column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'interests') THEN
    ALTER TABLE public.profiles ADD COLUMN interests TEXT[];
    COMMENT ON COLUMN public.profiles.interests IS '관심사 목록';
  END IF;
END $$;

-- Add privacy_settings column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'privacy_settings') THEN
    ALTER TABLE public.profiles ADD COLUMN privacy_settings JSONB DEFAULT '{"profile_visible": true, "mbti_visible": true, "share_results": true}'::jsonb;
    COMMENT ON COLUMN public.profiles.privacy_settings IS '개인정보 설정';
  END IF;
END $$;

-- Add last_test_date column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'last_test_date') THEN
    ALTER TABLE public.profiles ADD COLUMN last_test_date TIMESTAMP WITH TIME ZONE;
    COMMENT ON COLUMN public.profiles.last_test_date IS '마지막 테스트 날짜';
  END IF;
END $$;

-- Add test_history column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'profiles'
                 AND column_name = 'test_history') THEN
    ALTER TABLE public.profiles ADD COLUMN test_history JSONB[] DEFAULT '{}'::jsonb[];
    COMMENT ON COLUMN public.profiles.test_history IS '테스트 이력';
  END IF;
END $$;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS profiles_mbti_type_idx ON public.profiles (mbti_type);
CREATE INDEX IF NOT EXISTS profiles_username_idx ON public.profiles (username);
CREATE INDEX IF NOT EXISTS profiles_created_at_idx ON public.profiles (created_at);

-- Update RLS policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Users can view their own profile
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own profile
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Users can insert their own profile
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Users can delete their own profile
DROP POLICY IF EXISTS "Users can delete own profile" ON public.profiles;
CREATE POLICY "Users can delete own profile" ON public.profiles
  FOR DELETE
  USING (auth.uid() = id);
