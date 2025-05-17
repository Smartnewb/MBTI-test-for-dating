'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import TarotCard from '../components/TarotCard';
import ProgressBar from '../components/ProgressBar';
import useMbtiTest from '../hooks/useMbtiTest';

// 스타일링된 컨테이너
const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url(/images/stars-bg.png)',
    backgroundSize: 'cover',
    opacity: 0.2,
    pointerEvents: 'none',
    zIndex: -1,
  },
}));

// 스타일링된 선택지 버튼
const OptionButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: 12,
  textAlign: 'left',
  justifyContent: 'flex-start',
  transition: 'all 0.3s ease',
  border: `1px solid ${theme.palette.primary.main}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
}));

// 테스트 질문 데이터
const questions = [
  // E/I 축 (1-6)
  {
    id: 1,
    question: '새로운 사람을 만난 직후 나는?',
    options: [
      { value: 'A', text: '기분이 업되고 활력이 생긴다' },
      { value: 'B', text: '에너지가 소진되어 혼자 있고 싶어진다' }
    ],
    dimension: 'E/I'
  },
  {
    id: 2,
    question: '약속 없는 주말, 나는?',
    options: [
      { value: 'A', text: '사람들과의 만남을 만들고 싶다' },
      { value: 'B', text: '혼자만의 루틴을 지키며 쉰다' }
    ],
    dimension: 'E/I'
  },
  {
    id: 3,
    question: '연인과 갈등이 생겼을 때 나는?',
    options: [
      { value: 'A', text: '바로 대화를 시도해 풀고 싶다' },
      { value: 'B', text: '시간을 갖고 내 감정을 정리한 후 말한다' }
    ],
    dimension: 'E/I'
  },
  {
    id: 4,
    question: '연애 초반의 나의 행동은?',
    options: [
      { value: 'A', text: '대화와 연락을 자주 하며 관계를 발전시킨다' },
      { value: 'B', text: '상대를 관찰하며 조심스럽게 마음을 연다' }
    ],
    dimension: 'E/I'
  },
  {
    id: 5,
    question: '연애를 시작할 때 나는?',
    options: [
      { value: 'A', text: '주변 사람들과 공유하고 반응을 본다' },
      { value: 'B', text: '내면적으로 감정을 정리한 뒤 나아간다' }
    ],
    dimension: 'E/I'
  },
  {
    id: 6,
    question: '데이트 중 조용한 시간, 나는?',
    options: [
      { value: 'A', text: '침묵을 깨기 위해 새로운 이야기를 꺼낸다' },
      { value: 'B', text: '그 고요한 분위기를 자연스럽게 받아들인다' }
    ],
    dimension: 'E/I'
  },
  // 나머지 질문들은 실제 구현 시 추가
];

export default function TestPage() {
  const router = useRouter();
  const {
    currentQuestionIndex,
    answers,
    isTestCompleted,
    progress,
    saveAnswer,
    goToPreviousQuestion
  } = useMbtiTest();
  
  // 테스트 완료 시 결과 페이지로 이동
  useEffect(() => {
    if (isTestCompleted) {
      router.push('/result');
    }
  }, [isTestCompleted, router]);
  
  // 현재 질문 가져오기
  const currentQuestion = questions[currentQuestionIndex] || questions[0];
  
  return (
    <StyledContainer maxWidth="md">
      <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
        <ProgressBar 
          value={progress} 
          currentQuestion={currentQuestionIndex + 1} 
          totalQuestions={24}
        />
        
        <TarotCard 
          variant="primary" 
          title={`질문 ${currentQuestionIndex + 1}`}
          sx={{ mb: 4 }}
        >
          <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
            {currentQuestion.question}
          </Typography>
          
          <Box sx={{ mt: 2 }}>
            {currentQuestion.options.map((option, index) => (
              <OptionButton
                key={index}
                variant="outlined"
                onClick={() => saveAnswer(currentQuestionIndex, option.value)}
                sx={{
                  backgroundColor: answers[currentQuestionIndex] === option.value 
                    ? 'primary.dark' 
                    : 'background.paper'
                }}
              >
                <Typography variant="body1">{option.text}</Typography>
              </OptionButton>
            ))}
          </Box>
        </TarotCard>
        
        {currentQuestionIndex > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              onClick={goToPreviousQuestion}
              sx={{ color: 'text.secondary' }}
            >
              이전 질문으로
            </Button>
          </Box>
        )}
      </Box>
    </StyledContainer>
  );
}
