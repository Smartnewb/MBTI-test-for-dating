'use strict';
(exports.id = 696),
  (exports.ids = [696]),
  (exports.modules = {
    '(ssr)/./src/app/components/test/TestResult.jsx': (e, s, i) => {
      i.d(s, { Z: () => D });
      var r = i(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
        ),
        a = i('(ssr)/./node_modules/styled-jsx/style.js'),
        t = i.n(a),
        n = i(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
        ),
        o = i('(ssr)/./node_modules/@mui/material/Box/Box.js'),
        l = i('(ssr)/./node_modules/@mui/material/Typography/Typography.js'),
        d = i('(ssr)/./node_modules/@mui/material/Chip/Chip.js'),
        m = i('(ssr)/./node_modules/@mui/material/LinearProgress/LinearProgress.js'),
        c = i('(ssr)/./node_modules/@mui/material/styles/useTheme.js'),
        x = i('(ssr)/./node_modules/@mui/material/Tabs/Tabs.js'),
        p = i('(ssr)/./node_modules/@mui/material/Tab/Tab.js'),
        b = i('(ssr)/./node_modules/@mui/material/Divider/Divider.js'),
        h = i('(ssr)/./node_modules/@mui/material/Grid/Grid.js'),
        u = i('(ssr)/./node_modules/@mui/material/Fade/Fade.js'),
        j = i('(ssr)/./node_modules/@mui/material/styles/styled.js'),
        g = i('(ssr)/./src/app/components/TarotCard.jsx'),
        y = i('(ssr)/./src/app/components/MysticalButton.jsx'),
        f = i('(ssr)/./node_modules/@mui/material/Paper/Paper.js'),
        Z = i('(ssr)/./node_modules/@mui/material/Avatar/Avatar.js'),
        v = i('(ssr)/./src/app/components/animations.jsx'),
        k = i('(ssr)/./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js');
      function w() {
        let e = (0, c.Z)(),
          s = (0, k.Z)(e.breakpoints.down('sm')),
          i = (0, k.Z)(e.breakpoints.down('md')),
          r = (0, k.Z)(e.breakpoints.up('lg')),
          a = (0, k.Z)(e.breakpoints.up('xl')),
          t = (0, n.useCallback)(s => e.breakpoints.up(s), [e.breakpoints]),
          o = (0, n.useCallback)(s => e.breakpoints.down(s), [e.breakpoints]);
        return {
          isMobile: s,
          isTablet: i,
          isDesktop: r,
          isLargeDesktop: a,
          up: t,
          down: o,
          between: (0, n.useCallback)((s, i) => e.breakpoints.between(s, i), [e.breakpoints]),
          only: (0, n.useCallback)(s => e.breakpoints.only(s), [e.breakpoints]),
          width: e => {
            let { xs: t, sm: n, md: o, lg: l, xl: d } = e;
            return a && void 0 !== d
              ? d
              : r && void 0 !== l
                ? l
                : i || void 0 === o
                  ? s || void 0 === n
                    ? t
                    : n
                  : o;
          },
        };
      }
      var S = i('(ssr)/./node_modules/@mui/icons-material/Favorite.js'),
        M = i('(ssr)/./node_modules/@mui/icons-material/Warning.js'),
        F = i('(ssr)/./node_modules/@mui/icons-material/TipsAndUpdates.js'),
        _ = i('(ssr)/./node_modules/@mui/icons-material/Psychology.js');
      let T = (0, j.ZP)(o.Z)(({ theme: e }) => ({
          position: 'relative',
          padding: e.spacing(3),
          borderRadius: 2 * e.shape.borderRadius,
          background: `linear-gradient(135deg, ${e.palette.background.paper} 0%, ${e.palette.background.default} 100%)`,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          border: `1px solid ${e.palette.primary.dark}`,
          marginTop: e.spacing(4),
          marginBottom: e.spacing(4),
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 2 * e.shape.borderRadius,
            background: 'url(/images/card-texture.png)',
            backgroundSize: 'cover',
            opacity: 0.05,
            pointerEvents: 'none',
          },
          [e.breakpoints.down('sm')]: {
            padding: e.spacing(2),
            marginTop: e.spacing(3),
            marginBottom: e.spacing(3),
            borderRadius: 1.5 * e.shape.borderRadius,
            '&::before': { borderRadius: 1.5 * e.shape.borderRadius },
          },
        })),
        I = (0, j.ZP)(l.Z)(({ theme: e }) => ({
          fontFamily: '"Playfair Display", "Noto Serif KR", serif',
          fontWeight: 600,
          fontSize: '1.5rem',
          marginBottom: e.spacing(2),
          color: e.palette.secondary.main,
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          [e.breakpoints.down('sm')]: { fontSize: '1.25rem', marginBottom: e.spacing(1.5) },
        })),
        P = (0, j.ZP)(f.Z)(({ theme: e }) => ({
          padding: e.spacing(2),
          height: '100%',
          background: `linear-gradient(135deg, ${e.palette.background.paper} 0%, rgba(42, 42, 74, 0.8) 100%)`,
          borderRadius: e.shape.borderRadius,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          border: `1px solid ${e.palette.primary.dark}`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' },
          [e.breakpoints.down('sm')]: {
            padding: e.spacing(1.5),
            '&:hover': { transform: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' },
          },
        })),
        C = (0, j.ZP)(Z.Z)(({ theme: e, color: s = 'primary' }) => ({
          backgroundColor: e.palette[s].main,
          color: e.palette[s].contrastText,
          width: 40,
          height: 40,
          marginBottom: e.spacing(1),
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          [e.breakpoints.down('sm')]: {
            width: 32,
            height: 32,
            '& .MuiSvgIcon-root': { fontSize: '1.2rem' },
          },
        }));
      function z({
        mbtiType: e,
        description: s,
        strengths: i = [],
        weaknesses: a = [],
        datingStyle: t,
        idealTypeInfo: n,
        worstMatchInfo: m,
      }) {
        (0, c.Z)();
        let x = w(),
          p = (() => {
            let s =
                i.length > 0
                  ? `당신의 ${i[0]}와(과) ${i.length > 1 ? i[1] : ''} 특성을 활용하세요.`
                  : '당신의 강점을 활용하세요.',
              r =
                a.length > 0
                  ? `${a[0]}와(과) ${a.length > 1 ? a[1] : ''} 부분에 주의하세요.`
                  : '약점을 인식하고 개선하려고 노력하세요.',
              t = '';
            switch (e.substring(0, 2)) {
              case 'IN':
                t =
                  '내면의 감정을 솔직하게 표현하는 연습을 하세요. 상대방이 당신의 마음을 알아차리지 못할 수 있습니다.';
                break;
              case 'IS':
                t =
                  '새로운 경험에 열린 마음을 가지세요. 익숙한 것에서 벗어나 새로운 데이트 아이디어를 시도해보세요.';
                break;
              case 'EN':
                t =
                  '상대방에게 충분한 개인 공간을 제공하세요. 당신의 열정이 때로는 부담이 될 수 있습니다.';
                break;
              case 'ES':
                t =
                  '상대방의 깊은 감정과 생각에 귀 기울이세요. 때로는 즐거움보다 깊은 대화가 필요합니다.';
                break;
              default:
                t = '자신의 성격 특성을 이해하고 상대방과의 차이점을 존중하세요.';
            }
            return { strengthsAdvice: s, weaknessesAdvice: r, personalizedAdvice: t };
          })();
        return (0, r.jsxs)(T, {
          children: [
            r.jsx(I, { variant: 'h4', children: '연애 조언 & 팁' }),
            (0, r.jsxs)(h.ZP, {
              container: !0,
              spacing: x.isMobile ? 2 : 3,
              children: [
                r.jsx(h.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  md: 4,
                  children: r.jsx(v.F, {
                    animation: 'slideUp',
                    duration: 'normal',
                    delay: x.isMobile ? 50 : 100,
                    children: (0, r.jsxs)(P, {
                      children: [
                        (0, r.jsxs)(o.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: x.isMobile ? 1 : 2,
                          },
                          children: [
                            r.jsx(C, { color: 'primary', children: r.jsx(S.Z, {}) }),
                            r.jsx(l.Z, {
                              variant: x.isMobile ? 'subtitle1' : 'h6',
                              sx: { textAlign: 'center' },
                              children: '강점 활용하기',
                            }),
                          ],
                        }),
                        r.jsx(b.Z, { sx: { mb: x.isMobile ? 1 : 2 } }),
                        (0, r.jsxs)(l.Z, {
                          variant: 'body2',
                          sx: { fontSize: x.isMobile ? '0.8rem' : 'inherit' },
                          children: [
                            p.strengthsAdvice,
                            ' 당신의 강점은 연애 관계에서 큰 매력으로 작용합니다.',
                          ],
                        }),
                        r.jsx(o.Z, {
                          sx: { mt: x.isMobile ? 1 : 2 },
                          children: i
                            .slice(0, x.isMobile ? 2 : 3)
                            .map((e, s) =>
                              r.jsx(
                                d.Z,
                                {
                                  label: e,
                                  size: 'small',
                                  color: 'primary',
                                  variant: 'outlined',
                                  sx: { m: 0.5, fontSize: x.isMobile ? '0.7rem' : '0.75rem' },
                                },
                                s
                              )
                            ),
                        }),
                      ],
                    }),
                  }),
                }),
                r.jsx(h.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  md: 4,
                  children: r.jsx(v.F, {
                    animation: 'slideUp',
                    duration: 'normal',
                    delay: x.isMobile ? 100 : 200,
                    children: (0, r.jsxs)(P, {
                      children: [
                        (0, r.jsxs)(o.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: x.isMobile ? 1 : 2,
                          },
                          children: [
                            r.jsx(C, { color: 'warning', children: r.jsx(M.Z, {}) }),
                            r.jsx(l.Z, {
                              variant: x.isMobile ? 'subtitle1' : 'h6',
                              sx: { textAlign: 'center' },
                              children: '주의할 점',
                            }),
                          ],
                        }),
                        r.jsx(b.Z, { sx: { mb: x.isMobile ? 1 : 2 } }),
                        (0, r.jsxs)(l.Z, {
                          variant: 'body2',
                          sx: { fontSize: x.isMobile ? '0.8rem' : 'inherit' },
                          children: [
                            p.weaknessesAdvice,
                            ' 이러한 부분들을 인식하고 개선하면 더 건강한 관계를 만들 수 있습니다.',
                          ],
                        }),
                        r.jsx(o.Z, {
                          sx: { mt: x.isMobile ? 1 : 2 },
                          children: a
                            .slice(0, x.isMobile ? 2 : 3)
                            .map((e, s) =>
                              r.jsx(
                                d.Z,
                                {
                                  label: e,
                                  size: 'small',
                                  color: 'secondary',
                                  variant: 'outlined',
                                  sx: { m: 0.5, fontSize: x.isMobile ? '0.7rem' : '0.75rem' },
                                },
                                s
                              )
                            ),
                        }),
                      ],
                    }),
                  }),
                }),
                r.jsx(h.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 12,
                  md: 4,
                  children: r.jsx(v.F, {
                    animation: 'slideUp',
                    duration: 'normal',
                    delay: x.isMobile ? 150 : 300,
                    children: (0, r.jsxs)(P, {
                      children: [
                        (0, r.jsxs)(o.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: x.isMobile ? 1 : 2,
                          },
                          children: [
                            r.jsx(C, { color: 'secondary', children: r.jsx(F.Z, {}) }),
                            r.jsx(l.Z, {
                              variant: x.isMobile ? 'subtitle1' : 'h6',
                              sx: { textAlign: 'center' },
                              children: '맞춤 조언',
                            }),
                          ],
                        }),
                        r.jsx(b.Z, { sx: { mb: x.isMobile ? 1 : 2 } }),
                        r.jsx(l.Z, {
                          variant: 'body2',
                          sx: { fontSize: x.isMobile ? '0.8rem' : 'inherit' },
                          children: p.personalizedAdvice,
                        }),
                        r.jsx(o.Z, {
                          sx: { mt: x.isMobile ? 1 : 2 },
                          children: r.jsx(d.Z, {
                            icon: r.jsx(_.Z, {}),
                            label: `${e} 연애 스타일`,
                            size: 'small',
                            color: 'info',
                            variant: 'outlined',
                            sx: { m: 0.5, fontSize: x.isMobile ? '0.7rem' : '0.75rem' },
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var A = i('(ssr)/./src/app/utils/mbti.js'),
        R = i('(ssr)/./src/app/components/mystical/index.js');
      let B = (0, j.ZP)(o.Z)(({ theme: e }) => ({ position: 'relative', padding: e.spacing(2) })),
        $ = (0, j.ZP)(l.Z)(({ theme: e, mbtiColor: s }) => ({
          fontFamily: '"Playfair Display", "Noto Serif KR", serif',
          fontWeight: 700,
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: e.spacing(1),
          background: s
            ? `linear-gradient(135deg, ${s} 30%, ${e.palette.common.white} 90%)`
            : `linear-gradient(135deg, ${e.palette.primary.main} 0%, ${e.palette.secondary.main} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          [e.breakpoints.down('sm')]: { fontSize: '2rem' },
          [e.breakpoints.down('xs')]: { fontSize: '1.75rem' },
        })),
        N = (0, j.ZP)(l.Z)(({ theme: e }) => ({
          fontFamily: '"Playfair Display", "Noto Serif KR", serif',
          fontWeight: 600,
          fontSize: '1.25rem',
          marginTop: e.spacing(3),
          marginBottom: e.spacing(1),
          color: e.palette.secondary.main,
          [e.breakpoints.down('sm')]: { fontSize: '1.1rem', marginTop: e.spacing(2) },
        })),
        E = (0, j.ZP)(d.Z)(({ theme: e }) => ({
          margin: e.spacing(0.5),
          backgroundColor: e.palette.background.paper,
          border: `1px solid ${e.palette.primary.main}`,
          '& .MuiChip-label': { color: e.palette.text.primary },
          [e.breakpoints.down('sm')]: {
            height: 28,
            fontSize: '0.75rem',
            '& .MuiChip-label': { padding: '0 8px' },
          },
        })),
        W = (0, j.ZP)(m.Z)(({ theme: e, dimension: s }) => {
          let i;
          switch (s) {
            case 'E-I':
              i = '#3F51B5';
              break;
            case 'S-N':
              i = '#4CAF50';
              break;
            case 'T-F':
              i = '#FF9800';
              break;
            case 'J-P':
              i = '#9C27B0';
              break;
            default:
              i = e.palette.primary.main;
          }
          return {
            height: 10,
            borderRadius: 5,
            backgroundColor: e.palette.background.paper,
            '& .MuiLinearProgress-bar': { backgroundColor: i, borderRadius: 5 },
            [e.breakpoints.down('sm')]: {
              height: 8,
              borderRadius: 4,
              '& .MuiLinearProgress-bar': { borderRadius: 4 },
            },
          };
        });
      function D({
        mbtiType: e,
        scores: s,
        idealType: i,
        worstMatch: a,
        onRestart: d,
        onShare: m,
      }) {
        let [j, f] = (0, n.useState)(0),
          [Z, k] = (0, n.useState)(!1);
        (0, c.Z)();
        let S = w(),
          M = (0, A.TA)(e),
          F = (0, A.TA)(i),
          _ = (0, A.TA)(a),
          T = M?.color || '#6B3FA0',
          I = e => {
            let i, r, a, t;
            switch (e) {
              case 'E-I':
                (i = s.E), (r = s.I), (a = 'E'), (t = 'I');
                break;
              case 'S-N':
                (i = s.S), (r = s.N), (a = 'S'), (t = 'N');
                break;
              case 'T-F':
                (i = s.T), (r = s.F), (a = 'T'), (t = 'F');
                break;
              case 'J-P':
                (i = s.J), (r = s.P), (a = 'J'), (t = 'P');
                break;
              default:
                return { score: 50, label1: '', label2: '' };
            }
            let n = i + r;
            return { score: n > 0 ? Math.round((i / n) * 100) : 50, label1: a, label2: t };
          };
        if (!M)
          return r.jsx(g.Z, {
            variant: 'result',
            title: '테스트 결과',
            children: (0, r.jsxs)(B, {
              children: [
                r.jsx(l.Z, {
                  variant: 'h4',
                  sx: { textAlign: 'center', my: 4 },
                  children: '결과를 불러올 수 없습니다',
                }),
                e &&
                  (0, r.jsxs)(l.Z, {
                    variant: 'h5',
                    sx: { textAlign: 'center', mb: 4 },
                    children: ['당신의 MBTI 유형: ', e],
                  }),
                r.jsx(o.Z, {
                  sx: { display: 'flex', justifyContent: 'center', mt: 4 },
                  children: r.jsx(y.Z, {
                    variant: 'mystical',
                    onClick: d,
                    children: '테스트 다시 하기',
                  }),
                }),
              ],
            }),
          });
        let P = (0, r.jsxs)(B, {
            children: [
              (0, r.jsxs)(o.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  py: 8,
                },
                children: [
                  r.jsx(l.Z, {
                    variant: 'h4',
                    sx: { mb: 4, textAlign: 'center' },
                    children: '당신의 MBTI 유형을 분석 중입니다...',
                  }),
                  r.jsx(o.Z, {
                    sx: { position: 'relative', width: 150, height: 150 },
                    children: r.jsx(o.Z, {
                      sx: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'spin 2s linear infinite',
                      },
                      children: r.jsx(o.Z, {
                        component: 'img',
                        src: '/images/tarot-back.png',
                        alt: '타로 카드',
                        sx: { width: '100%', height: '100%', objectFit: 'contain' },
                      }),
                    }),
                  }),
                  r.jsx(l.Z, {
                    variant: 'body1',
                    sx: { mt: 4, textAlign: 'center' },
                    children: '잠시만 기다려주세요...',
                  }),
                ],
              }),
              r.jsx(t(), {
                id: '1c95632acc653d37',
                children:
                  '@-webkit-keyframes spin{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}100%{-webkit-transform:rotatey(360deg);transform:rotatey(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotatey(0deg);transform:rotatey(0deg)}100%{-moz-transform:rotatey(360deg);transform:rotatey(360deg)}}@-o-keyframes spin{0%{-o-transform:rotatey(0deg);transform:rotatey(0deg)}100%{-o-transform:rotatey(360deg);transform:rotatey(360deg)}}@keyframes spin{0%{-webkit-transform:rotatey(0deg);-moz-transform:rotatey(0deg);-o-transform:rotatey(0deg);transform:rotatey(0deg)}100%{-webkit-transform:rotatey(360deg);-moz-transform:rotatey(360deg);-o-transform:rotatey(360deg);transform:rotatey(360deg)}}',
              }),
            ],
          }),
          C = (0, r.jsxs)(B, {
            children: [
              r.jsx(v.F, {
                animation: 'fadeIn',
                duration: 'normal',
                delay: 300,
                children: r.jsx($, { variant: 'h2', mbtiColor: T, children: e }),
              }),
              r.jsx(v.F, {
                animation: 'fadeIn',
                duration: 'normal',
                delay: 600,
                children: r.jsx(l.Z, {
                  variant: 'h4',
                  component: 'h3',
                  sx: {
                    textAlign: 'center',
                    mb: 3,
                    fontFamily: e => e.typography.fontFamily.secondary,
                  },
                  children: M.name,
                }),
              }),
              r.jsx(v.F, {
                animation: 'fadeIn',
                duration: 'normal',
                delay: 900,
                children: (0, r.jsxs)(x.Z, {
                  value: j,
                  onChange: (e, s) => {
                    f(s);
                  },
                  centered: !0,
                  variant: S.isMobile ? 'fullWidth' : 'standard',
                  sx: {
                    mb: 3,
                    '& .MuiTab-root': {
                      fontSize: S.isMobile ? '0.75rem' : 'inherit',
                      minWidth: S.isMobile ? 'auto' : 90,
                      padding: S.isMobile ? '6px 8px' : '12px 16px',
                    },
                  },
                  children: [
                    r.jsx(p.Z, { label: '성격 특성' }),
                    r.jsx(p.Z, { label: '점수 분석' }),
                    r.jsx(p.Z, { label: '궁합 정보' }),
                  ],
                }),
              }),
              0 === j &&
                r.jsx(v.F, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  children: (0, r.jsxs)(o.Z, {
                    children: [
                      r.jsx(b.Z, { sx: { my: 2 } }),
                      r.jsx(l.Z, { variant: 'body1', sx: { mb: 2 }, children: M.description }),
                      r.jsx(N, { variant: 'h5', children: '연애 강점' }),
                      r.jsx(o.Z, {
                        sx: { display: 'flex', flexWrap: 'wrap', mb: 2 },
                        children: M.strengths.map((e, s) =>
                          r.jsx(
                            v.F,
                            {
                              animation: 'slideUp',
                              duration: 'fast',
                              delay: 100 * s,
                              children: r.jsx(E, { label: e, color: 'primary' }),
                            },
                            s
                          )
                        ),
                      }),
                      r.jsx(N, { variant: 'h5', children: '연애 약점' }),
                      r.jsx(o.Z, {
                        sx: { display: 'flex', flexWrap: 'wrap', mb: 2 },
                        children: M.weaknesses.map((e, s) =>
                          r.jsx(
                            v.F,
                            {
                              animation: 'slideUp',
                              duration: 'fast',
                              delay: 100 * s,
                              children: r.jsx(E, { label: e, color: 'secondary' }),
                            },
                            s
                          )
                        ),
                      }),
                      r.jsx(N, { variant: 'h5', children: '연애 스타일' }),
                      r.jsx(l.Z, { variant: 'body1', sx: { mb: 2 }, children: M.datingStyle }),
                    ],
                  }),
                }),
              1 === j &&
                r.jsx(v.F, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  children: (0, r.jsxs)(o.Z, {
                    children: [
                      r.jsx(b.Z, { sx: { my: 2 } }),
                      r.jsx(l.Z, {
                        variant: 'body1',
                        sx: { mb: 3 },
                        children:
                          '당신의 MBTI 성향 점수 분석입니다. 각 차원에서 어느 쪽에 더 가까운지 확인해보세요.',
                      }),
                      ['E-I', 'S-N', 'T-F', 'J-P'].map((e, s) => {
                        let { score: i, label1: a, label2: t } = I(e);
                        return r.jsx(
                          v.F,
                          {
                            animation: 'slideRight',
                            duration: 'normal',
                            delay: 150 * s,
                            children: (0, r.jsxs)(o.Z, {
                              sx: { mb: 3 },
                              children: [
                                (0, r.jsxs)(o.Z, {
                                  sx: { display: 'flex', justifyContent: 'space-between', mb: 1 },
                                  children: [
                                    (0, r.jsxs)(l.Z, {
                                      variant: 'body2',
                                      children: [a, ' (', i, '%)'],
                                    }),
                                    (0, r.jsxs)(l.Z, {
                                      variant: 'body2',
                                      children: [t, ' (', 100 - i, '%)'],
                                    }),
                                  ],
                                }),
                                r.jsx(W, { variant: 'determinate', value: i, dimension: e }),
                                (0, r.jsxs)(o.Z, {
                                  sx: { display: 'flex', justifyContent: 'space-between', mt: 0.5 },
                                  children: [
                                    r.jsx(l.Z, {
                                      variant: 'caption',
                                      color: 'text.secondary',
                                      children:
                                        'E-I' === e
                                          ? '외향적'
                                          : 'S-N' === e
                                            ? '현실적'
                                            : 'T-F' === e
                                              ? '논리적'
                                              : '계획적',
                                    }),
                                    r.jsx(l.Z, {
                                      variant: 'caption',
                                      color: 'text.secondary',
                                      children:
                                        'E-I' === e
                                          ? '내향적'
                                          : 'S-N' === e
                                            ? '직관적'
                                            : 'T-F' === e
                                              ? '감성적'
                                              : '즉흥적',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e
                        );
                      }),
                    ],
                  }),
                }),
              2 === j &&
                r.jsx(v.F, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  children: (0, r.jsxs)(o.Z, {
                    children: [
                      r.jsx(b.Z, { sx: { my: 2 } }),
                      (0, r.jsxs)(h.ZP, {
                        container: !0,
                        spacing: 3,
                        children: [
                          r.jsx(h.ZP, {
                            item: !0,
                            xs: 12,
                            md: 6,
                            children: r.jsx(v.F, {
                              animation: 'slideUp',
                              duration: 'normal',
                              delay: 100,
                              children: (0, r.jsxs)(o.Z, {
                                sx: { mb: 3 },
                                children: [
                                  r.jsx(N, { variant: 'h5', children: '나의 이상형' }),
                                  F
                                    ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsxs)(o.Z, {
                                            sx: { display: 'flex', alignItems: 'center', mb: 1 },
                                            children: [
                                              r.jsx(l.Z, {
                                                variant: 'h6',
                                                color: 'secondary.main',
                                                sx: { mr: 1 },
                                                children: i,
                                              }),
                                              r.jsx(l.Z, {
                                                variant: 'subtitle1',
                                                children: F.name,
                                              }),
                                            ],
                                          }),
                                          r.jsx(l.Z, {
                                            variant: 'body2',
                                            sx: { mb: 2 },
                                            children: F.description,
                                          }),
                                          (0, r.jsxs)(l.Z, {
                                            variant: 'body2',
                                            sx: { fontStyle: 'italic' },
                                            children: ['"', F.datingStyle, '"'],
                                          }),
                                        ],
                                      })
                                    : r.jsx(l.Z, {
                                        variant: 'body1',
                                        children: '정보를 불러올 수 없습니다.',
                                      }),
                                ],
                              }),
                            }),
                          }),
                          r.jsx(h.ZP, {
                            item: !0,
                            xs: 12,
                            md: 6,
                            children: r.jsx(v.F, {
                              animation: 'slideUp',
                              duration: 'normal',
                              delay: 200,
                              children: (0, r.jsxs)(o.Z, {
                                sx: { mb: 3 },
                                children: [
                                  r.jsx(N, { variant: 'h5', children: '주의해야 할 유형' }),
                                  _
                                    ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsxs)(o.Z, {
                                            sx: { display: 'flex', alignItems: 'center', mb: 1 },
                                            children: [
                                              r.jsx(l.Z, {
                                                variant: 'h6',
                                                color: 'error',
                                                sx: { mr: 1 },
                                                children: a,
                                              }),
                                              r.jsx(l.Z, {
                                                variant: 'subtitle1',
                                                children: _.name,
                                              }),
                                            ],
                                          }),
                                          r.jsx(l.Z, {
                                            variant: 'body2',
                                            sx: { mb: 2 },
                                            children: _.description,
                                          }),
                                          (0, r.jsxs)(l.Z, {
                                            variant: 'body2',
                                            sx: { fontStyle: 'italic' },
                                            children: ['"', _.datingStyle, '"'],
                                          }),
                                        ],
                                      })
                                    : r.jsx(l.Z, {
                                        variant: 'body1',
                                        children: '정보를 불러올 수 없습니다.',
                                      }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              r.jsx(v.F, {
                animation: 'fadeIn',
                duration: 'normal',
                delay: 1200,
                children: (0, r.jsxs)(o.Z, {
                  sx: {
                    display: 'flex',
                    flexDirection: S.isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                    gap: S.isMobile ? 1.5 : 2,
                  },
                  children: [
                    r.jsx(y.Z, {
                      variant: 'tarot',
                      onClick: d,
                      sx: {
                        width: S.isMobile ? '100%' : 'auto',
                        fontSize: S.isMobile ? '0.875rem' : 'inherit',
                      },
                      children: '테스트 다시 하기',
                    }),
                    m &&
                      r.jsx(y.Z, {
                        variant: 'mystical',
                        onClick: m,
                        sx: {
                          width: S.isMobile ? '100%' : 'auto',
                          fontSize: S.isMobile ? '0.875rem' : 'inherit',
                        },
                        children: '결과 공유하기',
                      }),
                  ],
                }),
              }),
            ],
          });
        return (0, r.jsxs)(o.Z, {
          children: [
            r.jsx(o.Z, {
              sx: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                overflow: 'hidden',
              },
              children: r.jsx(R.I3, { starCount: 30, shootingStarCount: 2, fogCount: 3 }),
            }),
            r.jsx(R.py, {
              front: P,
              back: C,
              frontVariant: 'mystical',
              backVariant: 'result',
              frontTitle: '타로 카드 해석 중...',
              backTitle: '당신의 MBTI 유형은',
              autoFlip: !0,
              autoFlipDelay: 1500,
              sx: { maxWidth: 800, mx: 'auto' },
            }),
            r.jsx(u.Z, {
              in: Z,
              timeout: 1e3,
              children: r.jsx(o.Z, {
                sx: { mt: 6 },
                children:
                  M &&
                  r.jsx(z, {
                    mbtiType: e,
                    description: M.description,
                    strengths: M.strengths,
                    weaknesses: M.weaknesses,
                    datingStyle: M.datingStyle,
                    idealTypeInfo: F,
                    worstMatchInfo: _,
                  }),
              }),
            }),
          ],
        });
      }
    },
    '(ssr)/./src/app/services/resultService.js': (e, s, i) => {
      i.d(s, { TW: () => t });
      var r = i('(ssr)/./node_modules/uuid/dist/esm-node/v4.js'),
        a = i('(ssr)/./src/app/utils/supabase.js');
      i('(ssr)/./src/app/utils/mbtiAnalyzer.js'), i('(ssr)/./src/app/utils/mbti.js');
      let t = async (e, s, i = null, t = null, n = null) => {
        try {
          let o = {
            mbti_type: s,
            e_i_score: e.E - e.I,
            s_n_score: e.S - e.N,
            t_f_score: e.T - e.F,
            j_p_score: e.J - e.P,
            share_id: (0, r.Z)(),
          };
          i ? (o.user_id = i) : t ? (o.session_id = t) : (o.session_id = (0, r.Z)()),
            n && (o.email = n);
          let { data: l, error: d } = await a.ZP.from('test_results').insert([o]);
          if (d) throw (console.error('Error saving test result:', d), d);
          return { success: !0, data: l[0], shareId: o.share_id, sessionId: o.session_id };
        } catch (e) {
          return console.error('Failed to save test result:', e), { success: !1, error: e };
        }
      };
    },
  });
