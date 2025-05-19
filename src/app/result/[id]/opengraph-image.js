import { ImageResponse } from 'next/og';
import { getTestResultByShareId } from '../../services/resultService';
import { getMbtiDescription } from '../../utils/mbti';

// 이미지 응답 설정
export const runtime = 'edge';
export const alt = 'MBTI 연애 테스트 결과';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

/**
 * 동적 OG 이미지 생성
 *
 * @param {Object} params - URL 파라미터
 * @param {string} params.id - 공유 ID
 */
export default async function Image({ params }) {
  try {
    // 공유 ID로 결과 가져오기
    const shareId = params.id;
    const result = await getTestResultByShareId(shareId);

    // 결과가 없는 경우 기본 이미지 반환
    if (!result || !result.mbtiType) {
      return new ImageResponse(
        (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: '#0F0F1A',
              padding: 40,
            }}
          >
            <div
              style={{
                fontSize: 36,
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 20,
                textAlign: 'center',
              }}
            >
              달빛 연애 연구소
            </div>
            <div
              style={{
                fontSize: 48,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              MBTI 연애 테스트 결과
            </div>
          </div>
        ),
        { ...size }
      );
    }

    // MBTI 유형 정보 가져오기
    const mbtiDescription = getMbtiDescription(result.mbtiType);
    const mbtiName = mbtiDescription?.name || result.mbtiType;
    const mbtiColor = mbtiDescription?.color || '#6B3FA0';

    // 이미지 생성
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#0F0F1A',
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(53, 29, 150, 0.2) 0%, transparent 60%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.2) 0%, transparent 60%)',
            padding: 40,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* 별 효과 */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: 'white',
                borderRadius: '50%',
                opacity: Math.random() * 0.7 + 0.3,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
              }}
            />
          ))}

          {/* 헤더 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: '#E91E63',
                fontWeight: 'bold',
              }}
            >
              달빛 연애 연구소
            </div>
          </div>

          {/* 타이틀 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 36,
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 10,
                textAlign: 'center',
              }}
            >
              내 MBTI 연애 유형은
            </div>

            <div
              style={{
                fontSize: 72,
                color: mbtiColor,
                fontWeight: 'bold',
                marginBottom: 10,
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
              }}
            >
              {result.mbtiType}
            </div>

            <div
              style={{
                fontSize: 40,
                color: '#D4AF37',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {mbtiName}
            </div>
          </div>

          {/* 설명 */}
          <div
            style={{
              fontSize: 24,
              color: 'white',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            {mbtiDescription?.description?.substring(0, 100)}...
          </div>

          {/* 푸터 */}
          <div
            style={{
              position: 'absolute',
              bottom: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              당신의 MBTI 연애 유형도 알아보세요!
            </div>
          </div>
        </div>
      ),
      { ...size }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);

    // 오류 발생 시 기본 이미지 반환
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#0F0F1A',
            padding: 40,
          }}
        >
          <div
            style={{
              fontSize: 36,
              color: 'white',
              fontWeight: 'bold',
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            달빛 연애 연구소
          </div>
          <div
            style={{
              fontSize: 48,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            MBTI 연애 테스트 결과
          </div>
        </div>
      ),
      { ...size }
    );
  }
}
