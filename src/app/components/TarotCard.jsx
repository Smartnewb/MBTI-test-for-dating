'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 타로 카드
const StyledCard = styled(Card)(({ theme, variant, interactive = true }) => ({
  borderRadius: 16,
  maxWidth: 380, // 최대 너비 증가: 350 -> 380
  minHeight: 550, // 높이 증가: 450 -> 550
  margin: '0 auto',
  position: 'relative',
  overflow: 'visible',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

  // 변형에 따른 배경 스타일
  ...(variant === 'primary' && {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    color: theme.palette.primary.contrastText,
  }),

  ...(variant === 'secondary' && {
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
    color: theme.palette.secondary.contrastText,
  }),

  ...(variant === 'mystical' && {
    background: `linear-gradient(135deg, #2C3E50, #4A235A)`,
    color: '#FFFFFF',
  }),

  ...(variant === 'result' && {
    background: `linear-gradient(135deg, #1A1A2E, #16213E)`,
    color: '#FFFFFF',
    boxShadow: `0 10px 30px rgba(106, 27, 154, 0.4)`,
  }),

  ...(variant === 'default' && {
    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
    color: theme.palette.text.primary,
  }),

  // 기본 스타일
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
  border: `1px solid ${theme.palette.primary.dark}`,

  // 호버 효과 (인터랙티브 모드일 때만)
  ...((interactive && {
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.7)',
    },
    cursor: 'pointer',
  })),

  // 텍스처 효과
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    background: 'url(/images/card-texture.png)',
    backgroundSize: 'cover',
    opacity: 0.1,
    pointerEvents: 'none',
  },

  // 별 반짝임 효과 (mystical, result 변형)
  ...((variant === 'mystical' || variant === 'result') && {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 16,
      background: 'radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%)',
      pointerEvents: 'none',
    }
  })
}));

// 카드 테두리 장식 (테두리 제거)
const CardBorder = styled(Box)(({ theme, variant }) => ({
  position: 'absolute',
  top: 8,
  left: 8,
  right: 8,
  bottom: 8,
  // border 속성 제거
  borderRadius: 12,
  pointerEvents: 'none',

  // 결과 카드에 특별한 효과 추가 (테두리 없이 그림자만)
  ...(variant === 'result' && {
    boxShadow: '0 0 10px rgba(212, 175, 55, 0.2) inset',
  }),

  // mystical 변형에 특별한 효과 추가 (테두리 없이 그림자만)
  ...(variant === 'mystical' && {
    boxShadow: '0 0 15px rgba(156, 39, 176, 0.2) inset',
  }),
}));

// 카드 모서리 장식 (더 미묘하게 조정)
const CardCorner = styled(Box)(({ theme, position, variant }) => ({
  position: 'absolute',
  width: 16,
  height: 16,
  // border 속성 제거하고 opacity 추가
  opacity: 0.5,
  pointerEvents: 'none',

  // 결과 카드와 mystical 변형에 특별한 모서리 효과만 유지
  ...((variant === 'result' || variant === 'mystical') && {
    width: 20,
    height: 20,
    '&::after': {
      content: '""',
      position: 'absolute',
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: variant === 'result' ? '#D4AF37' : theme.palette.secondary.main,
      ...(position === 'top-left' && { top: 3, left: 3 }),
      ...(position === 'top-right' && { top: 3, right: 3 }),
      ...(position === 'bottom-left' && { bottom: 3, left: 3 }),
      ...(position === 'bottom-right' && { bottom: 3, right: 3 }),
    }
  }),
}));

// 카드 심볼 장식
const CardSymbol = styled(Box)(({ theme, variant }) => ({
  position: 'absolute',
  width: 40,
  height: 40,
  opacity: 0.2,
  pointerEvents: 'none',

  // 변형에 따른 심볼 위치 및 스타일
  ...(variant === 'result' && {
    top: 20,
    right: 20,
    background: 'url(/images/tarot-back.svg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.15,
  }),

  ...(variant === 'mystical' && {
    bottom: 20,
    left: 20,
    background: 'url(/images/tarot-back.svg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.15,
    transform: 'rotate(180deg)',
  }),
}));

/**
 * 타로 카드 컴포넌트
 * @param {Object} props
 * @param {React.ReactNode} props.children - 카드 내용
 * @param {string} props.title - 카드 제목
 * @param {string} props.variant - 카드 스타일 ('primary', 'secondary', 'mystical', 'result', 'default')
 * @param {boolean} props.interactive - 호버 효과 활성화 여부 (기본값: true)
 * @param {function} props.onClick - 카드 클릭 이벤트 핸들러
 * @param {string} props.ariaLabel - 접근성을 위한 ARIA 레이블
 * @param {Object} props.sx - 추가 스타일
 */
export default function TarotCard({
  children,
  title,
  variant = 'default',
  interactive = true,
  onClick,
  ariaLabel,
  sx = {}
}) {
  // 접근성을 위한 키보드 이벤트 핸들러
  const handleKeyDown = (event) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <StyledCard
      variant={variant}
      interactive={interactive}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={ariaLabel || title}
      sx={sx}
    >
      <CardBorder variant={variant} />
      <CardCorner position="top-left" variant={variant} />
      <CardCorner position="top-right" variant={variant} />
      <CardCorner position="bottom-left" variant={variant} />
      <CardCorner position="bottom-right" variant={variant} />

      {/* 심볼 장식 (result, mystical 변형에만 표시) */}
      {(variant === 'result' || variant === 'mystical') && (
        <CardSymbol variant={variant} />
      )}

      <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {title && (
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 3,
              fontWeight: 'bold',
              color: variant === 'primary' || variant === 'secondary' || variant === 'mystical' || variant === 'result'
                ? 'white'
                : 'text.primary',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              ...(variant === 'result' && {
                color: '#D4AF37',
                letterSpacing: '0.05em',
              })
            }}
          >
            {title}
          </Typography>
        )}
        {children}
      </CardContent>
    </StyledCard>
  );
}
