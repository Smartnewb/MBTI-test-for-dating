import {
  saveTestResult,
  getTestResultByShareId,
  getTestResultsByUserId,
  getTestResultsBySessionId,
  getDetailedTestResult
} from '../../src/app/services/resultService';

// Mock supabase
jest.mock('../../src/app/utils/supabase', () => ({
  from: jest.fn().mockReturnThis(),
  select: jest.fn().mockReturnThis(),
  insert: jest.fn().mockReturnThis(),
  eq: jest.fn().mockReturnThis(),
  order: jest.fn().mockReturnThis(),
  rpc: jest.fn().mockReturnThis(),
  then: jest.fn().mockImplementation(callback => callback({ data: [], error: null }))
}));

// Mock uuid
jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue('mock-uuid')
}));

// Mock mbti utils
jest.mock('../../src/app/utils/mbti', () => ({
  getIdealType: jest.fn().mockReturnValue('ENFJ'),
  getWorstMatch: jest.fn().mockReturnValue('ISTP')
}));

// Mock mbtiAnalyzer
jest.mock('../../src/app/utils/mbtiAnalyzer', () => ({
  calculateMbtiType: jest.fn().mockReturnValue('INFP')
}));

describe('Result Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('saveTestResult', () => {
    it('should save test result with user ID', async () => {
      const mockScores = {
        E: 10, I: 15,
        S: 8, N: 12,
        T: 9, F: 11,
        J: 7, P: 13
      };
      const mockMbtiType = 'INFP';
      const mockUserId = 'user-123';

      // Mock Supabase response
      const mockData = [{ id: 1, mbti_type: mockMbtiType }];
      const mockSupabase = require('../../src/app/utils/supabase');
      mockSupabase.insert.mockReturnValue({
        then: jest.fn().mockImplementation(callback => callback({ data: mockData, error: null }))
      });

      const result = await saveTestResult(mockScores, mockMbtiType, mockUserId);

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockData[0]);
      expect(mockSupabase.from).toHaveBeenCalledWith('test_results');
      expect(mockSupabase.insert).toHaveBeenCalledWith([
        expect.objectContaining({
          mbti_type: mockMbtiType,
          user_id: mockUserId
        })
      ]);
    });

    it('should save test result with session ID', async () => {
      const mockScores = {
        E: 10, I: 15,
        S: 8, N: 12,
        T: 9, F: 11,
        J: 7, P: 13
      };
      const mockMbtiType = 'INFP';
      const mockSessionId = 'session-123';

      // Mock Supabase response
      const mockData = [{ id: 1, mbti_type: mockMbtiType }];
      const mockSupabase = require('../../src/app/utils/supabase');
      mockSupabase.insert.mockReturnValue({
        then: jest.fn().mockImplementation(callback => callback({ data: mockData, error: null }))
      });

      const result = await saveTestResult(mockScores, mockMbtiType, null, mockSessionId);

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockData[0]);
      expect(mockSupabase.from).toHaveBeenCalledWith('test_results');
      expect(mockSupabase.insert).toHaveBeenCalledWith([
        expect.objectContaining({
          mbti_type: mockMbtiType,
          session_id: mockSessionId
        })
      ]);
    });

    it('should handle errors when saving test result', async () => {
      const mockScores = {
        E: 10, I: 15,
        S: 8, N: 12,
        T: 9, F: 11,
        J: 7, P: 13
      };
      const mockMbtiType = 'INFP';

      // Mock Supabase error response
      const mockError = new Error('Database error');
      const mockSupabase = require('../../src/app/utils/supabase');
      mockSupabase.insert.mockReturnValue({
        then: jest.fn().mockImplementation(callback => callback({ data: null, error: mockError }))
      });

      const result = await saveTestResult(mockScores, mockMbtiType);

      expect(result.success).toBe(false);
      expect(result.error).toEqual(mockError);
    });
  });

  describe('getTestResultByShareId', () => {
    it('should fetch test result by share ID', async () => {
      const mockShareId = 'share-123';
      const mockResult = {
        mbtiType: 'INFP',
        scores: {
          E: 10, I: 15,
          S: 8, N: 12,
          T: 9, F: 11,
          J: 7, P: 13
        }
      };

      // Mock Supabase response
      const mockSupabase = require('../../src/app/utils/supabase');
      mockSupabase.rpc.mockReturnValue({
        then: jest.fn().mockImplementation(callback => callback({ data: mockResult, error: null }))
      });

      const result = await getTestResultByShareId(mockShareId);

      expect(result).toEqual({
        ...mockResult,
        idealType: 'ENFJ',
        worstMatch: 'ISTP'
      });
      expect(mockSupabase.rpc).toHaveBeenCalledWith('get_mbti_result_by_share_id', { share_uuid: mockShareId });
    });

    it('should handle errors when fetching test result by share ID', async () => {
      const mockShareId = 'share-123';

      // Mock Supabase error response
      const mockError = new Error('Database error');
      const mockSupabase = require('../../src/app/utils/supabase');
      mockSupabase.rpc.mockReturnValue({
        then: jest.fn().mockImplementation(callback => callback({ data: null, error: mockError }))
      });

      const result = await getTestResultByShareId(mockShareId);

      expect(result).toBeNull();
    });
  });

  // Add more tests for other functions as needed
});
