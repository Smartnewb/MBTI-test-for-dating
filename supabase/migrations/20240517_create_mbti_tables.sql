-- Create questions table
CREATE TABLE IF NOT EXISTS public.questions (
  id SERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  dimension VARCHAR(3) NOT NULL CHECK (dimension IN ('E/I', 'S/N', 'T/F', 'J/P')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create user_responses table
CREATE TABLE IF NOT EXISTS public.user_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  session_id UUID NOT NULL,
  question_id INTEGER REFERENCES public.questions(id) ON DELETE CASCADE NOT NULL,
  answer CHAR(1) NOT NULL CHECK (answer IN ('A', 'B')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(user_id, session_id, question_id)
);

-- Create mbti_types table
CREATE TABLE IF NOT EXISTS public.mbti_types (
  id SERIAL PRIMARY KEY,
  type VARCHAR(4) UNIQUE NOT NULL CHECK (type IN (
    'INFP', 'INFJ', 'INTP', 'INTJ', 
    'ISFP', 'ISFJ', 'ISTP', 'ISTJ', 
    'ENFP', 'ENFJ', 'ENTP', 'ENTJ', 
    'ESFP', 'ESFJ', 'ESTP', 'ESTJ'
  )),
  description TEXT NOT NULL,
  strengths TEXT NOT NULL,
  weaknesses TEXT NOT NULL,
  dating_style TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create compatibility table
CREATE TABLE IF NOT EXISTS public.compatibility (
  id SERIAL PRIMARY KEY,
  type1 VARCHAR(4) NOT NULL REFERENCES public.mbti_types(type) ON DELETE CASCADE,
  type2 VARCHAR(4) NOT NULL REFERENCES public.mbti_types(type) ON DELETE CASCADE,
  compatibility_score INTEGER NOT NULL CHECK (compatibility_score BETWEEN 1 AND 10),
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(type1, type2),
  CHECK (type1 < type2) -- Ensure we only store one record per pair
);

-- Create test_results table
CREATE TABLE IF NOT EXISTS public.test_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  session_id UUID NOT NULL,
  mbti_type VARCHAR(4) REFERENCES public.mbti_types(type) ON DELETE CASCADE NOT NULL,
  e_score INTEGER NOT NULL CHECK (e_score BETWEEN 0 AND 100),
  i_score INTEGER NOT NULL CHECK (i_score BETWEEN 0 AND 100),
  s_score INTEGER NOT NULL CHECK (s_score BETWEEN 0 AND 100),
  n_score INTEGER NOT NULL CHECK (n_score BETWEEN 0 AND 100),
  t_score INTEGER NOT NULL CHECK (t_score BETWEEN 0 AND 100),
  f_score INTEGER NOT NULL CHECK (f_score BETWEEN 0 AND 100),
  j_score INTEGER NOT NULL CHECK (j_score BETWEEN 0 AND 100),
  p_score INTEGER NOT NULL CHECK (p_score BETWEEN 0 AND 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(user_id, session_id)
);

-- Create triggers to update updated_at column
CREATE TRIGGER update_questions_updated_at
BEFORE UPDATE ON public.questions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mbti_types_updated_at
BEFORE UPDATE ON public.mbti_types
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_compatibility_updated_at
BEFORE UPDATE ON public.compatibility
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Create RLS policies
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mbti_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.compatibility ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_results ENABLE ROW LEVEL SECURITY;

-- Policy for everyone to view questions
CREATE POLICY "Everyone can view questions" ON public.questions
  FOR SELECT
  USING (true);

-- Policy for users to view their own responses
CREATE POLICY "Users can view own responses" ON public.user_responses
  FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Policy for users to insert their own responses
CREATE POLICY "Users can insert own responses" ON public.user_responses
  FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Policy for everyone to view MBTI types
CREATE POLICY "Everyone can view MBTI types" ON public.mbti_types
  FOR SELECT
  USING (true);

-- Policy for everyone to view compatibility
CREATE POLICY "Everyone can view compatibility" ON public.compatibility
  FOR SELECT
  USING (true);

-- Policy for users to view their own test results
CREATE POLICY "Users can view own test results" ON public.test_results
  FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Policy for users to insert their own test results
CREATE POLICY "Users can insert own test results" ON public.test_results
  FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS questions_dimension_idx ON public.questions (dimension);
CREATE INDEX IF NOT EXISTS user_responses_user_id_idx ON public.user_responses (user_id);
CREATE INDEX IF NOT EXISTS user_responses_session_id_idx ON public.user_responses (session_id);
CREATE INDEX IF NOT EXISTS user_responses_question_id_idx ON public.user_responses (question_id);
CREATE INDEX IF NOT EXISTS test_results_user_id_idx ON public.test_results (user_id);
CREATE INDEX IF NOT EXISTS test_results_session_id_idx ON public.test_results (session_id);
CREATE INDEX IF NOT EXISTS test_results_mbti_type_idx ON public.test_results (mbti_type);

-- Add additional constraints
ALTER TABLE public.user_responses
  ADD CONSTRAINT valid_answer_for_question
  CHECK (
    (answer = 'A' AND EXISTS (SELECT 1 FROM public.questions WHERE questions.id = question_id AND questions.option_a IS NOT NULL))
    OR
    (answer = 'B' AND EXISTS (SELECT 1 FROM public.questions WHERE questions.id = question_id AND questions.option_b IS NOT NULL))
  );

ALTER TABLE public.test_results
  ADD CONSTRAINT valid_mbti_scores
  CHECK (
    (e_score + i_score = 100) AND
    (s_score + n_score = 100) AND
    (t_score + f_score = 100) AND
    (j_score + p_score = 100)
  );

ALTER TABLE public.test_results
  ADD CONSTRAINT mbti_type_matches_scores
  CHECK (
    (mbti_type LIKE 'E%' AND e_score > i_score) OR
    (mbti_type LIKE 'I%' AND i_score > e_score) AND
    (mbti_type LIKE '_S%' AND s_score > n_score) OR
    (mbti_type LIKE '_N%' AND n_score > s_score) AND
    (mbti_type LIKE '__T%' AND t_score > f_score) OR
    (mbti_type LIKE '__F%' AND f_score > t_score) AND
    (mbti_type LIKE '___J' AND j_score > p_score) OR
    (mbti_type LIKE '___P' AND p_score > j_score)
  );
