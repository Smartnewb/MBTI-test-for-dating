-- Create users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  mbti_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create MBTI questions table
CREATE TABLE IF NOT EXISTS public.mbti_questions (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  dimension TEXT NOT NULL CHECK (dimension IN ('E-I', 'S-N', 'T-F', 'J-P')),
  direction TEXT NOT NULL CHECK (direction IN ('positive', 'negative')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create user responses table
CREATE TABLE IF NOT EXISTS public.user_responses (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  question_id INTEGER REFERENCES public.mbti_questions(id) ON DELETE CASCADE,
  response INTEGER NOT NULL CHECK (response BETWEEN 1 AND 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create compatibility table
CREATE TABLE IF NOT EXISTS public.mbti_compatibility (
  id SERIAL PRIMARY KEY,
  type1 TEXT NOT NULL,
  type2 TEXT NOT NULL,
  compatibility_score INTEGER NOT NULL CHECK (compatibility_score BETWEEN 1 AND 100),
  description TEXT,
  UNIQUE(type1, type2)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mbti_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mbti_compatibility ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Profiles: Users can read all profiles but only update their own
CREATE POLICY "Profiles are viewable by everyone" 
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Questions: Everyone can read questions
CREATE POLICY "Questions are viewable by everyone" 
  ON public.mbti_questions FOR SELECT USING (true);

-- Responses: Users can insert their own responses and view only their own
CREATE POLICY "Users can insert their own responses" 
  ON public.user_responses FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own responses" 
  ON public.user_responses FOR SELECT USING (auth.uid() = user_id);

-- Compatibility: Everyone can read compatibility data
CREATE POLICY "Compatibility data is viewable by everyone" 
  ON public.mbti_compatibility FOR SELECT USING (true);

-- Create function to calculate MBTI type
CREATE OR REPLACE FUNCTION calculate_mbti_type(user_uuid UUID)
RETURNS TEXT AS $$
DECLARE
  e_score INTEGER;
  i_score INTEGER;
  s_score INTEGER;
  n_score INTEGER;
  t_score INTEGER;
  f_score INTEGER;
  j_score INTEGER;
  p_score INTEGER;
  mbti_result TEXT;
BEGIN
  -- Calculate E-I dimension
  SELECT 
    COALESCE(SUM(CASE WHEN q.direction = 'positive' THEN r.response ELSE 6 - r.response END), 0) INTO e_score
  FROM 
    public.user_responses r
    JOIN public.mbti_questions q ON r.question_id = q.id
  WHERE 
    r.user_id = user_uuid AND q.dimension = 'E-I' AND q.direction = 'positive';
    
  SELECT 
    COALESCE(SUM(CASE WHEN q.direction = 'positive' THEN r.response ELSE 6 - r.response END), 0) INTO i_score
  FROM 
    public.user_responses r
    JOIN public.mbti_questions q ON r.question_id = q.id
  WHERE 
    r.user_id = user_uuid AND q.dimension = 'E-I' AND q.direction = 'negative';
  
  -- Calculate S-N dimension
  SELECT 
    COALESCE(SUM(CASE WHEN q.direction = 'positive' THEN r.response ELSE 6 - r.response END), 0) INTO s_score
  FROM 
    public.user_responses r
    JOIN public.mbti_questions q ON r.question_id = q.id
  WHERE 
    r.user_id = user_uuid AND q.dimension = 'S-N' AND q.direction = 'positive';
    
  SELECT 
    COALESCE(SUM(CASE WHEN q.direction = 'positive' THEN r.response ELSE 6 - r.response END), 0) INTO n_score
  FROM 
    public.user_responses r
    JOIN public.mbti_questions q ON r.question_id = q.id
  WHERE 
    r.user_id = user_uuid AND q.dimension = 'S-N' AND q.direction = 'negative';
  
  -- Calculate T-F dimension
  SELECT 
    COALESCE(SUM(CASE WHEN q.direction = 'positive' THEN r.response ELSE 6 - r.response END), 0) INTO t_score
  FROM 
    public.user_responses r
    JOIN public.mbti_questions q ON r.question_id = q.id
  WHERE 
    r.user_id = user_uuid AND q.dimension = 'T-F' AND q.direction = 'positive';
    
  SELECT 
    COALESCE(SUM(CASE WHEN q.direction = 'positive' THEN r.response ELSE 6 - r.response END), 0) INTO f_score
  FROM 
    public.user_responses r
    JOIN public.mbti_questions q ON r.question_id = q.id
  WHERE 
    r.user_id = user_uuid AND q.dimension = 'T-F' AND q.direction = 'negative';
  
  -- Calculate J-P dimension
  SELECT 
    COALESCE(SUM(CASE WHEN q.direction = 'positive' THEN r.response ELSE 6 - r.response END), 0) INTO j_score
  FROM 
    public.user_responses r
    JOIN public.mbti_questions q ON r.question_id = q.id
  WHERE 
    r.user_id = user_uuid AND q.dimension = 'J-P' AND q.direction = 'positive';
    
  SELECT 
    COALESCE(SUM(CASE WHEN q.direction = 'positive' THEN r.response ELSE 6 - r.response END), 0) INTO p_score
  FROM 
    public.user_responses r
    JOIN public.mbti_questions q ON r.question_id = q.id
  WHERE 
    r.user_id = user_uuid AND q.dimension = 'J-P' AND q.direction = 'negative';
  
  -- Determine MBTI type
  mbti_result := '';
  
  IF e_score > i_score THEN
    mbti_result := mbti_result || 'E';
  ELSE
    mbti_result := mbti_result || 'I';
  END IF;
  
  IF s_score > n_score THEN
    mbti_result := mbti_result || 'S';
  ELSE
    mbti_result := mbti_result || 'N';
  END IF;
  
  IF t_score > f_score THEN
    mbti_result := mbti_result || 'T';
  ELSE
    mbti_result := mbti_result || 'F';
  END IF;
  
  IF j_score > p_score THEN
    mbti_result := mbti_result || 'J';
  ELSE
    mbti_result := mbti_result || 'P';
  END IF;
  
  -- Update user's MBTI type
  UPDATE public.profiles
  SET mbti_type = mbti_result, updated_at = now()
  WHERE id = user_uuid;
  
  RETURN mbti_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
