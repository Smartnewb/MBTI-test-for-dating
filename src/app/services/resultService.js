/**
 * MBTI 테스트 결과 관련 서비스
 * 
 * 테스트 결과를 저장하고 가져오는 서비스입니다.
 */

import { v4 as uuidv4 } from 'uuid';
import supabase from '../utils/supabase';
import { calculateMbtiType } from '../utils/questions';
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
export const saveTestResult = async (scores, mbtiType, userId = null, sessionId = null, email = null) => {
  try {
    // 결과 데이터 생성
    const resultData = {
      mbti_type: mbtiType,
      e_i_score: scores.E - scores.I,
      s_n_score: scores.S - scores.N,
      t_f_score: scores.T - scores.F,
      j_p_score: scores.J - scores.P,
      share_id: uuidv4()
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
    
    // Supabase에 결과 저장
    const { data, error } = await supabase
      .from('test_results')
      .insert([resultData]);
    
    if (error) {
      console.error('Error saving test result:', error);
      throw error;
    }
    
    return { 
      success: true, 
      data: data[0],
      shareId: resultData.share_id,
      sessionId: resultData.session_id
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
export const getTestResultByShareId = async (shareId) => {
  try {
    const { data, error } = await supabase
      .rpc('get_test_result_by_share_id', { p_share_id: shareId });
    
    if (error) {
      console.error('Error fetching test result by share ID:', error);
      throw error;
    }
    
    if (!data || data.length === 0) {
      return null;
    }
    
    // 결과 데이터 변환
    const result = data[0];
    const scores = {
      E: result.e_i_score > 0 ? result.e_i_score : 0,
      I: result.e_i_score < 0 ? -result.e_i_score : 0,
      S: result.s_n_score > 0 ? result.s_n_score : 0,
      N: result.s_n_score < 0 ? -result.s_n_score : 0,
      T: result.t_f_score > 0 ? result.t_f_score : 0,
      F: result.t_f_score < 0 ? -result.t_f_score : 0,
      J: result.j_p_score > 0 ? result.j_p_score : 0,
      P: result.j_p_score < 0 ? -result.j_p_score : 0
    };
    
    return {
      mbtiType: result.mbti_type,
      scores,
      idealType: getIdealType(result.mbti_type),
      worstMatch: getWorstMatch(result.mbti_type),
      createdAt: result.created_at
    };
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
export const getTestResultsByUserId = async (userId) => {
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
export const getTestResultsBySessionId = async (sessionId) => {
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

export default {
  saveTestResult,
  getTestResultByShareId,
  getTestResultsByUserId,
  getTestResultsBySessionId
};
