(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [928],
  {
    '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Ctest%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!':
      function (e, s, r) {
        Promise.resolve().then(r.bind(r, '(app-pages-browser)/./src/app/test/page.jsx'));
      },
    '(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js': function (
      e,
      s,
      r
    ) {
      'use strict';
      r.d(s, {
        Z: function () {
          return C;
        },
      });
      var o = r('(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
        t = r(
          '(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
        ),
        a = r('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
        n = r('(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs'),
        i = r('(app-pages-browser)/./node_modules/@mui/utils/esm/composeClasses/composeClasses.js'),
        p = r('(app-pages-browser)/./node_modules/@mui/material/styles/styled.js'),
        d = r(
          '(app-pages-browser)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
        ),
        l = r(
          '(app-pages-browser)/./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
        ),
        u = r(
          '(app-pages-browser)/./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
        );
      function m(e) {
        return (0, u.ZP)('MuiCardContent', e);
      }
      (0, l.Z)('MuiCardContent', ['root']);
      var c = r('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js');
      let x = ['className', 'component'],
        g = e => {
          let { classes: s } = e;
          return (0, i.Z)({ root: ['root'] }, m, s);
        },
        j = (0, p.ZP)('div', {
          name: 'MuiCardContent',
          slot: 'Root',
          overridesResolver: (e, s) => s.root,
        })(() => ({ padding: 16, '&:last-child': { paddingBottom: 24 } }));
      var C = a.forwardRef(function (e, s) {
        let r = (0, d.i)({ props: e, name: 'MuiCardContent' }),
          { className: a, component: i = 'div' } = r,
          p = (0, t.Z)(r, x),
          l = (0, o.Z)({}, r, { component: i }),
          u = g(l);
        return (0, c.jsx)(
          j,
          (0, o.Z)({ as: i, className: (0, n.Z)(u.root, a), ownerState: l, ref: s }, p)
        );
      });
    },
    '(app-pages-browser)/./node_modules/@mui/material/Card/Card.js': function (e, s, r) {
      'use strict';
      r.d(s, {
        Z: function () {
          return b;
        },
      });
      var o = r('(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
        t = r(
          '(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
        ),
        a = r('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
        n = r('(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs'),
        i = r('(app-pages-browser)/./node_modules/@mui/utils/esm/composeClasses/composeClasses.js'),
        p = r('(app-pages-browser)/./node_modules/@mui/material/styles/styled.js'),
        d = r(
          '(app-pages-browser)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
        ),
        l = r('(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js'),
        u = r(
          '(app-pages-browser)/./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
        ),
        m = r(
          '(app-pages-browser)/./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
        );
      function c(e) {
        return (0, m.ZP)('MuiCard', e);
      }
      (0, u.Z)('MuiCard', ['root']);
      var x = r('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js');
      let g = ['className', 'raised'],
        j = e => {
          let { classes: s } = e;
          return (0, i.Z)({ root: ['root'] }, c, s);
        },
        C = (0, p.ZP)(l.Z, { name: 'MuiCard', slot: 'Root', overridesResolver: (e, s) => s.root })(
          () => ({ overflow: 'hidden' })
        );
      var b = a.forwardRef(function (e, s) {
        let r = (0, d.i)({ props: e, name: 'MuiCard' }),
          { className: a, raised: i = !1 } = r,
          p = (0, t.Z)(r, g),
          l = (0, o.Z)({}, r, { raised: i }),
          u = j(l);
        return (0, x.jsx)(
          C,
          (0, o.Z)(
            { className: (0, n.Z)(u.root, a), elevation: i ? 8 : void 0, ref: s, ownerState: l },
            p
          )
        );
      });
    },
    '(app-pages-browser)/./node_modules/next/dist/api/navigation.js': function (e, s, r) {
      'use strict';
      var o = r('(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js');
      r.o(o, 'useRouter') &&
        r.d(s, {
          useRouter: function () {
            return o.useRouter;
          },
        }),
        r.o(o, 'useSearchParams') &&
          r.d(s, {
            useSearchParams: function () {
              return o.useSearchParams;
            },
          });
    },
    '(app-pages-browser)/./src/app/test/page.jsx': function (e, s, r) {
      'use strict';
      r.r(s),
        r.d(s, {
          default: function () {
            return g;
          },
          dynamic: function () {
            return x;
          },
        });
      var o = r('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        t = r('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
        a = r('(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js'),
        n = r('(app-pages-browser)/./node_modules/@mui/material/Box/Box.js'),
        i = r('(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js'),
        p = r('(app-pages-browser)/./node_modules/next/dist/api/navigation.js'),
        d = r('(app-pages-browser)/./src/app/components/animations.jsx'),
        l = r('(app-pages-browser)/./src/app/components/layout/index.js'),
        u = r('(app-pages-browser)/./src/app/components/MysticalButton.jsx'),
        m = r('(app-pages-browser)/./src/app/components/TarotCard.jsx'),
        c = r('(app-pages-browser)/./src/app/hooks/useMbtiTest.js');
      let x = 'force-dynamic';
      function g() {
        let e = (0, p.useRouter)(),
          { handleStartTest: s, resetStore: r, isTestStarted: x } = (0, c.Z)(),
          [g, j] = (0, t.useState)(!0);
        return ((0, t.useEffect)(() => {
          r(), j(!1);
        }, [r]),
        g)
          ? (0, o.jsx)(l.Xg, {
              variant: 'test',
              children: (0, o.jsx)(l.$0, {
                centered: !0,
                fullHeight: !0,
                children: (0, o.jsx)(a.Z, { variant: 'h4', children: '로딩 중...' }),
              }),
            })
          : (0, o.jsx)(l.Xg, {
              variant: 'test',
              children: (0, o.jsxs)(l.$0, {
                centered: !0,
                children: [
                  (0, o.jsx)(d.F, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    children: (0, o.jsxs)(m.Z, {
                      variant: 'mystical',
                      sx: { maxWidth: 800, mx: 'auto', my: 4, p: 4 },
                      children: [
                        (0, o.jsx)(a.Z, {
                          variant: 'h3',
                          sx: { mb: 4, textAlign: 'center' },
                          children: '달빛 연애 연구소의 MBTI 연애 테스트',
                        }),
                        (0, o.jsx)(a.Z, {
                          variant: 'body1',
                          sx: { mb: 3 },
                          children:
                            '당신의 MBTI 유형을 기반으로 연애 스타일과 이상형을 알아보세요. 24개의 질문에 답하면 당신의 MBTI 유형과 연애 성향, 그리고 가장 잘 맞는 이상형을 알려드립니다.',
                        }),
                        (0, o.jsx)(a.Z, {
                          variant: 'body1',
                          sx: { mb: 3 },
                          children:
                            '각 질문에는 정답이 없습니다. 평소 연애 상황에서 당신의 생각과 행동에 가장 가까운 답변을 선택해주세요. 솔직하게 답변할수록 더 정확한 결과를 얻을 수 있습니다.',
                        }),
                        (0, o.jsx)(a.Z, {
                          variant: 'body1',
                          sx: { mb: 5 },
                          children:
                            '테스트는 약 5-10분 정도 소요됩니다. 중간에 테스트를 중단해도 진행 상황은 저장됩니다.',
                        }),
                        (0, o.jsx)(n.Z, {
                          sx: { display: 'flex', justifyContent: 'center' },
                          children: (0, o.jsx)(u.Z, {
                            variant: 'mystical',
                            size: 'large',
                            onClick: () => {
                              s(), e.push('/test/question');
                            },
                            children: '테스트 시작하기',
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsx)(d.F, {
                    animation: 'slideUp',
                    duration: 'normal',
                    delay: 300,
                    children: (0, o.jsxs)(i.Z, {
                      sx: { maxWidth: 800, mx: 'auto', my: 4, p: 4, bgcolor: 'background.paper' },
                      children: [
                        (0, o.jsx)(a.Z, {
                          variant: 'h5',
                          sx: { mb: 3 },
                          children: 'MBTI란 무엇인가요?',
                        }),
                        (0, o.jsx)(a.Z, {
                          variant: 'body1',
                          sx: { mb: 2 },
                          children:
                            'MBTI(Myers-Briggs Type Indicator)는 개인의 성격 유형을 16가지로 분류하는 성격 유형 지표입니다. 각 유형은 4가지 선호 경향의 조합으로 이루어집니다:',
                        }),
                        (0, o.jsxs)(n.Z, {
                          component: 'ul',
                          sx: { mb: 3 },
                          children: [
                            (0, o.jsx)(n.Z, {
                              component: 'li',
                              sx: { mb: 1 },
                              children: (0, o.jsxs)(a.Z, {
                                variant: 'body1',
                                children: [
                                  (0, o.jsx)('strong', { children: '에너지 방향(E/I)' }),
                                  ': 외향형(Extraversion) vs 내향형(Introversion)',
                                ],
                              }),
                            }),
                            (0, o.jsx)(n.Z, {
                              component: 'li',
                              sx: { mb: 1 },
                              children: (0, o.jsxs)(a.Z, {
                                variant: 'body1',
                                children: [
                                  (0, o.jsx)('strong', { children: '인식 기능(S/N)' }),
                                  ': 감각형(Sensing) vs 직관형(iNtuition)',
                                ],
                              }),
                            }),
                            (0, o.jsx)(n.Z, {
                              component: 'li',
                              sx: { mb: 1 },
                              children: (0, o.jsxs)(a.Z, {
                                variant: 'body1',
                                children: [
                                  (0, o.jsx)('strong', { children: '판단 기능(T/F)' }),
                                  ': 사고형(Thinking) vs 감정형(Feeling)',
                                ],
                              }),
                            }),
                            (0, o.jsx)(n.Z, {
                              component: 'li',
                              sx: { mb: 1 },
                              children: (0, o.jsxs)(a.Z, {
                                variant: 'body1',
                                children: [
                                  (0, o.jsx)('strong', { children: '생활 양식(J/P)' }),
                                  ': 판단형(Judging) vs 인식형(Perceiving)',
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, o.jsx)(a.Z, {
                          variant: 'body1',
                          children:
                            '이 테스트는 연애 관계에서의 선호 경향을 중심으로 질문이 구성되어 있어, 당신의 연애 스타일과 이상형을 더 정확하게 파악할 수 있습니다.',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      }
    },
  },
  function (e) {
    e.O(0, [631, 934, 818, 150, 883, 330, 880, 864, 445, 971, 117, 744], function () {
      return e(
        (e.s =
          '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Ctest%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!')
      );
    }),
      (_N_E = e.O());
  },
]);
