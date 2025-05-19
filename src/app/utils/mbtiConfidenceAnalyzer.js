/**
 * MBTI 신뢰도 분석 유틸리티
 *
 * 이 파일은 MBTI 테스트 결과의 신뢰도를 분석하는 기능을 제공합니다.
 * 응답 일관성, 응답 시간, 응답 패턴 등을 분석하여 결과의 신뢰도를 계산합니다.
 */

/**
 * 응답 일관성 분석
 * 유사한 질문에 대한 응답의 일관성을 분석합니다.
 * @param {Array} questions - 질문 데이터
 * @param {Array} responses - 사용자 응답 데이터
 * @returns {number} 일관성 점수 (0-100)
 */
export const analyzeResponseConsistency = (questions, responses) => {
  // 응답이 없는 경우 0 반환
  if (!responses || responses.length === 0) {
    return 0;
  }

  // 차원별 질문 그룹화
  const dimensionQuestions = {};
  questions.forEach(question => {
    if (!dimensionQuestions[question.dimension]) {
      dimensionQuestions[question.dimension] = [];
    }
    dimensionQuestions[question.dimension].push(question);
  });

  // 응답을 Map으로 변환하여 빠른 조회
  const responseMap = new Map();
  responses.forEach(response => {
    responseMap.set(response.questionId, response.answer);
  });

  // 차원별 응답 일관성 계산
  let totalConsistencyScore = 0;
  let dimensionCount = 0;

  Object.keys(dimensionQuestions).forEach(dimension => {
    const questions = dimensionQuestions[dimension];

    // 해당 차원의 질문이 2개 미만이면 건너뜀
    if (questions.length < 2) return;

    // 해당 차원의 응답 수집
    const dimensionResponses = [];
    questions.forEach(question => {
      const response = responseMap.get(question.id);
      if (response !== undefined) {
        dimensionResponses.push({
          questionId: question.id,
          answer: response,
          direction: question.direction,
        });
      }
    });

    // 응답이 2개 미만이면 건너뜀
    if (dimensionResponses.length < 2) return;

    // 응답 일관성 계산
    let consistentPairs = 0;
    let totalPairs = 0;

    for (let i = 0; i < dimensionResponses.length; i++) {
      for (let j = i + 1; j < dimensionResponses.length; j++) {
        const resp1 = dimensionResponses[i];
        const resp2 = dimensionResponses[j];

        // 두 질문의 방향이 같은 경우
        if (resp1.direction === resp2.direction) {
          // 응답이 비슷한 경향을 보이는지 확인 (차이가 2 이하)
          if (Math.abs(resp1.answer - resp2.answer) <= 2) {
            consistentPairs++;
          }
        }
        // 두 질문의 방향이 다른 경우
        else {
          // 응답이 반대 경향을 보이는지 확인 (합이 6에 가까움)
          if (Math.abs(resp1.answer + resp2.answer - 6) <= 2) {
            consistentPairs++;
          }
        }

        totalPairs++;
      }
    }

    // 일관성 점수 계산 (0-100)
    const dimensionConsistency =
      totalPairs > 0 ? Math.round((consistentPairs / totalPairs) * 100) : 0;

    totalConsistencyScore += dimensionConsistency;
    dimensionCount++;
  });

  // 전체 일관성 점수 계산
  return dimensionCount > 0 ? Math.round(totalConsistencyScore / dimensionCount) : 0;
};

/**
 * 응답 패턴 분석
 * 응답 패턴의 다양성을 분석합니다.
 * 모든 응답이 동일하거나 패턴이 너무 단순하면 신뢰도가 낮습니다.
 * @param {Array} responses - 사용자 응답 데이터
 * @returns {number} 패턴 다양성 점수 (0-100)
 */
export const analyzeResponsePattern = responses => {
  // 응답이 없는 경우 0 반환
  if (!responses || responses.length === 0) {
    return 0;
  }

  // 응답이 3개 미만인 경우 낮은 점수 반환
  if (responses.length < 3) {
    return 30;
  }

  // 응답 값 빈도 계산
  const answerFrequency = {};
  responses.forEach(response => {
    const answer = response.answer;
    answerFrequency[answer] = (answerFrequency[answer] || 0) + 1;
  });

  // 사용된 응답 값의 수
  const uniqueAnswers = Object.keys(answerFrequency).length;

  // 가장 많이 사용된 응답 값의 비율
  const mostFrequentAnswer = Math.max(...Object.values(answerFrequency));
  const mostFrequentRatio = mostFrequentAnswer / responses.length;

  // 패턴 다양성 점수 계산
  let patternScore = 0;

  // 사용된 응답 값의 다양성 (1-5 범위의 모든 값을 사용했는지)
  const diversityScore = Math.min(100, uniqueAnswers * 20);

  // 응답 분포의 균형성 (한 값에 너무 치우치지 않았는지)
  const balanceScore = Math.max(0, 100 - mostFrequentRatio * 100);

  // 최종 패턴 점수 계산
  patternScore = Math.round(diversityScore * 0.5 + balanceScore * 0.5);

  return patternScore;
};

/**
 * MBTI 결과 신뢰도 계산
 * 여러 요소를 종합하여 최종 신뢰도를 계산합니다.
 * @param {Array} questions - 질문 데이터
 * @param {Array} responses - 사용자 응답 데이터
 * @param {Object} completeness - 응답 완성도 데이터
 * @param {Object} dimensionCertainty - 차원별 확실성 데이터
 * @returns {Object} 신뢰도 분석 결과
 */
export const calculateConfidenceScore = (
  questions,
  responses,
  completeness,
  dimensionCertainty
) => {
  // 응답 일관성 분석
  const consistencyScore = analyzeResponseConsistency(questions, responses);

  // 응답 패턴 분석
  const patternScore = analyzeResponsePattern(responses);

  // 응답 완성도 점수
  const completenessScore = completeness.overallCompleteness;

  // 차원별 확실성 평균
  const certaintyScore = Object.values(dimensionCertainty).reduce((sum, val) => sum + val, 0) / 4;

  // 가중치 설정
  const weights = {
    consistency: 0.3, // 응답 일관성 (30%)
    pattern: 0.2, // 응답 패턴 다양성 (20%)
    completeness: 0.2, // 응답 완성도 (20%)
    certainty: 0.3, // 차원별 확실성 (30%)
  };

  // 최종 신뢰도 점수 계산
  const confidenceScore = Math.round(
    consistencyScore * weights.consistency +
      patternScore * weights.pattern +
      completenessScore * weights.completeness +
      certaintyScore * weights.certainty
  );

  // 신뢰도 등급 결정
  let confidenceLevel = 'low';
  if (confidenceScore >= 80) {
    confidenceLevel = 'very-high';
  } else if (confidenceScore >= 65) {
    confidenceLevel = 'high';
  } else if (confidenceScore >= 50) {
    confidenceLevel = 'medium';
  } else if (confidenceScore >= 35) {
    confidenceLevel = 'low';
  } else {
    confidenceLevel = 'very-low';
  }

  return {
    score: confidenceScore,
    level: confidenceLevel,
    factors: {
      consistency: consistencyScore,
      pattern: patternScore,
      completeness: completenessScore,
      certainty: certaintyScore,
    },
  };
};

const mbtiConfidenceAnalyzer = {
  analyzeResponseConsistency,
  analyzeResponsePattern,
  calculateConfidenceScore,
};

export default mbtiConfidenceAnalyzer;
