'use client';

import { useState } from 'react';
import { Box, Typography, Paper, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Container, Grid, GridItem, Section, PageLayout } from '../../components/layout';
import TarotCard from '../../components/TarotCard';

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

      <Divider sx={{ my: 4 }} />

      {/* 컨테이너 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          컨테이너 (Container)
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          컨테이너 컴포넌트는 콘텐츠의 최대 너비를 제한하고 화면 중앙에 배치합니다.
          다양한 최대 너비 옵션을 제공하여 콘텐츠 유형에 맞게 사용할 수 있습니다.
        </Typography>

        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            최대 너비 옵션
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Paper sx={{ p: 2, bgcolor: theme.palette.primary.main + '20', textAlign: 'center' }}>
              <Typography variant="body2">
                현재 사용 중인 컨테이너: {isMobile ? 'xs/sm' : isTablet ? 'md' : 'lg'} (화면 크기에 따라 자동 조정)
              </Typography>
            </Paper>
          </Box>

          <Grid gutter="medium">
            <GridItem xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="subtitle2">xs (600px)</Typography>
                <Typography variant="body2" color="text.secondary">
                  모바일 화면에 최적화
                </Typography>
              </Paper>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="subtitle2">sm (600px)</Typography>
                <Typography variant="body2" color="text.secondary">
                  작은 태블릿 화면에 최적화
                </Typography>
              </Paper>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="subtitle2">md (900px)</Typography>
                <Typography variant="body2" color="text.secondary">
                  태블릿 화면에 최적화
                </Typography>
              </Paper>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="subtitle2">lg (1200px)</Typography>
                <Typography variant="body2" color="text.secondary">
                  데스크톱 화면에 최적화
                </Typography>
              </Paper>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="subtitle2">xl (1536px)</Typography>
                <Typography variant="body2" color="text.secondary">
                  대형 데스크톱 화면에 최적화
                </Typography>
              </Paper>
            </GridItem>
          </Grid>
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 그리드 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          그리드 시스템 (Grid)
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          그리드 시스템은 12열 그리드를 기반으로 하며, 반응형 레이아웃을 쉽게 구현할 수 있습니다.
          화면 크기에 따라 열 너비를 다르게 지정할 수 있습니다.
        </Typography>

        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            기본 그리드 (12열)
          </Typography>

          <Grid gutter="small">
            {Array.from({ length: 12 }).map((_, index) => (
              <GridItem key={index} xs={1}>
                <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                  <Typography variant="body2">1</Typography>
                </Paper>
              </GridItem>
            ))}

            {Array.from({ length: 6 }).map((_, index) => (
              <GridItem key={index} xs={2}>
                <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '30' }}>
                  <Typography variant="body2">2</Typography>
                </Paper>
              </GridItem>
            ))}

            {Array.from({ length: 4 }).map((_, index) => (
              <GridItem key={index} xs={3}>
                <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '40' }}>
                  <Typography variant="body2">3</Typography>
                </Paper>
              </GridItem>
            ))}

            {Array.from({ length: 3 }).map((_, index) => (
              <GridItem key={index} xs={4}>
                <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '50' }}>
                  <Typography variant="body2">4</Typography>
                </Paper>
              </GridItem>
            ))}

            {Array.from({ length: 2 }).map((_, index) => (
              <GridItem key={index} xs={6}>
                <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '60' }}>
                  <Typography variant="body2">6</Typography>
                </Paper>
              </GridItem>
            ))}

            <GridItem xs={12}>
              <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '70' }}>
                <Typography variant="body2">12</Typography>
              </Paper>
            </GridItem>
          </Grid>
        </Paper>

        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            반응형 그리드
          </Typography>

          <Grid gutter="medium">
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="subtitle2">
                  xs=12 sm=6 md=4 lg=3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  모바일: 전체 너비<br />
                  태블릿: 절반 너비<br />
                  데스크톱: 1/3 너비<br />
                  대형 화면: 1/4 너비
                </Typography>
              </Paper>
            </GridItem>

            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="subtitle2">
                  xs=12 sm=6 md=4 lg=3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  모바일: 전체 너비<br />
                  태블릿: 절반 너비<br />
                  데스크톱: 1/3 너비<br />
                  대형 화면: 1/4 너비
                </Typography>
              </Paper>
            </GridItem>

            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="subtitle2">
                  xs=12 sm=6 md=4 lg=3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  모바일: 전체 너비<br />
                  태블릿: 절반 너비<br />
                  데스크톱: 1/3 너비<br />
                  대형 화면: 1/4 너비
                </Typography>
              </Paper>
            </GridItem>

            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="subtitle2">
                  xs=12 sm=6 md=4 lg=3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  모바일: 전체 너비<br />
                  태블릿: 절반 너비<br />
                  데스크톱: 1/3 너비<br />
                  대형 화면: 1/4 너비
                </Typography>
              </Paper>
            </GridItem>
          </Grid>
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 섹션 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          섹션 (Section)
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          섹션 컴포넌트는 페이지의 주요 콘텐츠 영역을 구분하는 데 사용됩니다.
          제목, 부제목, 배경 변형 등 다양한 옵션을 제공합니다.
        </Typography>

        <Paper sx={{ p: 0, mb: 3, overflow: 'hidden' }}>
          <Section
            title="섹션 제목"
            subtitle="섹션 부제목은 섹션의 내용을 간략하게 설명합니다."
            variant="primary"
            maxWidth="md"
            sx={{ py: 4 }}
          >
            <Grid gutter="medium">
              <GridItem xs={12} md={6}>
                <TarotCard variant="primary">
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    카드 제목
                  </Typography>
                  <Typography variant="body2">
                    섹션 내부에 다양한 컴포넌트를 배치할 수 있습니다.
                    이 예시에서는 타로 카드 컴포넌트를 사용했습니다.
                  </Typography>
                </TarotCard>
              </GridItem>

              <GridItem xs={12} md={6}>
                <TarotCard variant="secondary">
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    카드 제목
                  </Typography>
                  <Typography variant="body2">
                    섹션 내부에 다양한 컴포넌트를 배치할 수 있습니다.
                    이 예시에서는 타로 카드 컴포넌트를 사용했습니다.
                  </Typography>
                </TarotCard>
              </GridItem>
            </Grid>
          </Section>
        </Paper>
      </Box>
    </Container>
  );
}
