'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 타로 카드
const StyledCard = styled(Card)(({ theme, variant }) => ({
  borderRadius: 16,
  maxWidth: 350,
  minHeight: 450,
  margin: '0 auto',
  position: 'relative',
  overflow: 'visible',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  background: variant === 'primary' 
    ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
    : variant === 'secondary'
      ? `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`
      : `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
  border: `1px solid ${theme.palette.primary.dark}`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.7)',
  },
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
}));

// 카드 테두리 장식
const CardBorder = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 8,
  left: 8,
  right: 8,
  bottom: 8,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: 12,
  pointerEvents: 'none',
}));

// 카드 모서리 장식
const CardCorner = styled(Box)(({ theme, position }) => ({
  position: 'absolute',
  width: 20,
  height: 20,
  border: `1px solid ${theme.palette.secondary.main}`,
  ...(position === 'top-left' && { top: 4, left: 4, borderRight: 'none', borderBottom: 'none', borderTopLeftRadius: 8 }),
  ...(position === 'top-right' && { top: 4, right: 4, borderLeft: 'none', borderBottom: 'none', borderTopRightRadius: 8 }),
  ...(position === 'bottom-left' && { bottom: 4, left: 4, borderRight: 'none', borderTop: 'none', borderBottomLeftRadius: 8 }),
  ...(position === 'bottom-right' && { bottom: 4, right: 4, borderLeft: 'none', borderTop: 'none', borderBottomRightRadius: 8 }),
  pointerEvents: 'none',
}));

/**
 * 타로 카드 컴포넌트
 * @param {Object} props
 * @param {React.ReactNode} props.children - 카드 내용
 * @param {string} props.title - 카드 제목
 * @param {string} props.variant - 카드 스타일 ('primary', 'secondary', 'default')
 * @param {Object} props.sx - 추가 스타일
 */
export default function TarotCard({ children, title, variant = 'default', sx = {} }) {
  return (
    <StyledCard variant={variant} sx={sx}>
      <CardBorder />
      <CardCorner position="top-left" />
      <CardCorner position="top-right" />
      <CardCorner position="bottom-left" />
      <CardCorner position="bottom-right" />
      <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {title && (
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              textAlign: 'center', 
              mb: 3, 
              fontWeight: 'bold',
              color: variant === 'primary' || variant === 'secondary' ? 'white' : 'text.primary',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
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
