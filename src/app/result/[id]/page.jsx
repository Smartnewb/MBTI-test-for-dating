'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AnimatedElement } from '../../components/animations';
import { PageLayout, Section } from '../../components/layout';
import TestResult from '../../components/test/TestResult';
import { getTestResultByShareId } from '../../services/resultService';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MBTI_TYPES } from '../../utils/mbti';

/**
 * 정적 경로 생성을 위한 함수
 * Next.js의 정적 사이트 생성(SSG)을 위해 필요
 */
export function generateStaticParams() {
  // 모든 MBTI 유형에 대한 샘플 ID 생성
  return MBTI_TYPES.map(type => ({
    id: `sample-${type.toLowerCase()}`,
  }));
}

/**
 * 공유된 MBTI 테스트 결과 페이지
 *
 * 공유 ID로 테스트 결과를 가져와 표시합니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {Object} props.params - URL 파라미터
 * @param {string} props.params.id - 공유 ID
 */
export default function SharedResultPage({ params }) {
  const router = useRouter();
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 공유 ID
  const shareId = params.id;

  // 페이지 로드 시 공유된 결과 가져오기
  useEffect(() => {
    const fetchSharedResult = async () => {
      try {
        setIsLoading(true);

        if (!shareId) {
          throw new Error('공유 ID가 없습니다.');
        }

        const sharedResult = await getTestResultByShareId(shareId);

        if (!sharedResult) {
          throw new Error('결과를 찾을 수 없습니다.');
        }

        setResult(sharedResult);
      } catch (error) {
        console.error('Error fetching shared result:', error);
        setError(error.message || '결과를 불러오는 데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSharedResult();
  }, [shareId]);

  // 테스트 시작 핸들러
  const handleStartTest = () => {
    router.push('/test');
  };

  // 로딩 중 표시
  if (isLoading) {
    return (
      <PageLayout variant="result">
        <Section centered fullHeight>
          <CircularProgress color="secondary" />
          <Typography variant="h5" sx={{ mt: 3 }}>
            결과를 불러오는 중...
          </Typography>
        </Section>
      </PageLayout>
    );
  }

  // 에러 표시
  if (error) {
    return (
      <PageLayout variant="result">
        <Section centered fullHeight>
          <Typography variant="h4" color="error">
            오류가 발생했습니다
          </Typography>
          <Typography variant="body1" color="error" sx={{ mt: 2, mb: 4 }}>
            {error}
          </Typography>
          <Button variant="contained" color="primary" onClick={() => router.push('/test')}>
            테스트 시작하기
          </Button>
        </Section>
      </PageLayout>
    );
  }

  // 결과가 없는 경우
  if (!result || !result.mbtiType) {
    return (
      <PageLayout variant="result">
        <Section centered fullHeight>
          <Typography variant="h4">결과를 찾을 수 없습니다</Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            공유된 결과가 만료되었거나 존재하지 않습니다.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => router.push('/test')}>
            테스트 시작하기
          </Button>
        </Section>
      </PageLayout>
    );
  }

  return (
    <PageLayout variant="result">
      <Section centered>
        <AnimatedElement animation="fadeIn" duration="normal">
          <Box sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <FavoriteIcon
                sx={{
                  fontSize: 60,
                  color: 'secondary.main',
                  filter: 'drop-shadow(0 0 10px rgba(156, 39, 176, 0.5))',
                }}
              />
            </Box>

            <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
              MBTI 연애 유형 결과
            </Typography>

            <TestResult
              mbtiType={result.mbtiType}
              scores={result.scores}
              idealType={result.idealType}
              worstMatch={result.worstMatch}
              onRestart={handleStartTest}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button variant="contained" color="primary" onClick={handleStartTest}>
                나도 테스트 해보기
              </Button>
            </Box>
          </Box>
        </AnimatedElement>
      </Section>
    </PageLayout>
  );
}
