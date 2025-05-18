'use client';

import { useState } from 'react';
import { Box, Typography, Paper, Divider, useTheme, useMediaQuery } from '@mui/material';
import { Container, Grid, GridItem, Section } from '../layout';
import { Flex, FlexItem } from '../layout/Flex';
import { Stack, VStack, HStack } from '../layout/Stack';
import { ResponsiveBox, Hide, Show } from '../layout/ResponsiveBox';
import MysticalDivider from '../layout/MysticalDivider';
import MysticalText from '../mystical/MysticalText';
import TarotCard from '../TarotCard';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

/**
 * 레이아웃 예제 컴포넌트
 * 
 * 다양한 레이아웃 컴포넌트를 보여주는 예제 컴포넌트입니다.
 */
export default function LayoutExample() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box sx={{ p: 4 }}>
      <MysticalText variant="h4" textVariant="mystical" sx={{ mb: 4 }}>
        레이아웃 컴포넌트
      </MysticalText>
      
      {/* 컨테이너 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          컨테이너 (Container)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          컨테이너 컴포넌트는 콘텐츠의 최대 너비를 제한하고 화면 중앙에 배치합니다.
          다양한 최대 너비 옵션을 제공하여 콘텐츠 유형에 맞게 사용할 수 있습니다.
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
              <Typography variant="subtitle2">sm (900px)</Typography>
              <Typography variant="body2" color="text.secondary">
                태블릿 화면에 최적화
              </Typography>
            </Paper>
          </GridItem>
          
          <GridItem xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle2">md (1200px)</Typography>
              <Typography variant="body2" color="text.secondary">
                데스크톱 화면에 최적화
              </Typography>
            </Paper>
          </GridItem>
        </Grid>
      </Paper>
      
      {/* 그리드 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          그리드 시스템 (Grid)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          그리드 시스템은 12열 그리드를 기반으로 하며, 반응형 레이아웃을 쉽게 구현할 수 있습니다.
          화면 크기에 따라 열 너비를 다르게 지정할 수 있습니다.
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
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
            
            {Array.from({ length: 3 }).map((_, index) => (
              <GridItem key={index} xs={4}>
                <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '40' }}>
                  <Typography variant="body2">4</Typography>
                </Paper>
              </GridItem>
            ))}
            
            <GridItem xs={6}>
              <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '60' }}>
                <Typography variant="body2">6</Typography>
              </Paper>
            </GridItem>
            
            <GridItem xs={6}>
              <Paper sx={{ p: 1, textAlign: 'center', bgcolor: theme.palette.primary.main + '60' }}>
                <Typography variant="body2">6</Typography>
              </Paper>
            </GridItem>
          </Grid>
        </Box>
        
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
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
        </Box>
      </Paper>
      
      {/* 플렉스 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          플렉스 (Flex)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          플렉스 컴포넌트는 플렉스박스 레이아웃을 쉽게 구현할 수 있는 컴포넌트입니다.
          방향, 정렬, 간격 등 다양한 옵션을 제공합니다.
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            기본 플렉스 (가로 방향)
          </Typography>
          
          <Flex gap={2} sx={{ mb: 2 }}>
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 1</Typography>
              </Paper>
            </FlexItem>
            
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 2</Typography>
              </Paper>
            </FlexItem>
            
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 3</Typography>
              </Paper>
            </FlexItem>
          </Flex>
          
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            플렉스 (세로 방향)
          </Typography>
          
          <Flex direction="column" gap={2} sx={{ mb: 2 }}>
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 1</Typography>
              </Paper>
            </FlexItem>
            
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 2</Typography>
              </Paper>
            </FlexItem>
            
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 3</Typography>
              </Paper>
            </FlexItem>
          </Flex>
          
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            플렉스 (반응형)
          </Typography>
          
          <Flex responsive gap={2}>
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 1</Typography>
              </Paper>
            </FlexItem>
            
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 2</Typography>
              </Paper>
            </FlexItem>
            
            <FlexItem>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 3</Typography>
              </Paper>
            </FlexItem>
          </Flex>
        </Box>
      </Paper>
      
      {/* 스택 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          스택 (Stack)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          스택 컴포넌트는 자식 요소를 수직 또는 수평으로 쌓는 컴포넌트입니다.
          간격, 정렬, 구분선 등 다양한 옵션을 제공합니다.
        </Typography>
        
        <Grid gutter="medium">
          <GridItem xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              수직 스택 (VStack)
            </Typography>
            
            <VStack spacing={2} sx={{ mb: 2 }}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 1</Typography>
              </Paper>
              
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 2</Typography>
              </Paper>
              
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 3</Typography>
              </Paper>
            </VStack>
          </GridItem>
          
          <GridItem xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              수평 스택 (HStack)
            </Typography>
            
            <HStack spacing={2} responsive sx={{ mb: 2 }}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 1</Typography>
              </Paper>
              
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 2</Typography>
              </Paper>
              
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 3</Typography>
              </Paper>
            </HStack>
          </GridItem>
          
          <GridItem xs={12}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              구분선이 있는 스택
            </Typography>
            
            <VStack spacing={2} divider sx={{ mb: 2 }}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 1</Typography>
              </Paper>
              
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 2</Typography>
              </Paper>
              
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                <Typography variant="body2">아이템 3</Typography>
              </Paper>
            </VStack>
          </GridItem>
        </Grid>
      </Paper>
      
      {/* 반응형 박스 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          반응형 박스 (ResponsiveBox)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          반응형 박스 컴포넌트는 화면 크기에 따라 속성이 변경되는 반응형 박스 컴포넌트입니다.
          마진, 패딩, 표시 여부 등 반응형 속성을 제공합니다.
        </Typography>
        
        <Grid gutter="medium">
          <GridItem xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              반응형 패딩
            </Typography>
            
            <ResponsiveBox
              paddingXs={1}
              paddingSm={2}
              paddingMd={3}
              paddingLg={4}
              bgcolor={theme.palette.primary.main + '20'}
              sx={{ mb: 2 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                화면 크기에 따라 패딩이 변경됩니다.<br />
                xs: 8px, sm: 16px, md: 24px, lg: 32px
              </Typography>
            </ResponsiveBox>
          </GridItem>
          
          <GridItem xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              반응형 텍스트 정렬
            </Typography>
            
            <ResponsiveBox
              textAlignXs="left"
              textAlignSm="center"
              textAlignMd="right"
              padding={2}
              bgcolor={theme.palette.primary.main + '20'}
              sx={{ mb: 2 }}
            >
              <Typography variant="body2">
                화면 크기에 따라 텍스트 정렬이 변경됩니다.<br />
                xs: 왼쪽, sm: 중앙, md: 오른쪽
              </Typography>
            </ResponsiveBox>
          </GridItem>
          
          <GridItem xs={12}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              반응형 표시/숨김
            </Typography>
            
            <Grid gutter="medium">
              <GridItem xs={12} md={4}>
                <Show xs>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                    <Typography variant="body2">
                      모바일에서만 표시됩니다.
                    </Typography>
                  </Paper>
                </Show>
              </GridItem>
              
              <GridItem xs={12} md={4}>
                <Show sm>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                    <Typography variant="body2">
                      태블릿에서만 표시됩니다.
                    </Typography>
                  </Paper>
                </Show>
              </GridItem>
              
              <GridItem xs={12} md={4}>
                <Show md>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: theme.palette.primary.main + '20' }}>
                    <Typography variant="body2">
                      데스크톱에서만 표시됩니다.
                    </Typography>
                  </Paper>
                </Show>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Paper>
      
      {/* 신비로운 디바이더 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          신비로운 디바이더 (MysticalDivider)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          신비로운 디바이더 컴포넌트는 섹션 구분을 위한 신비로운 디바이더 컴포넌트입니다.
          다양한 스타일 및 장식 효과를 제공합니다.
        </Typography>
        
        <VStack spacing={4}>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              기본 디바이더
            </Typography>
            
            <MysticalDivider />
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              변형
            </Typography>
            
            <VStack spacing={2}>
              <MysticalDivider variant="primary" />
              <MysticalDivider variant="secondary" />
              <MysticalDivider variant="mystical" />
            </VStack>
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              텍스트 및 아이콘
            </Typography>
            
            <VStack spacing={2}>
              <MysticalDivider variant="primary" text="Primary" />
              <MysticalDivider variant="secondary" text="Secondary" />
              <MysticalDivider variant="mystical" text="Mystical" />
              <MysticalDivider variant="primary" icon={<AutoAwesomeIcon />} />
              <MysticalDivider variant="secondary" icon={<StarIcon />} />
              <MysticalDivider variant="mystical" icon={<WbTwilightIcon />} />
            </VStack>
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              특수 효과
            </Typography>
            
            <VStack spacing={2}>
              <MysticalDivider variant="mystical" thickness={2} glow />
              <MysticalDivider variant="mystical" text="글로우 효과" glow />
              <MysticalDivider variant="mystical" decorated />
              <MysticalDivider variant="mystical" text="장식 효과" decorated />
            </VStack>
          </Box>
        </VStack>
      </Paper>
    </Box>
  );
}
