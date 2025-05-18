# 디자인 시스템 문서

## 개요

달빛 연애 연구소의 디자인 시스템은 신비로운 타로 카드 컨셉을 기반으로 합니다. 어두운 배경에 보라색과 골드 색상을 강조색으로 사용하여 신비롭고 고급스러운 분위기를 연출합니다.

## 색상 시스템

### 주요 색상

- **Primary (보라색)**: `#6B3FA0`
  - Light: `#8E6DB6`
  - Dark: `#4A235A`
  - Contrast Text: `#FFFFFF`

- **Secondary (골드)**: `#D4AF37`
  - Light: `#E6C65C`
  - Dark: `#B8860B`
  - Contrast Text: `#000000`

### 배경 색상

- **Default**: `#000000` (검은색 배경)
- **Paper**: `#121212` (약간 밝은 검은색)
- **Card**: `#1E1E1E` (카드 배경)
- **Elevated**: `#2D2D2D` (상승된 요소 배경)

### 텍스트 색상

- **Primary**: `#FFFFFF` (흰색)
- **Secondary**: `#C0C0C0` (은색)
- **Disabled**: `#6C6C6C`
- **Hint**: `#9E9E9E`

### 의미적 색상

- **Success**: `#4CAF50`
- **Info**: `#2196F3`
- **Warning**: `#FF9800`
- **Error**: `#F44336`

### 그라데이션

- **Primary**: `linear-gradient(135deg, #6B3FA0 0%, #4A235A 100%)`
- **Secondary**: `linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)`
- **Dark**: `linear-gradient(135deg, #121212 0%, #000000 100%)`
- **Mystical**: `linear-gradient(135deg, #6B3FA0 0%, #D4AF37 100%)`

## 타이포그래피

### 폰트 패밀리

- **Primary**: `"Pretendard", "Noto Sans KR", sans-serif`
- **Secondary**: `"Playfair Display", "Nanum Myeongjo", serif`
- **Monospace**: `"Roboto Mono", monospace`

### 폰트 크기

- **xs**: `0.75rem` (12px)
- **sm**: `0.875rem` (14px)
- **md**: `1rem` (16px)
- **lg**: `1.125rem` (18px)
- **xl**: `1.25rem` (20px)
- **2xl**: `1.5rem` (24px)
- **3xl**: `1.875rem` (30px)
- **4xl**: `2.25rem` (36px)
- **5xl**: `3rem` (48px)
- **6xl**: `3.75rem` (60px)

### 폰트 두께

- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### 텍스트 변형

- **h1 ~ h6**: 제목 텍스트 (Playfair Display/Nanum Myeongjo)
- **subtitle1, subtitle2**: 부제목 텍스트
- **body1, body2**: 본문 텍스트
- **button**: 버튼 텍스트
- **caption**: 캡션 텍스트
- **overline**: 오버라인 텍스트

## 간격 시스템

기본 간격 단위는 4px입니다. 모든 간격은 이 단위의 배수로 정의됩니다.

- **0**: `0`
- **1**: `4px`
- **2**: `8px`
- **3**: `12px`
- **4**: `16px`
- **5**: `20px`
- **6**: `24px`
- **8**: `32px`
- **10**: `40px`
- **12**: `48px`
- **16**: `64px`
- **20**: `80px`
- **24**: `96px`
- **32**: `128px`
- **40**: `160px`
- **48**: `192px`
- **56**: `224px`
- **64**: `256px`

## 반응형 브레이크포인트

- **xs**: 0px
- **sm**: 600px
- **md**: 900px
- **lg**: 1200px
- **xl**: 1536px

## 그림자

- **none**: `none`
- **sm**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **md**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **lg**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **xl**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`
- **2xl**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`
- **inner**: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)`
- **outline**: `0 0 0 3px rgba(107, 63, 160, 0.5)`
- **mystical**: `0 0 15px rgba(107, 63, 160, 0.5), 0 0 30px rgba(212, 175, 55, 0.3)`
- **glow**: `0 0 10px rgba(212, 175, 55, 0.5)`

## 테두리

### 반경

- **none**: `0`
- **sm**: `0.125rem`
- **md**: `0.25rem`
- **lg**: `0.5rem`
- **xl**: `1rem`
- **2xl**: `1.5rem`
- **full**: `9999px`

### 두께

- **none**: `0`
- **thin**: `1px`
- **thick**: `2px`
- **thicker**: `4px`

### 스타일

- **solid**: `solid`
- **dashed**: `dashed`
- **dotted**: `dotted`

## 애니메이션

### 지속 시간

- **fastest**: `100ms`
- **fast**: `200ms`
- **normal**: `300ms`
- **slow**: `400ms`
- **slowest**: `500ms`

### 이징

- **easeInOut**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **easeOut**: `cubic-bezier(0.0, 0, 0.2, 1)`
- **easeIn**: `cubic-bezier(0.4, 0, 1, 1)`
- **sharp**: `cubic-bezier(0.4, 0, 0.6, 1)`
- **mystical**: `cubic-bezier(0.2, 0.8, 0.2, 1)`

## z-index

- **hide**: -1
- **auto**: `auto`
- **base**: 0
- **docked**: 10
- **dropdown**: 1000
- **sticky**: 1100
- **banner**: 1200
- **overlay**: 1300
- **modal**: 1400
- **popover**: 1500
- **skipLink**: 1600
- **toast**: 1700
- **tooltip**: 1800

## 컴포넌트 변형

### 버튼

- **contained**: 채워진 버튼
- **outlined**: 외곽선 버튼
- **text**: 텍스트 버튼
- **mystical**: 신비로운 그라데이션 버튼 (커스텀)

### 카드

- **default**: 기본 카드
- **tarot**: 타로 카드 스타일 (커스텀)

## 유틸리티 클래스

- **.fade-in**: 페이드인 애니메이션
- **.slide-up**: 슬라이드업 애니메이션
- **.glow-effect**: 빛나는 효과 애니메이션
- **.gradient-text**: 그라데이션 텍스트 효과
- **.border-glow**: 테두리 빛나는 효과
- **.tarot-bg**: 타로 패턴 배경 효과
- **.stars-bg**: 별 배경 효과

## 사용 예시

### 테마 적용

```jsx
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/styles/theme';

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
```

### 컴포넌트 사용

```jsx
import { Button, Card, Typography } from '@mui/material';

function Example() {
  return (
    <div>
      <Typography variant="h1">달빛 연애 연구소</Typography>
      <Typography variant="subtitle1">MBTI 연애 테스트</Typography>
      
      <Card variant="tarot" sx={{ p: 4, my: 2 }}>
        <Typography variant="h4">타로 카드 스타일</Typography>
        <Typography variant="body1">
          신비로운 타로 카드 디자인을 적용한 컴포넌트입니다.
        </Typography>
      </Card>
      
      <Button variant="contained" color="primary">
        기본 버튼
      </Button>
      
      <Button variant="mystical" sx={{ ml: 2 }}>
        신비로운 버튼
      </Button>
    </div>
  );
}
```
