'use client';

import { forwardRef, useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { animations } from '../../styles/tokens/animations';

// 스타일링된 배경 컨테이너
const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
}));

// 스타일링된 그라데이션 배경
const GradientBackground = styled(Box)(({ theme, colors, duration, easing }) => {
  // 애니메이션 지속 시간 선택
  const animationDuration = typeof duration === 'string'
    ? animations.duration[duration]
    : duration;
  
  // 애니메이션 이징 함수 선택
  const animationEasing = animations.easing[easing] || easing;
  
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${colors.join(', ')})`,
    backgroundSize: '400% 400%',
    animation: `gradientShift ${animationDuration * 3}ms ${animationEasing} infinite`,
    
    '@keyframes gradientShift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  };
});

// 스타일링된 파티클 배경
const ParticleBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}));

// 스타일링된 파티클
const Particle = styled(Box)(({ theme, size, color, duration, delay }) => ({
  position: 'absolute',
  width: size,
  height: size,
  backgroundColor: color,
  borderRadius: '50%',
  opacity: 0,
  animation: `particle ${duration}ms ease-in-out ${delay}ms infinite`,
  
  '@keyframes particle': {
    '0%': { transform: 'translateY(100vh) scale(0)', opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { transform: 'translateY(-20vh) scale(1)', opacity: 0 },
  },
}));

// 스타일링된 물결 배경
const WaveBackground = styled(Box)(({ theme, color, duration, easing }) => {
  // 애니메이션 지속 시간 선택
  const animationDuration = typeof duration === 'string'
    ? animations.duration[duration]
    : duration;
  
  // 애니메이션 이징 함수 선택
  const animationEasing = animations.easing[easing] || easing;
  
  return {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '200px',
    background: `linear-gradient(to top, ${color} 0%, transparent 100%)`,
    
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '200px',
      backgroundRepeat: 'repeat-x',
      backgroundSize: '1600px 200px',
      bottom: 0,
    },
    
    '&::before': {
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 200\'%3E%3Cpath fill=\'rgba(255, 255, 255, 0.2)\' d=\'M0,192 C220,100 440,100 660,192 C880,290 1100,290 1320,192 L1320,200 L0,200 Z\'/%3E%3C/svg%3E")',
      animation: `wave ${animationDuration}ms ${animationEasing} infinite linear`,
    },
    
    '&::after': {
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 200\'%3E%3Cpath fill=\'rgba(255, 255, 255, 0.1)\' d=\'M0,192 C320,100 640,100 960,192 C1280,290 1440,200 1600,150 L1600,200 L0,200 Z\'/%3E%3C/svg%3E")',
      animation: `wave ${animationDuration * 1.5}ms ${animationEasing} infinite linear`,
    },
    
    '@keyframes wave': {
      '0%': { backgroundPositionX: '0' },
      '100%': { backgroundPositionX: '1600px' },
    },
  };
});

// 스타일링된 별 배경
const StarBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'transparent',
}));

// 스타일링된 별
const Star = styled(Box)(({ theme, size, color, duration, delay, top, left }) => ({
  position: 'absolute',
  width: size,
  height: size,
  backgroundColor: 'transparent',
  borderRadius: '50%',
  boxShadow: `0 0 ${size * 2}px ${size}px ${color}`,
  top: `${top}%`,
  left: `${left}%`,
  opacity: 0.3,
  animation: `twinkle ${duration}ms ease-in-out ${delay}ms infinite`,
  
  '@keyframes twinkle': {
    '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
    '50%': { opacity: 1, transform: 'scale(1.2)' },
  },
}));

/**
 * 애니메이션 배경 컴포넌트
 * 
 * 다양한 애니메이션 배경 효과를 제공하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.type='gradient'] - 배경 유형 ('gradient', 'particles', 'wave', 'stars')
 * @param {string[]} [props.colors=['#6B3FA0', '#9C27B0', '#3F51B5']] - 그라데이션 색상 배열
 * @param {string} [props.waveColor='#6B3FA0'] - 물결 색상
 * @param {number} [props.particleCount=50] - 파티클 개수
 * @param {number} [props.starCount=100] - 별 개수
 * @param {string|number} [props.duration='slow'] - 애니메이션 지속 시간 (ms 또는 'fast', 'normal', 'slow' 등)
 * @param {string} [props.easing='easeInOut'] - 애니메이션 이징 함수
 * @param {Object} [props.sx] - 추가 스타일
 */
const AnimatedBackground = forwardRef(function AnimatedBackground(props, ref) {
  const {
    type = 'gradient',
    colors = ['#6B3FA0', '#9C27B0', '#3F51B5'],
    waveColor = '#6B3FA0',
    particleCount = 50,
    starCount = 100,
    duration = 'slow',
    easing = 'easeInOut',
    sx = {},
    ...other
  } = props;
  
  // 내부 참조 생성
  const containerRef = useRef(null);
  const resolvedRef = ref || containerRef;
  
  // 파티클 생성
  const particles = Array.from({ length: particleCount }).map((_, index) => ({
    id: index,
    size: Math.random() * 10 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: Math.random() * 10000 + 5000,
    delay: Math.random() * 5000,
    left: Math.random() * 100,
  }));
  
  // 별 생성
  const stars = Array.from({ length: starCount }).map((_, index) => ({
    id: index,
    size: Math.random() * 2 + 0.5,
    color: '#FFFFFF',
    duration: Math.random() * 5000 + 2000,
    delay: Math.random() * 2000,
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));
  
  // 애니메이션 지속 시간 계산
  const animationDuration = typeof duration === 'string'
    ? animations.duration[duration]
    : duration;
  
  // 그라데이션 배경 렌더링
  if (type === 'gradient') {
    return (
      <BackgroundContainer ref={resolvedRef} sx={sx} {...other}>
        <GradientBackground
          colors={colors}
          duration={duration}
          easing={easing}
        />
      </BackgroundContainer>
    );
  }
  
  // 파티클 배경 렌더링
  if (type === 'particles') {
    return (
      <BackgroundContainer ref={resolvedRef} sx={sx} {...other}>
        <ParticleBackground>
          {particles.map(particle => (
            <Particle
              key={particle.id}
              size={particle.size}
              color={particle.color}
              duration={particle.duration}
              delay={particle.delay}
              style={{ left: `${particle.left}%` }}
            />
          ))}
        </ParticleBackground>
      </BackgroundContainer>
    );
  }
  
  // 물결 배경 렌더링
  if (type === 'wave') {
    return (
      <BackgroundContainer ref={resolvedRef} sx={sx} {...other}>
        <WaveBackground
          color={waveColor}
          duration={duration}
          easing={easing}
        />
      </BackgroundContainer>
    );
  }
  
  // 별 배경 렌더링
  if (type === 'stars') {
    return (
      <BackgroundContainer ref={resolvedRef} sx={sx} {...other}>
        <StarBackground>
          {stars.map(star => (
            <Star
              key={star.id}
              size={star.size}
              color={star.color}
              duration={star.duration}
              delay={star.delay}
              top={star.top}
              left={star.left}
            />
          ))}
        </StarBackground>
      </BackgroundContainer>
    );
  }
  
  // 기본 배경 렌더링
  return (
    <BackgroundContainer ref={resolvedRef} sx={sx} {...other} />
  );
});

export default AnimatedBackground;
