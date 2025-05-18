'use client';

import { useState } from 'react';
import { Box, Typography, Paper, Grid, Stack, Button, Divider } from '@mui/material';
import QuestionCard from '../test/QuestionCard';
import AnswerOption from '../test/AnswerOption';
import { QuestionFade, QuestionSlide, QuestionZoom, QuestionFlip } from '../test/QuestionTransition';
import MysticalText from '../mystical/MysticalText';

/**
 * 테스트 질문 예제 컴포넌트
 * 
 * 다양한 테스트 질문 관련 컴포넌트를 보여주는 예제 컴포넌트입니다.
 */
export default function TestQuestionExample() {
  // 상태 관리
  const [selectedOption, setSelectedOption] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('next');
  const [transitionEffect, setTransitionEffect] = useState('fade');
  
  // 예제 질문 데이터
  const questions = [
    {
      id: 1,
      question: '당신은 새로운 사람들을 만날 때 어떤 편인가요?',
      optionA: '적극적으로 먼저 다가가 대화를 시작한다',
      optionB: '상대방이 먼저 다가오길 기다리는 편이다',
      mbtiType: 'E/I',
    },
    {
      id: 2,
      question: '당신은 정보를 처리할 때 어떤 방식을 선호하나요?',
      optionA: '구체적인 사실과 세부 사항에 집중한다',
      optionB: '전체적인 패턴과 가능성에 집중한다',
      mbtiType: 'S/N',
    },
    {
      id: 3,
      question: '당신은 결정을 내릴 때 주로 무엇을 기준으로 하나요?',
      optionA: '논리적인 분석과 객관적인 사실',
      optionB: '개인적인 가치와 사람들에게 미치는 영향',
      mbtiType: 'T/F',
    },
  ];
  
  // 다음 질문 핸들러
  const handleNextQuestion = (option) => {
    setSelectedOption(option);
    setTransitionDirection('next');
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption('');
      }, 300);
    }
  };
  
  // 이전 질문 핸들러
  const handlePrevQuestion = () => {
    setTransitionDirection('prev');
    
    if (currentQuestion > 0) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev - 1);
        setSelectedOption('');
      }, 300);
    }
  };
  
  // 전환 효과 변경 핸들러
  const handleChangeEffect = (effect) => {
    setTransitionEffect(effect);
  };
  
  // 현재 질문 가져오기
  const currentQuestionData = questions[currentQuestion];
  
  return (
    <Box sx={{ p: 4 }}>
      <MysticalText variant="h4" textVariant="mystical" sx={{ mb: 4 }}>
        테스트 질문 컴포넌트
      </MysticalText>
      
      {/* 답변 옵션 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          답변 옵션 (AnswerOption)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          답변 옵션 컴포넌트는 MBTI 테스트 질문의 답변 옵션을 표시하는 컴포넌트입니다.
          선택 상태에 따른 시각적 피드백과 애니메이션 효과를 제공합니다.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              기본 상태
            </Typography>
            
            <AnswerOption
              value="A"
              label="적극적으로 먼저 다가가 대화를 시작한다"
              selected={false}
              onChange={() => {}}
            />
            
            <AnswerOption
              value="B"
              label="상대방이 먼저 다가오길 기다리는 편이다"
              selected={false}
              onChange={() => {}}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              선택된 상태
            </Typography>
            
            <AnswerOption
              value="A"
              label="적극적으로 먼저 다가가 대화를 시작한다"
              selected={true}
              onChange={() => {}}
            />
            
            <AnswerOption
              value="B"
              label="상대방이 먼저 다가오길 기다리는 편이다"
              selected={false}
              onChange={() => {}}
            />
          </Grid>
        </Grid>
      </Paper>
      
      {/* 질문 전환 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          질문 전환 (QuestionTransition)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          질문 전환 컴포넌트는 질문 간 전환 애니메이션을 제공하는 컴포넌트입니다.
          다양한 전환 효과를 지원합니다.
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            전환 효과 선택
          </Typography>
          
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button
              variant={transitionEffect === 'fade' ? 'contained' : 'outlined'}
              onClick={() => handleChangeEffect('fade')}
            >
              페이드
            </Button>
            
            <Button
              variant={transitionEffect === 'slide' ? 'contained' : 'outlined'}
              onClick={() => handleChangeEffect('slide')}
            >
              슬라이드
            </Button>
            
            <Button
              variant={transitionEffect === 'zoom' ? 'contained' : 'outlined'}
              onClick={() => handleChangeEffect('zoom')}
            >
              줌
            </Button>
            
            <Button
              variant={transitionEffect === 'flip' ? 'contained' : 'outlined'}
              onClick={() => handleChangeEffect('flip')}
            >
              플립
            </Button>
          </Stack>
        </Box>
        
        {/* 선택된 전환 효과에 따라 다른 컴포넌트 렌더링 */}
        {transitionEffect === 'fade' && (
          <QuestionFade direction={transitionDirection}>
            <QuestionCard
              key={currentQuestionData.id}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              question={currentQuestionData}
              selectedOption={selectedOption}
              onAnswer={handleNextQuestion}
              onPrevious={handlePrevQuestion}
              isFirst={currentQuestion === 0}
              isLast={currentQuestion === questions.length - 1}
              transitionDirection={transitionDirection}
            />
          </QuestionFade>
        )}
        
        {transitionEffect === 'slide' && (
          <QuestionSlide direction={transitionDirection}>
            <QuestionCard
              key={currentQuestionData.id}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              question={currentQuestionData}
              selectedOption={selectedOption}
              onAnswer={handleNextQuestion}
              onPrevious={handlePrevQuestion}
              isFirst={currentQuestion === 0}
              isLast={currentQuestion === questions.length - 1}
              transitionDirection={transitionDirection}
            />
          </QuestionSlide>
        )}
        
        {transitionEffect === 'zoom' && (
          <QuestionZoom direction={transitionDirection}>
            <QuestionCard
              key={currentQuestionData.id}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              question={currentQuestionData}
              selectedOption={selectedOption}
              onAnswer={handleNextQuestion}
              onPrevious={handlePrevQuestion}
              isFirst={currentQuestion === 0}
              isLast={currentQuestion === questions.length - 1}
              transitionDirection={transitionDirection}
            />
          </QuestionZoom>
        )}
        
        {transitionEffect === 'flip' && (
          <QuestionFlip direction={transitionDirection}>
            <QuestionCard
              key={currentQuestionData.id}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              question={currentQuestionData}
              selectedOption={selectedOption}
              onAnswer={handleNextQuestion}
              onPrevious={handlePrevQuestion}
              isFirst={currentQuestion === 0}
              isLast={currentQuestion === questions.length - 1}
              transitionDirection={transitionDirection}
            />
          </QuestionFlip>
        )}
      </Paper>
    </Box>
  );
}
