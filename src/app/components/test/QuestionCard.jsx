'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import TarotCard from '../TarotCard';
import MysticalButton from '../MysticalButton';
import MysticalProgress from '../MysticalProgress';

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
  fontFamily: '"Playfair Display", "Noto Serif KR", serif',
  fontWeight: 500, // medium 값을 직접 사용
  fontSize: '1rem',
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(2),
}));

// 스타일링된 질문 텍스트
const QuestionText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", "Noto Serif KR", serif',
  fontWeight: 600, // semibold 값을 직접 사용
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

// 스타일링된 선택지 컨테이너
const OptionsContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  flexGrow: 1,
}));

// 스타일링된 선택지 라벨
const StyledFormControlLabel = styled(FormControlLabel)(({ theme, selected }) => ({
  width: '100%',
  margin: theme.spacing(1, 0),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.divider}`,
  backgroundColor: selected ? `${theme.palette.primary.main}10` : 'transparent',
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,

  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}10`,
    borderColor: theme.palette.primary.light,
  },

  '& .MuiFormControlLabel-label': {
    width: '100%',
    fontWeight: selected ? 500 : 400, // medium(500)과 regular(400) 값을 직접 사용
  },

  '& .MuiRadio-root': {
    color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
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
 */
export default function QuestionCard({
  questionNumber,
  totalQuestions,
  question,
  selectedOption,
  onAnswer,
  onPrevious,
  isFirst = false,
  isLast = false
}) {
  // 내부 상태
  const [localSelectedOption, setLocalSelectedOption] = useState(selectedOption);

  // 외부 상태가 변경되면 내부 상태도 업데이트
  useEffect(() => {
    setLocalSelectedOption(selectedOption);
  }, [selectedOption]);

  // 옵션 변경 핸들러
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setLocalSelectedOption(value);
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
      <TarotCard variant="primary" sx={{ maxWidth: 600, mx: 'auto', minHeight: 500 }}>
        <QuestionContainer>
          <Typography variant="h5" sx={{ textAlign: 'center', my: 10 }}>
            질문을 불러오는 중...
          </Typography>
        </QuestionContainer>
      </TarotCard>
    );
  }

  return (
    <TarotCard variant="primary" sx={{ maxWidth: 600, mx: 'auto', minHeight: 500 }}>
      <QuestionContainer>
        <MysticalProgress
          value={progress}
          variant="mystical"
          label={`질문 ${questionNumber}/${totalQuestions}`}
          totalSteps={totalQuestions}
          currentStep={questionNumber}
        />

        <QuestionNumber variant="subtitle2">
          질문 {questionNumber}
        </QuestionNumber>

        <QuestionText variant="h4">
          {question.question}
        </QuestionText>

        <OptionsContainer>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              aria-label="question-options"
              name="question-options"
              value={localSelectedOption || ''}
              onChange={handleOptionChange}
            >
              <StyledFormControlLabel
                value="A"
                control={<Radio />}
                label={question.optionA}
                selected={localSelectedOption === 'A'}
              />
              <StyledFormControlLabel
                value="B"
                control={<Radio />}
                label={question.optionB}
                selected={localSelectedOption === 'B'}
              />
            </RadioGroup>
          </FormControl>
        </OptionsContainer>

        <ButtonContainer>
          {!isFirst && onPrevious && (
            <MysticalButton
              variant="tarot"
              onClick={onPrevious}
            >
              이전 질문
            </MysticalButton>
          )}

          {isFirst && <Box />}

          <MysticalButton
            variant="mystical"
            disabled={!localSelectedOption}
            onClick={handleNextClick}
          >
            {isLast ? '결과 보기' : '다음 질문'}
          </MysticalButton>
        </ButtonContainer>
      </QuestionContainer>
    </TarotCard>
  );
}
