'use client';

import { Box, Typography, Avatar, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// 스타일링된 후기 카드 컨테이너
const CardContainer = styled(Box)(({ theme, variant }) => {
  // 변형에 따른 스타일 설정
  let variantStyles = {};
  
  switch (variant) {
    case 'primary':
      variantStyles = {
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}20 0%, ${theme.palette.primary.main}10 100%)`,
        borderLeft: `4px solid ${theme.palette.primary.main}`,
      };
      break;
    
    case 'secondary':
      variantStyles = {
        background: `linear-gradient(135deg, ${theme.palette.secondary.dark}20 0%, ${theme.palette.secondary.main}10 100%)`,
        borderLeft: `4px solid ${theme.palette.secondary.main}`,
      };
      break;
    
    case 'mystical':
      variantStyles = {
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}20 0%, ${theme.palette.secondary.dark}20 100%)`,
        borderLeft: `4px solid ${theme.palette.secondary.main}`,
      };
      break;
    
    default:
      variantStyles = {
        background: theme.palette.background.paper,
        borderLeft: `4px solid ${theme.palette.primary.main}`,
      };
      break;
  }
  
  return {
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    },
    
    ...variantStyles,
  };
}));

// 스타일링된 인용 아이콘
const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  right: 10,
  fontSize: 40,
  color: theme.palette.primary.main,
  opacity: 0.2,
  transform: 'rotate(180deg)',
}));

// 스타일링된 사용자 정보 컨테이너
const UserInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

/**
 * 후기 카드 컴포넌트
 * 
 * 사용자 후기를 표시하는 카드 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.text - 후기 내용
 * @param {string} props.name - 사용자 이름
 * @param {string} [props.mbtiType] - MBTI 유형
 * @param {string} [props.avatarSrc] - 아바타 이미지 경로
 * @param {number} [props.rating] - 평점 (0-5)
 * @param {string} [props.variant='default'] - 변형 ('default', 'primary', 'secondary', 'mystical')
 * @param {string} [props.animation='fadeIn'] - 애니메이션 유형
 * @param {boolean} [props.onScroll=false] - 스크롤 시 애니메이션 실행 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function TestimonialCard({
  text,
  name,
  mbtiType,
  avatarSrc,
  rating,
  variant = 'default',
  animation = 'fadeIn',
  onScroll = false,
  sx = {}
}) {
  // 아바타 이니셜 생성
  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <AnimatedElement animation={animation} duration="normal" onScroll={onScroll}>
      <CardContainer variant={variant} sx={sx}>
        <QuoteIcon />
        
        <Typography 
          variant="body1" 
          sx={{ 
            fontStyle: 'italic',
            mb: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {text}
        </Typography>
        
        <UserInfoContainer>
          <Avatar 
            src={avatarSrc} 
            alt={name}
            sx={{ 
              width: 50, 
              height: 50, 
              mr: 2,
              bgcolor: theme => !avatarSrc ? theme.palette.primary.main : undefined,
            }}
          >
            {!avatarSrc && getInitials(name)}
          </Avatar>
          
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 'bold',
              }}
            >
              {name}
            </Typography>
            
            {mbtiType && (
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  display: 'block',
                }}
              >
                MBTI: {mbtiType}
              </Typography>
            )}
            
            {rating !== undefined && (
              <Rating 
                value={rating} 
                readOnly 
                size="small"
                sx={{ mt: 0.5 }}
              />
            )}
          </Box>
        </UserInfoContainer>
      </CardContainer>
    </AnimatedElement>
  );
}
