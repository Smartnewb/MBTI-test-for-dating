'use client';

import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StarryBackground } from './';
import { Section } from '../layout';

// 스타일링된 섹션 컨테이너
const SectionContainer = styled(Box)(({ theme, variant }) => {
  // 기본 스타일
  const baseStyles = {
    position: 'relative',
    padding: theme.spacing(8, 0),
    overflow: 'visible', // hidden에서 visible로 변경
    marginBottom: theme.spacing(4) // 하단 여백 추가
  };

  if (variant === 'dark') {
    return {
      ...baseStyles,
      background: theme.palette.background.default,
      color: theme.palette.common.white
    };
  }

  if (variant === 'light') {
    return {
      ...baseStyles,
      background: theme.palette.background.paper,
      color: theme.palette.text.primary
    };
  }

  if (variant === 'primary') {
    return {
      ...baseStyles,
      background: `linear-gradient(135deg, ${theme.palette.primary.dark}80 0%, ${theme.palette.primary.main}40 100%)`,
      color: theme.palette.common.white
    };
  }

  if (variant === 'secondary') {
    return {
      ...baseStyles,
      background: `linear-gradient(135deg, ${theme.palette.secondary.dark}80 0%, ${theme.palette.secondary.main}40 100%)`,
      color: theme.palette.common.white
    };
  }

  if (variant === 'mystical') {
    return {
      ...baseStyles,
      background: `linear-gradient(135deg, ${theme.palette.primary.dark}80 0%, ${theme.palette.secondary.dark}80 100%)`,
      color: theme.palette.common.white
    };
  }

  // Default
  return {
    ...baseStyles,
    background: 'transparent'
  };
});

/**
 * 신비로운 섹션 컴포넌트
 *
 * 신비로운 배경 효과를 가진 섹션 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 섹션 내용
 * @param {string} [props.variant='default'] - 섹션 변형 ('default', 'dark', 'light', 'primary', 'secondary', 'mystical')
 * @param {boolean} [props.hasStars=false] - 별 배경 표시 여부
 * @param {number} [props.starCount=30] - 별 개수
 * @param {boolean} [props.fullWidth=false] - 전체 너비 사용 여부
 * @param {boolean} [props.fullHeight=false] - 전체 높이 사용 여부
 * @param {boolean} [props.centered=false] - 내용 중앙 정렬 여부
 * @param {string} [props.maxWidth='lg'] - 최대 너비
 * @param {Object} [props.sx] - 추가 스타일
 * @param {Object} [props.containerSx] - 컨테이너 추가 스타일
 */
export default function MysticalSection({
  children,
  variant = 'default',
  hasStars = false,
  starCount = 30,
  fullWidth = false,
  fullHeight = false,
  centered = false,
  maxWidth = 'lg',
  sx = {},
  containerSx = {},
  ...other
}) {
  return (
    <SectionContainer variant={variant} sx={sx} {...other}>
      {/* 별 배경 */}
      {hasStars && (
        <StarryBackground
          starCount={starCount}
          shootingStarCount={2}
          fogCount={3}
        />
      )}

      {/* 섹션 내용 */}
      <Section
        fullWidth={fullWidth}
        fullHeight={fullHeight}
        centered={centered}
        maxWidth={maxWidth}
        sx={containerSx}
      >
        {children}
      </Section>
    </SectionContainer>
  );
}
