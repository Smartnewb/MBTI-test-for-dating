'use client';

import { useState } from 'react';
import { Box, Typography, Paper, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Container, Grid, GridItem, Section, PageLayout } from '../../components/layout';
import TarotCard from '../../components/TarotCard';
import LayoutExample from '../../components/examples/LayoutExample';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

/**
 * 레이아웃 시스템 문서 페이지
 *
 * 디자인 시스템의 레이아웃 컴포넌트를 문서화하는 페이지입니다.
 */
export default function LayoutPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        레이아웃 시스템
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        달빛 연애 연구소의 레이아웃 시스템은 반응형 디자인을 기반으로 합니다.
        다양한 화면 크기에 최적화된 레이아웃을 제공하여 모든 기기에서 일관된 사용자 경험을 제공합니다.
      </Typography>

      <LayoutExample />


    </Container>
  );
}
