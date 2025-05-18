'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AnimatedElement } from '../../components/animations';
import { PageLayout, Section } from '../../components/layout';
import QuestionCard from '../../components/test/QuestionCard';
import useMbtiTest from '../../hooks/useMbtiTest';

/**
 * MBTI 테스트 질문 페이지
 * 
 * 테스트 질문을 표시하고 사용자 응답을 처리합니다.
 */
export default function QuestionPage() {
  const router = useRouter();
  const {
    loading,
    error,
    questions,
    currentQuestionIndex,
    currentQuestion,
    currentResponse,
    isTestCompleted,
    saveAnswer,
    goToPreviousQuestion,
    handleCompleteTest
  } = useMbtiTest();
  
  // 테스트 완료 시 결과 페이지로 이동
  useEffect(() => {
    if (isTestCompleted) {
      router.push('/result');
    }
  }, [isTestCompleted, router]);
  
  // 로딩 중 표시
  if (loading) {
    return (
      <PageLayout variant="test">
        <Section centered fullHeight>
          <Typography variant="h4">질문을 불러오는 중...</Typography>
        </Section>
      </PageLayout>
    );
  }
  
  // 에러 표시
  if (error) {
    return (
      <PageLayout variant="test">
        <Section centered fullHeight>
          <Typography variant="h4" color="error">오류가 발생했습니다</Typography>
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>{error}</Typography>
        </Section>
      </PageLayout>
    );
  }
  
  // 질문이 없는 경우
  if (!questions || questions.length === 0) {
    return (
      <PageLayout variant="test">
        <Section centered fullHeight>
          <Typography variant="h4">질문을 불러올 수 없습니다</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            테스트를 다시 시작해주세요.
          </Typography>
        </Section>
      </PageLayout>
    );
  }
  
  // 현재 질문 인덱스가 범위를 벗어난 경우
  if (currentQuestionIndex < 0 || currentQuestionIndex >= questions.length) {
    return (
      <PageLayout variant="test">
        <Section centered fullHeight>
          <Typography variant="h4">잘못된 질문 인덱스입니다</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            테스트를 다시 시작해주세요.
          </Typography>
        </Section>
      </PageLayout>
    );
  }
  
  // 응답 처리 핸들러
  const handleAnswer = (answer) => {
    // 마지막 질문인 경우 테스트 완료 처리
    if (currentQuestionIndex === questions.length - 1) {
      saveAnswer(currentQuestion.id, answer);
      handleCompleteTest();
    } else {
      // 다음 질문으로 이동
      saveAnswer(currentQuestion.id, answer);
    }
  };
  
  return (
    <PageLayout variant="test">
      <Section>
        <AnimatedElement animation="fadeIn" duration="fast">
          <QuestionCard
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            question={currentQuestion}
            selectedOption={currentResponse}
            onAnswer={handleAnswer}
            onPrevious={goToPreviousQuestion}
            isFirst={currentQuestionIndex === 0}
            isLast={currentQuestionIndex === questions.length - 1}
          />
        </AnimatedElement>
      </Section>
    </PageLayout>
  );
}
