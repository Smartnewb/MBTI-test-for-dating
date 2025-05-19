/**
 * MBTI 질문 관련 서비스
 *
 * Supabase에서 MBTI 질문 데이터를 가져오거나 샘플 데이터를 사용하는 서비스입니다.
 */

import { createClient } from '@supabase/supabase-js';
import sampleQuestions from '../utils/sampleQuestions';
import { formatQuestionsFromSupabase } from '../utils/questions';

// Supabase 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Supabase에서 MBTI 질문 데이터 가져오기
 * @returns {Promise<Array>} 질문 데이터 배열
 */
export const fetchQuestionsFromSupabase = async () => {
  try {
    const { data, error } = await supabase.getAllQuestions();

    if (error) {
      console.error('Error fetching questions from Supabase:', error);
      throw error;
    }

    return formatQuestionsFromSupabase(data);
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    return [];
  }
};

/**
 * Supabase에서 특정 MBTI 차원의 질문 데이터 가져오기
 * @param {string} dimension - MBTI 차원 (E-I, S-N, T-F, J-P)
 * @returns {Promise<Array>} 질문 데이터 배열
 */
export const fetchQuestionsByDimension = async dimension => {
  try {
    const { data, error } = await supabase.getQuestionsByDimension(dimension);

    if (error) {
      console.error(`Error fetching ${dimension} questions from Supabase:`, error);
      throw error;
    }

    return formatQuestionsFromSupabase(data);
  } catch (error) {
    console.error(`Failed to fetch ${dimension} questions:`, error);
    return [];
  }
};

/**
 * 샘플 MBTI 질문 데이터 가져오기
 * @returns {Array} 샘플 질문 데이터 배열
 */
export const getSampleQuestions = () => {
  return sampleQuestions;
};

/**
 * MBTI 질문 데이터 가져오기
 * 개발 환경에서는 샘플 데이터를 사용하고, 프로덕션 환경에서는 Supabase에서 데이터를 가져옵니다.
 * @param {boolean} useSample - 샘플 데이터 사용 여부
 * @returns {Promise<Array>} 질문 데이터 배열
 */
export const getQuestions = async (useSample = false) => {
  // 개발 환경이거나 useSample이 true인 경우 샘플 데이터 사용
  if (process.env.NODE_ENV === 'development' || useSample) {
    return getSampleQuestions();
  }

  // 프로덕션 환경에서는 Supabase에서 데이터 가져오기
  return await fetchQuestionsFromSupabase();
};

/**
 * 특정 MBTI 차원의 질문만 가져오기
 * @param {Array} questions - 전체 질문 데이터 배열
 * @param {string} dimension - MBTI 차원 (E-I, S-N, T-F, J-P)
 * @returns {Array} 해당 차원의 질문 데이터 배열
 */
export const getQuestionsByDimension = (questions, dimension) => {
  return questions.filter(q => q.dimension === dimension);
};

/**
 * 질문 데이터를 섞어서 반환
 * @param {Array} questions - 질문 데이터 배열
 * @returns {Array} 섞인 질문 데이터 배열
 */
export const shuffleQuestions = questions => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * 사용자 응답 저장하기
 * @param {string} sessionId - 세션 ID
 * @param {number} questionId - 질문 ID
 * @param {string} answer - 사용자 응답 ('A' 또는 'B')
 * @param {string} [userId] - 사용자 ID (인증된 사용자인 경우)
 * @returns {Promise<Object>} 저장 결과
 */
export const saveUserResponse = async (sessionId, questionId, answer, userId = null) => {
  try {
    let result;

    if (userId) {
      // 인증된 사용자인 경우
      result = await supabase.saveUserResponse(userId, questionId, answer);
    } else {
      // 익명 사용자인 경우
      result = await supabase.saveAnonymousResponse(sessionId, questionId, answer);
    }

    const { data, error } = result;

    if (error) {
      console.error('Error saving user response:', error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to save user response:', error);
    return { success: false, error };
  }
};

/**
 * 테스트 결과 저장하기
 * @param {Object} resultData - 테스트 결과 데이터
 * @returns {Promise<Object>} 저장 결과
 */
export const saveTestResult = async resultData => {
  try {
    const { data, error } = await supabase.saveTestResult(resultData);

    if (error) {
      console.error('Error saving test result:', error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to save test result:', error);
    return { success: false, error };
  }
};

const questionService = {
  getQuestions,
  getSampleQuestions,
  fetchQuestionsFromSupabase,
  getQuestionsByDimension,
  shuffleQuestions,
  saveUserResponse,
};

export default questionService;
