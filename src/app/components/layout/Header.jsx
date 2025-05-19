'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Container from './Container';
import MysticalButton from '../MysticalButton';

// 스타일링된 앱바 컴포넌트
const StyledAppBar = styled(AppBar)(({ theme, transparent, scrolled }) => {
  // 불리언 값을 문자열로 변환하지 않고 직접 사용
  const isTransparent = transparent === true;
  const isScrolled = scrolled === true;

  return {
    backgroundColor: isTransparent && !isScrolled ? 'transparent' : theme.palette.background.paper,
    boxShadow: isTransparent && !isScrolled ? 'none' : theme.shadows[3],
    transition: 'all 0.3s ease',

    // 배경 그라데이션
    backgroundImage:
      isTransparent && !isScrolled
        ? 'none'
        : `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,

    // 테두리
    borderBottom: isTransparent && !isScrolled ? 'none' : `1px solid ${theme.palette.divider}`,
  };
});

// 스타일링된 로고 컴포넌트
const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", "Noto Serif KR", serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
}));

// 스타일링된 네비게이션 링크
const NavLink = styled(Typography)(({ theme, active }) => {
  // 불리언 값을 직접 사용
  const isActive = active === true;

  return {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(0.5, 0),
    position: 'relative',
    cursor: 'pointer',
    fontWeight: isActive ? 500 : 400,
    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: isActive ? '100%' : '0%',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      transition: 'width 0.3s ease',
    },

    '&:hover': {
      color: theme.palette.primary.main,

      '&::after': {
        width: '100%',
      },
    },
  };
});

// 스타일링된 모바일 드로어
const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '80%',
    maxWidth: '300px',
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
    padding: theme.spacing(2),
  },
}));

// 스타일링된 모바일 네비게이션 링크
const MobileNavLink = styled(ListItem)(({ theme, active }) => {
  // 불리언 값을 직접 사용
  const isActive = active === true;

  return {
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    backgroundColor: isActive ? `${theme.palette.primary.main}10` : 'transparent',

    '& .MuiListItemText-primary': {
      color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
      fontWeight: isActive ? 500 : 400,
    },

    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}10`,
    },
  };
});

/**
 * 헤더 컴포넌트
 *
 * 페이지 상단에 표시되는 헤더 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {boolean} [props.transparent=false] - 투명 배경 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function Header({ transparent = false, sx = {} }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePage, setActivePage] = useState('/');

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 현재 페이지 설정
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePage(window.location.pathname);
    }
  }, []);

  // 모바일 드로어 토글
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // 네비게이션 링크
  const navLinks = [
    { text: '홈', href: '/' },
    { text: 'MBTI 테스트', href: '/test' },
    { text: '썸타임: 대학생 소개팅', href: 'https://some-in-univ.com' },
  ];

  // 모바일 드로어 내용
  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Logo variant="h6">달빛 연애 연구소</Logo>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {navLinks.map(link => {
          // 불리언 속성을 문자열로 변환하지 않고 조건부로 전달
          const isActive = activePage === link.href;
          const navLinkProps = {
            button: true,
            onClick: handleDrawerToggle,
          };

          // 불리언 값이 true인 경우에만 속성 추가
          if (isActive) navLinkProps.active = isActive;

          return (
            <Link href={link.href} key={link.href} passHref style={{ textDecoration: 'none' }}>
              <MobileNavLink {...navLinkProps}>
                <ListItemText primary={link.text} />
              </MobileNavLink>
            </Link>
          );
        })}

        <Box sx={{ mt: 2, px: 2 }}>
          <Link href="/test" passHref style={{ textDecoration: 'none', display: 'block' }}>
            <MysticalButton variant="mystical" fullWidth onClick={handleDrawerToggle}>
              테스트 시작하기
            </MysticalButton>
          </Link>
        </Box>
      </List>
    </Box>
  );

  // 불리언 속성을 문자열로 변환하지 않고 조건부로 전달
  const appBarProps = {
    position: 'sticky',
    elevation: 0,
    sx,
  };

  // 불리언 값이 true인 경우에만 속성 추가
  if (transparent) appBarProps.transparent = transparent;
  if (scrolled) appBarProps.scrolled = scrolled;

  return (
    <StyledAppBar {...appBarProps}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Logo variant="h6">달빛 연애 연구소</Logo>
          </Link>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                {navLinks.map(link => {
                  // 불리언 속성을 문자열로 변환하지 않고 조건부로 전달
                  const isActive = activePage === link.href;
                  const navLinkProps = { variant: 'body2' };

                  // 불리언 값이 true인 경우에만 속성 추가
                  if (isActive) navLinkProps.active = isActive;

                  return (
                    <Link
                      href={link.href}
                      key={link.href}
                      passHref
                      style={{ textDecoration: 'none' }}
                    >
                      <NavLink {...navLinkProps}>{link.text}</NavLink>
                    </Link>
                  );
                })}
              </Box>

              <Box sx={{ ml: 2 }}>
                <Link href="/test" passHref style={{ textDecoration: 'none' }}>
                  <MysticalButton variant="mystical" size="small">
                    테스트 시작하기
                  </MysticalButton>
                </Link>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>

      <MobileDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // 모바일 성능 향상
        }}
      >
        {drawer}
      </MobileDrawer>
    </StyledAppBar>
  );
}
