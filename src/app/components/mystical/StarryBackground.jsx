'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 배경 컨테이너
const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}80 0%, ${theme.palette.background.default} 100%)`,
}));

// 스타일링된 별
const Star = styled(Box)(({ theme, size, top, left, delay, duration }) => ({
  position: 'absolute',
  width: size,
  height: size,
  top,
  left,
  borderRadius: '50%',
  background: theme.palette.secondary.light,
  boxShadow: `0 0 ${size}px ${size / 2}px ${theme.palette.secondary.light}`,
  animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
  opacity: 0.7,
}));

// 스타일링된 유성
const ShootingStar = styled(Box)(({ theme, top, left, delay }) => ({
  position: 'absolute',
  top,
  left,
  width: '100px',
  height: '2px',
  background: `linear-gradient(to right, transparent, ${theme.palette.secondary.light}, transparent)`,
  transform: 'rotate(-45deg)',
  animation: `shootingStar 3s linear ${delay}s`,
  animationFillMode: 'forwards',
  opacity: 0,
}));

// 스타일링된 안개
const Fog = styled(Box)(({ theme, top, left, size, opacity, delay }) => ({
  position: 'absolute',
  top,
  left,
  width: size,
  height: size,
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
  opacity,
  animation: `fog ${10 + Math.random() * 10}s ease-in-out ${delay}s infinite`,
}));

/**
 * 별이 반짝이는 배경 컴포넌트
 * 
 * 신비로운 타로 테마에 어울리는 별이 반짝이는 배경을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number} [props.starCount=50] - 별의 개수
 * @param {number} [props.shootingStarCount=3] - 유성의 개수
 * @param {number} [props.fogCount=5] - 안개의 개수
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function StarryBackground({
  starCount = 50,
  shootingStarCount = 3,
  fogCount = 5,
  sx = {}
}) {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [fogs, setFogs] = useState([]);
  
  // 별, 유성, 안개 생성
  useEffect(() => {
    // 별 생성
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        size: 1 + Math.random() * 3,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
      });
    }
    setStars(newStars);
    
    // 유성 생성
    const newShootingStars = [];
    for (let i = 0; i < shootingStarCount; i++) {
      newShootingStars.push({
        id: i,
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 100}%`,
        delay: 5 + Math.random() * 15,
      });
    }
    setShootingStars(newShootingStars);
    
    // 안개 생성
    const newFogs = [];
    for (let i = 0; i < fogCount; i++) {
      newFogs.push({
        id: i,
        size: 100 + Math.random() * 200,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: 0.1 + Math.random() * 0.2,
        delay: Math.random() * 5,
      });
    }
    setFogs(newFogs);
  }, [starCount, shootingStarCount, fogCount]);
  
  return (
    <BackgroundContainer sx={sx}>
      {/* 별 */}
      {stars.map((star) => (
        <Star
          key={star.id}
          size={star.size}
          top={star.top}
          left={star.left}
          delay={star.delay}
          duration={star.duration}
        />
      ))}
      
      {/* 유성 */}
      {shootingStars.map((shootingStar) => (
        <ShootingStar
          key={shootingStar.id}
          top={shootingStar.top}
          left={shootingStar.left}
          delay={shootingStar.delay}
        />
      ))}
      
      {/* 안개 */}
      {fogs.map((fog) => (
        <Fog
          key={fog.id}
          size={fog.size}
          top={fog.top}
          left={fog.left}
          opacity={fog.opacity}
          delay={fog.delay}
        />
      ))}
      
      {/* 애니메이션 키프레임 */}
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
        
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: translateX(500px) translateY(500px) rotate(-45deg);
            opacity: 0;
          }
        }
        
        @keyframes fog {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0.1;
          }
          50% {
            transform: translateX(50px) translateY(-20px);
            opacity: 0.2;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 0.1;
          }
        }
      `}</style>
    </BackgroundContainer>
  );
}
