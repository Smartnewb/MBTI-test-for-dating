'use client';

import { useState, useCallback } from 'react';
import { calculateMbtiType, getIdealType, getWorstMatch } from '../utils/mbti';

/**
 * MBTI 테스트 관련 상태와 로직을 관리하는 커스텀 훅
 */
export default function useMbtiTest() {
  // 현재 질문 인덱스
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // 사용자 응답 저장
  const [answers, setAnswers] = useState([]);
  
  // 테스트 완료 여부
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  
  // MBTI 결과
  const [mbtiResult, setMbtiResult] = useState(null);
  
  // 이상형 MBTI
  const [idealType, setIdealType] = useState(null);
  
  // 궁합이 좋지 않은 MBTI
  const [worstMatch, setWorstMatch] = useState(null);
  
  // 다음 질문으로 이동
  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < 23) { // 총 24개 질문 (0-23)
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // 마지막 질문이면 테스트 완료 처리
      finishTest();
    }
  }, [currentQuestionIndex]);
  
  // 이전 질문으로 이동
  const goToPreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);
  
  // 응답 저장
  const saveAnswer = useCallback((questionIndex, answer) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
    
    // 자동으로 다음 질문으로 이동
    goToNextQuestion();
  }, [goToNextQuestion]);
  
  // 테스트 완료 및 결과 계산
  const finishTest = useCallback(() => {
    // 응답 결과를 기반으로 점수 계산
    const scores = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };
    
    // 질문 1-6: E/I
    for (let i = 0; i < 6; i++) {
      if (answers[i] === 'A') scores.E++;
      else if (answers[i] === 'B') scores.I++;
    }
    
    // 질문 7-12: S/N
    for (let i = 6; i < 12; i++) {
      if (answers[i] === 'A') scores.S++;
      else if (answers[i] === 'B') scores.N++;
    }
    
    // 질문 13-18: T/F
    for (let i = 12; i < 18; i++) {
      if (answers[i] === 'A') scores.T++;
      else if (answers[i] === 'B') scores.F++;
    }
    
    // 질문 19-24: J/P
    for (let i = 18; i < 24; i++) {
      if (answers[i] === 'A') scores.J++;
      else if (answers[i] === 'B') scores.P++;
    }
    
    // MBTI 유형 계산
    const mbtiType = calculateMbtiType(scores);
    setMbtiResult(mbtiType);
    
    // 이상형 MBTI 계산
    const ideal = getIdealType(mbtiType);
    setIdealType(ideal);
    
    // 궁합이 좋지 않은 MBTI 계산
    const worst = getWorstMatch(mbtiType);
    setWorstMatch(worst);
    
    // 테스트 완료 상태로 변경
    setIsTestCompleted(true);
  }, [answers]);
  
  // 테스트 재시작
  const restartTest = useCallback(() => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsTestCompleted(false);
    setMbtiResult(null);
    setIdealType(null);
    setWorstMatch(null);
  }, []);
  
  return {
    currentQuestionIndex,
    answers,
    isTestCompleted,
    mbtiResult,
    idealType,
    worstMatch,
    goToNextQuestion,
    goToPreviousQuestion,
    saveAnswer,
    finishTest,
    restartTest,
    progress: Math.round(((currentQuestionIndex + 1) / 24) * 100) // 진행률 (%)
  };
}
