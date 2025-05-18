'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useTestStore from '../store/testStore';
import { getQuestions, saveUserResponse } from '../services/questionService';
import { getIdealType, getWorstMatch } from '../utils/mbti';
import { useSupabase } from '../contexts/SupabaseContext';

/**
 * MBTI 테스트 관련 커스텀 훅
 *
 * 테스트 상태 관리, 질문 데이터 가져오기, 응답 처리 등의 기능을 제공합니다.
 *
 * @param {Object} options - 옵션
 * @param {boolean} options.useSampleData - 샘플 데이터 사용 여부
 * @param {boolean} options.autoSave - 응답 자동 저장 여부
 * @returns {Object} MBTI 테스트 관련 상태 및 함수
 */
export default function useMbtiTest({ useSampleData = false, autoSave = true } = {}) {
  // 로딩 상태
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 이상형 및 최악의 궁합
  const [idealType, setIdealType] = useState(null);
  const [worstMatch, setWorstMatch] = useState(null);

  // 라우터
  const router = useRouter();

  // Zustand 스토어에서 상태 및 액션 가져오기
  const {
    questions,
    currentQuestionIndex,
    responses,
    result,
    isTestStarted,
    isTestCompleted,
    sessionId,

    setQuestions,
    setCurrentQuestionIndex,
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,
    addResponse,
    removeResponse,
    clearResponses,
    calculateResult,
    startTest,
    completeTest,
    restartTest,
    getProgress,
    getCurrentQuestionResponse,
    setSessionId,
    resetStore
  } = useTestStore();

  /**
   * 질문 데이터 가져오기
   */
  const fetchQuestions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getQuestions(useSampleData);
      setQuestions(data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch questions:', err);
      setError('질문 데이터를 가져오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, [useSampleData, setQuestions]);

  /**
   * 현재 질문 가져오기
   */
  const getCurrentQuestion = useCallback(() => {
    if (questions.length === 0) return null;
    return questions[currentQuestionIndex];
  }, [questions, currentQuestionIndex]);

  /**
   * 응답 추가 및 저장
   */
  const saveAnswer = useCallback(async (questionIndex, answer) => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;

    // 응답 추가
    addResponse(currentQuestion.id, answer);

    // 자동 저장 활성화 및 세션 ID가 있는 경우 응답 저장
    if (autoSave && (sessionId || user)) {
      try {
        await saveUserResponse(sessionId, currentQuestion.id, answer, user?.id);
      } catch (err) {
        console.error('Failed to save response:', err);
        // 저장 실패 시에도 UI 흐름은 계속 진행
      }
    }

    // 마지막 질문인 경우 결과 페이지로 이동
    if (currentQuestionIndex === questions.length - 1) {
      finishTest();
    } else {
      // 다음 질문으로 이동
      goToNextQuestion();
    }
  }, [
    getCurrentQuestion,
    addResponse,
    autoSave,
    sessionId,
    user,
    currentQuestionIndex,
    questions.length,
    goToNextQuestion
  ]);

  /**
   * 테스트 완료 및 결과 계산
   */
  const finishTest = useCallback(() => {
    const testResult = completeTest();

    if (testResult && testResult.mbtiType) {
      // 이상형 MBTI 계산
      const ideal = getIdealType(testResult.mbtiType);
      setIdealType(ideal);

      // 궁합이 좋지 않은 MBTI 계산
      const worst = getWorstMatch(testResult.mbtiType);
      setWorstMatch(worst);

      // 결과 페이지로 이동
      router.push('/result');
    }

    return testResult;
  }, [completeTest, router]);

  /**
   * 테스트 시작
   */
  const handleStartTest = useCallback(() => {
    startTest();
    router.push('/test/question');
  }, [startTest, router]);

  /**
   * 테스트 재시작
   */
  const handleRestartTest = useCallback(() => {
    restartTest();
    setIdealType(null);
    setWorstMatch(null);
    router.push('/test');
  }, [restartTest, router]);

  // 컴포넌트 마운트 시 질문 데이터 가져오기
  useEffect(() => {
    if (questions.length === 0) {
      fetchQuestions();
    } else {
      setLoading(false);
    }
  }, [questions.length, fetchQuestions]);

  // Supabase 컨텍스트 사용
  const { user, sessionId: supabaseSessionId } = useSupabase();

  // 세션 ID 설정
  useEffect(() => {
    if (supabaseSessionId && !sessionId) {
      setSessionId(supabaseSessionId);
    }
  }, [supabaseSessionId, sessionId, setSessionId]);

  // 결과가 있을 때 이상형 및 최악의 궁합 계산
  useEffect(() => {
    if (result && result.mbtiType && !idealType) {
      setIdealType(getIdealType(result.mbtiType));
      setWorstMatch(getWorstMatch(result.mbtiType));
    }
  }, [result, idealType]);

  return {
    // 상태
    loading,
    error,
    questions,
    currentQuestionIndex,
    currentQuestion: getCurrentQuestion(),
    responses,
    result,
    isTestStarted,
    isTestCompleted,
    progress: getProgress(),
    currentResponse: getCurrentQuestionResponse(),
    idealType,
    worstMatch,
    mbtiResult: result?.mbtiType,

    // 액션
    fetchQuestions,
    saveAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    handleStartTest,
    handleRestartTest,
    finishTest,
    goToQuestion,
    clearResponses,
    resetStore
  };
}
