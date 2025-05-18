-- MBTI 질문 테이블
CREATE TABLE IF NOT EXISTS mbti_questions (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  dimension VARCHAR(3) NOT NULL CHECK (dimension IN ('E-I', 'S-N', 'T-F', 'J-P')),
  weight INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- MBTI 유형 테이블
CREATE TABLE IF NOT EXISTS mbti_types (
  id SERIAL PRIMARY KEY,
  type_code VARCHAR(4) NOT NULL UNIQUE CHECK (type_code ~ '^[IE][NS][TF][JP]$'),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  dating_style TEXT,
  strengths TEXT[],
  weaknesses TEXT[],
  color VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- MBTI 궁합 테이블
CREATE TABLE IF NOT EXISTS mbti_compatibility (
  id SERIAL PRIMARY KEY,
  type1 VARCHAR(4) NOT NULL REFERENCES mbti_types(type_code),
  type2 VARCHAR(4) NOT NULL REFERENCES mbti_types(type_code),
  compatibility_score INTEGER NOT NULL CHECK (compatibility_score BETWEEN 1 AND 100),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(type1, type2)
);

-- 사용자 응답 테이블
CREATE TABLE IF NOT EXISTS user_responses (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  session_id UUID,
  question_id INTEGER NOT NULL REFERENCES mbti_questions(id),
  answer CHAR(1) NOT NULL CHECK (answer IN ('A', 'B')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_session_check CHECK (
    (user_id IS NOT NULL AND session_id IS NULL) OR
    (user_id IS NULL AND session_id IS NOT NULL)
  ),
  UNIQUE(user_id, question_id),
  UNIQUE(session_id, question_id)
);

-- 테스트 결과 테이블
CREATE TABLE IF NOT EXISTS test_results (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  session_id UUID,
  mbti_type VARCHAR(4) NOT NULL REFERENCES mbti_types(type_code),
  e_i_score INTEGER NOT NULL,
  s_n_score INTEGER NOT NULL,
  t_f_score INTEGER NOT NULL,
  j_p_score INTEGER NOT NULL,
  share_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
  email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_session_check CHECK (
    (user_id IS NOT NULL AND session_id IS NULL) OR
    (user_id IS NULL AND session_id IS NOT NULL)
  )
);

-- 공유 ID로 테스트 결과 가져오는 함수
CREATE OR REPLACE FUNCTION get_test_result_by_share_id(p_share_id UUID)
RETURNS TABLE (
  id INTEGER,
  user_id UUID,
  session_id UUID,
  mbti_type VARCHAR(4),
  e_i_score INTEGER,
  s_n_score INTEGER,
  t_f_score INTEGER,
  j_p_score INTEGER,
  share_id UUID,
  email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    tr.id,
    tr.user_id,
    tr.session_id,
    tr.mbti_type,
    tr.e_i_score,
    tr.s_n_score,
    tr.t_f_score,
    tr.j_p_score,
    tr.share_id,
    tr.email,
    tr.created_at
  FROM
    test_results tr
  WHERE
    tr.share_id = p_share_id;
END;
$$ LANGUAGE plpgsql;
