/**
 * MBTI 테스트 결과 관련 서비스
 *
 * 테스트 결과를 저장하고 가져오는 서비스입니다.
 */

import { v4 as uuidv4 } from 'uuid';
import supabase from '../utils/supabase';
import { getIdealType, getWorstMatch } from '../utils/mbti';

/**
 * 테스트 결과 저장하기
 * @param {Object} scores - MBTI 점수
 * @param {string} mbtiType - MBTI 유형
 * @param {string} [userId] - 사용자 ID (인증된 사용자인 경우)
 * @param {string} [sessionId] - 세션 ID (익명 사용자인 경우)
 * @param {string} [email] - 이메일 (익명 사용자가 이메일을 입력한 경우)
 * @returns {Promise<Object>} 저장 결과
 */
export const saveTestResult = async (
  scores,
  mbtiType,
  userId = null,
  sessionId = null,
  email = null
) => {
  try {
    // 결과 데이터 생성
    const shareId = uuidv4();
    const resultData = {
      mbti_type: mbtiType,
      e_i_score: scores.E - scores.I,
      s_n_score: scores.S - scores.N,
      t_f_score: scores.T - scores.F,
      j_p_score: scores.J - scores.P,
      share_id: shareId,
      e_score: scores.E,
      i_score: scores.I,
      s_score: scores.S,
      n_score: scores.N,
      t_score: scores.T,
      f_score: scores.F,
      j_score: scores.J,
      p_score: scores.P,
    };

    // 사용자 ID 또는 세션 ID 추가
    if (userId) {
      resultData.user_id = userId;
    } else if (sessionId) {
      resultData.session_id = sessionId;
    } else {
      resultData.session_id = uuidv4(); // 새 세션 ID 생성
    }

    // 이메일 추가 (있는 경우)
    if (email) {
      resultData.email = email;
    }

    // Supabase에 결과 저장하고 저장된 데이터 반환받기
    const { data, error } = await supabase.from('test_results').insert([resultData]).select();

    if (error) {
      console.error('Error saving test result:', error);
      throw error;
    }

    console.log('Saved test result data:', data);

    // 공유 URL 생성 - 이제 /result?id= 대신 /result/[id] 형식 사용
    // 로컬호스트 환경에서도 제대로 작동하도록 수정
    const shareUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/result/${shareId}`
        : `/result/${shareId}`;

    console.log('Generated share URL:', shareUrl);

    return {
      success: true,
      data: data[0],
      shareId: shareId,
      shareUrl: shareUrl,
      sessionId: resultData.session_id,
    };
  } catch (error) {
    console.error('Failed to save test result:', error);
    return { success: false, error };
  }
};

/**
 * 공유 ID로 테스트 결과 가져오기
 * @param {string} shareId - 공유 ID
 * @returns {Promise<Object>} 테스트 결과
 */
export const getTestResultByShareId = async shareId => {
  try {
    const { data, error } = await supabase.rpc('get_mbti_result_by_share_id', {
      share_uuid: shareId,
    });

    if (error) {
      console.error('Error fetching test result by share ID:', error);
      throw error;
    }

    if (!data) {
      return null;
    }

    // 결과 데이터 변환 및 추가 정보 계산
    const result = {
      ...data,
      idealType: getIdealType(data.mbtiType),
      worstMatch: getWorstMatch(data.mbtiType),
    };

    return result;
  } catch (error) {
    console.error('Failed to fetch test result by share ID:', error);
    return null;
  }
};

/**
 * 사용자 ID로 테스트 결과 가져오기
 * @param {string} userId - 사용자 ID
 * @returns {Promise<Array>} 테스트 결과 배열
 */
export const getTestResultsByUserId = async userId => {
  try {
    const { data, error } = await supabase
      .from('test_results')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching test results by user ID:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch test results by user ID:', error);
    return [];
  }
};

/**
 * 세션 ID로 테스트 결과 가져오기
 * @param {string} sessionId - 세션 ID
 * @returns {Promise<Array>} 테스트 결과 배열
 */
export const getTestResultsBySessionId = async sessionId => {
  try {
    const { data, error } = await supabase
      .from('test_results')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching test results by session ID:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch test results by session ID:', error);
    return [];
  }
};

/**
 * 결과 ID로 상세 테스트 결과 가져오기
 * @param {number} resultId - 결과 ID
 * @returns {Promise<Object>} 상세 테스트 결과
 */
export const getDetailedTestResult = async resultId => {
  try {
    const { data, error } = await supabase.rpc('get_detailed_mbti_result', { result_id: resultId });

    if (error) {
      console.error('Error fetching detailed test result:', error);
      throw error;
    }

    if (!data) {
      return null;
    }

    // 결과 데이터 변환 및 추가 정보 계산
    const result = {
      ...data,
      idealType: getIdealType(data.mbtiType),
      worstMatch: getWorstMatch(data.mbtiType),
    };

    return result;
  } catch (error) {
    console.error('Failed to fetch detailed test result:', error);
    return null;
  }
};

const resultService = {
  saveTestResult,
  getTestResultByShareId,
  getTestResultsByUserId,
  getTestResultsBySessionId,
  getDetailedTestResult,
};

export default resultService;
