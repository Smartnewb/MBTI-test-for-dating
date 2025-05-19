'use client';

import { forwardRef } from 'react';
import { Box, Typography, Radio, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';

// 스타일링된 옵션 컨테이너
const OptionContainer = styled(Paper)(({ theme, selected, disabled }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(2, 2.5),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,

  // 반응형 패딩 조정
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 3),
  },
  cursor: disabled ? 'default' : 'pointer',
  overflow: 'hidden',
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,

  // 기본 스타일
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,

  // 선택된 상태
  ...(selected && {
    backgroundColor: `${theme.palette.primary.main}10`,
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 10px ${theme.palette.primary.main}40`,
  }),

  // 호버 상태 (비활성화되지 않은 경우)
  ...(!disabled && {
    '&:hover': {
      backgroundColor: selected
        ? `${theme.palette.primary.main}15`
        : `${theme.palette.background.default}80`,
      borderColor: selected ? theme.palette.primary.main : theme.palette.primary.light,
      transform: 'translateY(-2px)',
      boxShadow: `0 4px 8px ${theme.palette.primary.main}20`,
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: `0 2px 4px ${theme.palette.primary.main}20`,
    },
  }),

  // 비활성화 상태
  ...(disabled && {
    opacity: 0.6,
    backgroundColor: theme.palette.action.disabledBackground,
    borderColor: theme.palette.action.disabled,
  }),

  // 배경 효과
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: selected
      ? `linear-gradient(135deg, ${theme.palette.primary.main}05, ${theme.palette.primary.main}15)`
      : 'transparent',
    opacity: 0.5,
    zIndex: 0,
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  },
}));

// 스타일링된 라디오 버튼
const StyledRadio = styled(Radio)(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
  padding: theme.spacing(1),
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

// 스타일링된 라벨
const OptionLabel = styled(Typography)(({ theme, selected }) => ({
  flexGrow: 1,
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: selected ? 500 : 400, // medium (500) or regular (400)
  color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  zIndex: 1,
  fontSize: '0.9rem', // 모바일에서 기본 폰트 크기 조정

  // 반응형 폰트 크기
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
}));

// 스타일링된 옵션 마커
const OptionMarker = styled(Box)(({ theme, selected }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 26, // 모바일에서 기본 크기 조정
  height: 26, // 모바일에서 기본 크기 조정
  borderRadius: '50%',
  backgroundColor: selected ? theme.palette.primary.main : 'transparent',
  border: `2px solid ${selected ? theme.palette.primary.main : theme.palette.divider}`,
  color: selected ? theme.palette.primary.contrastText : theme.palette.text.secondary,
  fontWeight: 700, // bold (700)
  marginRight: theme.spacing(1.5), // 모바일에서 기본 마진 조정
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  zIndex: 1,

  // 반응형 크기 조정
  [theme.breakpoints.up('sm')]: {
    width: 28,
    height: 28,
    marginRight: theme.spacing(2),
  },
}));

/**
 * 답변 옵션 컴포넌트
 *
 * MBTI 테스트 질문의 답변 옵션을 표시하는 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.value - 옵션 값 ('A' 또는 'B')
 * @param {string} props.label - 옵션 라벨
 * @param {boolean} [props.selected=false] - 선택 여부
 * @param {boolean} [props.disabled=false] - 비활성화 여부
 * @param {Function} props.onChange - 옵션 선택 시 호출되는 함수
 * @param {number} [props.index=0] - 애니메이션 지연을 위한 인덱스
 * @param {Object} [props.sx] - 추가 스타일
 */
const AnswerOption = forwardRef(function AnswerOption(props, ref) {
  const {
    value,
    label,
    selected = false,
    disabled = false,
    onChange,
    index = 0,
    sx = {},
    ...other
  } = props;

  // 클릭 핸들러
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  // 키보드 핸들러
  const handleKeyDown = event => {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onChange(value);
    }
  };

  return (
    <AnimatedElement animation="slideRight" duration="normal" delay={index * 150}>
      <OptionContainer
        ref={ref}
        selected={selected}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="radio"
        aria-checked={selected}
        sx={sx}
        elevation={selected ? 2 : 0}
        {...other}
      >
        <OptionMarker selected={selected}>{value}</OptionMarker>

        <OptionLabel variant="body1" selected={selected}>
          {label}
        </OptionLabel>

        <StyledRadio
          checked={selected}
          disabled={disabled}
          value={value}
          name={`option-${value}`}
          inputProps={{ 'aria-label': label }}
          onChange={() => onChange(value)}
          selected={selected}
          tabIndex={-1}
        />
      </OptionContainer>
    </AnimatedElement>
  );
});

export default AnswerOption;
