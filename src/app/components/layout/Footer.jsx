'use client';

import { Box, Typography, Link as MuiLink, Divider, IconButton, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from './Container';
import { Grid, GridItem } from './Grid';

// 스타일링된 푸터 컴포넌트
const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(4, 0, 2, 0), // 패딩 조정
  position: 'relative',
  marginTop: 'auto', // 하단에 고정

  // 배경 그라데이션
  backgroundImage: `linear-gradient(to top, ${theme.palette.background.default}, ${theme.palette.background.paper})`,

  // 배경 효과
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/tarot-pattern.png")',
    backgroundSize: '200px',
    backgroundRepeat: 'repeat',
    opacity: 0.02,
    zIndex: 0,
    pointerEvents: 'none',
  },
}));

// 스타일링된 푸터 로고
const FooterLogo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", "Noto Serif KR", serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
}));

// 스타일링된 푸터 링크
const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  display: 'block',
  transition: 'color 0.2s ease',

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

// 스타일링된 소셜 아이콘 버튼
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.2s ease',

  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: `${theme.palette.primary.main}10`,
  },
}));

// 스타일링된 푸터 섹션 제목
const FooterSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  position: 'relative',
  paddingBottom: theme.spacing(1),

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '30px',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
  },
}));

/**
 * 푸터 컴포넌트
 *
 * 페이지 하단에 표시되는 푸터 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function Footer({ sx = {} }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // 현재 연도
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter component="footer" sx={sx}>
      <Container>
        <Grid gutter="large">
          <GridItem xs={12} md={4}>
            <FooterLogo variant="h6">달빛 연애 연구소</FooterLogo>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MBTI 기반의 연애 성향 분석과 궁합 정보를 제공하는 서비스입니다.
              나와 잘 맞는 연인을 찾고, 더 나은 연애를 위한 인사이트를 얻어보세요.
            </Typography>

            <Box sx={{ display: 'flex', mt: 2 }}>
              <SocialIconButton aria-label="facebook">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="twitter">
                <TwitterIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="instagram">
                <InstagramIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="github">
                <GitHubIcon />
              </SocialIconButton>
            </Box>
          </GridItem>

          <GridItem xs={6} md={2}>
            <FooterSectionTitle variant="subtitle2">
              서비스
            </FooterSectionTitle>
            <Link href="/" passHref>
              <FooterLink>홈</FooterLink>
            </Link>
            <Link href="/test" passHref>
              <FooterLink>MBTI 테스트</FooterLink>
            </Link>
            <Link href="/types" passHref>
              <FooterLink>MBTI 유형</FooterLink>
            </Link>
            <Link href="/compatibility" passHref>
              <FooterLink>궁합 확인</FooterLink>
            </Link>
          </GridItem>

          <GridItem xs={6} md={2}>
            <FooterSectionTitle variant="subtitle2">
              정보
            </FooterSectionTitle>
            <Link href="/about" passHref>
              <FooterLink>소개</FooterLink>
            </Link>
            <Link href="/faq" passHref>
              <FooterLink>자주 묻는 질문</FooterLink>
            </Link>
            <Link href="/privacy" passHref>
              <FooterLink>개인정보처리방침</FooterLink>
            </Link>
            <Link href="/terms" passHref>
              <FooterLink>이용약관</FooterLink>
            </Link>
          </GridItem>

          <GridItem xs={12} md={4}>
            <FooterSectionTitle variant="subtitle2">
              뉴스레터 구독
            </FooterSectionTitle>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              최신 MBTI 연애 팁과 관계 심리학 정보를 받아보세요.
            </Typography>

            {/* 뉴스레터 구독 폼은 추후 구현 */}
          </GridItem>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} 달빛 연애 연구소. All rights reserved.
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              <Link href="/privacy" passHref>
                <MuiLink variant="body2" color="text.secondary" sx={{ mx: 1 }}>
                  개인정보처리방침
                </MuiLink>
              </Link>
              <Link href="/terms" passHref>
                <MuiLink variant="body2" color="text.secondary" sx={{ mx: 1 }}>
                  이용약관
                </MuiLink>
              </Link>
            </Box>
          )}
        </Box>
      </Container>
    </StyledFooter>
  );
}
