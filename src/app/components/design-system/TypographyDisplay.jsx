'use client';

import { Box, Typography, Paper, Grid, Divider, useTheme } from '@mui/material';
import { tokens } from '../../styles/tokens';

/**
 * 타이포그래피 샘플 컴포넌트
 *
 * 타이포그래피 변형을 표시하는 컴포넌트입니다.
 */
function TypographySample({ variant, text, description }) {
  return (
    <Paper sx={{ p: 3, mb: 2, bgcolor: 'background.paper' }}>
      <Typography variant={variant} gutterBottom>
        {text}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="caption" color="text.secondary" component="div">
          Variant: <code>{variant}</code>
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          Font Family: <code>{typography.variants[variant].fontFamily}</code>
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          Font Size: <code>{typography.variants[variant].fontSize}</code>
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          Font Weight: <code>{typography.variants[variant].fontWeight}</code>
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          Line Height: <code>{typography.variants[variant].lineHeight}</code>
        </Typography>
        <Typography variant="caption" color="text.secondary" component="div">
          Letter Spacing: <code>{typography.variants[variant].letterSpacing}</code>
        </Typography>
        {description && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {description}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}

/**
 * 폰트 패밀리 샘플 컴포넌트
 *
 * 폰트 패밀리를 표시하는 컴포넌트입니다.
 */
function FontFamilySample({ name, fontFamily, sampleText }) {
  return (
    <Paper sx={{ p: 3, mb: 2, bgcolor: 'background.paper' }}>
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography sx={{ fontFamily, fontSize: '1.25rem', mb: 2 }}>
        {sampleText}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        <code>{fontFamily}</code>
      </Typography>
    </Paper>
  );
}

/**
 * 폰트 크기 샘플 컴포넌트
 *
 * 폰트 크기를 표시하는 컴포넌트입니다.
 */
function FontSizeSample({ name, size, sampleText }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ p: 2, height: '100%', bgcolor: 'background.paper' }}>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          {name}: <code>{size}</code>
        </Typography>
        <Typography sx={{ fontSize: size }}>
          {sampleText}
        </Typography>
      </Paper>
    </Grid>
  );
}

/**
 * 폰트 두께 샘플 컴포넌트
 *
 * 폰트 두께를 표시하는 컴포넌트입니다.
 */
function FontWeightSample({ name, weight, sampleText }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ p: 2, height: '100%', bgcolor: 'background.paper' }}>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          {name}: <code>{weight}</code>
        </Typography>
        <Typography sx={{ fontWeight: weight }}>
          {sampleText}
        </Typography>
      </Paper>
    </Grid>
  );
}

/**
 * 특별 스타일 샘플 컴포넌트
 *
 * 특별한 타이포그래피 스타일을 표시하는 컴포넌트입니다.
 */
function SpecialStyleSample({ name, style, sampleText }) {
  return (
    <Paper sx={{ p: 3, mb: 2, bgcolor: 'background.paper' }}>
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Box sx={{ ...style, mb: 2 }}>
        {sampleText}
      </Box>
      <Typography variant="caption" color="text.secondary" component="div">
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(style, null, 2)}
        </pre>
      </Typography>
    </Paper>
  );
}

/**
 * 타이포그래피 디스플레이 컴포넌트
 *
 * 전체 타이포그래피 시스템을 표시하는 컴포넌트입니다.
 */
export default function TypographyDisplay() {
  const theme = useTheme();

  // 제목 변형
  const headingVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  // 본문 변형
  const bodyVariants = ['subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline'];

  // 특별 스타일
  const typography = tokens.typography;
  const specialStyles = {
    'Mystical': typography.variants.mystical,
    'Tarot': typography.variants.tarot,
    'Tarot Description': typography.variants.tarotDescription,
    'Quote': typography.variants.quote,
    'Result Title': typography.variants.resultTitle,
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        타이포그래피 시스템
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          폰트 패밀리
        </Typography>
        <FontFamilySample
          name="Primary Font (본문용)"
          fontFamily={typography.fontFamily.primary}
          sampleText="달빛 연애 연구소에 오신 것을 환영합니다. MBTI 테스트를 통해 당신의 연애 스타일을 알아보세요."
        />
        <FontFamilySample
          name="Secondary Font (제목용)"
          fontFamily={typography.fontFamily.secondary}
          sampleText="달빛 연애 연구소에 오신 것을 환영합니다. MBTI 테스트를 통해 당신의 연애 스타일을 알아보세요."
        />
        <FontFamilySample
          name="Decorative Font (장식용)"
          fontFamily={typography.fontFamily.decorative}
          sampleText="달빛 연애 연구소에 오신 것을 환영합니다. MBTI 테스트를 통해 당신의 연애 스타일을 알아보세요."
        />
        <FontFamilySample
          name="Monospace Font (코드용)"
          fontFamily={typography.fontFamily.monospace}
          sampleText="달빛 연애 연구소에 오신 것을 환영합니다. MBTI 테스트를 통해 당신의 연애 스타일을 알아보세요."
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          폰트 크기
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(typography.fontSize)
            .filter(([key]) => key !== 'mobile')
            .map(([name, size]) => (
              <FontSizeSample
                key={name}
                name={name}
                size={size}
                sampleText="Aa 가나다"
              />
            ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          폰트 두께
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(typography.fontWeight).map(([name, weight]) => (
            <FontWeightSample
              key={name}
              name={name}
              weight={weight}
              sampleText="달빛 연애 연구소 (Moonlight Dating Lab)"
            />
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          제목 스타일
        </Typography>
        {headingVariants.map(variant => (
          <TypographySample
            key={variant}
            variant={variant}
            text={`${variant} - 달빛 연애 연구소`}
            description={
              variant === 'h1' ? '페이지 제목에 사용' :
              variant === 'h2' ? '섹션 제목에 사용' :
              variant === 'h3' ? '서브섹션 제목에 사용' :
              variant === 'h4' ? '카드 제목에 사용' :
              variant === 'h5' ? '그룹 제목에 사용' :
              '작은 제목에 사용'
            }
          />
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          본문 스타일
        </Typography>
        {bodyVariants.map(variant => (
          <TypographySample
            key={variant}
            variant={variant}
            text={
              variant === 'subtitle1' || variant === 'subtitle2' ? `${variant} - 달빛 연애 연구소의 부제목입니다.` :
              variant === 'body1' || variant === 'body2' ? `${variant} - 달빛 연애 연구소에 오신 것을 환영합니다. MBTI 테스트를 통해 당신의 연애 스타일을 알아보세요. 24개의 질문에 답하면 당신의 MBTI 유형과 연애 성향, 그리고 가장 잘 맞는 이상형을 알려드립니다.` :
              variant === 'button' ? `${variant} - 테스트 시작하기` :
              variant === 'caption' ? `${variant} - 이미지 설명 텍스트` :
              `${variant} - 특별한 상단 텍스트`
            }
            description={
              variant === 'subtitle1' ? '큰 부제목에 사용' :
              variant === 'subtitle2' ? '작은 부제목에 사용' :
              variant === 'body1' ? '주요 본문 텍스트에 사용' :
              variant === 'body2' ? '보조 본문 텍스트에 사용' :
              variant === 'button' ? '버튼 텍스트에 사용' :
              variant === 'caption' ? '캡션 텍스트에 사용' :
              '상단 작은 텍스트에 사용'
            }
          />
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          특별 스타일
        </Typography>
        {Object.entries(specialStyles).map(([name, style]) => (
          <SpecialStyleSample
            key={name}
            name={name}
            style={style}
            sampleText={
              name === 'Mystical' ? '신비로운 달빛 아래, 당신의 운명을 읽어드립니다.' :
              name === 'Tarot' ? '운명의 카드' :
              name === 'Tarot Description' ? '이 카드는 당신의 연애 성향과 미래의 파트너에 대한 힌트를 제공합니다.' :
              name === 'Result Title' ? '당신은 INFP 중재자입니다' :
              '당신의 마음은 깊은 바다와 같아서, 그 안에 수많은 보물이 숨겨져 있습니다. 그 보물을 발견하는 것은 당신과 함께하는 사람의 특권입니다.'
            }
          />
        ))}
      </Box>
    </Box>
  );
}
