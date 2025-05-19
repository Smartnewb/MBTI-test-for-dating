'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';
import { MysticalNavigation } from '../mystical';
import TarotCard from '../TarotCard';
import MysticalButton from '../MysticalButton';
import MysticalProgress from '../MysticalProgress';
import AnswerOption from './AnswerOption';

// 스타일링된 질문 컨테이너
const QuestionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

// 스타일링된 질문 번호
const QuestionNumber = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: 500, // medium weight (500)
  fontSize: '1rem',
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(1), // 마진 감소
  marginTop: theme.spacing(1), // 상단 마진 추가
  position: 'relative',
  display: 'inline-block',

  // 장식 효과
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: '30%',
    height: 2,
    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, transparent)`,
  },
}));

// 스타일링된 질문 텍스트
const QuestionText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: 600, // semibold weight (600)
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.primary,
  lineHeight: 1.4,

  // 반응형 폰트 크기
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

// 스타일링된 선택지 컨테이너
const OptionsContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

// 스타일링된 질문 카드 내용
const QuestionContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  position: 'relative',
  zIndex: 1,
}));

// 스타일링된 배경 장식
const BackgroundDecoration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  opacity: 0.03,
  pointerEvents: 'none',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    height: '80%',
    background: 'url(/images/tarot-pattern.png)',
    backgroundSize: 'cover',
    opacity: 0.5,
  },
}));

// 스타일링된 버튼 컨테이너
const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
}));

/**
 * 질문 카드 컴포넌트
 *
 * MBTI 테스트 질문을 표시하는 카드 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.questionNumber - 질문 번호
 * @param {number} props.totalQuestions - 전체 질문 수
 * @param {Object} props.question - 질문 객체
 * @param {string} props.selectedOption - 선택된 옵션 ('A' 또는 'B')
 * @param {Function} props.onAnswer - 답변 선택 시 호출되는 함수
 * @param {Function} props.onPrevious - 이전 질문 버튼 클릭 시 호출되는 함수
 * @param {boolean} props.isFirst - 첫 번째 질문 여부
 * @param {boolean} props.isLast - 마지막 질문 여부
 * @param {string} [props.transitionDirection='next'] - 전환 방향 ('next' 또는 'prev')
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function QuestionCard({
  questionNumber,
  totalQuestions,
  question,
  selectedOption,
  onAnswer,
  onPrevious,
  isFirst = false,
  isLast = false,
  transitionDirection = 'next',
  sx = {},
}) {
  // 내부 상태
  const [localSelectedOption, setLocalSelectedOption] = useState(selectedOption);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef(null);

  // 외부 상태가 변경되면 내부 상태도 업데이트
  useEffect(() => {
    setLocalSelectedOption(selectedOption);
  }, [selectedOption]);

  // 옵션 변경 핸들러
  const handleOptionChange = value => {
    setLocalSelectedOption(value);

    // 옵션 선택 시 애니메이션 효과
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // 다음 버튼 클릭 핸들러
  const handleNextClick = () => {
    if (localSelectedOption) {
      onAnswer(localSelectedOption);
    }
  };

  // 진행률 계산
  const progress = ((questionNumber - 1) / totalQuestions) * 100;

  // 질문이 없는 경우 로딩 표시
  if (!question) {
    return (
      <TarotCard
        variant="primary"
        sx={{ width: '100%', maxWidth: 600, mx: 'auto', minHeight: 500, ...sx }}
      >
        <QuestionContainer>
          <AnimatedElement animation="pulse" duration="slow">
            <Typography variant="h5" sx={{ textAlign: 'center', my: 10 }}>
              질문을 불러오는 중...
            </Typography>
          </AnimatedElement>
        </QuestionContainer>
      </TarotCard>
    );
  }

  return (
    <TarotCard
      ref={cardRef}
      variant="primary"
      sx={{
        width: '100%',
        maxWidth: 600,
        mx: 'auto',
        minHeight: 500,
        transition: 'transform 0.3s ease-out',
        transform: isAnimating ? 'scale(1.02)' : 'scale(1)',
        ...sx,
      }}
    >
      <QuestionContainer>
        <BackgroundDecoration />

        <QuestionContent>
          <AnimatedElement animation="fadeIn" duration="fast">
            <MysticalProgress
              value={progress}
              variant="mystical"
              label={`질문 ${questionNumber}/${totalQuestions}`}
              totalSteps={totalQuestions}
              currentStep={questionNumber}
              sx={{ mb: 0 }} // 하단 마진 제거
            />
          </AnimatedElement>

          <AnimatedElement animation="fadeIn" duration="normal" delay={100}>
            <QuestionNumber variant="subtitle2">질문 {questionNumber}</QuestionNumber>

            <QuestionText variant="h4">{question.question}</QuestionText>
          </AnimatedElement>

          <OptionsContainer>
            <FormControl component="fieldset" fullWidth>
              <AnswerOption
                value="A"
                label={question.optionA}
                selected={localSelectedOption === 'A'}
                onChange={handleOptionChange}
                index={0}
              />

              <AnswerOption
                value="B"
                label={question.optionB}
                selected={localSelectedOption === 'B'}
                onChange={handleOptionChange}
                index={1}
              />
            </FormControl>
          </OptionsContainer>

          <AnimatedElement animation="fadeIn" duration="normal" delay={300}>
            <MysticalNavigation
              variant="mystical"
              type="button"
              position="between"
              showPrev={!isFirst && !!onPrevious}
              showNext={true}
              disableNext={!localSelectedOption}
              nextLabel={isLast ? '결과 보기' : '다음 질문'}
              onPrev={onPrevious}
              onNext={handleNextClick}
            />
          </AnimatedElement>
        </QuestionContent>
      </QuestionContainer>
    </TarotCard>
  );
}
