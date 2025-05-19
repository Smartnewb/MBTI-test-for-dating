'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TarotCard from '../TarotCard';

// 스타일링된 카드 컨테이너
const CardContainer = styled(Box)(({ theme }) => ({
  perspective: '1000px',
  width: '100%',
  height: '100%',
}));

// 스타일링된 카드 내부 컨테이너
const CardInner = styled(Box)(({ theme, isFlipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d',
  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
}));

// 스타일링된 카드 면
const CardFace = styled(Box)(({ theme, isFront }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: isFront ? 'rotateY(0)' : 'rotateY(180deg)',
}));

/**
 * 플립 카드 컴포넌트
 *
 * 클릭하면 뒤집히는 타로 카드 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.front - 앞면 내용
 * @param {React.ReactNode} props.back - 뒷면 내용
 * @param {string} [props.frontVariant='primary'] - 앞면 카드 변형
 * @param {string} [props.backVariant='secondary'] - 뒷면 카드 변형
 * @param {string} [props.frontTitle] - 앞면 카드 제목
 * @param {string} [props.backTitle] - 뒷면 카드 제목
 * @param {boolean} [props.autoFlip=false] - 자동 뒤집기 여부
 * @param {number} [props.autoFlipDelay=3000] - 자동 뒤집기 지연 시간 (ms)
 * @param {boolean} [props.manualFlip=true] - 수동 뒤집기 여부
 * @param {Function} [props.onFlip] - 뒤집기 이벤트 핸들러
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function FlipCard({
  front,
  back,
  frontVariant = 'primary',
  backVariant = 'secondary',
  frontTitle,
  backTitle,
  autoFlip = false,
  autoFlipDelay = 3000,
  manualFlip = true,
  onFlip,
  sx = {}
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  // 자동 뒤집기
  useEffect(() => {
    if (autoFlip) {
      const timer = setTimeout(() => {
        setIsFlipped(true);

        if (onFlip) {
          onFlip(true);
        }
      }, autoFlipDelay);

      return () => clearTimeout(timer);
    }
  }, [autoFlip, autoFlipDelay, onFlip]);

  // 뒤집기 핸들러
  const handleFlip = () => {
    if (manualFlip) {
      setIsFlipped((prev) => !prev);

      if (onFlip) {
        onFlip(!isFlipped);
      }
    }
  };

  // 클릭 이벤트 핸들러
  const handleClick = (e) => {
    // 탭, 버튼, 아이콘 버튼 클릭 시 이벤트 전파 방지
    if (
      e.target.closest('.MuiTab-root') ||
      e.target.closest('.MuiTabs-root') ||
      e.target.closest('.MuiButton-root') ||
      e.target.closest('.MuiIconButton-root') ||
      e.target.closest('button') ||
      e.target.closest('a') || // 링크 요소도 제외
      e.target.tagName === 'BUTTON' ||
      e.target.tagName === 'A'
    ) {
      return;
    }

    handleFlip();
  };

  return (
    <CardContainer
      onClick={handleClick}
      sx={{
        cursor: manualFlip ? 'pointer' : 'default',
        ...sx
      }}
    >
      <CardInner isFlipped={isFlipped}>
        {/* 앞면 */}
        <CardFace isFront>
          <TarotCard variant={frontVariant} title={frontTitle}>
            {front}
          </TarotCard>
        </CardFace>

        {/* 뒷면 */}
        <CardFace>
          <TarotCard variant={backVariant} title={backTitle}>
            {back}
          </TarotCard>
        </CardFace>
      </CardInner>
    </CardContainer>
  );
}
