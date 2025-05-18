import {
  calculateMbtiScores,
  calculateMbtiType,
  calculateDimensionDifferences,
  calculateDimensionCertainty,
  generateTestResult
} from '../../src/app/utils/mbtiAnalyzer';

// Mock questions and responses
const mockQuestions = [
  {
    id: 1,
    question: "연인과 함께 있을 때 나는",
    optionA: "다양한 활동과 대화를 통해 에너지를 얻는다",
    optionB: "조용한 시간을 함께 보내며 에너지를 얻는다",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 2,
    question: "데이트 장소로 더 선호하는 곳은",
    optionA: "활기찬 페스티벌이나 사람이 많은 장소",
    optionB: "조용한 카페나 한적한 장소",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 3,
    question: "연인과의 갈등 후 나는",
    optionA: "바로 대화하고 해결하고 싶다",
    optionB: "혼자 생각할 시간이 필요하다",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 4,
    question: "연인의 친구들을 만날 때 나는",
    optionA: "새로운 사람들과 만나는 것이 즐겁다",
    optionB: "부담스럽고 에너지가 소모된다",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 5,
    question: "데이트 계획을 세울 때 나는",
    optionA: "즉흥적으로 결정하는 것을 선호한다",
    optionB: "미리 계획을 세우는 것을 선호한다",
    dimension: "J-P",
    direction: "negative"
  },
  {
    id: 6,
    question: "연인과의 약속에 대해 나는",
    optionA: "융통성 있게 변경 가능하다고 생각한다",
    optionB: "정해진 약속은 지켜야 한다고 생각한다",
    dimension: "J-P",
    direction: "negative"
  },
  {
    id: 7,
    question: "연인에게 선물을 고를 때 나는",
    optionA: "실용적이고 유용한 것을 선택한다",
    optionB: "의미와 감성이 담긴 것을 선택한다",
    dimension: "T-F",
    direction: "positive"
  },
  {
    id: 8,
    question: "연인과 의견 충돌이 있을 때 나는",
    optionA: "논리적으로 문제를 분석하고 해결책을 찾는다",
    optionB: "서로의 감정을 고려하며 조화를 추구한다",
    dimension: "T-F",
    direction: "positive"
  }
];

describe('MBTI Analyzer', () => {
  describe('calculateMbtiScores', () => {
    it('should calculate correct scores for E-I dimension', () => {
      const responses = [
        { questionId: 1, answer: 5 }, // Strong E
        { questionId: 2, answer: 4 }, // Moderate E
        { questionId: 3, answer: 2 }, // Moderate I
        { questionId: 4, answer: 1 }  // Strong I
      ];

      const scores = calculateMbtiScores(mockQuestions, responses);

      // Check if E and I scores are calculated correctly
      expect(scores.E).toBeGreaterThan(0);
      expect(scores.I).toBeGreaterThan(0);

      // Since we have 2 E-leaning and 2 I-leaning responses, scores should be balanced
      expect(Math.abs(scores.E - scores.I)).toBeLessThan(1);
    });

    it('should calculate correct scores for J-P dimension', () => {
      const responses = [
        { questionId: 5, answer: 5 }, // Strong P (negative direction)
        { questionId: 6, answer: 1 }  // Strong J (negative direction)
      ];

      const scores = calculateMbtiScores(mockQuestions, responses);

      // Check if J and P scores are calculated correctly
      expect(scores.J).toBeGreaterThan(0);
      expect(scores.P).toBeGreaterThan(0);
    });

    it('should calculate correct scores for T-F dimension', () => {
      const responses = [
        { questionId: 7, answer: 5 }, // Strong T
        { questionId: 8, answer: 1 }  // Strong F
      ];

      const scores = calculateMbtiScores(mockQuestions, responses);

      // Check if T and F scores are calculated correctly
      expect(scores.T).toBeGreaterThan(0);
      expect(scores.F).toBeGreaterThan(0);
    });

    it('should handle empty responses', () => {
      const scores = calculateMbtiScores(mockQuestions, []);

      // All scores should be 0
      expect(scores.E).toBe(0);
      expect(scores.I).toBe(0);
      expect(scores.S).toBe(0);
      expect(scores.N).toBe(0);
      expect(scores.T).toBe(0);
      expect(scores.F).toBe(0);
      expect(scores.J).toBe(0);
      expect(scores.P).toBe(0);
    });
  });

  describe('calculateMbtiType', () => {
    it('should return ENFP for higher E, N, F, P scores', () => {
      const scores = {
        E: 15, I: 10,
        S: 8, N: 12,
        T: 9, F: 11,
        J: 7, P: 13
      };

      const type = calculateMbtiType(scores);
      expect(type).toBe('ENFP');
    });

    it('should return ISTJ for higher I, S, T, J scores', () => {
      const scores = {
        E: 10, I: 15,
        S: 12, N: 8,
        T: 11, F: 9,
        J: 13, P: 7
      };

      const type = calculateMbtiType(scores);
      expect(type).toBe('ISTJ');
    });

    it('should handle tied scores by choosing the first letter', () => {
      const scores = {
        E: 10, I: 10, // Tie, should choose E
        S: 10, N: 10, // Tie, should choose S
        T: 10, F: 10, // Tie, should choose T
        J: 10, P: 10  // Tie, should choose J
      };

      const type = calculateMbtiType(scores);
      expect(type).toBe('ESTJ');
    });
  });

  describe('calculateDimensionDifferences', () => {
    it('should calculate correct differences between dimension scores', () => {
      const scores = {
        E: 15, I: 10, // Difference: 5
        S: 8, N: 12,  // Difference: 4
        T: 9, F: 11,  // Difference: 2
        J: 7, P: 13   // Difference: 6
      };

      const differences = calculateDimensionDifferences(scores);

      expect(differences['E-I']).toBe(5);
      expect(differences['S-N']).toBe(4);
      expect(differences['T-F']).toBe(2);
      expect(differences['J-P']).toBe(6);
    });
  });

  describe('calculateDimensionCertainty', () => {
    it('should calculate correct certainty percentages', () => {
      const scores = {
        E: 5, I: 1, // Strong E preference
        S: 3, N: 3, // No preference
        T: 4, F: 2, // Moderate T preference
        J: 2, P: 4  // Moderate P preference
      };

      const certainty = calculateDimensionCertainty(scores);

      // E-I has strong preference (4/5 = 80%)
      expect(certainty['E-I']).toBeGreaterThanOrEqual(75);

      // S-N has no preference (0/5 = 0%)
      expect(certainty['S-N']).toBe(0);

      // T-F has moderate preference (2/5 = 40%)
      expect(certainty['T-F']).toBeGreaterThanOrEqual(35);
      expect(certainty['T-F']).toBeLessThanOrEqual(45);

      // J-P has moderate preference (2/5 = 40%)
      expect(certainty['J-P']).toBeGreaterThanOrEqual(35);
      expect(certainty['J-P']).toBeLessThanOrEqual(45);
    });
  });

  describe('checkResponseCompleteness', () => {
    it('should calculate correct completeness percentages', () => {
      const questions = [
        { id: 1, dimension: 'E-I' },
        { id: 2, dimension: 'E-I' },
        { id: 3, dimension: 'S-N' },
        { id: 4, dimension: 'S-N' },
        { id: 5, dimension: 'T-F' },
        { id: 6, dimension: 'T-F' },
        { id: 7, dimension: 'J-P' },
        { id: 8, dimension: 'J-P' }
      ];

      const responses = [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 4 },
        { questionId: 3, answer: 3 },
        { questionId: 5, answer: 2 }
      ];

      const completeness = checkResponseCompleteness(questions, responses);

      // E-I: 2/2 = 100%
      expect(completeness.dimensionCompleteness['E-I']).toBe(100);

      // S-N: 1/2 = 50%
      expect(completeness.dimensionCompleteness['S-N']).toBe(50);

      // T-F: 1/2 = 50%
      expect(completeness.dimensionCompleteness['T-F']).toBe(50);

      // J-P: 0/2 = 0%
      expect(completeness.dimensionCompleteness['J-P']).toBe(0);

      // Overall: 4/8 = 50%
      expect(completeness.overallCompleteness).toBe(50);

      // Not complete
      expect(completeness.isComplete).toBe(false);

      // Not sufficient data (J-P is 0%)
      expect(completeness.hasSufficientData).toBe(false);
    });

    it('should handle empty responses', () => {
      const questions = [
        { id: 1, dimension: 'E-I' },
        { id: 2, dimension: 'S-N' },
        { id: 3, dimension: 'T-F' },
        { id: 4, dimension: 'J-P' }
      ];

      const responses = [];

      const completeness = checkResponseCompleteness(questions, responses);

      // All dimensions: 0%
      expect(completeness.dimensionCompleteness['E-I']).toBe(0);
      expect(completeness.dimensionCompleteness['S-N']).toBe(0);
      expect(completeness.dimensionCompleteness['T-F']).toBe(0);
      expect(completeness.dimensionCompleteness['J-P']).toBe(0);

      // Overall: 0%
      expect(completeness.overallCompleteness).toBe(0);

      // Not complete
      expect(completeness.isComplete).toBe(false);

      // Not sufficient data
      expect(completeness.hasSufficientData).toBe(false);
    });

    it('should handle complete responses', () => {
      const questions = [
        { id: 1, dimension: 'E-I' },
        { id: 2, dimension: 'S-N' },
        { id: 3, dimension: 'T-F' },
        { id: 4, dimension: 'J-P' }
      ];

      const responses = [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 4 },
        { questionId: 3, answer: 3 },
        { questionId: 4, answer: 2 }
      ];

      const completeness = checkResponseCompleteness(questions, responses);

      // All dimensions: 100%
      expect(completeness.dimensionCompleteness['E-I']).toBe(100);
      expect(completeness.dimensionCompleteness['S-N']).toBe(100);
      expect(completeness.dimensionCompleteness['T-F']).toBe(100);
      expect(completeness.dimensionCompleteness['J-P']).toBe(100);

      // Overall: 100%
      expect(completeness.overallCompleteness).toBe(100);

      // Complete
      expect(completeness.isComplete).toBe(true);

      // Sufficient data
      expect(completeness.hasSufficientData).toBe(true);
    });
  });

  describe('calculateResultReliability', () => {
    it('should calculate correct reliability score', () => {
      const dimensionCertainty = {
        'E-I': 80,
        'S-N': 60,
        'T-F': 40,
        'J-P': 20
      };

      const completeness = {
        overallCompleteness: 75
      };

      // (50 * 0.7) + (75 * 0.3) = 35 + 22.5 = 57.5 ≈ 58
      const reliability = calculateResultReliability(dimensionCertainty, completeness);

      expect(reliability).toBe(58);
    });

    it('should handle low certainty and completeness', () => {
      const dimensionCertainty = {
        'E-I': 20,
        'S-N': 10,
        'T-F': 30,
        'J-P': 0
      };

      const completeness = {
        overallCompleteness: 25
      };

      // (15 * 0.7) + (25 * 0.3) = 10.5 + 7.5 = 18
      const reliability = calculateResultReliability(dimensionCertainty, completeness);

      expect(reliability).toBe(18);
    });

    it('should handle high certainty and completeness', () => {
      const dimensionCertainty = {
        'E-I': 100,
        'S-N': 90,
        'T-F': 80,
        'J-P': 90
      };

      const completeness = {
        overallCompleteness: 100
      };

      // (90 * 0.7) + (100 * 0.3) = 63 + 30 = 93
      const reliability = calculateResultReliability(dimensionCertainty, completeness);

      expect(reliability).toBe(93);
    });
  });

  describe('generateTestResult', () => {
    it('should generate complete test result with all required properties', () => {
      const responses = [
        { questionId: 1, answer: 5 }, // Strong E
        { questionId: 2, answer: 4 }, // Moderate E
        { questionId: 5, answer: 5 }, // Strong P
        { questionId: 7, answer: 2 }, // Moderate F
        { questionId: 8, answer: 1 }  // Strong F
      ];

      const result = generateTestResult(mockQuestions, responses);

      // Check if result has all required properties
      expect(result).toHaveProperty('mbtiType');
      expect(result).toHaveProperty('scores');
      expect(result).toHaveProperty('dimensionDifferences');
      expect(result).toHaveProperty('dimensionCertainty');
      expect(result).toHaveProperty('completeness');
      expect(result).toHaveProperty('reliability');

      // Check if scores object has all dimensions
      expect(result.scores).toHaveProperty('E');
      expect(result.scores).toHaveProperty('I');
      expect(result.scores).toHaveProperty('S');
      expect(result.scores).toHaveProperty('N');
      expect(result.scores).toHaveProperty('T');
      expect(result.scores).toHaveProperty('F');
      expect(result.scores).toHaveProperty('J');
      expect(result.scores).toHaveProperty('P');

      // Check completeness properties
      expect(result.completeness).toHaveProperty('dimensionCompleteness');
      expect(result.completeness).toHaveProperty('overallCompleteness');
      expect(result.completeness).toHaveProperty('isComplete');
      expect(result.completeness).toHaveProperty('hasSufficientData');

      // Check reliability is a number between 0-100
      expect(typeof result.reliability).toBe('number');
      expect(result.reliability).toBeGreaterThanOrEqual(0);
      expect(result.reliability).toBeLessThanOrEqual(100);
    });

    it('should handle incomplete responses', () => {
      const responses = [
        { questionId: 1, answer: 5 }, // Only one response
      ];

      const result = generateTestResult(mockQuestions, responses);

      // Should still generate a result
      expect(result).toHaveProperty('mbtiType');

      // Completeness should be low
      expect(result.completeness.overallCompleteness).toBeLessThan(50);

      // Reliability should be low
      expect(result.reliability).toBeLessThan(50);
    });

    it('should handle empty responses', () => {
      const responses = [];

      const result = generateTestResult(mockQuestions, responses);

      // Should still generate a result (default MBTI type)
      expect(result).toHaveProperty('mbtiType');

      // Completeness should be 0
      expect(result.completeness.overallCompleteness).toBe(0);

      // Reliability should be very low
      expect(result.reliability).toBeLessThan(20);
    });
  });
});
