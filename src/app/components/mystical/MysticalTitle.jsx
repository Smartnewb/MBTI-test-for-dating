'use client';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';

// 스타일링된 타이틀 컨테이너
const TitleContainer = styled(Box)(({ theme, align }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
  marginBottom: theme.spacing(4),
  position: 'relative',
}));

// 스타일링된 메인 타이틀
const MainTitle = styled(Typography)(({ theme, color, hasGradient }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(1),
  position: 'relative',
  display: 'inline-block',
  color: hasGradient ? 'transparent' : color || theme.palette.primary.main,
  ...(hasGradient && {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }),
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

// 스타일링된 서브 타이틀
const SubTitle = styled(Typography)(({ theme, color }) => ({
  fontFamily: theme.typography.fontFamily.primary,
  fontWeight: theme.typography.fontWeight.medium,
  fontSize: '1.2rem',
  color: color || theme.palette.text.secondary,
  
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

// 스타일링된 장식선
const Decoration = styled(Box)(({ theme, align }) => ({
  width: '80px',
  height: '3px',
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: '3px',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  alignSelf: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
}));

/**
 * 신비로운 타이틀 컴포넌트
 * 
 * 신비로운 타로 테마에 어울리는 타이틀 컴포넌트를 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.title - 메인 타이틀
 * @param {string} [props.subtitle] - 서브 타이틀
 * @param {string} [props.align='left'] - 정렬 ('left', 'center', 'right')
 * @param {string} [props.titleColor] - 타이틀 색상
 * @param {string} [props.subtitleColor] - 서브타이틀 색상
 * @param {boolean} [props.hasDecoration=true] - 장식선 표시 여부
 * @param {boolean} [props.hasGradient=false] - 그라데이션 효과 적용 여부
 * @param {string} [props.animation='fadeIn'] - 애니메이션 유형
 * @param {boolean} [props.onScroll=false] - 스크롤 시 애니메이션 실행 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function MysticalTitle({
  title,
  subtitle,
  align = 'left',
  titleColor,
  subtitleColor,
  hasDecoration = true,
  hasGradient = false,
  animation = 'fadeIn',
  onScroll = false,
  sx = {}
}) {
  return (
    <AnimatedElement animation={animation} duration="normal" onScroll={onScroll}>
      <TitleContainer align={align} sx={sx}>
        <MainTitle 
          variant="h2" 
          color={titleColor}
          hasGradient={hasGradient}
          align={align}
        >
          {title}
        </MainTitle>
        
        {hasDecoration && <Decoration align={align} />}
        
        {subtitle && (
          <SubTitle 
            variant="subtitle1" 
            color={subtitleColor}
            align={align}
          >
            {subtitle}
          </SubTitle>
        )}
      </TitleContainer>
    </AnimatedElement>
  );
}
