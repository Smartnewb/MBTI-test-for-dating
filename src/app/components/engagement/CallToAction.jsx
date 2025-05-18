'use client';

import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';
import MysticalButton from '../MysticalButton';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// 스타일링된 CTA 컨테이너
const CtaContainer = styled(Paper)(({ theme, variant }) => {
  // 변형에 따른 스타일 설정
  let variantStyles = {};

  switch (variant) {
    case 'primary':
      variantStyles = {
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}80 0%, ${theme.palette.primary.main}40 100%)`,
        color: theme.palette.common.white
      };
      break;

    case 'secondary':
      variantStyles = {
        background: `linear-gradient(135deg, ${theme.palette.secondary.dark}80 0%, ${theme.palette.secondary.main}40 100%)`,
        color: theme.palette.common.white
      };
      break;

    case 'mystical':
      variantStyles = {
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}80 0%, ${theme.palette.secondary.dark}80 100%)`,
        color: theme.palette.common.white
      };
      break;

    case 'light':
      variantStyles = {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.divider}`
      };
      break;

    default:
      variantStyles = {
        background: theme.palette.background.default,
        color: theme.palette.text.primary
      };
      break;
  }

  return {
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
    ...variantStyles
  };
}));

// 스타일링된 배경 장식
const BackgroundDecoration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
  opacity: 0.5,
  zIndex: 0,
}));

/**
 * 행동 촉구 컴포넌트
 *
 * 사용자 참여를 유도하는 행동 촉구 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.title - 제목
 * @param {string} [props.description] - 설명
 * @param {string} [props.buttonText='시작하기'] - 버튼 텍스트
 * @param {Function} props.onClick - 버튼 클릭 핸들러
 * @param {string} [props.variant='default'] - 변형 ('default', 'primary', 'secondary', 'mystical', 'light')
 * @param {string} [props.buttonVariant='mystical'] - 버튼 변형 ('mystical', 'tarot', 'glow')
 * @param {string} [props.buttonSize='medium'] - 버튼 크기 ('small', 'medium', 'large')
 * @param {React.ReactNode} [props.icon] - 버튼 아이콘
 * @param {string} [props.animation='fadeIn'] - 애니메이션 유형
 * @param {boolean} [props.onScroll=false] - 스크롤 시 애니메이션 실행 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function CallToAction({
  title,
  description,
  buttonText = '시작하기',
  onClick,
  variant = 'default',
  buttonVariant = 'mystical',
  buttonSize = 'medium',
  icon,
  animation = 'fadeIn',
  onScroll = false,
  sx = {}
}) {
  return (
    <AnimatedElement animation={animation} duration="normal" onScroll={onScroll}>
      <CtaContainer variant={variant} sx={sx}>
        <BackgroundDecoration />

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              fontFamily: theme => theme.typography.fontFamily.secondary,
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                opacity: 0.9,
              }}
            >
              {description}
            </Typography>
          )}

          <MysticalButton
            variant={buttonVariant}
            size={buttonSize}
            onClick={onClick}
            startIcon={icon || <AutoAwesomeIcon />}
          >
            {buttonText}
          </MysticalButton>
        </Box>
      </CtaContainer>
    </AnimatedElement>
  );
}
