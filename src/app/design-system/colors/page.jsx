'use client';

import { Box, Typography, Container, Paper, Divider } from '@mui/material';
import ColorPalette from '../../components/design-system/ColorPalette';
import { colors } from '../../styles/tokens/colors';

/**
 * 색상 시스템 문서 페이지
 * 
 * 디자인 시스템의 색상 팔레트를 문서화하는 페이지입니다.
 */
export default function ColorsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        색상 시스템
      </Typography>
      
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        달빛 연애 연구소의 색상 시스템은 신비로운 타로 카드 컨셉을 반영합니다.
        어두운 배경에 보라색과 골드 색상을 강조색으로 사용하여 신비롭고 고급스러운 분위기를 연출합니다.
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      <Paper elevation={3} sx={{ mb: 6, overflow: 'hidden' }}>
        <ColorPalette />
      </Paper>
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          색상 사용 가이드라인
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          주요 색상 (Primary)
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          보라색(#6B3FA0)은 달빛 연애 연구소의 주요 브랜드 색상입니다. 
          버튼, 링크, 강조 요소 등 주요 상호작용 요소에 사용합니다.
          신비로움과 직관, 창의성을 상징하며 MBTI 테스트의 정신적 측면을 나타냅니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          보조 색상 (Secondary)
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          골드(#D4AF37)는 보조 색상으로 사용됩니다.
          특별한 강조, 성취, 결과 표시 등에 사용합니다.
          고급스러움과 가치, 특별함을 상징하며 테스트 결과의 중요성을 강조합니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          배경 색상
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          검은색 배경(#000000)은 별이 빛나는 밤하늘을 연상시키며 신비로운 분위기를 조성합니다.
          카드와 요소들은 약간 밝은 검은색(#121212, #1E1E1E)을 사용하여 깊이감을 더합니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          텍스트 색상
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          주요 텍스트는 흰색(#FFFFFF)을 사용하여 어두운 배경에서 가독성을 높입니다.
          보조 텍스트는 은색(#C0C0C0)을 사용하여 계층 구조를 나타냅니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          의미적 색상
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          성공, 정보, 경고, 오류 등을 나타내는 의미적 색상은 Material UI의 기본 색상을 기반으로 하되,
          전체적인 디자인 시스템과 조화를 이루도록 조정되었습니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          그라데이션
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          그라데이션은 신비로운 분위기를 강화하는 데 사용됩니다.
          특히 보라색과 골드의 그라데이션(Mystical)은 특별한 요소나 중요한 결과를 강조할 때 사용합니다.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2 }}>
          MBTI 유형별 색상
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          각 MBTI 유형은 고유한 색상을 가지고 있으며, 이는 결과 페이지와 유형 설명에 사용됩니다.
          분석가형(NT)은 파란색 계열, 외교관형(NF)은 보라색 계열, 관리자형(SJ)은 청록색 계열, 탐험가형(SP)은 주황색 계열을 사용합니다.
        </Typography>
      </Box>
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          접근성 고려사항
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          모든 색상 조합은 WCAG 2.1 AA 표준을 준수하도록 설계되었습니다.
          주요 텍스트와 배경 간의 대비율은 최소 4.5:1, 큰 텍스트는 최소 3:1의 대비율을 유지합니다.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          색상만으로 정보를 전달하지 않고, 항상 텍스트나 아이콘 등 다른 시각적 요소와 함께 사용합니다.
        </Typography>
        
        <Typography variant="body1">
          색맹이나 색약이 있는 사용자를 위해 중요한 UI 요소는 색상 외에도 형태, 텍스트, 위치 등으로 구분할 수 있도록 설계되었습니다.
        </Typography>
      </Box>
    </Container>
  );
}
