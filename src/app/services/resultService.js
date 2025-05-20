/**
 * MBTI 테스트 결과 관련 서비스
 *
 * 테스트 결과를 저장하고 가져오는 서비스입니다.
 */

import { v4 as uuidv4 } from 'uuid';
import supabase from '../utils/supabase';
import { getIdealType, getWorstMatch } from '../utils/mbti';
import { logError } from '../utils/errorLogger';

/**
 * 테스트 결과 저장하기
 *
 * 개선된 버전:
 * 1. 결과 저장 시 항상 유효한 shareId 생성 및 반환
 * 2. 저장 실패 시 명확한 오류 메시지 제공
 * 3. 트랜잭션 방식으로 데이터 저장 시도
 *
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
  // 결과 데이터 생성 - 함수 시작 시 shareId 생성하여 항상 반환할 수 있도록 함
  const shareId = uuidv4();

  try {
    // 입력 유효성 검사
    if (!scores || !mbtiType) {
      throw new Error('Invalid input: scores and mbtiType are required');
    }

    if (!scores.E || !scores.I || !scores.S || !scores.N ||
        !scores.T || !scores.F || !scores.J || !scores.P) {
      console.warn('Some score values are missing or invalid:', scores);
      // 누락된 점수는 0으로 설정
      scores = {
        E: scores.E || 0,
        I: scores.I || 0,
        S: scores.S || 0,
        N: scores.N || 0,
        T: scores.T || 0,
        F: scores.F || 0,
        J: scores.J || 0,
        P: scores.P || 0,
      };
    }

    // MBTI 유형 형식 검증 (4글자 문자열)
    if (typeof mbtiType !== 'string' || mbtiType.length !== 4) {
      console.warn('Invalid MBTI type format:', mbtiType);
      // 기본값으로 대체하지 않고 오류 발생
      throw new Error('Invalid MBTI type format');
    }

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
      // 세션 ID가 없는 경우 새로 생성
      resultData.session_id = uuidv4();
      console.log('Generated new session ID:', resultData.session_id);
    }

    // 이메일 추가 (있는 경우)
    if (email) {
      resultData.email = email;
    }

    // 저장 시작 시간 기록 (성능 측정용)
    const startTime = Date.now();

    // Supabase에 결과 저장하고 저장된 데이터 반환받기
    const { data, error } = await supabase.from('test_results').insert([resultData]).select();

    // 저장 소요 시간 계산
    const saveTime = Date.now() - startTime;
    console.log(`Test result saved in ${saveTime}ms`);

    if (error) {
      // 오류 로깅 및 추적
      logError(error, 'saveTestResult', {
        shareId,
        mbtiType,
        userId,
        sessionId: resultData.session_id,
        saveTime
      });

      // 오류 발생 시에도 shareId 반환
      throw new Error(`Failed to save test result: ${error.message}`);
    }

    if (!data || data.length === 0) {
      console.error('No data returned after saving test result');
      throw new Error('No data returned after saving');
    }

    console.log('Saved test result data:', data);

    // 공유 URL 생성 - 항상 /result/[id] 형식 사용
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareUrl = `${origin}/result/${shareId}`;

    console.log('Generated share URL:', shareUrl);

    // 저장 성공 시 반환 데이터
    return {
      success: true,
      data: data[0],
      shareId: shareId,
      shareUrl: shareUrl,
      sessionId: resultData.session_id,
    };
  } catch (error) {
    // 오류 로깅 및 추적
    const errorInfo = logError(error, 'saveTestResult', {
      shareId,
      mbtiType,
      userId,
      sessionId,
      errorType: 'SAVE_FAILURE'
    });

    // 오류 발생 시에도 shareId 반환 (클라이언트에서 임시 저장 처리 가능하도록)
    return {
      success: false,
      error: error.message || 'Unknown error occurred',
      shareId: shareId, // 오류 발생해도 shareId 반환
      errorCode: error.code || 'UNKNOWN_ERROR',
      errorId: errorInfo.timestamp, // 오류 추적을 위한 고유 ID
      timestamp: new Date().toISOString()
    };
  }
};

/**
 * 공유 ID로 테스트 결과 가져오기
 *
 * 개선된 버전:
 * 1. 데이터베이스에서 결과를 찾지 못한 경우 세션 스토리지에서 임시 저장된 결과 확인
 * 2. 오류 처리 개선 및 상세 로깅 추가
 *
 * @param {string} shareId - 공유 ID
 * @returns {Promise<Object>} 테스트 결과
 */
export const getTestResultByShareId = async shareId => {
  // 유효한 shareId인지 확인
  if (!shareId) {
    console.error('Invalid shareId provided:', shareId);
    return null;
  }

  try {
    // 먼저 세션 스토리지에서 임시 저장된 결과가 있는지 확인 (클라이언트 사이드에서만)
    if (typeof window !== 'undefined') {
      const sessionResult = sessionStorage.getItem(`mbti_result_${shareId}`);
      if (sessionResult) {
        try {
          const parsedResult = JSON.parse(sessionResult);
          console.log('Found result in session storage:', parsedResult);

          // 세션 스토리지에서 가져온 결과에 이상형 및 최악의 궁합 정보 추가
          if (parsedResult.mbtiType) {
            parsedResult.idealType = getIdealType(parsedResult.mbtiType);
            parsedResult.worstMatch = getWorstMatch(parsedResult.mbtiType);

            // 세션 스토리지에서 가져온 결과임을 표시
            parsedResult.source = 'session_storage';

            return parsedResult;
          }
        } catch (parseError) {
          console.error('Error parsing session storage result:', parseError);
        }
      }
    }

    // 세션 스토리지에 없으면 데이터베이스에서 조회
    console.log('Fetching result from database with shareId:', shareId);
    const { data, error } = await supabase.rpc('get_mbti_result_by_share_id', {
      share_uuid: shareId,
    });

    if (error) {
      // 오류 로깅 및 추적
      logError(error, 'getTestResultByShareId', {
        shareId: shareId,
        errorType: 'FETCH_FAILURE'
      });
      throw error;
    }

    if (!data) {
      console.warn('No result found in database for shareId:', shareId);
      return null;
    }

    console.log('Found result in database:', data);

    // 결과 데이터 변환 및 추가 정보 계산
    const result = {
      ...data,
      idealType: getIdealType(data.mbtiType),
      worstMatch: getWorstMatch(data.mbtiType),
      source: 'database' // 데이터베이스에서 가져온 결과임을 표시
    };

    // 클라이언트 사이드에서는 세션 스토리지에도 저장 (캐싱)
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(`mbti_result_${shareId}`, JSON.stringify(result));
      } catch (storageError) {
        console.warn('Failed to cache result in session storage:', storageError);
      }
    }

    return result;
  } catch (error) {
    // 오류 로깅 및 추적
    const errorInfo = logError(error, 'getTestResultByShareId', {
      shareId: shareId,
      errorType: 'FETCH_ERROR'
    });

    // 오류 발생 시 오류 정보 반환
    return {
      error: true,
      message: error.message || 'Failed to fetch test result',
      shareId: shareId,
      errorId: errorInfo.timestamp, // 오류 추적을 위한 고유 ID
      timestamp: new Date().toISOString()
    };
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
