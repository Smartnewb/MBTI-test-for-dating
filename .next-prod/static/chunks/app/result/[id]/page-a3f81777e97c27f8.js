(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [299],
  {
    '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Cresult%5C%5C%5Bid%5D%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!':
      function (e, s, r) {
        Promise.resolve().then(r.bind(r, '(app-pages-browser)/./src/app/result/[id]/page.jsx'));
      },
    '(app-pages-browser)/./src/app/result/[id]/page.jsx': function (e, s, r) {
      'use strict';
      r.r(s),
        r.d(s, {
          default: function () {
            return m;
          },
        });
      var t = r('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        a = r('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
        n = r(
          '(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js'
        ),
        o = r('(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js'),
        i = r('(app-pages-browser)/./node_modules/@mui/material/Button/Button.js'),
        l = r('(app-pages-browser)/./node_modules/@mui/material/Box/Box.js'),
        p = r('(app-pages-browser)/./node_modules/next/dist/api/navigation.js'),
        d = r('(app-pages-browser)/./src/app/components/animations.jsx'),
        c = r('(app-pages-browser)/./src/app/components/layout/index.js'),
        u = r('(app-pages-browser)/./src/app/components/test/TestResult.jsx'),
        C = r('(app-pages-browser)/./src/app/services/resultService.js'),
        x = r('(app-pages-browser)/./node_modules/@mui/icons-material/Favorite.js');
      function m(e) {
        let { params: s } = e,
          r = (0, p.useRouter)(),
          [m, h] = (0, a.useState)(null),
          [j, g] = (0, a.useState)(!0),
          [b, f] = (0, a.useState)(null),
          y = s.id;
        (0, a.useEffect)(() => {
          (async () => {
            try {
              if ((g(!0), !y)) throw Error('공유 ID가 없습니다.');
              let e = await (0, C.by)(y);
              if (!e) throw Error('결과를 찾을 수 없습니다.');
              h(e);
            } catch (e) {
              console.error('Error fetching shared result:', e),
                f(e.message || '결과를 불러오는 데 실패했습니다.');
            } finally {
              g(!1);
            }
          })();
        }, [y]);
        let w = () => {
          r.push('/test');
        };
        return j
          ? (0, t.jsx)(c.Xg, {
              variant: 'result',
              children: (0, t.jsxs)(c.$0, {
                centered: !0,
                fullHeight: !0,
                children: [
                  (0, t.jsx)(n.Z, { color: 'secondary' }),
                  (0, t.jsx)(o.Z, {
                    variant: 'h5',
                    sx: { mt: 3 },
                    children: '결과를 불러오는 중...',
                  }),
                ],
              }),
            })
          : b
            ? (0, t.jsx)(c.Xg, {
                variant: 'result',
                children: (0, t.jsxs)(c.$0, {
                  centered: !0,
                  fullHeight: !0,
                  children: [
                    (0, t.jsx)(o.Z, {
                      variant: 'h4',
                      color: 'error',
                      children: '오류가 발생했습니다',
                    }),
                    (0, t.jsx)(o.Z, {
                      variant: 'body1',
                      color: 'error',
                      sx: { mt: 2, mb: 4 },
                      children: b,
                    }),
                    (0, t.jsx)(i.Z, {
                      variant: 'contained',
                      color: 'primary',
                      onClick: () => r.push('/test'),
                      children: '테스트 시작하기',
                    }),
                  ],
                }),
              })
            : m && m.mbtiType
              ? (0, t.jsx)(c.Xg, {
                  variant: 'result',
                  children: (0, t.jsx)(c.$0, {
                    centered: !0,
                    children: (0, t.jsx)(d.F, {
                      animation: 'fadeIn',
                      duration: 'normal',
                      children: (0, t.jsxs)(l.Z, {
                        sx: { maxWidth: 800, mx: 'auto', my: 4 },
                        children: [
                          (0, t.jsx)(l.Z, {
                            sx: { display: 'flex', justifyContent: 'center', mb: 4 },
                            children: (0, t.jsx)(x.Z, {
                              sx: {
                                fontSize: 60,
                                color: 'secondary.main',
                                filter: 'drop-shadow(0 0 10px rgba(156, 39, 176, 0.5))',
                              },
                            }),
                          }),
                          (0, t.jsx)(o.Z, {
                            variant: 'h3',
                            sx: { textAlign: 'center', mb: 4 },
                            children: 'MBTI 연애 유형 결과',
                          }),
                          (0, t.jsx)(u.Z, {
                            mbtiType: m.mbtiType,
                            scores: m.scores,
                            idealType: m.idealType,
                            worstMatch: m.worstMatch,
                            onRestart: w,
                          }),
                          (0, t.jsx)(l.Z, {
                            sx: { display: 'flex', justifyContent: 'center', mt: 4 },
                            children: (0, t.jsx)(i.Z, {
                              variant: 'contained',
                              color: 'primary',
                              onClick: w,
                              children: '나도 테스트 해보기',
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                })
              : (0, t.jsx)(c.Xg, {
                  variant: 'result',
                  children: (0, t.jsxs)(c.$0, {
                    centered: !0,
                    fullHeight: !0,
                    children: [
                      (0, t.jsx)(o.Z, { variant: 'h4', children: '결과를 찾을 수 없습니다' }),
                      (0, t.jsx)(o.Z, {
                        variant: 'body1',
                        sx: { mt: 2, mb: 4 },
                        children: '공유된 결과가 만료되었거나 존재하지 않습니다.',
                      }),
                      (0, t.jsx)(i.Z, {
                        variant: 'contained',
                        color: 'primary',
                        onClick: () => r.push('/test'),
                        children: '테스트 시작하기',
                      }),
                    ],
                  }),
                });
      }
    },
  },
  function (e) {
    e.O(0, [631, 934, 818, 150, 936, 844, 330, 880, 864, 80, 235, 971, 117, 744], function () {
      return e(
        (e.s =
          '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Cresult%5C%5C%5Bid%5D%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!')
      );
    }),
      (_N_E = e.O());
  },
]);
