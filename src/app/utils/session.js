import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';

/**
 * 세션 관리 유틸리티
 * 
 * 이 모듈은 로그인 없이 MBTI 테스트를 진행하는 사용자를 위한 익명 세션을 관리합니다.
 * 브라우저 로컬 스토리지를 사용하여 세션 ID를 저장하고, Supabase에 테스트 결과를 연결합니다.
 */

// 로컬 스토리지 키
const SESSION_ID_KEY = 'mbti_test_session_id';
const SESSION_EXPIRY_KEY = 'mbti_test_session_expiry';
const SESSION_DATA_KEY = 'mbti_test_session_data';

// 세션 만료 시간 (24시간)
const SESSION_EXPIRY_HOURS = 24;

/**
 * 현재 세션 ID를 가져오거나 새로 생성합니다.
 * @returns {string} 세션 ID
 */
export function getSessionId() {
  // 브라우저 환경인지 확인
  if (typeof window === 'undefined') {
    return null;
  }

  // 로컬 스토리지에서 세션 ID 가져오기
  let sessionId = localStorage.getItem(SESSION_ID_KEY);
  const sessionExpiry = localStorage.getItem(SESSION_EXPIRY_KEY);

  // 세션이 만료되었거나 존재하지 않는 경우 새로 생성
  if (!sessionId || !sessionExpiry || new Date(sessionExpiry) < new Date()) {
    sessionId = uuidv4();
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + SESSION_EXPIRY_HOURS);
    
    localStorage.setItem(SESSION_ID_KEY, sessionId);
    localStorage.setItem(SESSION_EXPIRY_KEY, expiryDate.toISOString());
    localStorage.setItem(SESSION_DATA_KEY, JSON.stringify({}));
  }

  return sessionId;
}

/**
 * 세션 데이터를 가져옵니다.
 * @returns {Object} 세션 데이터
 */
export function getSessionData() {
  // 브라우저 환경인지 확인
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const sessionData = localStorage.getItem(SESSION_DATA_KEY);
    return sessionData ? JSON.parse(sessionData) : {};
  } catch (error) {
    console.error('Error parsing session data:', error);
    return {};
  }
}

/**
 * 세션 데이터를 업데이트합니다.
 * @param {Object} data 업데이트할 데이터
 */
export function updateSessionData(data) {
  // 브라우저 환경인지 확인
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const currentData = getSessionData();
    const updatedData = { ...currentData, ...data };
    localStorage.setItem(SESSION_DATA_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Error updating session data:', error);
  }
}

/**
 * 세션을 초기화합니다.
 */
export function clearSession() {
  // 브라우저 환경인지 확인
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem(SESSION_ID_KEY);
  localStorage.removeItem(SESSION_EXPIRY_KEY);
  localStorage.removeItem(SESSION_DATA_KEY);
}

/**
 * 세션 만료 시간을 연장합니다.
 */
export function extendSession() {
  // 브라우저 환경인지 확인
  if (typeof window === 'undefined') {
    return;
  }

  const expiryDate = new Date();
  expiryDate.setHours(expiryDate.getHours() + SESSION_EXPIRY_HOURS);
  localStorage.setItem(SESSION_EXPIRY_KEY, expiryDate.toISOString());
}

/**
 * 사용자 응답을 저장합니다.
 * @param {number} questionId 질문 ID
 * @param {string} answer 응답 ('A' 또는 'B')
 * @returns {Promise<Object>} 저장 결과
 */
export async function saveResponse(questionId, answer) {
  const sessionId = getSessionId();
  
  if (!sessionId) {
    throw new Error('세션 ID를 가져올 수 없습니다.');
  }

  // 세션 데이터에 응답 저장
  const currentData = getSessionData();
  const responses = currentData.responses || {};
  responses[questionId] = answer;
  updateSessionData({ responses });

  // Supabase에 응답 저장
  try {
    const { data, error } = await supabase
      .from('user_responses')
      .upsert([
        {
          session_id: sessionId,
          question_id: questionId,
          answer
        }
      ], { onConflict: 'session_id, question_id' });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error saving response:', error);
    return { data: null, error };
  }
}

/**
 * 테스트 결과를 저장합니다.
 * @param {Object} result MBTI 테스트 결과
 * @returns {Promise<Object>} 저장 결과
 */
export async function saveTestResult(result) {
  const sessionId = getSessionId();
  
  if (!sessionId) {
    throw new Error('세션 ID를 가져올 수 없습니다.');
  }

  // 세션 데이터에 결과 저장
  updateSessionData({ result });

  // Supabase에 결과 저장
  try {
    const { data, error } = await supabase
      .from('test_results')
      .upsert([
        {
          session_id: sessionId,
          mbti_type: result.mbtiType,
          e_score: result.scores.E,
          i_score: result.scores.I,
          s_score: result.scores.S,
          n_score: result.scores.N,
          t_score: result.scores.T,
          f_score: result.scores.F,
          j_score: result.scores.J,
          p_score: result.scores.P
        }
      ], { onConflict: 'session_id' });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error saving test result:', error);
    return { data: null, error };
  }
}

/**
 * 세션의 모든 응답을 가져옵니다.
 * @returns {Promise<Object>} 응답 데이터
 */
export async function getResponses() {
  const sessionId = getSessionId();
  
  if (!sessionId) {
    return { data: [], error: new Error('세션 ID를 가져올 수 없습니다.') };
  }

  try {
    const { data, error } = await supabase
      .from('user_responses')
      .select('*')
      .eq('session_id', sessionId);

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error getting responses:', error);
    
    // 로컬 데이터로 폴백
    const sessionData = getSessionData();
    const responses = sessionData.responses || {};
    
    // 배열 형태로 변환
    const responseArray = Object.entries(responses).map(([questionId, answer]) => ({
      question_id: parseInt(questionId),
      answer,
      session_id: sessionId
    }));
    
    return { data: responseArray, error };
  }
}

/**
 * 세션의 테스트 결과를 가져옵니다.
 * @returns {Promise<Object>} 테스트 결과
 */
export async function getTestResult() {
  const sessionId = getSessionId();
  
  if (!sessionId) {
    return { data: null, error: new Error('세션 ID를 가져올 수 없습니다.') };
  }

  try {
    const { data, error } = await supabase
      .from('test_results')
      .select('*')
      .eq('session_id', sessionId)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116: 결과가 없음
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error getting test result:', error);
    
    // 로컬 데이터로 폴백
    const sessionData = getSessionData();
    return { data: sessionData.result || null, error };
  }
}

export default {
  getSessionId,
  getSessionData,
  updateSessionData,
  clearSession,
  extendSession,
  saveResponse,
  saveTestResult,
  getResponses,
  getTestResult
};
