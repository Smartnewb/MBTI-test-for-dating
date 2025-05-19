/**
 * MBTI 분석 성능 최적화 유틸리티
 *
 * 이 파일은 MBTI 테스트 분석 알고리즘의 성능을 최적화하는 기능을 제공합니다.
 * 캐싱, 메모이제이션, 계산 최적화 등의 기능을 포함합니다.
 */

// 결과 캐시 (메모리 캐시)
const resultCache = new Map();

/**
 * 캐시 키 생성
 * 응답 데이터를 기반으로 고유한 캐시 키를 생성합니다.
 * @param {Array} responses - 사용자 응답 데이터
 * @returns {string} 캐시 키
 */
export const generateCacheKey = responses => {
  if (!responses || responses.length === 0) {
    return 'empty';
  }

  // 응답을 정렬하여 순서에 상관없이 동일한 키 생성
  const sortedResponses = [...responses].sort((a, b) => a.questionId - b.questionId);

  // 응답 데이터를 문자열로 변환
  return sortedResponses.map(r => `${r.questionId}:${r.answer}`).join('|');
};

/**
 * 결과 캐싱 함수
 * 동일한 응답에 대한 결과를 캐싱하여 재계산을 방지합니다.
 * @param {Function} calculationFn - 계산 함수
 * @returns {Function} 캐싱된 계산 함수
 */
export const memoizeResult = calculationFn => {
  return (questions, responses, ...args) => {
    // 캐시 키 생성
    const cacheKey = generateCacheKey(responses);

    // 캐시에 결과가 있는지 확인
    if (resultCache.has(cacheKey)) {
      return resultCache.get(cacheKey);
    }

    // 결과 계산
    const result = calculationFn(questions, responses, ...args);

    // 결과 캐싱 (최대 100개 항목으로 제한)
    if (resultCache.size >= 100) {
      // 가장 오래된 항목 제거 (첫 번째 항목)
      const oldestKey = resultCache.keys().next().value;
      resultCache.delete(oldestKey);
    }

    resultCache.set(cacheKey, result);

    return result;
  };
};

/**
 * 응답 데이터 최적화
 * 응답 데이터를 Map으로 변환하여 조회 성능을 향상시킵니다.
 * @param {Array} responses - 사용자 응답 데이터
 * @returns {Map} 최적화된 응답 데이터
 */
export const optimizeResponses = responses => {
  if (!responses || responses.length === 0) {
    return new Map();
  }

  const responseMap = new Map();
  responses.forEach(response => {
    responseMap.set(response.questionId, response.answer);
  });

  return responseMap;
};

/**
 * 질문 데이터 최적화
 * 질문 데이터를 차원별로 그룹화하여 조회 성능을 향상시킵니다.
 * @param {Array} questions - 질문 데이터
 * @returns {Object} 최적화된 질문 데이터
 */
export const optimizeQuestions = questions => {
  if (!questions || questions.length === 0) {
    return { byId: new Map(), byDimension: {} };
  }

  const questionMap = new Map();
  const dimensionQuestions = {
    'E-I': [],
    'S-N': [],
    'T-F': [],
    'J-P': [],
  };

  questions.forEach(question => {
    // ID별 맵 생성
    questionMap.set(question.id, question);

    // 차원별 그룹화
    if (dimensionQuestions[question.dimension]) {
      dimensionQuestions[question.dimension].push(question);
    }
  });

  return {
    byId: questionMap,
    byDimension: dimensionQuestions,
  };
};

/**
 * 캐시 초기화
 * 결과 캐시를 초기화합니다.
 */
export const clearCache = () => {
  resultCache.clear();
};

const mbtiPerformance = {
  memoizeResult,
  optimizeResponses,
  optimizeQuestions,
  generateCacheKey,
  clearCache,
};

export default mbtiPerformance;
