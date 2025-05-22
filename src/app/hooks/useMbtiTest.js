'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import useTestStore from '../store/testStore';
import { getQuestions, saveUserResponse } from '../services/questionService';
import { getIdealType, getWorstMatch } from '../utils/mbti';
// mbtiAnalyzer의 saveTestResult 대신 resultService의 saveTestResult 사용
import { saveTestResult } from '../services/resultService';
import { useSupabase } from '../contexts/SupabaseContext';
import { logError } from '../utils/errorLogger';

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

  // Supabase 컨텍스트 사용
  const { user, sessionId: supabaseSessionId } = useSupabase();

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
    resetStore,
  } = useTestStore();

  /**
   * 질문 데이터 가져오기
   */
  const fetchQuestions = useCallback(async () => {
    try {
      setLoading(true);
      // 질문 수를 24개로 제한
      const data = await getQuestions(useSampleData, 24);
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
  const saveAnswer = useCallback(
    async (questionIndex, answer) => {
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
    },
    [
      getCurrentQuestion,
      addResponse,
      autoSave,
      sessionId,
      user,
      currentQuestionIndex,
      questions.length,
      goToNextQuestion,
    ]
  );

  /**
   * 테스트 완료 및 결과 계산
   *
   * 개선된 버전:
   * 1. 결과를 먼저 저장하고 저장된 결과의 ID를 사용하여 결과 페이지로 이동
   * 2. 저장 실패 시에도 적절한 오류 처리 및 대체 경로 제공
   * 3. 항상 /result/[ID] 형식의 URL 사용
   */
  const finishTest = useCallback(async () => {
    try {
      // 테스트 결과 계산
      const testResult = completeTest();
      console.log('Test completed with result:', testResult);

      if (!testResult || !testResult.mbtiType) {
        console.error('Invalid test result:', testResult);
        router.push('/test');
        return null;
      }

      // 이상형 MBTI 계산
      const ideal = getIdealType(testResult.mbtiType);
      setIdealType(ideal);

      // 궁합이 좋지 않은 MBTI 계산
      const worst = getWorstMatch(testResult.mbtiType);
      setWorstMatch(worst);

      // Supabase에 결과 저장 - 이 단계를 먼저 수행하여 ID를 확보
      console.log('Saving test result to Supabase:', {
        scores: testResult.scores,
        mbtiType: testResult.mbtiType,
        userId: user?.id,
        sessionId,
      });

      // resultService의 saveTestResult 함수 호출
      let saveResponse;
      let retryCount = 0;
      const MAX_RETRIES = 2;

      // 저장 실패 시 최대 2회까지 재시도
      while (retryCount <= MAX_RETRIES) {
        try {
          saveResponse = await saveTestResult(
            testResult.scores,
            testResult.mbtiType,
            user?.id,
            sessionId
          );

          if (saveResponse && saveResponse.success) {
            break; // 성공하면 루프 종료
          }

          retryCount++;
          console.log(`Save attempt ${retryCount} failed, retrying...`);

          if (retryCount > MAX_RETRIES) {
            throw new Error('Maximum retry attempts reached');
          }

          // 재시도 전 짧은 대기 시간
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (saveError) {
          console.error(`Error in save attempt ${retryCount}:`, saveError);
          retryCount++;

          if (retryCount > MAX_RETRIES) {
            throw saveError;
          }
        }
      }

      console.log('Save response from Supabase:', saveResponse);

      // 저장 성공 시 shareId를 URL에 포함하여 결과 페이지로 이동
      if (saveResponse && saveResponse.success && saveResponse.shareId) {
        const shareId = saveResponse.shareId;
        console.log('Generated shareId:', shareId);

        // 결과 객체에 shareId, idealType, worstMatch 추가
        const resultWithShareId = {
          ...testResult,
          shareId: shareId,
          idealType: saveResponse.idealType || ideal,
          worstMatch: saveResponse.worstMatch || worst,
        };

        // 세션 스토리지에 결과 저장 (클라이언트 사이드에서만)
        if (typeof window !== 'undefined') {
          try {
            // 결과 저장
            sessionStorage.setItem(`mbti_result_${shareId}`, JSON.stringify(resultWithShareId));
            console.log('Result saved to session storage with key:', `mbti_result_${shareId}`);

            // 최근 결과 ID 저장 (다른 페이지에서 참조할 수 있도록)
            sessionStorage.setItem('mbti_latest_result_id', shareId);

            // 백업 저장 (ID가 변경되어도 찾을 수 있도록)
            const timestamp = new Date().getTime();
            sessionStorage.setItem(
              `mbti_result_backup_${timestamp}`,
              JSON.stringify({
                ...resultWithShareId,
                timestamp,
              })
            );
          } catch (storageError) {
            console.warn('Failed to save result to session storage:', storageError);
          }
        }

        // 결과 페이지로 이동 (shareId를 포함한 URL 사용)
        const resultUrl = `/result/${shareId}`;
        console.log('Redirecting to:', resultUrl);

        // 강제로 페이지 이동 (router.push 대신 window.location 사용)
        if (typeof window !== 'undefined') {
          window.location.href = resultUrl;
        } else {
          router.push(resultUrl);
        }

        return resultWithShareId;
      } else {
        console.error('Failed to get shareId from save response:', saveResponse);

        // 저장 실패 시 임시 ID 생성하여 사용 (fallback)
        const fallbackShareId = uuidv4();
        console.warn('Using fallback shareId:', fallbackShareId);

        // 결과 객체에 임시 shareId, idealType, worstMatch 추가
        const resultWithFallbackId = {
          ...testResult,
          shareId: fallbackShareId,
          idealType: ideal,
          worstMatch: worst,
          isFallback: true, // 이 결과가 임시 ID를 사용하는 것을 표시
        };

        // 임시 ID를 사용하여 결과 페이지로 이동
        const fallbackUrl = `/result/${fallbackShareId}`;
        console.log('Redirecting to fallback URL:', fallbackUrl);

        if (typeof window !== 'undefined') {
          // 세션 스토리지에 임시 결과 저장 (페이지 새로고침 시에도 유지)
          sessionStorage.setItem(
            `mbti_result_${fallbackShareId}`,
            JSON.stringify(resultWithFallbackId)
          );
          window.location.href = fallbackUrl;
        } else {
          router.push(fallbackUrl);
        }

        return resultWithFallbackId;
      }
    } catch (error) {
      // 오류 로깅 및 추적
      const errorInfo = logError(error, 'finishTest', {
        mbtiType: result?.mbtiType,
        userId: user?.id,
        sessionId,
        errorType: 'TEST_COMPLETION_ERROR',
      });

      // 오류 발생 시 임시 ID 생성하여 사용 (fallback)
      try {
        const errorFallbackId = uuidv4();
        console.warn('Using error fallback shareId:', errorFallbackId);

        // 가능한 경우 기존 결과 데이터 활용
        let fallbackMbtiType = 'XXXX'; // 기본 오류 표시용 타입
        let fallbackScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

        // 기존 결과가 있으면 활용
        if (result && result.mbtiType && result.mbtiType.length === 4) {
          fallbackMbtiType = result.mbtiType;
          if (result.scores) {
            fallbackScores = result.scores;
          }
        }

        // 이상형 및 최악의 궁합 계산
        const fallbackIdealType = getIdealType(fallbackMbtiType);
        const fallbackWorstMatch = getWorstMatch(fallbackMbtiType);

        // 임시 결과 객체 생성
        const fallbackResult = {
          mbtiType: fallbackMbtiType,
          scores: fallbackScores,
          shareId: errorFallbackId,
          idealType: fallbackIdealType,
          worstMatch: fallbackWorstMatch,
          isFallback: true,
          error: error.message,
          errorId: errorInfo.timestamp,
          errorRecovery: fallbackMbtiType !== 'XXXX', // 복구 성공 여부
        };

        if (typeof window !== 'undefined') {
          // 오류 정보와 함께 세션 스토리지에 저장
          sessionStorage.setItem(`mbti_result_${errorFallbackId}`, JSON.stringify(fallbackResult));
          window.location.href = `/result/${errorFallbackId}`;
        } else {
          router.push(`/result/${errorFallbackId}`);
        }
      } catch (fallbackError) {
        // 이중 오류 발생 시 로깅
        logError(fallbackError, 'finishTest_fallback', {
          originalError: error.message,
          errorType: 'FALLBACK_ERROR',
        });

        console.error('Even fallback failed:', fallbackError);
        router.push('/result');
      }

      return null;
    }
  }, [completeTest, router, user, sessionId]);

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
    resetStore,
  };
}
