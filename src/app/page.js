'use client';

import { Box } from '@mui/material';
import { PageLayout } from './components/layout';
import { IntroHero, IntroFeatures, IntroTestimonials, IntroCallToAction } from './components/intro';
import { homeMetadata } from './metadata';

/**
 * 홈페이지 컴포넌트
 *
 * 달빛 연애 연구소의 메인 랜딩 페이지입니다.
 * 신비로운 타로 테마를 가진 매력적인 인트로 페이지를 제공합니다.
 */
export default function Home() {
  return (
    <PageLayout variant="home">
      {/* 히어로 섹션 */}
      <IntroHero />

      {/* 특징 섹션 */}
      <IntroFeatures />

      {/* 후기 섹션 */}
      <IntroTestimonials />

      {/* 행동 유도 섹션 */}
      <IntroCallToAction />
    </PageLayout>
  );
}

// 메타데이터 설정
export const metadata = homeMetadata;
