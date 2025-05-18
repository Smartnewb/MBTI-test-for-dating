'use client';

import { useState, useEffect, useRef, forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { animations } from '../../styles/tokens/animations';

// 스타일링된 텍스트 컨테이너
const TextContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
}));

// 스타일링된 타이핑 텍스트
const TypingText = styled(Typography)(({ theme, isTyping, cursorVisible, typingSpeed }) => ({
  position: 'relative',
  display: 'inline-block',
  whiteSpace: 'pre-wrap',
  
  // 커서 스타일
  '&::after': {
    content: '"|"',
    position: 'absolute',
    right: '-4px',
    color: 'inherit',
    opacity: cursorVisible ? 1 : 0,
    animation: 'blink 1s step-end infinite',
  },
  
  // 커서 깜빡임 애니메이션
  '@keyframes blink': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
  },
}));

// 스타일링된 글자별 애니메이션 텍스트
const CharByCharText = styled(Box)(({ theme }) => ({
  display: 'inline-block',
}));

// 스타일링된 글자
const AnimatedChar = styled('span')(({ theme, animation, delay, duration, easing }) => {
  // 애니메이션 키프레임 선택
  const keyframe = animations.keyframes[animation];
  
  // 애니메이션 지속 시간 선택
  const animationDuration = typeof duration === 'string'
    ? animations.duration[duration]
    : duration;
  
  // 애니메이션 이징 함수 선택
  const animationEasing = animations.easing[easing] || easing;
  
  return {
    display: 'inline-block',
    opacity: 0,
    animation: `${animation} ${animationDuration}ms ${animationEasing} ${delay}ms forwards`,
    
    // 애니메이션 키프레임 정의
    '@keyframes fadeIn': animations.keyframes.fadeIn,
    '@keyframes slideUp': animations.keyframes.slideUp,
    '@keyframes slideDown': animations.keyframes.slideDown,
    '@keyframes zoomIn': animations.keyframes.zoomIn,
    '@keyframes rotate': animations.keyframes.rotate,
    '@keyframes bounce': {
      '0%': { transform: 'translateY(0)', opacity: 0 },
      '50%': { transform: 'translateY(-10px)', opacity: 0.5 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
    '@keyframes wave': {
      '0%': { transform: 'translateY(0)', opacity: 0 },
      '25%': { transform: 'translateY(-5px)', opacity: 0.5 },
      '50%': { transform: 'translateY(0)', opacity: 1 },
      '75%': { transform: 'translateY(5px)', opacity: 1 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
  };
});

/**
 * 애니메이션 텍스트 컴포넌트
 * 
 * 다양한 텍스트 애니메이션 효과를 제공하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.text - 표시할 텍스트
 * @param {string} [props.animation='fadeIn'] - 애니메이션 유형 ('typing', 'charByChar', 'fadeIn', 'slideUp', 'wave', 'bounce')
 * @param {string} [props.charAnimation='fadeIn'] - 글자별 애니메이션 유형 (charByChar 애니메이션에서 사용)
 * @param {string|number} [props.duration='normal'] - 애니메이션 지속 시간 (ms 또는 'fast', 'normal', 'slow' 등)
 * @param {string} [props.easing='easeInOut'] - 애니메이션 이징 함수
 * @param {number} [props.delay=0] - 애니메이션 시작 지연 시간 (ms)
 * @param {number} [props.charDelay=50] - 글자별 애니메이션 지연 시간 (ms)
 * @param {number} [props.typingSpeed=50] - 타이핑 속도 (ms/글자)
 * @param {boolean} [props.repeat=false] - 애니메이션 반복 여부
 * @param {boolean} [props.onScroll=false] - 스크롤 시 애니메이션 실행 여부
 * @param {number} [props.threshold=0.2] - 스크롤 애니메이션 임계값 (0-1)
 * @param {string} [props.variant='body1'] - 텍스트 변형 (Typography variant)
 * @param {Object} [props.sx] - 추가 스타일
 */
const AnimatedText = forwardRef(function AnimatedText(props, ref) {
  const {
    text,
    animation = 'fadeIn',
    charAnimation = 'fadeIn',
    duration = 'normal',
    easing = 'easeInOut',
    delay = 0,
    charDelay = 50,
    typingSpeed = 50,
    repeat = false,
    onScroll = false,
    threshold = 0.2,
    variant = 'body1',
    sx = {},
    ...other
  } = props;
  
  // 내부 참조 생성
  const elementRef = useRef(null);
  const resolvedRef = ref || elementRef;
  
  // 애니메이션 상태
  const [isVisible, setIsVisible] = useState(!onScroll);
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
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
      { threshold }
    );
    
    if (resolvedRef.current) {
      observer.observe(resolvedRef.current);
    }
    
    return () => {
      if (resolvedRef.current) {
        observer.unobserve(resolvedRef.current);
      }
    };
  }, [onScroll, resolvedRef, threshold]);
  
  // 타이핑 애니메이션 처리
  useEffect(() => {
    if (!isVisible || animation !== 'typing') return;
    
    let currentIndex = 0;
    let typingTimer;
    
    const startTyping = () => {
      setDisplayText('');
      currentIndex = 0;
      setIsTypingComplete(false);
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text.charAt(currentIndex));
          currentIndex++;
          typingTimer = setTimeout(typeNextChar, typingSpeed);
        } else {
          setIsTypingComplete(true);
          
          if (repeat) {
            setTimeout(() => {
              setDisplayText('');
              startTyping();
            }, 2000);
          }
        }
      };
      
      // 초기 지연 후 타이핑 시작
      setTimeout(typeNextChar, delay);
    };
    
    startTyping();
    
    // 커서 깜빡임 효과
    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => {
      clearTimeout(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [isVisible, animation, text, typingSpeed, delay, repeat]);
  
  // 애니메이션 지속 시간 계산
  const animationDuration = typeof duration === 'string'
    ? animations.duration[duration]
    : duration;
  
  // 타이핑 애니메이션 렌더링
  if (animation === 'typing' && isVisible) {
    return (
      <TextContainer ref={resolvedRef} sx={sx} {...other}>
        <TypingText
          variant={variant}
          isTyping={!isTypingComplete}
          cursorVisible={cursorVisible}
          typingSpeed={typingSpeed}
        >
          {displayText}
        </TypingText>
      </TextContainer>
    );
  }
  
  // 글자별 애니메이션 렌더링
  if (animation === 'charByChar' && isVisible) {
    return (
      <TextContainer ref={resolvedRef} sx={sx} {...other}>
        <Typography variant={variant} component="span">
          {text.split('').map((char, index) => (
            <AnimatedChar
              key={index}
              animation={charAnimation}
              delay={delay + (index * charDelay)}
              duration={duration}
              easing={easing}
            >
              {char === ' ' ? '\u00A0' : char}
            </AnimatedChar>
          ))}
        </Typography>
      </TextContainer>
    );
  }
  
  // 기본 애니메이션 렌더링
  return (
    <TextContainer
      ref={resolvedRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${animation} ${animationDuration}ms ${easing} ${delay}ms forwards` : 'none',
        '@keyframes fadeIn': animations.keyframes.fadeIn,
        '@keyframes slideUp': animations.keyframes.slideUp,
        '@keyframes slideDown': animations.keyframes.slideDown,
        '@keyframes zoomIn': animations.keyframes.zoomIn,
        '@keyframes wave': {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '25%': { transform: 'translateY(-5px)', opacity: 0.5 },
          '50%': { transform: 'translateY(0)', opacity: 1 },
          '75%': { transform: 'translateY(5px)', opacity: 1 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        '@keyframes bounce': {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '50%': { transform: 'translateY(-10px)', opacity: 0.5 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        ...sx,
      }}
      {...other}
    >
      <Typography variant={variant}>
        {text}
      </Typography>
    </TextContainer>
  );
});

export default AnimatedText;
