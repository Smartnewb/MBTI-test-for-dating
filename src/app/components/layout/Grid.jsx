'use client';

import { forwardRef } from 'react';
import { Grid as MuiGrid } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 그리드 컴포넌트
const StyledGrid = styled(MuiGrid)(({ theme, gutter }) => ({
  // 간격 설정
  ...(gutter === 'small' && {
    '& > .MuiGrid-item': {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
    margin: theme.spacing(-1, 0, 0, -1),
  }),
  
  ...(gutter === 'medium' && {
    '& > .MuiGrid-item': {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    margin: theme.spacing(-2, 0, 0, -2),
  }),
  
  ...(gutter === 'large' && {
    '& > .MuiGrid-item': {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
    margin: theme.spacing(-3, 0, 0, -3),
  }),
}));

/**
 * 그리드 컨테이너 컴포넌트
 * 
 * 그리드 레이아웃을 구성하는 컨테이너 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.gutter='medium'] - 그리드 간격 ('small', 'medium', 'large')
 * @param {React.ReactNode} props.children - 그리드 내용
 * @param {Object} [props.sx] - 추가 스타일
 */
const Grid = forwardRef(function Grid(props, ref) {
  const { 
    gutter = 'medium', 
    children, 
    sx = {}, 
    ...other 
  } = props;
  
  return (
    <StyledGrid 
      ref={ref}
      container
      gutter={gutter}
      sx={sx}
      {...other}
    >
      {children}
    </StyledGrid>
  );
});

/**
 * 그리드 아이템 컴포넌트
 * 
 * 그리드 레이아웃의 개별 아이템 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number|boolean} [props.xs=12] - 모바일 크기 (0-12)
 * @param {number|boolean} [props.sm] - 태블릿 크기 (0-12)
 * @param {number|boolean} [props.md] - 데스크톱 크기 (0-12)
 * @param {number|boolean} [props.lg] - 대형 데스크톱 크기 (0-12)
 * @param {number|boolean} [props.xl] - 초대형 데스크톱 크기 (0-12)
 * @param {React.ReactNode} props.children - 아이템 내용
 * @param {Object} [props.sx] - 추가 스타일
 */
const GridItem = forwardRef(function GridItem(props, ref) {
  const { 
    xs = 12, 
    children, 
    sx = {}, 
    ...other 
  } = props;
  
  return (
    <MuiGrid 
      ref={ref}
      item
      xs={xs}
      sx={sx}
      {...other}
    >
      {children}
    </MuiGrid>
  );
});

export { Grid, GridItem };
