'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { generateTestResult } from '../utils/mbtiAnalyzer';

/**
 * MBTI 테스트 상태 관리 스토어
 *
 * Zustand를 사용하여 MBTI 테스트 상태를 관리합니다.
 * - 질문 데이터
 * - 현재 질문 인덱스
 * - 사용자 응답
 * - 테스트 결과
 * - 테스트 진행 상태
 */
const useTestStore = create(
  persist(
    (set, get) => ({
      // 질문 데이터
      questions: [],

      // 현재 질문 인덱스
      currentQuestionIndex: 0,

      // 사용자 응답 (questionId: answer)
      responses: {},

      // 테스트 결과
      result: null,

      // 테스트 진행 상태
      isTestStarted: false,
      isTestCompleted: false,

      // 세션 ID
      sessionId: null,

      /**
       * 질문 데이터 설정
       * @param {Array} questions - 질문 데이터 배열
       */
      setQuestions: (questions) => set({ questions }),

      /**
       * 현재 질문 인덱스 설정
       * @param {number} index - 질문 인덱스
       */
      setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

      /**
       * 다음 질문으로 이동
       */
      goToNextQuestion: () => {
        const { currentQuestionIndex, questions } = get();
        if (currentQuestionIndex < questions.length - 1) {
          set({ currentQuestionIndex: currentQuestionIndex + 1 });
        }
      },

      /**
       * 이전 질문으로 이동
       */
      goToPreviousQuestion: () => {
        const { currentQuestionIndex } = get();
        if (currentQuestionIndex > 0) {
          set({ currentQuestionIndex: currentQuestionIndex - 1 });
        }
      },

      /**
       * 특정 질문으로 이동
       * @param {number} index - 질문 인덱스
       */
      goToQuestion: (index) => {
        const { questions } = get();
        if (index >= 0 && index < questions.length) {
          set({ currentQuestionIndex: index });
        }
      },

      /**
       * 사용자 응답 추가
       * @param {number} questionId - 질문 ID
       * @param {string} answer - 사용자 응답 ('A' 또는 'B')
       */
      addResponse: (questionId, answer) => {
        const { responses } = get();
        set({
          responses: {
            ...responses,
            [questionId]: answer
          }
        });
      },

      /**
       * 사용자 응답 삭제
       * @param {number} questionId - 질문 ID
       */
      removeResponse: (questionId) => {
        const { responses } = get();
        const newResponses = { ...responses };
        delete newResponses[questionId];
        set({ responses: newResponses });
      },

      /**
       * 모든 응답 삭제
       */
      clearResponses: () => set({ responses: {} }),

      /**
       * 테스트 결과 계산
       */
      calculateResult: () => {
        const { questions, responses } = get();

        // 응답 데이터 형식 변환
        const formattedResponses = Object.entries(responses).map(([questionId, answer]) => ({
          questionId: parseInt(questionId),
          answer
        }));

        // 테스트 결과 생성
        const result = generateTestResult(questions, formattedResponses);

        set({
          result,
          isTestCompleted: true
        });

        return result;
      },

      /**
       * 테스트 시작
       */
      startTest: () => set({ isTestStarted: true, currentQuestionIndex: 0 }),

      /**
       * 테스트 완료
       */
      completeTest: () => {
        const result = get().calculateResult();
        set({ isTestCompleted: true, result });
        return result;
      },

      /**
       * 테스트 재시작
       */
      restartTest: () => set({
        currentQuestionIndex: 0,
        responses: {},
        result: null,
        isTestCompleted: false
      }),

      /**
       * 테스트 진행률 계산
       * @returns {number} 진행률 (0-100)
       */
      getProgress: () => {
        const { questions, responses } = get();
        if (questions.length === 0) return 0;

        const answeredCount = Object.keys(responses).length;
        return Math.round((answeredCount / questions.length) * 100);
      },

      /**
       * 현재 질문에 대한 응답 가져오기
       * @returns {string|null} 현재 질문에 대한 응답 ('A', 'B' 또는 null)
       */
      getCurrentQuestionResponse: () => {
        const { questions, currentQuestionIndex, responses } = get();
        if (questions.length === 0) return null;

        const currentQuestion = questions[currentQuestionIndex];
        return responses[currentQuestion.id] || null;
      },

      /**
       * 세션 ID 설정
       * @param {string} id - 세션 ID
       */
      setSessionId: (id) => set({ sessionId: id }),

      /**
       * 스토어 초기화
       */
      resetStore: () => set({
        questions: [],
        currentQuestionIndex: 0,
        responses: {},
        result: null,
        isTestStarted: false,
        isTestCompleted: false,
        sessionId: null
      })
    }),
    {
      name: 'mbti-test-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default useTestStore;
