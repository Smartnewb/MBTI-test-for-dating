'use client';

import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 스택 컴포넌트
const StyledStack = styled(Box)(({ 
  theme, 
  direction, 
  spacing, 
  align, 
  justify,
  divider,
  responsive
}) => ({
  display: 'flex',
  flexDirection: direction,
  gap: theme.spacing(spacing),
  alignItems: align,
  justifyContent: justify,
  width: '100%',
  
  // 반응형 설정
  ...(responsive && {
    [theme.breakpoints.down('sm')]: {
      flexDirection: direction === 'row' ? 'column' : direction === 'column' ? 'column' : direction,
    },
  }),
  
  // 구분선이 있는 경우 자식 요소 스타일링
  ...(divider && {
    '& > *:not(:last-child)': {
      ...(direction === 'column' && {
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingBottom: theme.spacing(spacing / 2),
        marginBottom: theme.spacing(spacing / 2),
      }),
      ...(direction === 'row' && {
        borderRight: `1px solid ${theme.palette.divider}`,
        paddingRight: theme.spacing(spacing / 2),
        marginRight: theme.spacing(spacing / 2),
      }),
    },
  }),
}));

/**
 * 스택 컴포넌트
 * 
 * 자식 요소를 수직 또는 수평으로 쌓는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.direction='column'] - 스택 방향 ('row', 'column')
 * @param {number} [props.spacing=2] - 요소 간 간격 (theme.spacing 단위)
 * @param {string} [props.align='stretch'] - 교차축 정렬 ('flex-start', 'flex-end', 'center', 'baseline', 'stretch')
 * @param {string} [props.justify='flex-start'] - 주축 정렬 ('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
 * @param {boolean} [props.divider=false] - 구분선 표시 여부
 * @param {boolean} [props.responsive=false] - 반응형 방향 변경 여부 (모바일에서 column으로 변경)
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {Object} [props.sx] - 추가 스타일
 */
const Stack = forwardRef(function Stack(props, ref) {
  const {
    direction = 'column',
    spacing = 2,
    align = 'stretch',
    justify = 'flex-start',
    divider = false,
    responsive = false,
    children,
    sx = {},
    ...other
  } = props;
  
  return (
    <StyledStack
      ref={ref}
      direction={direction}
      spacing={spacing}
      align={align}
      justify={justify}
      divider={divider}
      responsive={responsive}
      sx={sx}
      {...other}
    >
      {children}
    </StyledStack>
  );
});

/**
 * 수직 스택 컴포넌트
 * 
 * 자식 요소를 수직으로 쌓는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number} [props.spacing=2] - 요소 간 간격 (theme.spacing 단위)
 * @param {string} [props.align='stretch'] - 가로 정렬 ('flex-start', 'flex-end', 'center', 'baseline', 'stretch')
 * @param {string} [props.justify='flex-start'] - 세로 정렬 ('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
 * @param {boolean} [props.divider=false] - 구분선 표시 여부
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {Object} [props.sx] - 추가 스타일
 */
const VStack = forwardRef(function VStack(props, ref) {
  const { children, ...other } = props;
  
  return (
    <Stack
      ref={ref}
      direction="column"
      {...other}
    >
      {children}
    </Stack>
  );
});

/**
 * 수평 스택 컴포넌트
 * 
 * 자식 요소를 수평으로 쌓는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number} [props.spacing=2] - 요소 간 간격 (theme.spacing 단위)
 * @param {string} [props.align='center'] - 세로 정렬 ('flex-start', 'flex-end', 'center', 'baseline', 'stretch')
 * @param {string} [props.justify='flex-start'] - 가로 정렬 ('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
 * @param {boolean} [props.divider=false] - 구분선 표시 여부
 * @param {boolean} [props.responsive=false] - 반응형 방향 변경 여부 (모바일에서 column으로 변경)
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {Object} [props.sx] - 추가 스타일
 */
const HStack = forwardRef(function HStack(props, ref) {
  const { align = 'center', children, ...other } = props;
  
  return (
    <Stack
      ref={ref}
      direction="row"
      align={align}
      {...other}
    >
      {children}
    </Stack>
  );
});

export { Stack, VStack, HStack };
