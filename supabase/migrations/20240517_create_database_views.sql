-- Create view for test results with MBTI type information
CREATE OR REPLACE VIEW public.test_results_with_types AS
SELECT
  tr.id,
  tr.session_id,
  tr.mbti_type,
  tr.e_score,
  tr.i_score,
  tr.s_score,
  tr.n_score,
  tr.t_score,
  tr.f_score,
  tr.j_score,
  tr.p_score,
  tr.created_at,
  mt.description AS type_description,
  mt.strengths AS type_strengths,
  mt.weaknesses AS type_weaknesses,
  mt.dating_style AS type_dating_style
FROM
  public.test_results tr
JOIN
  public.mbti_types mt ON tr.mbti_type = mt.type;

-- Create view for user responses with question information
CREATE OR REPLACE VIEW public.user_responses_with_questions AS
SELECT
  ur.id,
  ur.session_id,
  ur.question_id,
  ur.answer,
  ur.created_at,
  q.question_text,
  q.option_a,
  q.option_b,
  q.dimension
FROM
  public.user_responses ur
JOIN
  public.questions q ON ur.question_id = q.id;

-- Create view for compatibility matches
CREATE OR REPLACE VIEW public.compatibility_matches AS
SELECT
  tr.session_id,
  tr.mbti_type AS user_type,
  c.type1,
  c.type2,
  CASE
    WHEN c.type1 = tr.mbti_type THEN c.type2
    ELSE c.type1
  END AS match_type,
  c.compatibility_score,
  c.description AS compatibility_description,
  mt.description AS match_description,
  mt.strengths AS match_strengths,
  mt.weaknesses AS match_weaknesses,
  mt.dating_style AS match_dating_style
FROM
  public.test_results tr
JOIN
  public.compatibility c ON (c.type1 = tr.mbti_type OR c.type2 = tr.mbti_type)
JOIN
  public.mbti_types mt ON (
    CASE
      WHEN c.type1 = tr.mbti_type THEN c.type2
      ELSE c.type1
    END = mt.type
  )
ORDER BY
  c.compatibility_score DESC;

-- Create view for best matches (highest compatibility)
CREATE OR REPLACE VIEW public.best_matches AS
SELECT
  cm.*
FROM
  public.compatibility_matches cm
JOIN (
  SELECT
    session_id,
    MAX(compatibility_score) AS max_score
  FROM
    public.compatibility_matches
  GROUP BY
    session_id
) best ON cm.session_id = best.session_id AND cm.compatibility_score = best.max_score;

-- Create view for worst matches (lowest compatibility)
CREATE OR REPLACE VIEW public.worst_matches AS
SELECT
  cm.*
FROM
  public.compatibility_matches cm
JOIN (
  SELECT
    session_id,
    MIN(compatibility_score) AS min_score
  FROM
    public.compatibility_matches
  GROUP BY
    session_id
) worst ON cm.session_id = worst.session_id AND cm.compatibility_score = worst.min_score;

-- Create view for test statistics
CREATE OR REPLACE VIEW public.test_statistics AS
SELECT
  mbti_type,
  COUNT(*) AS total_count,
  AVG(e_score) AS avg_e_score,
  AVG(i_score) AS avg_i_score,
  AVG(s_score) AS avg_s_score,
  AVG(n_score) AS avg_n_score,
  AVG(t_score) AS avg_t_score,
  AVG(f_score) AS avg_f_score,
  AVG(j_score) AS avg_j_score,
  AVG(p_score) AS avg_p_score,
  MIN(created_at) AS first_result,
  MAX(created_at) AS last_result
FROM
  public.test_results
GROUP BY
  mbti_type
ORDER BY
  total_count DESC;

-- Create view for active sessions
CREATE OR REPLACE VIEW public.active_sessions AS
SELECT
  s.id AS session_id,
  s.created_at,
  s.last_active,
  s.expires_at,
  COUNT(ur.id) AS response_count,
  tr.mbti_type,
  CASE
    WHEN tr.id IS NOT NULL THEN true
    ELSE false
  END AS test_completed
FROM
  public.sessions s
LEFT JOIN
  public.user_responses ur ON s.id = ur.session_id
LEFT JOIN
  public.test_results tr ON s.id = tr.session_id
WHERE
  s.expires_at > now()
GROUP BY
  s.id, s.created_at, s.last_active, s.expires_at, tr.mbti_type, tr.id
ORDER BY
  s.last_active DESC;

-- Create RLS policies for views
ALTER VIEW public.test_results_with_types SECURITY INVOKER;
ALTER VIEW public.user_responses_with_questions SECURITY INVOKER;
ALTER VIEW public.compatibility_matches SECURITY INVOKER;
ALTER VIEW public.best_matches SECURITY INVOKER;
ALTER VIEW public.worst_matches SECURITY INVOKER;
ALTER VIEW public.test_statistics SECURITY INVOKER;
ALTER VIEW public.active_sessions SECURITY INVOKER;
