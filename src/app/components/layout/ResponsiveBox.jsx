'use client';

import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 반응형 박스 컴포넌트
const StyledResponsiveBox = styled(Box)(({ theme, ...props }) => {
  // 반응형 속성 추출
  const {
    displayXs, displaySm, displayMd, displayLg, displayXl,
    paddingXs, paddingSm, paddingMd, paddingLg, paddingXl,
    marginXs, marginSm, marginMd, marginLg, marginXl,
    textAlignXs, textAlignSm, textAlignMd, textAlignLg, textAlignXl,
    flexDirectionXs, flexDirectionSm, flexDirectionMd, flexDirectionLg, flexDirectionXl,
    orderXs, orderSm, orderMd, orderLg, orderXl,
    ...otherProps
  } = props;
  
  return {
    // 기본 스타일
    ...otherProps,
    
    // xs 브레이크포인트 (0px 이상)
    ...(displayXs !== undefined && { display: displayXs }),
    ...(paddingXs !== undefined && { padding: theme.spacing(paddingXs) }),
    ...(marginXs !== undefined && { margin: theme.spacing(marginXs) }),
    ...(textAlignXs !== undefined && { textAlign: textAlignXs }),
    ...(flexDirectionXs !== undefined && { flexDirection: flexDirectionXs }),
    ...(orderXs !== undefined && { order: orderXs }),
    
    // sm 브레이크포인트 (600px 이상)
    [theme.breakpoints.up('sm')]: {
      ...(displaySm !== undefined && { display: displaySm }),
      ...(paddingSm !== undefined && { padding: theme.spacing(paddingSm) }),
      ...(marginSm !== undefined && { margin: theme.spacing(marginSm) }),
      ...(textAlignSm !== undefined && { textAlign: textAlignSm }),
      ...(flexDirectionSm !== undefined && { flexDirection: flexDirectionSm }),
      ...(orderSm !== undefined && { order: orderSm }),
    },
    
    // md 브레이크포인트 (900px 이상)
    [theme.breakpoints.up('md')]: {
      ...(displayMd !== undefined && { display: displayMd }),
      ...(paddingMd !== undefined && { padding: theme.spacing(paddingMd) }),
      ...(marginMd !== undefined && { margin: theme.spacing(marginMd) }),
      ...(textAlignMd !== undefined && { textAlign: textAlignMd }),
      ...(flexDirectionMd !== undefined && { flexDirection: flexDirectionMd }),
      ...(orderMd !== undefined && { order: orderMd }),
    },
    
    // lg 브레이크포인트 (1200px 이상)
    [theme.breakpoints.up('lg')]: {
      ...(displayLg !== undefined && { display: displayLg }),
      ...(paddingLg !== undefined && { padding: theme.spacing(paddingLg) }),
      ...(marginLg !== undefined && { margin: theme.spacing(marginLg) }),
      ...(textAlignLg !== undefined && { textAlign: textAlignLg }),
      ...(flexDirectionLg !== undefined && { flexDirection: flexDirectionLg }),
      ...(orderLg !== undefined && { order: orderLg }),
    },
    
    // xl 브레이크포인트 (1536px 이상)
    [theme.breakpoints.up('xl')]: {
      ...(displayXl !== undefined && { display: displayXl }),
      ...(paddingXl !== undefined && { padding: theme.spacing(paddingXl) }),
      ...(marginXl !== undefined && { margin: theme.spacing(marginXl) }),
      ...(textAlignXl !== undefined && { textAlign: textAlignXl }),
      ...(flexDirectionXl !== undefined && { flexDirection: flexDirectionXl }),
      ...(orderXl !== undefined && { order: orderXl }),
    },
  };
});

/**
 * 반응형 박스 컴포넌트
 * 
 * 화면 크기에 따라 속성이 변경되는 반응형 박스 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.displayXs] - xs 브레이크포인트에서의 display 속성
 * @param {string} [props.displaySm] - sm 브레이크포인트에서의 display 속성
 * @param {string} [props.displayMd] - md 브레이크포인트에서의 display 속성
 * @param {string} [props.displayLg] - lg 브레이크포인트에서의 display 속성
 * @param {string} [props.displayXl] - xl 브레이크포인트에서의 display 속성
 * @param {number} [props.paddingXs] - xs 브레이크포인트에서의 padding 속성 (theme.spacing 단위)
 * @param {number} [props.paddingSm] - sm 브레이크포인트에서의 padding 속성 (theme.spacing 단위)
 * @param {number} [props.paddingMd] - md 브레이크포인트에서의 padding 속성 (theme.spacing 단위)
 * @param {number} [props.paddingLg] - lg 브레이크포인트에서의 padding 속성 (theme.spacing 단위)
 * @param {number} [props.paddingXl] - xl 브레이크포인트에서의 padding 속성 (theme.spacing 단위)
 * @param {number} [props.marginXs] - xs 브레이크포인트에서의 margin 속성 (theme.spacing 단위)
 * @param {number} [props.marginSm] - sm 브레이크포인트에서의 margin 속성 (theme.spacing 단위)
 * @param {number} [props.marginMd] - md 브레이크포인트에서의 margin 속성 (theme.spacing 단위)
 * @param {number} [props.marginLg] - lg 브레이크포인트에서의 margin 속성 (theme.spacing 단위)
 * @param {number} [props.marginXl] - xl 브레이크포인트에서의 margin 속성 (theme.spacing 단위)
 * @param {string} [props.textAlignXs] - xs 브레이크포인트에서의 textAlign 속성
 * @param {string} [props.textAlignSm] - sm 브레이크포인트에서의 textAlign 속성
 * @param {string} [props.textAlignMd] - md 브레이크포인트에서의 textAlign 속성
 * @param {string} [props.textAlignLg] - lg 브레이크포인트에서의 textAlign 속성
 * @param {string} [props.textAlignXl] - xl 브레이크포인트에서의 textAlign 속성
 * @param {string} [props.flexDirectionXs] - xs 브레이크포인트에서의 flexDirection 속성
 * @param {string} [props.flexDirectionSm] - sm 브레이크포인트에서의 flexDirection 속성
 * @param {string} [props.flexDirectionMd] - md 브레이크포인트에서의 flexDirection 속성
 * @param {string} [props.flexDirectionLg] - lg 브레이크포인트에서의 flexDirection 속성
 * @param {string} [props.flexDirectionXl] - xl 브레이크포인트에서의 flexDirection 속성
 * @param {number} [props.orderXs] - xs 브레이크포인트에서의 order 속성
 * @param {number} [props.orderSm] - sm 브레이크포인트에서의 order 속성
 * @param {number} [props.orderMd] - md 브레이크포인트에서의 order 속성
 * @param {number} [props.orderLg] - lg 브레이크포인트에서의 order 속성
 * @param {number} [props.orderXl] - xl 브레이크포인트에서의 order 속성
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {Object} [props.sx] - 추가 스타일
 */
const ResponsiveBox = forwardRef(function ResponsiveBox(props, ref) {
  const { children, sx = {}, ...other } = props;
  
  return (
    <StyledResponsiveBox
      ref={ref}
      sx={sx}
      {...other}
    >
      {children}
    </StyledResponsiveBox>
  );
});

/**
 * 반응형 숨김 컴포넌트
 * 
 * 특정 브레이크포인트에서만 표시되는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {boolean} [props.xs=true] - xs 브레이크포인트에서 표시 여부
 * @param {boolean} [props.sm=true] - sm 브레이크포인트에서 표시 여부
 * @param {boolean} [props.md=true] - md 브레이크포인트에서 표시 여부
 * @param {boolean} [props.lg=true] - lg 브레이크포인트에서 표시 여부
 * @param {boolean} [props.xl=true] - xl 브레이크포인트에서 표시 여부
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {Object} [props.sx] - 추가 스타일
 */
const Hide = forwardRef(function Hide(props, ref) {
  const { 
    xs = true, 
    sm = true, 
    md = true, 
    lg = true, 
    xl = true, 
    children, 
    sx = {}, 
    ...other 
  } = props;
  
  return (
    <ResponsiveBox
      ref={ref}
      displayXs={xs ? 'none' : undefined}
      displaySm={sm ? 'none' : undefined}
      displayMd={md ? 'none' : undefined}
      displayLg={lg ? 'none' : undefined}
      displayXl={xl ? 'none' : undefined}
      sx={sx}
      {...other}
    >
      {children}
    </ResponsiveBox>
  );
});

/**
 * 반응형 표시 컴포넌트
 * 
 * 특정 브레이크포인트에서만 표시되는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {boolean} [props.xs=false] - xs 브레이크포인트에서 표시 여부
 * @param {boolean} [props.sm=false] - sm 브레이크포인트에서 표시 여부
 * @param {boolean} [props.md=false] - md 브레이크포인트에서 표시 여부
 * @param {boolean} [props.lg=false] - lg 브레이크포인트에서 표시 여부
 * @param {boolean} [props.xl=false] - xl 브레이크포인트에서 표시 여부
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {Object} [props.sx] - 추가 스타일
 */
const Show = forwardRef(function Show(props, ref) {
  const { 
    xs = false, 
    sm = false, 
    md = false, 
    lg = false, 
    xl = false, 
    children, 
    sx = {}, 
    ...other 
  } = props;
  
  return (
    <ResponsiveBox
      ref={ref}
      displayXs={xs ? undefined : 'none'}
      displaySm={sm ? undefined : 'none'}
      displayMd={md ? undefined : 'none'}
      displayLg={lg ? undefined : 'none'}
      displayXl={xl ? undefined : 'none'}
      sx={sx}
      {...other}
    >
      {children}
    </ResponsiveBox>
  );
});

export { ResponsiveBox, Hide, Show };
