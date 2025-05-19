import { getTestResultByShareId } from '../../services/resultService';
import { getMbtiDescription } from '../../utils/mbti';

/**
 * 공유된 MBTI 테스트 결과 페이지의 동적 메타데이터
 *
 * @param {Object} params - URL 파라미터
 * @param {string} params.id - 공유 ID
 */
export async function generateMetadata({ params }) {
  try {
    // 공유 ID로 결과 가져오기
    const shareId = params.id;
    const result = await getTestResultByShareId(shareId);

    // 결과가 없는 경우 기본 메타데이터 반환
    if (!result || !result.mbtiType) {
      return {
        title: '결과를 찾을 수 없습니다 - 달빛 연애 연구소',
        description: '공유된 MBTI 테스트 결과를 찾을 수 없습니다. 테스트를 직접 진행해보세요.',
      };
    }

    // MBTI 유형 정보 가져오기
    const mbtiDescription = getMbtiDescription(result.mbtiType);
    const mbtiName = mbtiDescription?.name || result.mbtiType;

    // 동적 메타데이터 생성
    return {
      title: `${result.mbtiType} (${mbtiName}) - 달빛 연애 연구소`,
      description: `${mbtiName}의 연애 스타일과 특징을 확인해보세요. 당신의 MBTI 연애 유형도 알아보세요!`,
      openGraph: {
        title: `내 MBTI 연애 유형은 ${result.mbtiType} (${mbtiName})`,
        description: `${mbtiName}의 연애 스타일과 특징을 확인해보세요. 당신의 MBTI 연애 유형도 알아보세요!`,
        url: `https://mbti-dating-test.vercel.app/result/${shareId}`,
        siteName: '달빛 연애 연구소',
        images: [
          {
            url: `/api/og-image?mbtiType=${result.mbtiType}`,
            width: 1200,
            height: 630,
            alt: `MBTI 연애 유형: ${result.mbtiType} (${mbtiName})`,
          },
        ],
        locale: 'ko_KR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `내 MBTI 연애 유형은 ${result.mbtiType} (${mbtiName})`,
        description: `${mbtiName}의 연애 스타일과 특징을 확인해보세요. 당신의 MBTI 연애 유형도 알아보세요!`,
        images: [`/api/og-image?mbtiType=${result.mbtiType}`],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);

    // 오류 발생 시 기본 메타데이터 반환
    return {
      title: 'MBTI 연애 테스트 결과 - 달빛 연애 연구소',
      description: 'MBTI 기반 연애 성향 테스트로 당신의 연애 스타일과 이상형을 알아보세요.',
    };
  }
}
