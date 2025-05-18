'use client';

import { forwardRef, useState } from 'react';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import TarotCard from './TarotCard';
import MysticalButton from './MysticalButton';
import MysticalProgress from './MysticalProgress';

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
  fontWeight: theme.typography.fontWeight.medium,
  fontSize: '1rem',
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(2),
}));

// 스타일링된 질문 텍스트
const QuestionText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.semibold,
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
    fontWeight: selected ? theme.typography.fontWeight.medium : theme.typography.fontWeight.regular,
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
 * @param {string} props.questionText - 질문 텍스트
 * @param {string} props.optionA - A 선택지 텍스트
 * @param {string} props.optionB - B 선택지 텍스트
 * @param {string} [props.selectedOption] - 선택된 옵션 ('A' 또는 'B')
 * @param {Function} props.onAnswer - 답변 선택 시 호출되는 함수
 * @param {Function} [props.onPrevious] - 이전 질문 버튼 클릭 시 호출되는 함수
 * @param {boolean} [props.isFirst=false] - 첫 번째 질문 여부
 * @param {boolean} [props.isLast=false] - 마지막 질문 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
const QuestionCard = forwardRef(function QuestionCard(props, ref) {
  const { 
    questionNumber,
    totalQuestions,
    questionText,
    optionA,
    optionB,
    selectedOption: externalSelectedOption,
    onAnswer,
    onPrevious,
    isFirst = false,
    isLast = false,
    sx = {}, 
    ...other 
  } = props;
  
  // 내부 상태 (제어되지 않는 컴포넌트로 사용할 경우)
  const [internalSelectedOption, setInternalSelectedOption] = useState(null);
  
  // 선택된 옵션 (외부 또는 내부)
  const selectedOption = externalSelectedOption !== undefined ? externalSelectedOption : internalSelectedOption;
  
  // 옵션 변경 핸들러
  const handleOptionChange = (event) => {
    const value = event.target.value;
    
    // 내부 상태 업데이트
    if (externalSelectedOption === undefined) {
      setInternalSelectedOption(value);
    }
    
    // 외부 핸들러 호출
    if (onAnswer) {
      onAnswer(value);
    }
  };
  
  // 진행률 계산
  const progress = ((questionNumber - 1) / totalQuestions) * 100;
  
  return (
    <TarotCard 
      ref={ref}
      variant="primary" 
      sx={{ maxWidth: 600, mx: 'auto', minHeight: 500, ...sx }}
      {...other}
    >
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
          {questionText}
        </QuestionText>
        
        <OptionsContainer>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              aria-label="question-options"
              name="question-options"
              value={selectedOption || ''}
              onChange={handleOptionChange}
            >
              <StyledFormControlLabel
                value="A"
                control={<Radio />}
                label={optionA}
                selected={selectedOption === 'A'}
              />
              <StyledFormControlLabel
                value="B"
                control={<Radio />}
                label={optionB}
                selected={selectedOption === 'B'}
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
            disabled={!selectedOption}
            onClick={() => selectedOption && onAnswer(selectedOption)}
          >
            {isLast ? '결과 보기' : '다음 질문'}
          </MysticalButton>
        </ButtonContainer>
      </QuestionContainer>
    </TarotCard>
  );
});

export default QuestionCard;
