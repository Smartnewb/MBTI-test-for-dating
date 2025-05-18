'use client';

import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';

// 스타일링된 타이핑 컨테이너
const TypingContainer = styled(Box)(({ theme, isTyping, cursorColor }) => ({
  display: 'inline-block',
  position: 'relative',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-4px',
    top: '0',
    height: '100%',
    width: '2px',
    backgroundColor: cursorColor || theme.palette.primary.main,
    animation: isTyping ? 'none' : 'blink 1s step-end infinite',
  },
  
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

/**
 * 타이핑 텍스트 컴포넌트
 * 
 * 타이핑 효과를 가진 텍스트 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.text - 표시할 텍스트
 * @param {number} [props.typingSpeed=50] - 타이핑 속도 (ms)
 * @param {number} [props.startDelay=0] - 시작 지연 시간 (ms)
 * @param {boolean} [props.loop=false] - 반복 여부
 * @param {number} [props.loopDelay=1000] - 반복 지연 시간 (ms)
 * @param {string} [props.variant='body1'] - 텍스트 변형
 * @param {string} [props.color] - 텍스트 색상
 * @param {string} [props.cursorColor] - 커서 색상
 * @param {boolean} [props.onScroll=false] - 스크롤 시 애니메이션 실행 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function TypingText({
  text,
  typingSpeed = 50,
  startDelay = 0,
  loop = false,
  loopDelay = 1000,
  variant = 'body1',
  color,
  cursorColor,
  onScroll = false,
  sx = {}
}) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(!onScroll);
  
  // 타이핑 효과
  useEffect(() => {
    if (!isVisible) return;
    
    let timeout;
    let currentIndex = 0;
    
    // 타이핑 시작 지연
    timeout = setTimeout(() => {
      setIsTyping(true);
      
      // 타이핑 인터벌
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          
          // 반복 처리
          if (loop) {
            timeout = setTimeout(() => {
              setDisplayText('');
              currentIndex = 0;
              setIsTyping(true);
            }, loopDelay);
          }
        }
      }, typingSpeed);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timeout);
  }, [text, typingSpeed, startDelay, loop, loopDelay, isVisible]);
  
  // 스크롤 애니메이션 처리
  useEffect(() => {
    if (!onScroll || typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById(`typing-text-${text.substring(0, 10).replace(/\s/g, '-')}`);
    
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [onScroll, text]);
  
  return (
    <Box 
      id={`typing-text-${text.substring(0, 10).replace(/\s/g, '-')}`}
      sx={sx}
    >
      <TypingContainer isTyping={isTyping} cursorColor={cursorColor}>
        <Typography 
          variant={variant} 
          color={color}
          sx={{ display: 'inline' }}
        >
          {displayText}
        </Typography>
      </TypingContainer>
    </Box>
  );
}
