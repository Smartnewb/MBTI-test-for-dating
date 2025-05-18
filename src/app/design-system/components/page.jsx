'use client';

import { useState } from 'react';
import { Box, Typography, Container, Paper, Divider, Grid, Stack } from '@mui/material';
import TarotCard from '../../components/TarotCard';
import MysticalButton from '../../components/MysticalButton';
import MysticalTextField from '../../components/MysticalTextField';
import MysticalProgress from '../../components/MysticalProgress';
import QuestionCard from '../../components/QuestionCard';
import ResultCard from '../../components/ResultCard';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';

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
          타로 카드 (TarotCard)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          타로 카드 컴포넌트는 콘텐츠를 담는 기본 컨테이너입니다. 
          신비로운 타로 카드 디자인을 적용하여 특별한 분위기를 연출합니다.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TarotCard title="Primary 변형" variant="primary">
              <Typography variant="body1">
                Primary 변형은 보라색 강조 색상을 사용합니다.
                주요 콘텐츠를 표시할 때 사용합니다.
              </Typography>
            </TarotCard>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <TarotCard title="Secondary 변형" variant="secondary">
              <Typography variant="body1">
                Secondary 변형은 골드 강조 색상을 사용합니다.
                보조 콘텐츠를 표시할 때 사용합니다.
              </Typography>
            </TarotCard>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <TarotCard title="Mystical 변형" variant="mystical">
              <Typography variant="body1">
                Mystical 변형은 보라색과 골드의 그라데이션을 사용합니다.
                특별한 콘텐츠를 강조할 때 사용합니다.
              </Typography>
            </TarotCard>
          </Grid>
        </Grid>
      </Box>
      
      <Divider sx={{ my: 4 }} />
      
      {/* 버튼 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          신비로운 버튼 (MysticalButton)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          신비로운 버튼 컴포넌트는 사용자 상호작용을 위한 버튼입니다.
          다양한 변형과 크기를 지원합니다.
        </Typography>
        
        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            변형
          </Typography>
          
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <MysticalButton variant="mystical">
              Mystical 변형
            </MysticalButton>
            
            <MysticalButton variant="tarot">
              Tarot 변형
            </MysticalButton>
            
            <MysticalButton variant="glow">
              Glow 변형
            </MysticalButton>
          </Stack>
          
          <Typography variant="h6" sx={{ mb: 2 }}>
            크기
          </Typography>
          
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <MysticalButton variant="mystical" size="small">
              Small
            </MysticalButton>
            
            <MysticalButton variant="mystical" size="medium">
              Medium
            </MysticalButton>
            
            <MysticalButton variant="mystical" size="large">
              Large
            </MysticalButton>
          </Stack>
          
          <Typography variant="h6" sx={{ mb: 2 }}>
            상태
          </Typography>
          
          <Stack direction="row" spacing={2}>
            <MysticalButton variant="mystical">
              기본
            </MysticalButton>
            
            <MysticalButton variant="mystical" disabled>
              비활성화
            </MysticalButton>
            
            <MysticalButton variant="mystical" loading>
              로딩 중
            </MysticalButton>
          </Stack>
        </Paper>
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
      
      {/* 진행 상태 표시기 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          신비로운 진행 상태 표시기 (MysticalProgress)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          신비로운 진행 상태 표시기 컴포넌트는 진행 상태를 표시하기 위한 컴포넌트입니다.
          다양한 변형과 옵션을 지원합니다.
        </Typography>
        
        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            변형
          </Typography>
          
          <Stack spacing={3} sx={{ mb: 3 }}>
            <MysticalProgress 
              variant="primary" 
              value={progress} 
              label="Primary 변형" 
            />
            
            <MysticalProgress 
              variant="secondary" 
              value={progress} 
              label="Secondary 변형" 
            />
            
            <MysticalProgress 
              variant="mystical" 
              value={progress} 
              label="Mystical 변형" 
            />
          </Stack>
          
          <Typography variant="h6" sx={{ mb: 2 }}>
            단계 표시기
          </Typography>
          
          <MysticalProgress 
            variant="mystical" 
            value={progress} 
            label="단계 표시기" 
            totalSteps={5}
            currentStep={3}
          />
          
          <Box sx={{ mt: 3 }}>
            <MysticalButton 
              variant="mystical" 
              onClick={() => setProgress(prev => Math.min(prev + 10, 100))}
              sx={{ mr: 1 }}
            >
              증가 (+10%)
            </MysticalButton>
            
            <MysticalButton 
              variant="tarot" 
              onClick={() => setProgress(prev => Math.max(prev - 10, 0))}
            >
              감소 (-10%)
            </MysticalButton>
          </Box>
        </Paper>
      </Box>
      
      <Divider sx={{ my: 4 }} />
      
      {/* 질문 카드 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          질문 카드 (QuestionCard)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          질문 카드 컴포넌트는 MBTI 테스트 질문을 표시하기 위한 컴포넌트입니다.
          질문 텍스트, 선택지, 진행 상태 등을 표시합니다.
        </Typography>
        
        <QuestionCard 
          questionNumber={3}
          totalQuestions={24}
          questionText="연애할 때 데이트 계획은?"
          optionA="함께 세우는 게 재밌어요"
          optionB="미리 계획해주면 좋겠어요"
          selectedOption={selectedOption}
          onAnswer={setSelectedOption}
          onPrevious={() => alert('이전 질문으로 이동')}
          sx={{ mb: 3 }}
        />
      </Box>
      
      <Divider sx={{ my: 4 }} />
      
      {/* 결과 카드 컴포넌트 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          결과 카드 (ResultCard)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          결과 카드 컴포넌트는 MBTI 테스트 결과를 표시하기 위한 컴포넌트입니다.
          MBTI 유형, 설명, 강점, 약점, 연애 스타일 등을 표시합니다.
        </Typography>
        
        <ResultCard 
          mbtiType="INFP"
          mbtiName="중재자"
          description="이상주의적이고 감성적인 당신은 깊은 감정과 진정성을 중요시합니다."
          strengths={['공감 능력', '진실된 소통', '창의적 표현', '깊은 유대감']}
          weaknesses={['이상적 기대', '현실과 괴리', '갈등 회피', '감정 기복']}
          datingStyle="깊은 정서적 연결과 의미 있는 대화를 통해 파트너와 특별한 유대감을 형성합니다."
          mbtiColor="#8E24AA"
        />
      </Box>
    </Container>
  );
}
