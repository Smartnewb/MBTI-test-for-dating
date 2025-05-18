import './globals.css';
import Providers from './providers';
import { homeMetadata } from './metadata';
import { viewport } from './viewport';

export const metadata = {
  title: '달빛 연애 연구소 - MBTI 연애 테스트',
  description: 'Z세대를 위한 MBTI 기반 연애 심리 테스트, 당신의 연애 스타일과 이상형을 알아보세요',
  ...homeMetadata
};

export { viewport };

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
