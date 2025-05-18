-- Update test_results table to support new MBTI analyzer fields

-- Add reliability and completeness columns
ALTER TABLE public.test_results
ADD COLUMN IF NOT EXISTS reliability INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS completeness INTEGER DEFAULT 0;

-- Add individual score columns
ALTER TABLE public.test_results
ADD COLUMN IF NOT EXISTS e_score NUMERIC(5, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS i_score NUMERIC(5, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS s_score NUMERIC(5, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS n_score NUMERIC(5, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS t_score NUMERIC(5, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS f_score NUMERIC(5, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS j_score NUMERIC(5, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS p_score NUMERIC(5, 2) DEFAULT 0;

-- Add dimension certainty column (JSON)
ALTER TABLE public.test_results
ADD COLUMN IF NOT EXISTS dimension_certainty JSONB DEFAULT '{}'::jsonb;

-- Add comments to explain the new columns
COMMENT ON COLUMN public.test_results.reliability IS '결과 신뢰도 (0-100%)';
COMMENT ON COLUMN public.test_results.completeness IS '응답 완성도 (0-100%)';
COMMENT ON COLUMN public.test_results.e_score IS 'E 점수';
COMMENT ON COLUMN public.test_results.i_score IS 'I 점수';
COMMENT ON COLUMN public.test_results.s_score IS 'S 점수';
COMMENT ON COLUMN public.test_results.n_score IS 'N 점수';
COMMENT ON COLUMN public.test_results.t_score IS 'T 점수';
COMMENT ON COLUMN public.test_results.f_score IS 'F 점수';
COMMENT ON COLUMN public.test_results.j_score IS 'J 점수';
COMMENT ON COLUMN public.test_results.p_score IS 'P 점수';
COMMENT ON COLUMN public.test_results.dimension_certainty IS '차원별 확실성 데이터 (JSON)';

-- Create or replace function to get detailed MBTI result
CREATE OR REPLACE FUNCTION get_detailed_mbti_result(result_id INTEGER)
RETURNS JSONB AS $$
DECLARE
  result_data JSONB;
BEGIN
  SELECT 
    jsonb_build_object(
      'id', id,
      'mbtiType', mbti_type,
      'scores', jsonb_build_object(
        'E', e_score,
        'I', i_score,
        'S', s_score,
        'N', n_score,
        'T', t_score,
        'F', f_score,
        'J', j_score,
        'P', p_score
      ),
      'dimensionScores', jsonb_build_object(
        'E-I', e_i_score,
        'S-N', s_n_score,
        'T-F', t_f_score,
        'J-P', j_p_score
      ),
      'dimensionCertainty', dimension_certainty,
      'reliability', reliability,
      'completeness', completeness,
      'createdAt', created_at,
      'shareId', share_id
    ) INTO result_data
  FROM 
    public.test_results
  WHERE 
    id = result_id;
    
  RETURN result_data;
END;
$$ LANGUAGE plpgsql;

-- Create or replace function to get MBTI result by share ID
CREATE OR REPLACE FUNCTION get_mbti_result_by_share_id(share_uuid UUID)
RETURNS JSONB AS $$
DECLARE
  result_data JSONB;
BEGIN
  SELECT 
    jsonb_build_object(
      'id', id,
      'mbtiType', mbti_type,
      'scores', jsonb_build_object(
        'E', e_score,
        'I', i_score,
        'S', s_score,
        'N', n_score,
        'T', t_score,
        'F', f_score,
        'J', j_score,
        'P', p_score
      ),
      'dimensionScores', jsonb_build_object(
        'E-I', e_i_score,
        'S-N', s_n_score,
        'T-F', t_f_score,
        'J-P', j_p_score
      ),
      'dimensionCertainty', dimension_certainty,
      'reliability', reliability,
      'completeness', completeness,
      'createdAt', created_at,
      'shareId', share_id
    ) INTO result_data
  FROM 
    public.test_results
  WHERE 
    share_id = share_uuid;
    
  RETURN result_data;
END;
$$ LANGUAGE plpgsql;

-- Create index on share_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_test_results_share_id ON public.test_results(share_id);
