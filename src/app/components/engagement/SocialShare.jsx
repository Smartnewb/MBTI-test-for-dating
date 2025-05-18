'use client';

import { useState } from 'react';
import { Box, IconButton, Tooltip, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

// 스타일링된 공유 컨테이너
const ShareContainer = styled(Box)(({ theme, direction }) => ({
  display: 'flex',
  flexDirection: direction === 'vertical' ? 'column' : 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

// 스타일링된 공유 버튼
const ShareButton = styled(IconButton)(({ theme, platform }) => {
  // 플랫폼별 색상 설정
  const platformColors = {
    facebook: '#1877F2',
    twitter: '#1DA1F2',
    whatsapp: '#25D366',
    telegram: '#0088CC',
    link: theme.palette.primary.main,
  };
  
  return {
    backgroundColor: `${platformColors[platform]}20`,
    color: platformColors[platform],
    transition: 'all 0.3s ease',
    
    '&:hover': {
      backgroundColor: `${platformColors[platform]}40`,
      transform: 'translateY(-3px)',
    },
  };
});

/**
 * 소셜 미디어 공유 컴포넌트
 * 
 * 소셜 미디어 공유 버튼을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.url - 공유할 URL
 * @param {string} [props.title='달빛 연애 연구소'] - 공유 제목
 * @param {string} [props.description='MBTI 연애 테스트로 당신의 연애 스타일과 이상형을 알아보세요!'] - 공유 설명
 * @param {string} [props.direction='horizontal'] - 버튼 방향 ('horizontal', 'vertical')
 * @param {boolean} [props.showFacebook=true] - 페이스북 버튼 표시 여부
 * @param {boolean} [props.showTwitter=true] - 트위터 버튼 표시 여부
 * @param {boolean} [props.showWhatsApp=false] - 왓츠앱 버튼 표시 여부
 * @param {boolean} [props.showTelegram=false] - 텔레그램 버튼 표시 여부
 * @param {boolean} [props.showLink=true] - 링크 복사 버튼 표시 여부
 * @param {string} [props.size='medium'] - 버튼 크기 ('small', 'medium', 'large')
 * @param {string} [props.animation='fadeIn'] - 애니메이션 유형
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function SocialShare({
  url,
  title = '달빛 연애 연구소',
  description = 'MBTI 연애 테스트로 당신의 연애 스타일과 이상형을 알아보세요!',
  direction = 'horizontal',
  showFacebook = true,
  showTwitter = true,
  showWhatsApp = false,
  showTelegram = false,
  showLink = true,
  size = 'medium',
  animation = 'fadeIn',
  sx = {}
}) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  // 페이스북 공유 핸들러
  const handleFacebookShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };
  
  // 트위터 공유 핸들러
  const handleTwitterShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };
  
  // 왓츠앱 공유 핸들러
  const handleWhatsAppShare = () => {
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${description} ${url}`)}`;
    window.open(shareUrl, '_blank');
  };
  
  // 텔레그램 공유 핸들러
  const handleTelegramShare = () => {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(description)}`;
    window.open(shareUrl, '_blank');
  };
  
  // 링크 복사 핸들러
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setAlertMessage('링크가 클립보드에 복사되었습니다!');
        setShowAlert(true);
      })
      .catch((error) => {
        console.error('링크 복사 실패:', error);
        setAlertMessage('링크 복사에 실패했습니다.');
        setShowAlert(true);
      });
  };
  
  // 알림 닫기 핸들러
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  
  return (
    <AnimatedElement animation={animation} duration="normal">
      <ShareContainer direction={direction} sx={sx}>
        {/* 페이스북 공유 버튼 */}
        {showFacebook && (
          <Tooltip title="페이스북에 공유">
            <ShareButton
              platform="facebook"
              size={size}
              onClick={handleFacebookShare}
              aria-label="페이스북에 공유"
            >
              <FacebookIcon />
            </ShareButton>
          </Tooltip>
        )}
        
        {/* 트위터 공유 버튼 */}
        {showTwitter && (
          <Tooltip title="트위터에 공유">
            <ShareButton
              platform="twitter"
              size={size}
              onClick={handleTwitterShare}
              aria-label="트위터에 공유"
            >
              <TwitterIcon />
            </ShareButton>
          </Tooltip>
        )}
        
        {/* 왓츠앱 공유 버튼 */}
        {showWhatsApp && (
          <Tooltip title="왓츠앱으로 공유">
            <ShareButton
              platform="whatsapp"
              size={size}
              onClick={handleWhatsAppShare}
              aria-label="왓츠앱으로 공유"
            >
              <WhatsAppIcon />
            </ShareButton>
          </Tooltip>
        )}
        
        {/* 텔레그램 공유 버튼 */}
        {showTelegram && (
          <Tooltip title="텔레그램으로 공유">
            <ShareButton
              platform="telegram"
              size={size}
              onClick={handleTelegramShare}
              aria-label="텔레그램으로 공유"
            >
              <TelegramIcon />
            </ShareButton>
          </Tooltip>
        )}
        
        {/* 링크 복사 버튼 */}
        {showLink && (
          <Tooltip title="링크 복사">
            <ShareButton
              platform="link"
              size={size}
              onClick={handleCopyLink}
              aria-label="링크 복사"
            >
              <LinkIcon />
            </ShareButton>
          </Tooltip>
        )}
        
        {/* 알림 */}
        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseAlert}
            severity="success"
            sx={{ width: '100%' }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
      </ShareContainer>
    </AnimatedElement>
  );
}
