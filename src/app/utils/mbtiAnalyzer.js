/**
 * MBTI 분석 알고리즘
 *
 * 이 파일은 MBTI 테스트 응답을 분석하고 결과를 계산하는 알고리즘을 구현합니다.
 * 가중치 기반 점수 계산, 차원별 점수 계산, 최종 MBTI 유형 결정 등의 기능을 제공합니다.
 */

import { v4 as uuidv4 } from 'uuid';
import supabase from './supabase';
import { MBTI_TYPES, MBTI_DIMENSIONS } from './mbti';
import { calculateConfidenceScore } from './mbtiConfidenceAnalyzer';
import { memoizeResult, optimizeResponses, optimizeQuestions } from './mbtiPerformance';

/**
 * MBTI 차원 정의
 */
export const DIMENSIONS = {
  'E-I': { positive: 'E', negative: 'I', name: '에너지 방향' },
  'S-N': { positive: 'S', negative: 'N', name: '인식 기능' },
  'T-F': { positive: 'T', negative: 'F', name: '판단 기능' },
  'J-P': { positive: 'J', negative: 'P', name: '생활 양식' },
};

/**
 * 가중치 설정
 * 각 차원별로 다른 가중치를 적용할 수 있습니다.
 * 연애 성향에 더 중요한 차원에 높은 가중치를 부여합니다.
 */
export const WEIGHTS = {
  'E-I': 1.0, // 외향성/내향성은 연애 스타일에 중요한 영향
  'S-N': 1.2, // 감각/직관은 데이트 취향과 관련이 깊음
  'T-F': 1.5, // 사고/감정은 연애 관계에서 가장 중요한 요소
  'J-P': 1.3, // 판단/인식은 데이트 계획과 관계 진행에 영향
};

/**
 * 차원별 질문 중요도 매트릭스
 * 각 질문의 중요도를 정의합니다. 기본값은 1.0입니다.
 * 연애 성향을 더 잘 나타내는 질문에 높은 가중치를 부여합니다.
 */
export const QUESTION_IMPORTANCE = {
  // 질문 ID를 키로 사용
  1: 1.2, // 연인과 함께 있을 때 에너지 얻는 방식 (중요도 높음)
  2: 1.0, // 데이트 장소 선호도 (보통)
  3: 1.3, // 갈등 해결 방식 (중요도 높음)
  4: 0.9, // 연인의 친구 만남 (중요도 낮음)
  5: 1.4, // 데이트 계획 방식 (중요도 높음)
  6: 1.2, // 약속에 대한 태도 (중요도 높음)
  7: 1.1, // 선물 선택 방식 (중요도 보통)
  8: 1.5, // 의견 충돌 해결 방식 (중요도 매우 높음)
};

/**
 * 응답 점수 범위
 * 사용자 응답은 1~5 범위의 점수로 변환됩니다.
 */
export const RESPONSE_RANGE = {
  MIN: 1,
  MAX: 5,
};

/**
 * 사용자 응답을 MBTI 점수로 변환
 * @param {Array} questions - 질문 데이터
 * @param {Array} responses - 사용자 응답 데이터
 * @returns {Object} MBTI 점수 (E, I, S, N, T, F, J, P)
 */
export const calculateMbtiScores = (questions, responses) => {
  // 초기 점수 설정
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // 차원별 질문 수 카운트
  const dimensionCounts = {
    'E-I': 0,
    'S-N': 0,
    'T-F': 0,
    'J-P': 0,
  };

  // 응답이 없는 경우 빈 점수 반환
  if (!responses || responses.length === 0) {
    return scores;
  }

  // 응답 데이터 최적화
  const responseMap = optimizeResponses(responses);

  // 질문 데이터 최적화
  const optimizedQuestions = optimizeQuestions(questions);

  // 각 질문에 대한 응답 점수 계산
  questions.forEach(question => {
    const response = responseMap.get(question.id);

    // 응답이 없는 질문은 건너뜀
    if (!response) return;

    // 응답 점수 계산
    // 'A' 또는 'B' 형식의 응답을 처리
    let score;
    if (response === 'A') {
      score = 5; // A 선택 시 최대 점수
    } else if (response === 'B') {
      score = 1; // B 선택 시 최소 점수
    } else {
      // 숫자 형식의 응답 처리 (1~5 범위)
      score = parseInt(response);

      // 유효한 점수 범위 확인
      if (isNaN(score) || score < RESPONSE_RANGE.MIN || score > RESPONSE_RANGE.MAX) {
        return;
      }
    }

    // 차원 카운트 증가
    dimensionCounts[question.dimension]++;

    // 차원별 가중치 적용
    const dimensionWeight = WEIGHTS[question.dimension] || 1.0;

    // 질문별 중요도 가중치 적용
    const questionImportance = QUESTION_IMPORTANCE[question.id] || 1.0;

    // 최종 가중치 계산 (차원 가중치 * 질문 중요도)
    const totalWeight = dimensionWeight * questionImportance;

    // 가중치 적용된 점수 계산
    score = score * totalWeight;

    // 방향에 따라 점수 계산
    if (question.dimension === 'E-I') {
      if (question.direction === 'positive') {
        scores.E += score;
        scores.I += RESPONSE_RANGE.MAX + 1 - score;
      } else {
        scores.I += score;
        scores.E += RESPONSE_RANGE.MAX + 1 - score;
      }
    } else if (question.dimension === 'S-N') {
      if (question.direction === 'positive') {
        scores.S += score;
        scores.N += RESPONSE_RANGE.MAX + 1 - score;
      } else {
        scores.N += score;
        scores.S += RESPONSE_RANGE.MAX + 1 - score;
      }
    } else if (question.dimension === 'T-F') {
      if (question.direction === 'positive') {
        scores.T += score;
        scores.F += RESPONSE_RANGE.MAX + 1 - score;
      } else {
        scores.F += score;
        scores.T += RESPONSE_RANGE.MAX + 1 - score;
      }
    } else if (question.dimension === 'J-P') {
      if (question.direction === 'positive') {
        scores.J += score;
        scores.P += RESPONSE_RANGE.MAX + 1 - score;
      } else {
        scores.P += score;
        scores.J += RESPONSE_RANGE.MAX + 1 - score;
      }
    }
  });

  // 차원별 정규화 (질문 수에 따른 평균 계산)
  if (dimensionCounts['E-I'] > 0) {
    scores.E = Math.round((scores.E / dimensionCounts['E-I']) * 100) / 100;
    scores.I = Math.round((scores.I / dimensionCounts['E-I']) * 100) / 100;
  }
  if (dimensionCounts['S-N'] > 0) {
    scores.S = Math.round((scores.S / dimensionCounts['S-N']) * 100) / 100;
    scores.N = Math.round((scores.N / dimensionCounts['S-N']) * 100) / 100;
  }
  if (dimensionCounts['T-F'] > 0) {
    scores.T = Math.round((scores.T / dimensionCounts['T-F']) * 100) / 100;
    scores.F = Math.round((scores.F / dimensionCounts['T-F']) * 100) / 100;
  }
  if (dimensionCounts['J-P'] > 0) {
    scores.J = Math.round((scores.J / dimensionCounts['J-P']) * 100) / 100;
    scores.P = Math.round((scores.P / dimensionCounts['J-P']) * 100) / 100;
  }

  return scores;
};

/**
 * 차원별 점수 차이 계산
 * @param {Object} scores - MBTI 점수
 * @returns {Object} 차원별 점수 차이
 */
export const calculateDimensionDifferences = scores => {
  return {
    'E-I': Math.abs(scores.E - scores.I),
    'S-N': Math.abs(scores.S - scores.N),
    'T-F': Math.abs(scores.T - scores.F),
    'J-P': Math.abs(scores.J - scores.P),
  };
};

/**
 * 차원별 확실성 계산 (0~100%)
 * @param {Object} scores - MBTI 점수
 * @returns {Object} 차원별 확실성 (%)
 */
export const calculateDimensionCertainty = scores => {
  const maxPossibleDifference = RESPONSE_RANGE.MAX; // 최대 가능한 차이

  return {
    'E-I': Math.round((Math.abs(scores.E - scores.I) / maxPossibleDifference) * 100),
    'S-N': Math.round((Math.abs(scores.S - scores.N) / maxPossibleDifference) * 100),
    'T-F': Math.round((Math.abs(scores.T - scores.F) / maxPossibleDifference) * 100),
    'J-P': Math.round((Math.abs(scores.J - scores.P) / maxPossibleDifference) * 100),
  };
};

/**
 * 동점 처리를 위한 보조 성향 정의
 * 동점일 경우 연애 성향에 더 적합한 유형을 선택합니다.
 */
export const TIE_BREAKERS = {
  'E-I': 'E', // 동점일 경우 외향적(E) 성향 선택 (연애에서 더 적극적)
  'S-N': 'N', // 동점일 경우 직관적(N) 성향 선택 (연애에서 더 로맨틱)
  'T-F': 'F', // 동점일 경우 감정적(F) 성향 선택 (연애에서 더 공감적)
  'J-P': 'P', // 동점일 경우 인식적(P) 성향 선택 (연애에서 더 유연함)
};

/**
 * 동점 처리 함수
 * @param {string} dimension - MBTI 차원 (E-I, S-N, T-F, J-P)
 * @param {number} score1 - 첫 번째 성향 점수
 * @param {number} score2 - 두 번째 성향 점수
 * @param {number} threshold - 동점으로 간주할 임계값 (기본값: 0.5)
 * @returns {string} 선택된 성향 문자
 */
export const handleTieBreaker = (dimension, score1, score2, threshold = 0.5) => {
  // 점수 차이 계산
  const difference = Math.abs(score1 - score2);

  // 차이가 임계값보다 작으면 동점으로 간주
  if (difference <= threshold) {
    // 동점 처리 규칙 적용
    return TIE_BREAKERS[dimension];
  }

  // 동점이 아니면 높은 점수 선택
  const positive = DIMENSIONS[dimension].positive;
  const negative = DIMENSIONS[dimension].negative;
  return score1 >= score2 ? positive : negative;
};

/**
 * MBTI 점수를 MBTI 유형으로 변환
 * @param {Object} scores - MBTI 점수
 * @returns {string} MBTI 유형 (예: 'ENFJ')
 */
export const calculateMbtiType = scores => {
  const result = [];

  // 동점 처리 임계값
  const tieThreshold = 0.5;

  // E vs I (동점 처리 적용)
  if (Math.abs(scores.E - scores.I) <= tieThreshold) {
    result.push(TIE_BREAKERS['E-I']);
  } else {
    result.push(scores.E > scores.I ? 'E' : 'I');
  }

  // S vs N (동점 처리 적용)
  if (Math.abs(scores.S - scores.N) <= tieThreshold) {
    result.push(TIE_BREAKERS['S-N']);
  } else {
    result.push(scores.S > scores.N ? 'S' : 'N');
  }

  // T vs F (동점 처리 적용)
  if (Math.abs(scores.T - scores.F) <= tieThreshold) {
    result.push(TIE_BREAKERS['T-F']);
  } else {
    result.push(scores.T > scores.F ? 'T' : 'F');
  }

  // J vs P (동점 처리 적용)
  if (Math.abs(scores.J - scores.P) <= tieThreshold) {
    result.push(TIE_BREAKERS['J-P']);
  } else {
    result.push(scores.J > scores.P ? 'J' : 'P');
  }

  return result.join('');
};

/**
 * 응답 완성도 검사
 * 각 차원별로 최소한의 응답이 있는지 확인합니다.
 * @param {Array} questions - 질문 데이터
 * @param {Array} responses - 사용자 응답 데이터
 * @returns {Object} 차원별 응답 완성도 및 전체 완성도
 */
export const checkResponseCompleteness = (questions, responses) => {
  // 차원별 질문 수와 응답 수 카운트
  const dimensionCounts = {
    'E-I': { total: 0, answered: 0 },
    'S-N': { total: 0, answered: 0 },
    'T-F': { total: 0, answered: 0 },
    'J-P': { total: 0, answered: 0 },
  };

  // 응답을 Map으로 변환하여 빠른 조회
  const responseMap = new Map();
  responses.forEach(response => {
    responseMap.set(response.questionId, response.answer);
  });

  // 각 질문에 대해 차원별 카운트 증가
  questions.forEach(question => {
    const dimension = question.dimension;
    dimensionCounts[dimension].total++;

    if (responseMap.has(question.id)) {
      dimensionCounts[dimension].answered++;
    }
  });

  // 차원별 완성도 계산 (%)
  const completeness = {
    'E-I':
      dimensionCounts['E-I'].total > 0
        ? Math.round((dimensionCounts['E-I'].answered / dimensionCounts['E-I'].total) * 100)
        : 0,
    'S-N':
      dimensionCounts['S-N'].total > 0
        ? Math.round((dimensionCounts['S-N'].answered / dimensionCounts['S-N'].total) * 100)
        : 0,
    'T-F':
      dimensionCounts['T-F'].total > 0
        ? Math.round((dimensionCounts['T-F'].answered / dimensionCounts['T-F'].total) * 100)
        : 0,
    'J-P':
      dimensionCounts['J-P'].total > 0
        ? Math.round((dimensionCounts['J-P'].answered / dimensionCounts['J-P'].total) * 100)
        : 0,
  };

  // 전체 완성도 계산
  const totalQuestions = questions.length;
  const totalAnswered = responses.length;
  const overallCompleteness =
    totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;

  return {
    dimensionCompleteness: completeness,
    overallCompleteness,
    isComplete: overallCompleteness === 100,
    hasSufficientData: Object.values(completeness).every(percent => percent >= 50), // 각 차원별로 최소 50% 이상 응답
  };
};

/**
 * 테스트 결과 신뢰도 계산
 * @param {Object} dimensionCertainty - 차원별 확실성
 * @param {Object} completeness - 응답 완성도
 * @returns {number} 결과 신뢰도 (0-100%)
 */
export const calculateResultReliability = (dimensionCertainty, completeness) => {
  // 차원별 확실성의 평균
  const avgCertainty = Object.values(dimensionCertainty).reduce((sum, val) => sum + val, 0) / 4;

  // 응답 완성도 반영
  const reliability = Math.round(avgCertainty * 0.7 + completeness.overallCompleteness * 0.3);

  // 0-100% 범위로 제한
  return Math.max(0, Math.min(100, reliability));
};

/**
 * 테스트 결과 생성 (내부 구현)
 * @param {Array} questions - 질문 데이터
 * @param {Array} responses - 사용자 응답 데이터
 * @returns {Object} 테스트 결과
 */
const _generateTestResult = (questions, responses) => {
  // 응답 완성도 검사
  const completeness = checkResponseCompleteness(questions, responses);

  // 점수 계산
  const scores = calculateMbtiScores(questions, responses);

  // 차원별 점수 차이 및 확실성 계산
  const dimensionDifferences = calculateDimensionDifferences(scores);
  const dimensionCertainty = calculateDimensionCertainty(scores);

  // 기본 결과 신뢰도 계산
  const reliability = calculateResultReliability(dimensionCertainty, completeness);

  // MBTI 유형 계산
  const mbtiType = calculateMbtiType(scores);

  // 고급 신뢰도 분석 수행
  const confidence = calculateConfidenceScore(
    questions,
    responses,
    completeness,
    dimensionCertainty
  );

  // 결과 반환
  return {
    mbtiType,
    scores,
    dimensionDifferences,
    dimensionCertainty,
    completeness,
    reliability,
    confidence,
    timestamp: new Date().toISOString(), // 결과 생성 시간 추가
  };
};

/**
 * 테스트 결과 생성 (메모이제이션 적용)
 * @param {Array} questions - 질문 데이터
 * @param {Array} responses - 사용자 응답 데이터
 * @returns {Object} 테스트 결과
 */
export const generateTestResult = memoizeResult(_generateTestResult);

/**
 * 테스트 결과를 Supabase에 저장
 * @param {Object} result - 테스트 결과
 * @param {string} userId - 사용자 ID (선택적)
 * @param {string} sessionId - 세션 ID (선택적)
 * @param {string} email - 이메일 (선택적)
 * @returns {Promise<Object>} 저장된 결과 데이터
 */
export const saveTestResult = async (result, userId = null, sessionId = null, email = null) => {
  try {
    // 결과 데이터 준비
    const resultData = {
      mbti_type: result.mbtiType,
      e_i_score: result.scores.E - result.scores.I,
      s_n_score: result.scores.S - result.scores.N,
      t_f_score: result.scores.T - result.scores.F,
      j_p_score: result.scores.J - result.scores.P,
      reliability: result.reliability || 0,
      completeness: result.completeness?.overallCompleteness || 0,
      confidence_score: result.confidence?.score || 0,
      confidence_level: result.confidence?.level || 'medium',
      share_id: uuidv4(),
      created_at: new Date().toISOString(),
    };

    // 상세 점수 데이터 추가
    resultData.e_score = result.scores.E;
    resultData.i_score = result.scores.I;
    resultData.s_score = result.scores.S;
    resultData.n_score = result.scores.N;
    resultData.t_score = result.scores.T;
    resultData.f_score = result.scores.F;
    resultData.j_score = result.scores.J;
    resultData.p_score = result.scores.P;

    // 차원별 확실성 데이터 추가 (JSON으로 저장)
    resultData.dimension_certainty = JSON.stringify(result.dimensionCertainty || {});

    // 신뢰도 분석 상세 정보 추가 (JSON으로 저장)
    if (result.confidence && result.confidence.factors) {
      resultData.confidence_factors = JSON.stringify(result.confidence.factors);
    }

    // 사용자 ID가 있는 경우 추가
    if (userId) {
      resultData.user_id = userId;
    }

    // 세션 ID가 있는 경우 추가
    if (sessionId) {
      resultData.session_id = sessionId;
    }

    // 이메일이 있는 경우 추가
    if (email) {
      resultData.email = email;
    }

    // Supabase에 결과 저장
    const { data, error } = await supabase.from('test_results').insert([resultData]).select();

    if (error) {
      console.error('Error saving test result:', error);
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error('Failed to save test result:', error);
    throw error;
  }
};

const mbtiAnalyzer = {
  DIMENSIONS,
  WEIGHTS,
  QUESTION_IMPORTANCE,
  RESPONSE_RANGE,
  TIE_BREAKERS,
  calculateMbtiScores,
  calculateDimensionDifferences,
  calculateDimensionCertainty,
  handleTieBreaker,
  calculateMbtiType,
  checkResponseCompleteness,
  calculateResultReliability,
  generateTestResult,
  saveTestResult,
};

export default mbtiAnalyzer;
