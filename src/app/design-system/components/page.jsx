'use client';

import { useState } from 'react';
import { Box, Typography, Container, Paper, Divider, Grid, Stack } from '@mui/material';
import TarotCard from '../../components/TarotCard';
import MysticalButton from '../../components/MysticalButton';
import MysticalTextField from '../../components/MysticalTextField';
import MysticalProgress from '../../components/MysticalProgress';
import QuestionCard from '../../components/test/QuestionCard';
import ResultCard from '../../components/ResultCard';
import ButtonExample from '../../components/examples/ButtonExample';
import CardExample from '../../components/examples/CardExample';
import ProgressExample from '../../components/examples/ProgressExample';
import TestQuestionExample from '../../components/examples/TestQuestionExample';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

/**
 * 컴포넌트 문서 페이지
 *
 * 디자인 시스템의 컴포넌트를 문서화하는 페이지입니다.
 */
export default function ComponentsPage() {
  // 상태 관리
  const [progress, setProgress] = useState(60);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        컴포넌트 시스템
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        달빛 연애 연구소의 컴포넌트 시스템은 신비로운 타로 카드 컨셉을 반영합니다.
        Material UI를 기반으로 하되, 커스텀 스타일링을 적용하여 독특한 분위기를 연출합니다.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* 타로 카드 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          타로 카드 컴포넌트 (TarotCard, FlipCard, QuestionCard, ResultCard)
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          타로 카드 컴포넌트는 콘텐츠를 담는 기본 컨테이너입니다.
          신비로운 타로 카드 디자인을 적용하여 특별한 분위기를 연출합니다.
          다양한 변형과 애니메이션 효과를 지원합니다.
        </Typography>

        <CardExample />
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 버튼 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          신비로운 버튼 (MysticalButton)
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          신비로운 버튼 컴포넌트는 사용자 상호작용을 위한 버튼입니다.
          다양한 변형과 크기, 상태를 지원하며 접근성을 준수합니다.
        </Typography>

        <ButtonExample />
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 텍스트 필드 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          신비로운 텍스트 필드 (MysticalTextField)
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          신비로운 텍스트 필드 컴포넌트는 사용자 입력을 받기 위한 필드입니다.
          다양한 변형과 아이콘을 지원합니다.
        </Typography>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            변형
          </Typography>

          <Stack spacing={3} sx={{ mb: 3 }}>
            <MysticalTextField
              variant="primary"
              label="Primary 변형"
              placeholder="텍스트를 입력하세요"
            />

            <MysticalTextField
              variant="secondary"
              label="Secondary 변형"
              placeholder="텍스트를 입력하세요"
            />

            <MysticalTextField
              variant="mystical"
              label="Mystical 변형"
              placeholder="텍스트를 입력하세요"
            />
          </Stack>

          <Typography variant="h6" sx={{ mb: 2 }}>
            아이콘
          </Typography>

          <Stack spacing={3} sx={{ mb: 3 }}>
            <MysticalTextField
              variant="mystical"
              label="시작 아이콘"
              placeholder="검색어를 입력하세요"
              startIcon={<SearchIcon />}
            />

            <MysticalTextField
              variant="mystical"
              label="끝 아이콘"
              placeholder="중요한 정보를 입력하세요"
              endIcon={<StarIcon />}
            />
          </Stack>

          <Typography variant="h6" sx={{ mb: 2 }}>
            상태
          </Typography>

          <Stack spacing={3}>
            <MysticalTextField
              variant="mystical"
              label="기본"
              placeholder="텍스트를 입력하세요"
            />

            <MysticalTextField
              variant="mystical"
              label="비활성화"
              placeholder="텍스트를 입력하세요"
              disabled
            />

            <MysticalTextField
              variant="mystical"
              label="오류"
              placeholder="텍스트를 입력하세요"
              error
              helperText="오류가 발생했습니다"
            />
          </Stack>
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 테스트 질문 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          테스트 질문 컴포넌트
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          테스트 질문 컴포넌트는 MBTI 테스트 질문과 답변 옵션을 표시하기 위한 컴포넌트입니다.
          질문 카드, 답변 옵션, 질문 전환 등 다양한 컴포넌트를 제공합니다.
        </Typography>

        <TestQuestionExample />
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 진행 상태 표시기 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          진행 상태 표시기 컴포넌트
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          진행 상태 표시기 컴포넌트는 다양한 로딩 상태와 진행 상태를 표시하기 위한 컴포넌트입니다.
          선형 진행 표시기, 스텝퍼, 스피너, 로더, 네비게이션 등 다양한 컴포넌트를 제공합니다.
        </Typography>

        <ProgressExample />
      </Box>


    </Container>
  );
}
