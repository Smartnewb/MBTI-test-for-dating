/**
 * 애플리케이션 메타데이터
 *
 * 페이지별 메타데이터를 정의합니다.
 */

// 기본 메타데이터
export const defaultMetadata = {
  title: '달빛 연애 연구소',
  description: 'MBTI 기반 연애 성향 테스트로 당신의 연애 스타일과 이상형을 알아보세요.',
  keywords: 'MBTI, 연애, 테스트, 성향, 이상형, 궁합, 타로, 달빛 연애 연구소',
  authors: [{ name: '달빛 연애 연구소' }],
  creator: '달빛 연애 연구소',
  publisher: '달빛 연애 연구소',
  metadataBase: new URL('https://mbti-dating-test.vercel.app'),
  openGraph: {
    title: '달빛 연애 연구소 - MBTI 연애 테스트',
    description: 'MBTI 기반 연애 성향 테스트로 당신의 연애 스타일과 이상형을 알아보세요.',
    url: 'https://mbti-dating-test.vercel.app',
    siteName: '달빛 연애 연구소',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '달빛 연애 연구소 - MBTI 연애 테스트',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '달빛 연애 연구소 - MBTI 연애 테스트',
    description: 'MBTI 기반 연애 성향 테스트로 당신의 연애 스타일과 이상형을 알아보세요.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

// 홈페이지 메타데이터
export const homeMetadata = {
  ...defaultMetadata,
  title: '달빛 연애 연구소 - MBTI 연애 테스트',
  description: '타로 카드의 신비로운 힘으로 당신의 MBTI 연애 유형을 분석해드립니다. 당신의 연애 스타일과 이상형을 알아보세요.',
};

// 테스트 페이지 메타데이터
export const testMetadata = {
  ...defaultMetadata,
  title: 'MBTI 연애 테스트 - 달빛 연애 연구소',
  description: '24개의 질문에 답하고 당신의 MBTI 연애 유형을 알아보세요. 당신의 연애 스타일과 이상형을 분석해드립니다.',
};

// 결과 페이지 메타데이터
export const resultMetadata = {
  ...defaultMetadata,
  title: 'MBTI 연애 테스트 결과 - 달빛 연애 연구소',
  description: '당신의 MBTI 연애 유형 결과입니다. 당신의 연애 스타일과 이상형을 확인해보세요.',
};

const metadata = {
  defaultMetadata,
  homeMetadata,
  testMetadata,
  resultMetadata,
};

export default metadata;
