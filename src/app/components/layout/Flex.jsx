'use client';

import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 플렉스 컨테이너
const StyledFlex = styled(Box)(({ 
  theme, 
  direction, 
  wrap, 
  justify, 
  align, 
  gap, 
  rowGap,
  columnGap,
  grow,
  shrink,
  basis,
  responsive
}) => ({
  display: 'flex',
  
  // 방향 설정
  flexDirection: direction,
  
  // 줄바꿈 설정
  flexWrap: wrap,
  
  // 주축 정렬 설정
  justifyContent: justify,
  
  // 교차축 정렬 설정
  alignItems: align,
  
  // 간격 설정
  gap: gap !== undefined ? theme.spacing(gap) : undefined,
  rowGap: rowGap !== undefined ? theme.spacing(rowGap) : undefined,
  columnGap: columnGap !== undefined ? theme.spacing(columnGap) : undefined,
  
  // 플렉스 아이템 속성
  flexGrow: grow,
  flexShrink: shrink,
  flexBasis: basis,
  
  // 반응형 설정
  ...(responsive && {
    [theme.breakpoints.down('sm')]: {
      flexDirection: direction === 'row' ? 'column' : direction === 'column' ? 'column' : direction,
    },
  }),
}));

/**
 * 플렉스 컴포넌트
 * 
 * 플렉스박스 레이아웃을 쉽게 구현할 수 있는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.direction='row'] - 플렉스 방향 ('row', 'row-reverse', 'column', 'column-reverse')
 * @param {string} [props.wrap='nowrap'] - 줄바꿈 설정 ('nowrap', 'wrap', 'wrap-reverse')
 * @param {string} [props.justify='flex-start'] - 주축 정렬 ('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
 * @param {string} [props.align='stretch'] - 교차축 정렬 ('flex-start', 'flex-end', 'center', 'baseline', 'stretch')
 * @param {number} [props.gap] - 간격 (theme.spacing 단위)
 * @param {number} [props.rowGap] - 행 간격 (theme.spacing 단위)
 * @param {number} [props.columnGap] - 열 간격 (theme.spacing 단위)
 * @param {number} [props.grow] - flex-grow 속성
 * @param {number} [props.shrink] - flex-shrink 속성
 * @param {string|number} [props.basis] - flex-basis 속성
 * @param {boolean} [props.responsive=false] - 반응형 방향 변경 여부 (모바일에서 column으로 변경)
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {Object} [props.sx] - 추가 스타일
 */
const Flex = forwardRef(function Flex(props, ref) {
  const {
    direction = 'row',
    wrap = 'nowrap',
    justify = 'flex-start',
    align = 'stretch',
    gap,
    rowGap,
    columnGap,
    grow,
    shrink,
    basis,
    responsive = false,
    children,
    sx = {},
    ...other
  } = props;
  
  return (
    <StyledFlex
      ref={ref}
      direction={direction}
      wrap={wrap}
      justify={justify}
      align={align}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      grow={grow}
      shrink={shrink}
      basis={basis}
      responsive={responsive}
      sx={sx}
      {...other}
    >
      {children}
    </StyledFlex>
  );
});

/**
 * 플렉스 아이템 컴포넌트
 * 
 * 플렉스 컨테이너 내부의 아이템을 위한 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number} [props.grow=0] - flex-grow 속성
 * @param {number} [props.shrink=1] - flex-shrink 속성
 * @param {string|number} [props.basis='auto'] - flex-basis 속성
 * @param {string} [props.align] - align-self 속성 ('auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch')
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {Object} [props.sx] - 추가 스타일
 */
const FlexItem = forwardRef(function FlexItem(props, ref) {
  const {
    grow = 0,
    shrink = 1,
    basis = 'auto',
    align,
    children,
    sx = {},
    ...other
  } = props;
  
  return (
    <Box
      ref={ref}
      sx={{
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        alignSelf: align,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
});

export { Flex, FlexItem };
