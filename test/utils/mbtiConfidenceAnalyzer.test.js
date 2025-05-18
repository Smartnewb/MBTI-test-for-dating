import {
  analyzeResponseConsistency,
  analyzeResponsePattern,
  calculateConfidenceScore
} from '../../src/app/utils/mbtiConfidenceAnalyzer';

// Mock questions and responses
const mockQuestions = [
  {
    id: 1,
    question: "연인과 함께 있을 때 나는",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 2,
    question: "데이트 장소로 더 선호하는 곳은",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 3,
    question: "연인과의 갈등 후 나는",
    dimension: "E-I",
    direction: "negative"
  },
  {
    id: 4,
    question: "연인의 친구들을 만날 때 나는",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 5,
    question: "데이트 계획을 세울 때 나는",
    dimension: "J-P",
    direction: "negative"
  },
  {
    id: 6,
    question: "연인과의 약속에 대해 나는",
    dimension: "J-P",
    direction: "negative"
  },
  {
    id: 7,
    question: "연인에게 선물을 고를 때 나는",
    dimension: "T-F",
    direction: "positive"
  },
  {
    id: 8,
    question: "연인과 의견 충돌이 있을 때 나는",
    dimension: "T-F",
    direction: "positive"
  }
];

describe('MBTI Confidence Analyzer', () => {
  describe('analyzeResponseConsistency', () => {
    it('should calculate high consistency for consistent responses', () => {
      const responses = [
        { questionId: 1, answer: 5 }, // Strong E (positive)
        { questionId: 2, answer: 4 }, // Moderate E (positive)
        { questionId: 3, answer: 2 }, // Moderate E (negative, reversed)
        { questionId: 4, answer: 5 }  // Strong E (positive)
      ];
      
      const consistency = analyzeResponseConsistency(mockQuestions, responses);
      
      // Should have high consistency (all responses favor E)
      expect(consistency).toBeGreaterThanOrEqual(75);
    });
    
    it('should calculate low consistency for inconsistent responses', () => {
      const responses = [
        { questionId: 1, answer: 5 }, // Strong E (positive)
        { questionId: 2, answer: 1 }, // Strong I (positive, inconsistent)
        { questionId: 3, answer: 5 }, // Strong I (negative, inconsistent)
        { questionId: 4, answer: 5 }  // Strong E (positive)
      ];
      
      const consistency = analyzeResponseConsistency(mockQuestions, responses);
      
      // Should have low consistency (mixed E and I responses)
      expect(consistency).toBeLessThanOrEqual(50);
    });
    
    it('should handle empty responses', () => {
      const consistency = analyzeResponseConsistency(mockQuestions, []);
      
      // Should return 0 for empty responses
      expect(consistency).toBe(0);
    });
  });
  
  describe('analyzeResponsePattern', () => {
    it('should calculate high pattern score for diverse responses', () => {
      const responses = [
        { questionId: 1, answer: 1 },
        { questionId: 2, answer: 2 },
        { questionId: 3, answer: 3 },
        { questionId: 4, answer: 4 },
        { questionId: 5, answer: 5 }
      ];
      
      const patternScore = analyzeResponsePattern(responses);
      
      // Should have high pattern score (all 5 values used, evenly distributed)
      expect(patternScore).toBeGreaterThanOrEqual(80);
    });
    
    it('should calculate low pattern score for uniform responses', () => {
      const responses = [
        { questionId: 1, answer: 3 },
        { questionId: 2, answer: 3 },
        { questionId: 3, answer: 3 },
        { questionId: 4, answer: 3 },
        { questionId: 5, answer: 3 }
      ];
      
      const patternScore = analyzeResponsePattern(responses);
      
      // Should have low pattern score (only 1 value used)
      expect(patternScore).toBeLessThanOrEqual(50);
    });
    
    it('should handle empty responses', () => {
      const patternScore = analyzeResponsePattern([]);
      
      // Should return 0 for empty responses
      expect(patternScore).toBe(0);
    });
  });
  
  describe('calculateConfidenceScore', () => {
    it('should calculate high confidence for good responses', () => {
      const responses = [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 4 },
        { questionId: 3, answer: 2 },
        { questionId: 4, answer: 5 },
        { questionId: 5, answer: 1 },
        { questionId: 6, answer: 2 },
        { questionId: 7, answer: 4 },
        { questionId: 8, answer: 3 }
      ];
      
      const completeness = {
        overallCompleteness: 100,
        isComplete: true,
        hasSufficientData: true
      };
      
      const dimensionCertainty = {
        'E-I': 80,
        'S-N': 70,
        'T-F': 60,
        'J-P': 70
      };
      
      const confidence = calculateConfidenceScore(
        mockQuestions, 
        responses, 
        completeness, 
        dimensionCertainty
      );
      
      // Should have high confidence score
      expect(confidence.score).toBeGreaterThanOrEqual(70);
      
      // Should have high confidence level
      expect(['high', 'very-high']).toContain(confidence.level);
      
      // Should have all factors
      expect(confidence.factors).toHaveProperty('consistency');
      expect(confidence.factors).toHaveProperty('pattern');
      expect(confidence.factors).toHaveProperty('completeness');
      expect(confidence.factors).toHaveProperty('certainty');
    });
    
    it('should calculate low confidence for poor responses', () => {
      const responses = [
        { questionId: 1, answer: 3 },
        { questionId: 2, answer: 3 }
      ];
      
      const completeness = {
        overallCompleteness: 25,
        isComplete: false,
        hasSufficientData: false
      };
      
      const dimensionCertainty = {
        'E-I': 20,
        'S-N': 0,
        'T-F': 0,
        'J-P': 0
      };
      
      const confidence = calculateConfidenceScore(
        mockQuestions, 
        responses, 
        completeness, 
        dimensionCertainty
      );
      
      // Should have low confidence score
      expect(confidence.score).toBeLessThanOrEqual(40);
      
      // Should have low confidence level
      expect(['low', 'very-low']).toContain(confidence.level);
    });
    
    it('should handle empty responses', () => {
      const completeness = {
        overallCompleteness: 0,
        isComplete: false,
        hasSufficientData: false
      };
      
      const dimensionCertainty = {
        'E-I': 0,
        'S-N': 0,
        'T-F': 0,
        'J-P': 0
      };
      
      const confidence = calculateConfidenceScore(
        mockQuestions, 
        [], 
        completeness, 
        dimensionCertainty
      );
      
      // Should have very low confidence score
      expect(confidence.score).toBeLessThanOrEqual(20);
      
      // Should have very low confidence level
      expect(confidence.level).toBe('very-low');
    });
  });
});
