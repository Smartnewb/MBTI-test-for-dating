/**
 * MBTI 질문 관련 서비스
 *
 * Supabase에서 MBTI 질문 데이터를 가져오거나 샘플 데이터를 사용하는 서비스입니다.
 */

import sampleQuestions from '../utils/sampleQuestions';
import { formatQuestionsFromSupabase } from '../utils/questions';
import * as supabaseUtils from '../utils/supabase';

/**
 * Supabase에서 MBTI 질문 데이터 가져오기
 * @returns {Promise<Array>} 질문 데이터 배열
 */
export const fetchQuestionsFromSupabase = async () => {
  try {
    const { data, error } = await supabaseUtils.getAllQuestions();

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
    const { data, error } = await supabaseUtils.getQuestionsByDimension(dimension);

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
 * Supabase에서 ID 34~57번 질문을 순서대로 가져옵니다.
 * @param {boolean} useSample - 샘플 데이터 사용 여부 (사용하지 않음)
 * @param {number} limit - 가져올 질문 수 제한 (사용하지 않음)
 * @returns {Promise<Array>} 질문 데이터 배열
 */
export const getQuestions = async (useSample = false, limit = 24) => {
  try {
    // Supabase에서 ID 34~57번 질문 가져오기
    const { data, error } = await supabaseUtils.supabase
      .from('mbti_questions')
      .select('*')
      .gte('id', 34)
      .lte('id', 57)
      .order('id', { ascending: true });

    if (error) {
      console.error('Error fetching specific questions from Supabase:', error);
      throw error;
    }

    // 질문 데이터 포맷팅
    const formattedQuestions = formatQuestionsFromSupabase(data);

    // 차원별로 정렬 (E-I, S-N, T-F, J-P 순서)
    const dimensionOrder = ['E-I', 'S-N', 'T-F', 'J-P'];
    const sortedQuestions = [];

    // 각 차원별로 질문 추가
    dimensionOrder.forEach(dimension => {
      const dimensionQuestions = formattedQuestions.filter(q => q.dimension === dimension);
      sortedQuestions.push(...dimensionQuestions);
    });

    return sortedQuestions;
  } catch (error) {
    console.error('Failed to fetch specific questions:', error);

    // 오류 발생 시 샘플 데이터 사용
    if (useSample || process.env.NODE_ENV === 'development') {
      console.log('Using sample questions due to error');
      return getSampleQuestions();
    }

    return [];
  }
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
      result = await supabaseUtils.saveUserResponse(userId, questionId, answer);
    } else {
      // 익명 사용자인 경우
      result = await supabaseUtils.saveAnonymousResponse(sessionId, questionId, answer);
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
    const { data, error } = await supabaseUtils.saveTestResult(resultData);

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
