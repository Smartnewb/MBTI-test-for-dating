(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [124],
  {
    '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Ctest%5C%5Cquestion%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!':
      function (e, t, a) {
        Promise.resolve().then(a.bind(a, '(app-pages-browser)/./src/app/test/question/page.jsx'));
      },
    '(app-pages-browser)/./src/app/test/question/page.jsx': function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return D;
          },
          dynamic: function () {
            return W;
          },
        });
      var n = a('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        r = a('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
        o = a('(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js'),
        i = a('(app-pages-browser)/./node_modules/next/dist/api/navigation.js'),
        s = a('(app-pages-browser)/./src/app/components/animations.jsx'),
        l = a('(app-pages-browser)/./src/app/components/layout/index.js'),
        d = a('(app-pages-browser)/./node_modules/@mui/material/Box/Box.js'),
        p = a('(app-pages-browser)/./node_modules/@mui/material/FormControl/FormControl.js'),
        c = a('(app-pages-browser)/./node_modules/@mui/material/styles/styled.js'),
        m = a('(app-pages-browser)/./src/app/components/mystical/index.js'),
        u = a('(app-pages-browser)/./src/app/components/TarotCard.jsx');
      a('(app-pages-browser)/./src/app/components/MysticalButton.jsx');
      var g = a(
        '(app-pages-browser)/./node_modules/@mui/material/LinearProgress/LinearProgress.js'
      );
      let x = (0, c.ZP)(d.Z)(e => {
          let { theme: t } = e;
          return { width: '100%', marginBottom: t.spacing(2), marginTop: t.spacing(2) };
        }),
        h = (0, c.ZP)(g.Z)(e => {
          let { theme: t, variant: a } = e;
          return {
            height: 10,
            borderRadius: 5,
            backgroundColor: t.palette.background.paper,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.05)',
              zIndex: 1,
            },
            ...('primary' === a && {
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, '
                  .concat(t.palette.primary.dark, ' 0%, ')
                  .concat(t.palette.primary.main, ' 100%)'),
                borderRadius: 5,
              },
            }),
            ...('secondary' === a && {
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, '
                  .concat(t.palette.secondary.dark, ' 0%, ')
                  .concat(t.palette.secondary.main, ' 100%)'),
                borderRadius: 5,
              },
            }),
            ...('mystical' === a && {
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, '
                  .concat(t.palette.primary.main, ' 0%, ')
                  .concat(t.palette.secondary.main, ' 100%)'),
                borderRadius: 5,
                boxShadow: '0 0 10px '.concat(t.palette.primary.main, '80'),
                animation: 'glow 1.5s ease-in-out infinite alternate',
              },
              '@keyframes glow': {
                '0%': { boxShadow: '0 0 5px '.concat(t.palette.primary.main, '40') },
                '100%': { boxShadow: '0 0 15px '.concat(t.palette.primary.main, '80') },
              },
            }),
          };
        }),
        y = (0, c.ZP)(d.Z)(e => {
          let { theme: t } = e;
          return { display: 'flex', justifyContent: 'space-between', marginBottom: t.spacing(0.5) };
        }),
        b = (0, c.ZP)(d.Z)(e => {
          let { theme: t, active: a, completed: n } = e;
          return {
            width: 12,
            height: 12,
            borderRadius: '50%',
            margin: '0 2px',
            transition: 'all '
              .concat(t.transitions.duration.standard, 'ms ')
              .concat(t.transitions.easing.easeInOut),
            ...(n && {
              backgroundColor: t.palette.primary.main,
              boxShadow: '0 0 5px '.concat(t.palette.primary.main),
            }),
            ...(a &&
              !n && {
                backgroundColor: t.palette.secondary.main,
                boxShadow: '0 0 5px '.concat(t.palette.secondary.main),
              }),
            ...(!a &&
              !n && {
                backgroundColor: t.palette.background.paper,
                border: '1px solid '.concat(t.palette.divider),
              }),
          };
        }),
        f = (0, r.forwardRef)(function (e, t) {
          let {
            value: a,
            variant: r = 'primary',
            label: i,
            showPercentage: s = !0,
            totalSteps: l,
            currentStep: p,
            sx: c = {},
            ...m
          } = e;
          return (0, n.jsxs)(x, {
            ref: t,
            sx: c,
            children: [
              (i || s) &&
                (0, n.jsxs)(y, {
                  children: [
                    i &&
                      (0, n.jsx)(o.Z, { variant: 'caption', color: 'text.secondary', children: i }),
                    s &&
                      (0, n.jsxs)(o.Z, {
                        variant: 'caption',
                        color: 'text.secondary',
                        children: [Math.round(a), '%'],
                      }),
                  ],
                }),
              (0, n.jsx)(h, { value: a, variant: r || 'determinate', ...m }),
              l && p
                ? (0, n.jsx)(d.Z, {
                    sx: { display: 'flex', justifyContent: 'center', mt: 1 },
                    children: Array.from({ length: l }).map((e, t) =>
                      (0, n.jsx)(b, { active: t + 1 === p, completed: t + 1 < p }, t)
                    ),
                  })
                : null,
            ],
          });
        });
      var j = a('(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js'),
        C = a('(app-pages-browser)/./node_modules/@mui/material/Radio/Radio.js');
      let v = (0, c.ZP)(j.Z)(e => {
          let { theme: t, selected: a, disabled: n } = e;
          return {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: t.spacing(2, 3),
            marginBottom: t.spacing(2),
            borderRadius: 2 * t.shape.borderRadius,
            cursor: n ? 'default' : 'pointer',
            overflow: 'hidden',
            transition: 'all '
              .concat(t.transitions.duration.standard, 'ms ')
              .concat(t.transitions.easing.easeInOut),
            backgroundColor: t.palette.background.paper,
            border: '1px solid '.concat(t.palette.divider),
            ...(a && {
              backgroundColor: ''.concat(t.palette.primary.main, '10'),
              borderColor: t.palette.primary.main,
              boxShadow: '0 0 10px '.concat(t.palette.primary.main, '40'),
            }),
            ...(!n && {
              '&:hover': {
                backgroundColor: a
                  ? ''.concat(t.palette.primary.main, '15')
                  : ''.concat(t.palette.background.default, '80'),
                borderColor: a ? t.palette.primary.main : t.palette.primary.light,
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px '.concat(t.palette.primary.main, '20'),
              },
              '&:active': {
                transform: 'translateY(0)',
                boxShadow: '0 2px 4px '.concat(t.palette.primary.main, '20'),
              },
            }),
            ...(n && {
              opacity: 0.6,
              backgroundColor: t.palette.action.disabledBackground,
              borderColor: t.palette.action.disabled,
            }),
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: a
                ? 'linear-gradient(135deg, '
                    .concat(t.palette.primary.main, '05, ')
                    .concat(t.palette.primary.main, '15)')
                : 'transparent',
              opacity: 0.5,
              zIndex: 0,
              transition: 'all '
                .concat(t.transitions.duration.standard, 'ms ')
                .concat(t.transitions.easing.easeInOut),
            },
          };
        }),
        w = (0, c.ZP)(C.Z)(e => {
          let { theme: t, selected: a } = e;
          return {
            color: a ? t.palette.primary.main : t.palette.text.secondary,
            padding: t.spacing(1),
            '&.Mui-checked': { color: t.palette.primary.main },
          };
        }),
        Z = (0, c.ZP)(o.Z)(e => {
          let { theme: t, selected: a } = e;
          return {
            flexGrow: 1,
            fontFamily: t.typography.fontFamily.secondary,
            fontWeight: a ? t.typography.fontWeight.medium : t.typography.fontWeight.regular,
            color: a ? t.palette.text.primary : t.palette.text.secondary,
            transition: 'all '
              .concat(t.transitions.duration.standard, 'ms ')
              .concat(t.transitions.easing.easeInOut),
            zIndex: 1,
          };
        }),
        k = (0, c.ZP)(d.Z)(e => {
          let { theme: t, selected: a } = e;
          return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            borderRadius: '50%',
            backgroundColor: a ? t.palette.primary.main : 'transparent',
            border: '2px solid '.concat(a ? t.palette.primary.main : t.palette.divider),
            color: a ? t.palette.primary.contrastText : t.palette.text.secondary,
            fontWeight: t.typography.fontWeight.bold,
            marginRight: t.spacing(2),
            transition: 'all '
              .concat(t.transitions.duration.standard, 'ms ')
              .concat(t.transitions.easing.easeInOut),
            zIndex: 1,
          };
        }),
        P = (0, r.forwardRef)(function (e, t) {
          let {
            value: a,
            label: r,
            selected: o = !1,
            disabled: i = !1,
            onChange: l,
            index: d = 0,
            sx: p = {},
            ...c
          } = e;
          return (0, n.jsx)(s.F, {
            animation: 'slideRight',
            duration: 'normal',
            delay: 150 * d,
            children: (0, n.jsxs)(v, {
              ref: t,
              selected: o,
              disabled: i,
              onClick: () => {
                !i && l && l(a);
              },
              onKeyDown: e => {
                i || ('Enter' !== e.key && ' ' !== e.key) || (e.preventDefault(), l(a));
              },
              tabIndex: i ? -1 : 0,
              role: 'radio',
              'aria-checked': o,
              sx: p,
              elevation: o ? 2 : 0,
              ...c,
              children: [
                (0, n.jsx)(k, { selected: o, children: a }),
                (0, n.jsx)(Z, { variant: 'body1', selected: o, children: r }),
                (0, n.jsx)(w, {
                  checked: o,
                  disabled: i,
                  value: a,
                  name: 'option-'.concat(a),
                  inputProps: { 'aria-label': r },
                  onChange: () => l(a),
                  selected: o,
                  tabIndex: -1,
                }),
              ],
            }),
          });
        }),
        I = (0, c.ZP)(d.Z)(e => {
          let { theme: t } = e;
          return {
            position: 'relative',
            padding: t.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          };
        }),
        B = (0, c.ZP)(o.Z)(e => {
          let { theme: t } = e;
          return {
            fontFamily: t.typography.fontFamily.secondary,
            fontWeight: t.typography.fontWeight.medium,
            fontSize: '1rem',
            color: t.palette.secondary.main,
            marginBottom: t.spacing(2),
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: '30%',
              height: 2,
              background: 'linear-gradient(90deg, '.concat(
                t.palette.secondary.main,
                ', transparent)'
              ),
            },
          };
        }),
        _ = (0, c.ZP)(o.Z)(e => {
          let { theme: t } = e;
          return {
            fontFamily: t.typography.fontFamily.secondary,
            fontWeight: t.typography.fontWeight.semibold,
            fontSize: '1.5rem',
            marginBottom: t.spacing(4),
            textAlign: 'center',
            color: t.palette.text.primary,
            lineHeight: 1.4,
            [t.breakpoints.down('sm')]: { fontSize: '1.25rem' },
          };
        }),
        A = (0, c.ZP)(d.Z)(e => {
          let { theme: t } = e;
          return {
            marginBottom: t.spacing(4),
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: t.spacing(2),
          };
        }),
        R = (0, c.ZP)(d.Z)(e => {
          let { theme: t } = e;
          return {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
            zIndex: 1,
          };
        }),
        S = (0, c.ZP)(d.Z)(e => {
          let { theme: t } = e;
          return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.03,
            pointerEvents: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '80%',
              height: '80%',
              background: 'url(/images/tarot-pattern.png)',
              backgroundSize: 'cover',
              opacity: 0.5,
            },
          };
        });
      function F(e) {
        let {
            questionNumber: t,
            totalQuestions: a,
            question: i,
            selectedOption: l,
            onAnswer: d,
            onPrevious: c,
            isFirst: g = !1,
            isLast: x = !1,
            transitionDirection: h = 'next',
            sx: y = {},
          } = e,
          [b, j] = (0, r.useState)(l),
          [C, v] = (0, r.useState)(!1),
          w = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          j(l);
        }, [l]);
        let Z = e => {
            j(e), v(!0), setTimeout(() => v(!1), 300);
          },
          k = ((t - 1) / a) * 100;
        return i
          ? (0, n.jsx)(u.Z, {
              ref: w,
              variant: 'primary',
              sx: {
                maxWidth: 600,
                mx: 'auto',
                minHeight: 500,
                transition: 'transform 0.3s ease-out',
                transform: C ? 'scale(1.02)' : 'scale(1)',
                ...y,
              },
              children: (0, n.jsxs)(I, {
                children: [
                  (0, n.jsx)(S, {}),
                  (0, n.jsxs)(R, {
                    children: [
                      (0, n.jsx)(s.F, {
                        animation: 'fadeIn',
                        duration: 'fast',
                        children: (0, n.jsx)(f, {
                          value: k,
                          variant: 'mystical',
                          label: '질문 '.concat(t, '/').concat(a),
                          totalSteps: a,
                          currentStep: t,
                        }),
                      }),
                      (0, n.jsxs)(s.F, {
                        animation: 'fadeIn',
                        duration: 'normal',
                        delay: 100,
                        children: [
                          (0, n.jsxs)(B, { variant: 'subtitle2', children: ['질문 ', t] }),
                          (0, n.jsx)(_, { variant: 'h4', children: i.question }),
                        ],
                      }),
                      (0, n.jsx)(A, {
                        children: (0, n.jsxs)(p.Z, {
                          component: 'fieldset',
                          fullWidth: !0,
                          children: [
                            (0, n.jsx)(P, {
                              value: 'A',
                              label: i.optionA,
                              selected: 'A' === b,
                              onChange: Z,
                              index: 0,
                            }),
                            (0, n.jsx)(P, {
                              value: 'B',
                              label: i.optionB,
                              selected: 'B' === b,
                              onChange: Z,
                              index: 1,
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)(s.F, {
                        animation: 'fadeIn',
                        duration: 'normal',
                        delay: 300,
                        children: (0, n.jsx)(m.e7, {
                          variant: 'mystical',
                          type: 'button',
                          position: 'between',
                          showPrev: !g && !!c,
                          showNext: !0,
                          disableNext: !b,
                          nextLabel: x ? '결과 보기' : '다음 질문',
                          onPrev: c,
                          onNext: () => {
                            b && d(b);
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : (0, n.jsx)(u.Z, {
              variant: 'primary',
              sx: { maxWidth: 600, mx: 'auto', minHeight: 500, ...y },
              children: (0, n.jsx)(I, {
                children: (0, n.jsx)(s.F, {
                  animation: 'pulse',
                  duration: 'slow',
                  children: (0, n.jsx)(o.Z, {
                    variant: 'h5',
                    sx: { textAlign: 'center', my: 10 },
                    children: '질문을 불러오는 중...',
                  }),
                }),
              }),
            });
      }
      (0, c.ZP)(d.Z)(e => {
        let { theme: t } = e;
        return { display: 'flex', justifyContent: 'space-between', marginTop: t.spacing(2) };
      });
      var E = a('(app-pages-browser)/./src/app/hooks/useMbtiTest.js');
      let W = 'force-dynamic';
      function D() {
        let e = (0, i.useRouter)(),
          {
            loading: t,
            error: a,
            questions: d,
            currentQuestionIndex: p,
            currentQuestion: c,
            currentResponse: m,
            isTestCompleted: u,
            saveAnswer: g,
            goToPreviousQuestion: x,
            handleCompleteTest: h,
          } = (0, E.Z)();
        return ((0, r.useEffect)(() => {
          u && e.push('/result');
        }, [u, e]),
        t)
          ? (0, n.jsx)(l.Xg, {
              variant: 'test',
              children: (0, n.jsx)(l.$0, {
                centered: !0,
                fullHeight: !0,
                children: (0, n.jsx)(o.Z, { variant: 'h4', children: '질문을 불러오는 중...' }),
              }),
            })
          : a
            ? (0, n.jsx)(l.Xg, {
                variant: 'test',
                children: (0, n.jsxs)(l.$0, {
                  centered: !0,
                  fullHeight: !0,
                  children: [
                    (0, n.jsx)(o.Z, {
                      variant: 'h4',
                      color: 'error',
                      children: '오류가 발생했습니다',
                    }),
                    (0, n.jsx)(o.Z, {
                      variant: 'body1',
                      color: 'error',
                      sx: { mt: 2 },
                      children: a,
                    }),
                  ],
                }),
              })
            : d && 0 !== d.length
              ? p < 0 || p >= d.length
                ? (0, n.jsx)(l.Xg, {
                    variant: 'test',
                    children: (0, n.jsxs)(l.$0, {
                      centered: !0,
                      fullHeight: !0,
                      children: [
                        (0, n.jsx)(o.Z, { variant: 'h4', children: '잘못된 질문 인덱스입니다' }),
                        (0, n.jsx)(o.Z, {
                          variant: 'body1',
                          sx: { mt: 2 },
                          children: '테스트를 다시 시작해주세요.',
                        }),
                      ],
                    }),
                  })
                : (0, n.jsx)(l.Xg, {
                    variant: 'test',
                    children: (0, n.jsx)(l.$0, {
                      children: (0, n.jsx)(s.F, {
                        animation: 'fadeIn',
                        duration: 'fast',
                        children: (0, n.jsx)(F, {
                          questionNumber: p + 1,
                          totalQuestions: d.length,
                          question: c,
                          selectedOption: m,
                          onAnswer: e => {
                            p === d.length - 1 ? (g(c.id, e), h()) : g(c.id, e);
                          },
                          onPrevious: x,
                          isFirst: 0 === p,
                          isLast: p === d.length - 1,
                        }),
                      }),
                    }),
                  })
              : (0, n.jsx)(l.Xg, {
                  variant: 'test',
                  children: (0, n.jsxs)(l.$0, {
                    centered: !0,
                    fullHeight: !0,
                    children: [
                      (0, n.jsx)(o.Z, { variant: 'h4', children: '질문을 불러올 수 없습니다' }),
                      (0, n.jsx)(o.Z, {
                        variant: 'body1',
                        sx: { mt: 2 },
                        children: '테스트를 다시 시작해주세요.',
                      }),
                    ],
                  }),
                });
      }
    },
  },
  function (e) {
    e.O(0, [631, 934, 818, 150, 936, 883, 296, 330, 880, 864, 80, 445, 971, 117, 744], function () {
      return e(
        (e.s =
          '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Ctest%5C%5Cquestion%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!')
      );
    }),
      (_N_E = e.O());
  },
]);
