-- Add confidence analysis fields to test_results table

-- Add confidence score and level columns
ALTER TABLE public.test_results
ADD COLUMN IF NOT EXISTS confidence_score INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS confidence_level VARCHAR(20) DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS confidence_factors JSONB DEFAULT '{}'::jsonb;

-- Add comments to explain the new columns
COMMENT ON COLUMN public.test_results.confidence_score IS '신뢰도 점수 (0-100%)';
COMMENT ON COLUMN public.test_results.confidence_level IS '신뢰도 등급 (very-low, low, medium, high, very-high)';
COMMENT ON COLUMN public.test_results.confidence_factors IS '신뢰도 분석 상세 요소 (JSON)';

-- Update the get_detailed_mbti_result function to include confidence data
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
      'confidence', jsonb_build_object(
        'score', confidence_score,
        'level', confidence_level,
        'factors', confidence_factors
      ),
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

-- Update the get_mbti_result_by_share_id function to include confidence data
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
      'confidence', jsonb_build_object(
        'score', confidence_score,
        'level', confidence_level,
        'factors', confidence_factors
      ),
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
