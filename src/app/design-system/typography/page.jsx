'use client';

import { Box, Typography, Container, Paper, Divider } from '@mui/material';
import TypographyDisplay from '../../components/design-system/TypographyDisplay';
import { typography } from '../../styles/tokens/typography';

/**
 * 타이포그래피 시스템 문서 페이지
 * 
 * 디자인 시스템의 타이포그래피를 문서화하는 페이지입니다.
 */
export default function TypographyPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        타이포그래피 시스템
      </Typography>
      
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        달빛 연애 연구소의 타이포그래피 시스템은 신비로운 타로 카드 컨셉을 반영합니다.
        제목에는 우아한 세리프 폰트를, 본문에는 가독성 높은 산세리프 폰트를 사용하여 
        신비롭고 고급스러운 분위기를 연출합니다.
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      <Paper elevation={3} sx={{ mb: 6, overflow: 'hidden' }}>
        <TypographyDisplay />
      </Paper>
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          타이포그래피 사용 가이드라인
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          폰트 패밀리
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Primary Font (Pretendard/Noto Sans KR)</strong>: 본문 텍스트, 버튼, 입력 필드 등 대부분의 UI 요소에 사용합니다.
          가독성이 높고 다양한 두께를 지원하여 계층 구조를 표현하기에 적합합니다.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Secondary Font (Playfair Display/Nanum Myeongjo)</strong>: 제목, 강조 텍스트, 특별한 문구 등에 사용합니다.
          우아하고 고급스러운 느낌을 주며, 신비로운 타로 카드 컨셉을 강화합니다.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Monospace Font (Roboto Mono)</strong>: 코드, 기술적 정보, 특별한 데이터 표시 등에 사용합니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          제목 스타일
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          제목(h1-h6)은 Secondary Font를 사용하여 신비롭고 고급스러운 느낌을 줍니다.
          페이지 제목은 h1, 주요 섹션은 h2, 서브섹션은 h3, 카드 제목은 h4, 그룹 제목은 h5, 작은 제목은 h6을 사용합니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          본문 스타일
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          본문 텍스트는 Primary Font를 사용하여 가독성을 높입니다.
          주요 본문은 body1, 보조 본문은 body2를 사용합니다.
          부제목은 subtitle1과 subtitle2를 사용하여 제목과 본문 사이의 계층 구조를 표현합니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          특별 스타일
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Mystical</strong>: 특별한 문구, 예언, 결과 해석 등에 사용합니다. 이탤릭체와 넓은 자간으로 신비로운 느낌을 줍니다.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Tarot</strong>: 타로 카드 이름, 중요한 키워드 등에 사용합니다. 대문자와 넓은 자간으로 강조 효과를 줍니다.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Quote</strong>: 인용문, 명언, 중요한 메시지 등에 사용합니다. 이탤릭체와 왼쪽 테두리로 구분감을 줍니다.
        </Typography>
      </Box>
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          반응형 타이포그래피
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          모바일 환경(600px 이하)에서는 제목 크기가 자동으로 축소되어 작은 화면에서도 가독성을 유지합니다.
          h1은 3rem에서 2rem으로, h2는 2.25rem에서 1.75rem으로 축소됩니다.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          태블릿 환경(900px 이하)에서도 큰 제목(h1-h3)의 크기가 적절히 조정됩니다.
        </Typography>
        
        <Typography variant="body1">
          Material UI의 <code>responsiveFontSizes</code> 함수를 사용하여 모든 타이포그래피 변형이 화면 크기에 따라 
          자동으로 조정되도록 설정되어 있습니다.
        </Typography>
      </Box>
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          접근성 고려사항
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          모든 텍스트는 WCAG 2.1 AA 표준을 준수하도록 설계되었습니다.
          본문 텍스트의 최소 크기는 14px(0.875rem)이며, 충분한 행간(1.5)을 제공하여 가독성을 높입니다.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          폰트 두께는 최소 400(regular)을 사용하여 어두운 배경에서도 텍스트가 명확하게 보이도록 합니다.
          중요한 정보는 500(medium) 이상의 두께를 사용하여 강조합니다.
        </Typography>
        
        <Typography variant="body1">
          텍스트 색상은 배경과의 대비율이 최소 4.5:1(작은 텍스트) 또는 3:1(큰 텍스트)을 유지하도록 설정되었습니다.
        </Typography>
      </Box>
    </Container>
  );
}
