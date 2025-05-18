'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [235],
  {
    '(app-pages-browser)/./src/app/components/test/TestResult.jsx': function (e, r, s) {
      s.d(r, {
        Z: function () {
          return U;
        },
      });
      var a = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        i = s('(app-pages-browser)/./node_modules/styled-jsx/style.js'),
        t = s.n(i),
        n = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
        o = s('(app-pages-browser)/./node_modules/@mui/material/Box/Box.js'),
        l = s('(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js'),
        d = s('(app-pages-browser)/./node_modules/@mui/material/Chip/Chip.js'),
        c = s('(app-pages-browser)/./node_modules/@mui/material/LinearProgress/LinearProgress.js'),
        p = s('(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js'),
        m = s('(app-pages-browser)/./node_modules/@mui/material/Tabs/Tabs.js'),
        x = s('(app-pages-browser)/./node_modules/@mui/material/Tab/Tab.js'),
        b = s('(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js'),
        h = s('(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js'),
        u = s('(app-pages-browser)/./node_modules/@mui/material/Fade/Fade.js'),
        g = s('(app-pages-browser)/./node_modules/@mui/material/styles/styled.js'),
        j = s('(app-pages-browser)/./src/app/components/TarotCard.jsx'),
        y = s('(app-pages-browser)/./src/app/components/MysticalButton.jsx'),
        f = s('(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js'),
        Z = s('(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js'),
        w = s('(app-pages-browser)/./src/app/components/animations.jsx'),
        k = s('(app-pages-browser)/./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js');
      function v() {
        let e = (0, p.Z)(),
          r = (0, k.Z)(e.breakpoints.down('sm')),
          s = (0, k.Z)(e.breakpoints.down('md')),
          a = (0, k.Z)(e.breakpoints.up('lg')),
          i = (0, k.Z)(e.breakpoints.up('xl')),
          t = (0, n.useCallback)(r => e.breakpoints.up(r), [e.breakpoints]),
          o = (0, n.useCallback)(r => e.breakpoints.down(r), [e.breakpoints]);
        return {
          isMobile: r,
          isTablet: s,
          isDesktop: a,
          isLargeDesktop: i,
          up: t,
          down: o,
          between: (0, n.useCallback)((r, s) => e.breakpoints.between(r, s), [e.breakpoints]),
          only: (0, n.useCallback)(r => e.breakpoints.only(r), [e.breakpoints]),
          width: e => {
            let { xs: t, sm: n, md: o, lg: l, xl: d } = e;
            return i && void 0 !== d
              ? d
              : a && void 0 !== l
                ? l
                : s || void 0 === o
                  ? r || void 0 === n
                    ? t
                    : n
                  : o;
          },
        };
      }
      var M = s('(app-pages-browser)/./node_modules/@mui/icons-material/Favorite.js'),
        S = s('(app-pages-browser)/./node_modules/@mui/icons-material/Warning.js'),
        _ = s('(app-pages-browser)/./node_modules/@mui/icons-material/TipsAndUpdates.js'),
        F = s('(app-pages-browser)/./node_modules/@mui/icons-material/Psychology.js');
      let T = (0, g.ZP)(o.Z)(e => {
          let { theme: r } = e;
          return {
            position: 'relative',
            padding: r.spacing(3),
            borderRadius: 2 * r.shape.borderRadius,
            background: 'linear-gradient(135deg, '
              .concat(r.palette.background.paper, ' 0%, ')
              .concat(r.palette.background.default, ' 100%)'),
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            border: '1px solid '.concat(r.palette.primary.dark),
            marginTop: r.spacing(4),
            marginBottom: r.spacing(4),
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 2 * r.shape.borderRadius,
              background: 'url(/images/card-texture.png)',
              backgroundSize: 'cover',
              opacity: 0.05,
              pointerEvents: 'none',
            },
            [r.breakpoints.down('sm')]: {
              padding: r.spacing(2),
              marginTop: r.spacing(3),
              marginBottom: r.spacing(3),
              borderRadius: 1.5 * r.shape.borderRadius,
              '&::before': { borderRadius: 1.5 * r.shape.borderRadius },
            },
          };
        }),
        I = (0, g.ZP)(l.Z)(e => {
          let { theme: r } = e;
          return {
            fontFamily: '"Playfair Display", "Noto Serif KR", serif',
            fontWeight: 600,
            fontSize: '1.5rem',
            marginBottom: r.spacing(2),
            color: r.palette.secondary.main,
            textAlign: 'center',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            [r.breakpoints.down('sm')]: { fontSize: '1.25rem', marginBottom: r.spacing(1.5) },
          };
        }),
        C = (0, g.ZP)(f.Z)(e => {
          let { theme: r } = e;
          return {
            padding: r.spacing(2),
            height: '100%',
            background: 'linear-gradient(135deg, '.concat(
              r.palette.background.paper,
              ' 0%, rgba(42, 42, 74, 0.8) 100%)'
            ),
            borderRadius: r.shape.borderRadius,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '1px solid '.concat(r.palette.primary.dark),
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            },
            [r.breakpoints.down('sm')]: {
              padding: r.spacing(1.5),
              '&:hover': { transform: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' },
            },
          };
        }),
        P = (0, g.ZP)(Z.Z)(e => {
          let { theme: r, color: s = 'primary' } = e;
          return {
            backgroundColor: r.palette[s].main,
            color: r.palette[s].contrastText,
            width: 40,
            height: 40,
            marginBottom: r.spacing(1),
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            [r.breakpoints.down('sm')]: {
              width: 32,
              height: 32,
              '& .MuiSvgIcon-root': { fontSize: '1.2rem' },
            },
          };
        });
      function z(e) {
        let {
          mbtiType: r,
          description: s,
          strengths: i = [],
          weaknesses: t = [],
          datingStyle: n,
          idealTypeInfo: c,
          worstMatchInfo: m,
        } = e;
        (0, p.Z)();
        let x = v(),
          u = (() => {
            let e =
                i.length > 0
                  ? '당신의 '
                      .concat(i[0], '와(과) ')
                      .concat(i.length > 1 ? i[1] : '', ' 특성을 활용하세요.')
                  : '당신의 강점을 활용하세요.',
              s =
                t.length > 0
                  ? ''
                      .concat(t[0], '와(과) ')
                      .concat(t.length > 1 ? t[1] : '', ' 부분에 주의하세요.')
                  : '약점을 인식하고 개선하려고 노력하세요.',
              a = '';
            switch (r.substring(0, 2)) {
              case 'IN':
                a =
                  '내면의 감정을 솔직하게 표현하는 연습을 하세요. 상대방이 당신의 마음을 알아차리지 못할 수 있습니다.';
                break;
              case 'IS':
                a =
                  '새로운 경험에 열린 마음을 가지세요. 익숙한 것에서 벗어나 새로운 데이트 아이디어를 시도해보세요.';
                break;
              case 'EN':
                a =
                  '상대방에게 충분한 개인 공간을 제공하세요. 당신의 열정이 때로는 부담이 될 수 있습니다.';
                break;
              case 'ES':
                a =
                  '상대방의 깊은 감정과 생각에 귀 기울이세요. 때로는 즐거움보다 깊은 대화가 필요합니다.';
                break;
              default:
                a = '자신의 성격 특성을 이해하고 상대방과의 차이점을 존중하세요.';
            }
            return { strengthsAdvice: e, weaknessesAdvice: s, personalizedAdvice: a };
          })();
        return (0, a.jsxs)(T, {
          children: [
            (0, a.jsx)(I, { variant: 'h4', children: '연애 조언 & 팁' }),
            (0, a.jsxs)(h.ZP, {
              container: !0,
              spacing: x.isMobile ? 2 : 3,
              children: [
                (0, a.jsx)(h.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  md: 4,
                  children: (0, a.jsx)(w.F, {
                    animation: 'slideUp',
                    duration: 'normal',
                    delay: x.isMobile ? 50 : 100,
                    children: (0, a.jsxs)(C, {
                      children: [
                        (0, a.jsxs)(o.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: x.isMobile ? 1 : 2,
                          },
                          children: [
                            (0, a.jsx)(P, { color: 'primary', children: (0, a.jsx)(M.Z, {}) }),
                            (0, a.jsx)(l.Z, {
                              variant: x.isMobile ? 'subtitle1' : 'h6',
                              sx: { textAlign: 'center' },
                              children: '강점 활용하기',
                            }),
                          ],
                        }),
                        (0, a.jsx)(b.Z, { sx: { mb: x.isMobile ? 1 : 2 } }),
                        (0, a.jsxs)(l.Z, {
                          variant: 'body2',
                          sx: { fontSize: x.isMobile ? '0.8rem' : 'inherit' },
                          children: [
                            u.strengthsAdvice,
                            ' 당신의 강점은 연애 관계에서 큰 매력으로 작용합니다.',
                          ],
                        }),
                        (0, a.jsx)(o.Z, {
                          sx: { mt: x.isMobile ? 1 : 2 },
                          children: i
                            .slice(0, x.isMobile ? 2 : 3)
                            .map((e, r) =>
                              (0, a.jsx)(
                                d.Z,
                                {
                                  label: e,
                                  size: 'small',
                                  color: 'primary',
                                  variant: 'outlined',
                                  sx: { m: 0.5, fontSize: x.isMobile ? '0.7rem' : '0.75rem' },
                                },
                                r
                              )
                            ),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(h.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  md: 4,
                  children: (0, a.jsx)(w.F, {
                    animation: 'slideUp',
                    duration: 'normal',
                    delay: x.isMobile ? 100 : 200,
                    children: (0, a.jsxs)(C, {
                      children: [
                        (0, a.jsxs)(o.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: x.isMobile ? 1 : 2,
                          },
                          children: [
                            (0, a.jsx)(P, { color: 'warning', children: (0, a.jsx)(S.Z, {}) }),
                            (0, a.jsx)(l.Z, {
                              variant: x.isMobile ? 'subtitle1' : 'h6',
                              sx: { textAlign: 'center' },
                              children: '주의할 점',
                            }),
                          ],
                        }),
                        (0, a.jsx)(b.Z, { sx: { mb: x.isMobile ? 1 : 2 } }),
                        (0, a.jsxs)(l.Z, {
                          variant: 'body2',
                          sx: { fontSize: x.isMobile ? '0.8rem' : 'inherit' },
                          children: [
                            u.weaknessesAdvice,
                            ' 이러한 부분들을 인식하고 개선하면 더 건강한 관계를 만들 수 있습니다.',
                          ],
                        }),
                        (0, a.jsx)(o.Z, {
                          sx: { mt: x.isMobile ? 1 : 2 },
                          children: t
                            .slice(0, x.isMobile ? 2 : 3)
                            .map((e, r) =>
                              (0, a.jsx)(
                                d.Z,
                                {
                                  label: e,
                                  size: 'small',
                                  color: 'secondary',
                                  variant: 'outlined',
                                  sx: { m: 0.5, fontSize: x.isMobile ? '0.7rem' : '0.75rem' },
                                },
                                r
                              )
                            ),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(h.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 12,
                  md: 4,
                  children: (0, a.jsx)(w.F, {
                    animation: 'slideUp',
                    duration: 'normal',
                    delay: x.isMobile ? 150 : 300,
                    children: (0, a.jsxs)(C, {
                      children: [
                        (0, a.jsxs)(o.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: x.isMobile ? 1 : 2,
                          },
                          children: [
                            (0, a.jsx)(P, { color: 'secondary', children: (0, a.jsx)(_.Z, {}) }),
                            (0, a.jsx)(l.Z, {
                              variant: x.isMobile ? 'subtitle1' : 'h6',
                              sx: { textAlign: 'center' },
                              children: '맞춤 조언',
                            }),
                          ],
                        }),
                        (0, a.jsx)(b.Z, { sx: { mb: x.isMobile ? 1 : 2 } }),
                        (0, a.jsx)(l.Z, {
                          variant: 'body2',
                          sx: { fontSize: x.isMobile ? '0.8rem' : 'inherit' },
                          children: u.personalizedAdvice,
                        }),
                        (0, a.jsx)(o.Z, {
                          sx: { mt: x.isMobile ? 1 : 2 },
                          children: (0, a.jsx)(d.Z, {
                            icon: (0, a.jsx)(F.Z, {}),
                            label: ''.concat(r, ' 연애 스타일'),
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
      var A = s('(app-pages-browser)/./src/app/utils/mbti.js'),
        B = s('(app-pages-browser)/./src/app/components/mystical/index.js');
      let R = (0, g.ZP)(o.Z)(e => {
          let { theme: r } = e;
          return { position: 'relative', padding: r.spacing(2) };
        }),
        E = (0, g.ZP)(l.Z)(e => {
          let { theme: r, mbtiColor: s } = e;
          return {
            fontFamily: '"Playfair Display", "Noto Serif KR", serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: r.spacing(1),
            background: s
              ? 'linear-gradient(135deg, '
                  .concat(s, ' 30%, ')
                  .concat(r.palette.common.white, ' 90%)')
              : 'linear-gradient(135deg, '
                  .concat(r.palette.primary.main, ' 0%, ')
                  .concat(r.palette.secondary.main, ' 100%)'),
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            [r.breakpoints.down('sm')]: { fontSize: '2rem' },
            [r.breakpoints.down('xs')]: { fontSize: '1.75rem' },
          };
        }),
        N = (0, g.ZP)(l.Z)(e => {
          let { theme: r } = e;
          return {
            fontFamily: '"Playfair Display", "Noto Serif KR", serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            marginTop: r.spacing(3),
            marginBottom: r.spacing(1),
            color: r.palette.secondary.main,
            [r.breakpoints.down('sm')]: { fontSize: '1.1rem', marginTop: r.spacing(2) },
          };
        }),
        D = (0, g.ZP)(d.Z)(e => {
          let { theme: r } = e;
          return {
            margin: r.spacing(0.5),
            backgroundColor: r.palette.background.paper,
            border: '1px solid '.concat(r.palette.primary.main),
            '& .MuiChip-label': { color: r.palette.text.primary },
            [r.breakpoints.down('sm')]: {
              height: 28,
              fontSize: '0.75rem',
              '& .MuiChip-label': { padding: '0 8px' },
            },
          };
        }),
        W = (0, g.ZP)(c.Z)(e => {
          let r,
            { theme: s, dimension: a } = e;
          switch (a) {
            case 'E-I':
              r = '#3F51B5';
              break;
            case 'S-N':
              r = '#4CAF50';
              break;
            case 'T-F':
              r = '#FF9800';
              break;
            case 'J-P':
              r = '#9C27B0';
              break;
            default:
              r = s.palette.primary.main;
          }
          return {
            height: 10,
            borderRadius: 5,
            backgroundColor: s.palette.background.paper,
            '& .MuiLinearProgress-bar': { backgroundColor: r, borderRadius: 5 },
            [s.breakpoints.down('sm')]: {
              height: 8,
              borderRadius: 4,
              '& .MuiLinearProgress-bar': { borderRadius: 4 },
            },
          };
        });
      function U(e) {
        let { mbtiType: r, scores: s, idealType: i, worstMatch: d, onRestart: c, onShare: g } = e,
          [f, Z] = (0, n.useState)(0),
          [k, M] = (0, n.useState)(!1);
        (0, p.Z)();
        let S = v(),
          _ = (0, A.TA)(r),
          F = (0, A.TA)(i),
          T = (0, A.TA)(d),
          I = (null == _ ? void 0 : _.color) || '#6B3FA0';
        (0, n.useEffect)(() => {
          let e = setTimeout(
            () => {
              M(!0);
            },
            S.isMobile ? 1e3 : 1500
          );
          return () => clearTimeout(e);
        }, [S.isMobile]);
        let C = e => {
          let r, a, i, t;
          switch (e) {
            case 'E-I':
              (r = s.E), (a = s.I), (i = 'E'), (t = 'I');
              break;
            case 'S-N':
              (r = s.S), (a = s.N), (i = 'S'), (t = 'N');
              break;
            case 'T-F':
              (r = s.T), (a = s.F), (i = 'T'), (t = 'F');
              break;
            case 'J-P':
              (r = s.J), (a = s.P), (i = 'J'), (t = 'P');
              break;
            default:
              return { score: 50, label1: '', label2: '' };
          }
          let n = r + a;
          return { score: n > 0 ? Math.round((r / n) * 100) : 50, label1: i, label2: t };
        };
        if (!_)
          return (0, a.jsx)(j.Z, {
            variant: 'result',
            title: '테스트 결과',
            children: (0, a.jsxs)(R, {
              children: [
                (0, a.jsx)(l.Z, {
                  variant: 'h4',
                  sx: { textAlign: 'center', my: 4 },
                  children: '결과를 불러올 수 없습니다',
                }),
                r &&
                  (0, a.jsxs)(l.Z, {
                    variant: 'h5',
                    sx: { textAlign: 'center', mb: 4 },
                    children: ['당신의 MBTI 유형: ', r],
                  }),
                (0, a.jsx)(o.Z, {
                  sx: { display: 'flex', justifyContent: 'center', mt: 4 },
                  children: (0, a.jsx)(y.Z, {
                    variant: 'mystical',
                    onClick: c,
                    children: '테스트 다시 하기',
                  }),
                }),
              ],
            }),
          });
        let P = (0, a.jsxs)(R, {
            children: [
              (0, a.jsxs)(o.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  py: 8,
                },
                children: [
                  (0, a.jsx)(l.Z, {
                    variant: 'h4',
                    sx: { mb: 4, textAlign: 'center' },
                    children: '당신의 MBTI 유형을 분석 중입니다...',
                  }),
                  (0, a.jsx)(o.Z, {
                    sx: { position: 'relative', width: 150, height: 150 },
                    children: (0, a.jsx)(o.Z, {
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
                      children: (0, a.jsx)(o.Z, {
                        component: 'img',
                        src: '/images/tarot-back.png',
                        alt: '타로 카드',
                        sx: { width: '100%', height: '100%', objectFit: 'contain' },
                      }),
                    }),
                  }),
                  (0, a.jsx)(l.Z, {
                    variant: 'body1',
                    sx: { mt: 4, textAlign: 'center' },
                    children: '잠시만 기다려주세요...',
                  }),
                ],
              }),
              (0, a.jsx)(t(), {
                id: '1c95632acc653d37',
                children:
                  '@-webkit-keyframes spin{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}100%{-webkit-transform:rotatey(360deg);transform:rotatey(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotatey(0deg);transform:rotatey(0deg)}100%{-moz-transform:rotatey(360deg);transform:rotatey(360deg)}}@-o-keyframes spin{0%{-o-transform:rotatey(0deg);transform:rotatey(0deg)}100%{-o-transform:rotatey(360deg);transform:rotatey(360deg)}}@keyframes spin{0%{-webkit-transform:rotatey(0deg);-moz-transform:rotatey(0deg);-o-transform:rotatey(0deg);transform:rotatey(0deg)}100%{-webkit-transform:rotatey(360deg);-moz-transform:rotatey(360deg);-o-transform:rotatey(360deg);transform:rotatey(360deg)}}',
              }),
            ],
          }),
          U = (0, a.jsxs)(R, {
            children: [
              (0, a.jsx)(w.F, {
                animation: 'fadeIn',
                duration: 'normal',
                delay: 300,
                children: (0, a.jsx)(E, { variant: 'h2', mbtiColor: I, children: r }),
              }),
              (0, a.jsx)(w.F, {
                animation: 'fadeIn',
                duration: 'normal',
                delay: 600,
                children: (0, a.jsx)(l.Z, {
                  variant: 'h4',
                  component: 'h3',
                  sx: {
                    textAlign: 'center',
                    mb: 3,
                    fontFamily: e => e.typography.fontFamily.secondary,
                  },
                  children: _.name,
                }),
              }),
              (0, a.jsx)(w.F, {
                animation: 'fadeIn',
                duration: 'normal',
                delay: 900,
                children: (0, a.jsxs)(m.Z, {
                  value: f,
                  onChange: (e, r) => {
                    Z(r);
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
                    (0, a.jsx)(x.Z, { label: '성격 특성' }),
                    (0, a.jsx)(x.Z, { label: '점수 분석' }),
                    (0, a.jsx)(x.Z, { label: '궁합 정보' }),
                  ],
                }),
              }),
              0 === f &&
                (0, a.jsx)(w.F, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  children: (0, a.jsxs)(o.Z, {
                    children: [
                      (0, a.jsx)(b.Z, { sx: { my: 2 } }),
                      (0, a.jsx)(l.Z, { variant: 'body1', sx: { mb: 2 }, children: _.description }),
                      (0, a.jsx)(N, { variant: 'h5', children: '연애 강점' }),
                      (0, a.jsx)(o.Z, {
                        sx: { display: 'flex', flexWrap: 'wrap', mb: 2 },
                        children: _.strengths.map((e, r) =>
                          (0, a.jsx)(
                            w.F,
                            {
                              animation: 'slideUp',
                              duration: 'fast',
                              delay: 100 * r,
                              children: (0, a.jsx)(D, { label: e, color: 'primary' }),
                            },
                            r
                          )
                        ),
                      }),
                      (0, a.jsx)(N, { variant: 'h5', children: '연애 약점' }),
                      (0, a.jsx)(o.Z, {
                        sx: { display: 'flex', flexWrap: 'wrap', mb: 2 },
                        children: _.weaknesses.map((e, r) =>
                          (0, a.jsx)(
                            w.F,
                            {
                              animation: 'slideUp',
                              duration: 'fast',
                              delay: 100 * r,
                              children: (0, a.jsx)(D, { label: e, color: 'secondary' }),
                            },
                            r
                          )
                        ),
                      }),
                      (0, a.jsx)(N, { variant: 'h5', children: '연애 스타일' }),
                      (0, a.jsx)(l.Z, { variant: 'body1', sx: { mb: 2 }, children: _.datingStyle }),
                    ],
                  }),
                }),
              1 === f &&
                (0, a.jsx)(w.F, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  children: (0, a.jsxs)(o.Z, {
                    children: [
                      (0, a.jsx)(b.Z, { sx: { my: 2 } }),
                      (0, a.jsx)(l.Z, {
                        variant: 'body1',
                        sx: { mb: 3 },
                        children:
                          '당신의 MBTI 성향 점수 분석입니다. 각 차원에서 어느 쪽에 더 가까운지 확인해보세요.',
                      }),
                      ['E-I', 'S-N', 'T-F', 'J-P'].map((e, r) => {
                        let { score: s, label1: i, label2: t } = C(e);
                        return (0, a.jsx)(
                          w.F,
                          {
                            animation: 'slideRight',
                            duration: 'normal',
                            delay: 150 * r,
                            children: (0, a.jsxs)(o.Z, {
                              sx: { mb: 3 },
                              children: [
                                (0, a.jsxs)(o.Z, {
                                  sx: { display: 'flex', justifyContent: 'space-between', mb: 1 },
                                  children: [
                                    (0, a.jsxs)(l.Z, {
                                      variant: 'body2',
                                      children: [i, ' (', s, '%)'],
                                    }),
                                    (0, a.jsxs)(l.Z, {
                                      variant: 'body2',
                                      children: [t, ' (', 100 - s, '%)'],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(W, { variant: 'determinate', value: s, dimension: e }),
                                (0, a.jsxs)(o.Z, {
                                  sx: { display: 'flex', justifyContent: 'space-between', mt: 0.5 },
                                  children: [
                                    (0, a.jsx)(l.Z, {
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
                                    (0, a.jsx)(l.Z, {
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
              2 === f &&
                (0, a.jsx)(w.F, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  children: (0, a.jsxs)(o.Z, {
                    children: [
                      (0, a.jsx)(b.Z, { sx: { my: 2 } }),
                      (0, a.jsxs)(h.ZP, {
                        container: !0,
                        spacing: 3,
                        children: [
                          (0, a.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            md: 6,
                            children: (0, a.jsx)(w.F, {
                              animation: 'slideUp',
                              duration: 'normal',
                              delay: 100,
                              children: (0, a.jsxs)(o.Z, {
                                sx: { mb: 3 },
                                children: [
                                  (0, a.jsx)(N, { variant: 'h5', children: '나의 이상형' }),
                                  F
                                    ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsxs)(o.Z, {
                                            sx: { display: 'flex', alignItems: 'center', mb: 1 },
                                            children: [
                                              (0, a.jsx)(l.Z, {
                                                variant: 'h6',
                                                color: 'secondary.main',
                                                sx: { mr: 1 },
                                                children: i,
                                              }),
                                              (0, a.jsx)(l.Z, {
                                                variant: 'subtitle1',
                                                children: F.name,
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)(l.Z, {
                                            variant: 'body2',
                                            sx: { mb: 2 },
                                            children: F.description,
                                          }),
                                          (0, a.jsxs)(l.Z, {
                                            variant: 'body2',
                                            sx: { fontStyle: 'italic' },
                                            children: ['"', F.datingStyle, '"'],
                                          }),
                                        ],
                                      })
                                    : (0, a.jsx)(l.Z, {
                                        variant: 'body1',
                                        children: '정보를 불러올 수 없습니다.',
                                      }),
                                ],
                              }),
                            }),
                          }),
                          (0, a.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            md: 6,
                            children: (0, a.jsx)(w.F, {
                              animation: 'slideUp',
                              duration: 'normal',
                              delay: 200,
                              children: (0, a.jsxs)(o.Z, {
                                sx: { mb: 3 },
                                children: [
                                  (0, a.jsx)(N, { variant: 'h5', children: '주의해야 할 유형' }),
                                  T
                                    ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsxs)(o.Z, {
                                            sx: { display: 'flex', alignItems: 'center', mb: 1 },
                                            children: [
                                              (0, a.jsx)(l.Z, {
                                                variant: 'h6',
                                                color: 'error',
                                                sx: { mr: 1 },
                                                children: d,
                                              }),
                                              (0, a.jsx)(l.Z, {
                                                variant: 'subtitle1',
                                                children: T.name,
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)(l.Z, {
                                            variant: 'body2',
                                            sx: { mb: 2 },
                                            children: T.description,
                                          }),
                                          (0, a.jsxs)(l.Z, {
                                            variant: 'body2',
                                            sx: { fontStyle: 'italic' },
                                            children: ['"', T.datingStyle, '"'],
                                          }),
                                        ],
                                      })
                                    : (0, a.jsx)(l.Z, {
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
              (0, a.jsx)(w.F, {
                animation: 'fadeIn',
                duration: 'normal',
                delay: 1200,
                children: (0, a.jsxs)(o.Z, {
                  sx: {
                    display: 'flex',
                    flexDirection: S.isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                    gap: S.isMobile ? 1.5 : 2,
                  },
                  children: [
                    (0, a.jsx)(y.Z, {
                      variant: 'tarot',
                      onClick: c,
                      sx: {
                        width: S.isMobile ? '100%' : 'auto',
                        fontSize: S.isMobile ? '0.875rem' : 'inherit',
                      },
                      children: '테스트 다시 하기',
                    }),
                    g &&
                      (0, a.jsx)(y.Z, {
                        variant: 'mystical',
                        onClick: g,
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
        return (0, a.jsxs)(o.Z, {
          children: [
            (0, a.jsx)(o.Z, {
              sx: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                overflow: 'hidden',
              },
              children: (0, a.jsx)(B.I3, { starCount: 30, shootingStarCount: 2, fogCount: 3 }),
            }),
            (0, a.jsx)(B.py, {
              front: P,
              back: U,
              frontVariant: 'mystical',
              backVariant: 'result',
              frontTitle: '타로 카드 해석 중...',
              backTitle: '당신의 MBTI 유형은',
              autoFlip: !0,
              autoFlipDelay: 1500,
              sx: { maxWidth: 800, mx: 'auto' },
            }),
            (0, a.jsx)(u.Z, {
              in: k,
              timeout: 1e3,
              children: (0, a.jsx)(o.Z, {
                sx: { mt: 6 },
                children:
                  _ &&
                  (0, a.jsx)(z, {
                    mbtiType: r,
                    description: _.description,
                    strengths: _.strengths,
                    weaknesses: _.weaknesses,
                    datingStyle: _.datingStyle,
                    idealTypeInfo: F,
                    worstMatchInfo: T,
                  }),
              }),
            }),
          ],
        });
      }
    },
    '(app-pages-browser)/./src/app/services/resultService.js': function (e, r, s) {
      s.d(r, {
        TW: function () {
          return n;
        },
        by: function () {
          return o;
        },
      });
      var a = s('(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js'),
        i = s('(app-pages-browser)/./src/app/utils/supabase.js');
      s('(app-pages-browser)/./src/app/utils/mbtiAnalyzer.js');
      var t = s('(app-pages-browser)/./src/app/utils/mbti.js');
      let n = async function (e, r) {
          let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          try {
            let o = {
              mbti_type: r,
              e_i_score: e.E - e.I,
              s_n_score: e.S - e.N,
              t_f_score: e.T - e.F,
              j_p_score: e.J - e.P,
              share_id: (0, a.Z)(),
            };
            s ? (o.user_id = s) : t ? (o.session_id = t) : (o.session_id = (0, a.Z)()),
              n && (o.email = n);
            let { data: l, error: d } = await i.ZP.from('test_results').insert([o]);
            if (d) throw (console.error('Error saving test result:', d), d);
            return { success: !0, data: l[0], shareId: o.share_id, sessionId: o.session_id };
          } catch (e) {
            return console.error('Failed to save test result:', e), { success: !1, error: e };
          }
        },
        o = async e => {
          try {
            let { data: r, error: s } = await i.ZP.rpc('get_mbti_result_by_share_id', {
              share_uuid: e,
            });
            if (s) throw (console.error('Error fetching test result by share ID:', s), s);
            if (!r) return null;
            return { ...r, idealType: (0, t.BW)(r.mbtiType), worstMatch: (0, t.cQ)(r.mbtiType) };
          } catch (e) {
            return console.error('Failed to fetch test result by share ID:', e), null;
          }
        };
    },
  },
]);
