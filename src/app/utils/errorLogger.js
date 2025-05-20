/**
 * 오류 로깅 및 추적 유틸리티
 *
 * 애플리케이션 전반에서 발생하는 오류를 일관되게 처리하고 로깅하기 위한 유틸리티 함수들을 제공합니다.
 */

/**
 * 오류 로깅 함수
 *
 * 콘솔에 오류를 로깅하고, 필요한 경우 세션 스토리지에 저장합니다.
 *
 * @param {Error|string} error - 오류 객체 또는 오류 메시지
 * @param {string} context - 오류가 발생한 컨텍스트 (예: 'saveResult', 'fetchSharedResult')
 * @param {Object} [additionalData] - 추가 데이터 (예: shareId, userId 등)
 * @param {boolean} [saveToStorage=true] - 세션 스토리지에 저장할지 여부
 * @returns {Object} 로깅된 오류 정보
 */
export const logError = (error, context, additionalData = {}, saveToStorage = true) => {
  // 오류 객체 생성
  const errorInfo = {
    message: error instanceof Error ? error.message : error,
    stack: error instanceof Error ? error.stack : null,
    context,
    timestamp: new Date().toISOString(),
    ...additionalData
  };

  // 콘솔에 오류 로깅
  console.error(`[${context}] Error:`, errorInfo);

  // 클라이언트 사이드에서만 세션 스토리지에 저장
  if (saveToStorage && typeof window !== 'undefined') {
    try {
      // 기존 오류 로그 가져오기
      const existingLogs = JSON.parse(sessionStorage.getItem('mbti_error_logs') || '[]');

      // 새 오류 추가
      existingLogs.push(errorInfo);

      // 최대 10개까지만 저장 (오래된 것부터 제거)
      if (existingLogs.length > 10) {
        existingLogs.shift();
      }

      // 세션 스토리지에 저장
      sessionStorage.setItem('mbti_error_logs', JSON.stringify(existingLogs));

      // 특정 컨텍스트별 오류 저장 (필요한 경우)
      if (context === 'result' && additionalData.shareId) {
        sessionStorage.setItem(`mbti_result_error_${additionalData.shareId}`, JSON.stringify(errorInfo));
      }
    } catch (storageError) {
      console.warn('Failed to save error to session storage:', storageError);
    }
  }

  return errorInfo;
};

/**
 * 오류 로그 가져오기
 *
 * 세션 스토리지에 저장된 오류 로그를 가져옵니다.
 *
 * @returns {Array} 오류 로그 배열
 */
export const getErrorLogs = () => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    return JSON.parse(sessionStorage.getItem('mbti_error_logs') || '[]');
  } catch (error) {
    console.error('Failed to parse error logs:', error);
    return [];
  }
};

/**
 * 특정 공유 ID에 대한 오류 가져오기
 *
 * @param {string} shareId - 공유 ID
 * @returns {Object|null} 오류 정보
 */
export const getResultError = (shareId) => {
  if (typeof window === 'undefined' || !shareId) {
    return null;
  }

  try {
    const errorData = sessionStorage.getItem(`mbti_result_error_${shareId}`);
    return errorData ? JSON.parse(errorData) : null;
  } catch (error) {
    console.error('Failed to parse result error:', error);
    return null;
  }
};

/**
 * 오류 로그 지우기
 */
export const clearErrorLogs = () => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    sessionStorage.removeItem('mbti_error_logs');
  } catch (error) {
    console.error('Failed to clear error logs:', error);
  }
};

const errorLogger = {
  logError,
  getErrorLogs,
  getResultError,
  clearErrorLogs
};

export default errorLogger;
