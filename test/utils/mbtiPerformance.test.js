import {
  generateCacheKey,
  memoizeResult,
  optimizeResponses,
  optimizeQuestions,
  clearCache
} from '../../src/app/utils/mbtiPerformance';

describe('MBTI Performance Utilities', () => {
  beforeEach(() => {
    // 각 테스트 전에 캐시 초기화
    clearCache();
  });
  
  describe('generateCacheKey', () => {
    it('should generate consistent cache keys regardless of response order', () => {
      const responses1 = [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 3 },
        { questionId: 3, answer: 1 }
      ];
      
      const responses2 = [
        { questionId: 3, answer: 1 },
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 3 }
      ];
      
      const key1 = generateCacheKey(responses1);
      const key2 = generateCacheKey(responses2);
      
      expect(key1).toBe(key2);
    });
    
    it('should generate different keys for different responses', () => {
      const responses1 = [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 3 }
      ];
      
      const responses2 = [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 4 } // Different answer
      ];
      
      const key1 = generateCacheKey(responses1);
      const key2 = generateCacheKey(responses2);
      
      expect(key1).not.toBe(key2);
    });
    
    it('should handle empty responses', () => {
      const key = generateCacheKey([]);
      expect(key).toBe('empty');
    });
  });
  
  describe('memoizeResult', () => {
    it('should cache function results', () => {
      // 모의 계산 함수 (호출 횟수 추적)
      const mockCalculation = jest.fn((questions, responses) => {
        return { result: 'test', responses };
      });
      
      // 메모이제이션 적용
      const memoizedFn = memoizeResult(mockCalculation);
      
      const questions = [{ id: 1 }, { id: 2 }];
      const responses = [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 3 }
      ];
      
      // 첫 번째 호출 (캐시 미스)
      const result1 = memoizedFn(questions, responses);
      
      // 두 번째 호출 (캐시 히트)
      const result2 = memoizedFn(questions, responses);
      
      // 세 번째 호출 (다른 응답, 캐시 미스)
      const result3 = memoizedFn(questions, [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 4 } // 다른 응답
      ]);
      
      // 원본 함수는 2번만 호출되어야 함 (캐시 미스 시에만)
      expect(mockCalculation).toHaveBeenCalledTimes(2);
      
      // 결과는 동일해야 함
      expect(result1).toEqual(result2);
      
      // 다른 응답에 대한 결과는 달라야 함
      expect(result1).not.toEqual(result3);
    });
  });
  
  describe('optimizeResponses', () => {
    it('should convert responses array to a Map', () => {
      const responses = [
        { questionId: 1, answer: 5 },
        { questionId: 2, answer: 3 },
        { questionId: 3, answer: 1 }
      ];
      
      const optimized = optimizeResponses(responses);
      
      // Map 타입이어야 함
      expect(optimized instanceof Map).toBe(true);
      
      // 모든 응답이 포함되어야 함
      expect(optimized.size).toBe(3);
      expect(optimized.get(1)).toBe(5);
      expect(optimized.get(2)).toBe(3);
      expect(optimized.get(3)).toBe(1);
    });
    
    it('should handle empty responses', () => {
      const optimized = optimizeResponses([]);
      
      expect(optimized instanceof Map).toBe(true);
      expect(optimized.size).toBe(0);
    });
  });
  
  describe('optimizeQuestions', () => {
    it('should organize questions by ID and dimension', () => {
      const questions = [
        { id: 1, dimension: 'E-I' },
        { id: 2, dimension: 'E-I' },
        { id: 3, dimension: 'S-N' },
        { id: 4, dimension: 'T-F' },
        { id: 5, dimension: 'J-P' }
      ];
      
      const optimized = optimizeQuestions(questions);
      
      // byId와 byDimension 속성이 있어야 함
      expect(optimized).toHaveProperty('byId');
      expect(optimized).toHaveProperty('byDimension');
      
      // byId는 Map이어야 함
      expect(optimized.byId instanceof Map).toBe(true);
      expect(optimized.byId.size).toBe(5);
      
      // byDimension은 차원별로 그룹화되어야 함
      expect(optimized.byDimension['E-I'].length).toBe(2);
      expect(optimized.byDimension['S-N'].length).toBe(1);
      expect(optimized.byDimension['T-F'].length).toBe(1);
      expect(optimized.byDimension['J-P'].length).toBe(1);
    });
    
    it('should handle empty questions', () => {
      const optimized = optimizeQuestions([]);
      
      expect(optimized.byId instanceof Map).toBe(true);
      expect(optimized.byId.size).toBe(0);
      expect(optimized.byDimension).toEqual({});
    });
  });
});
