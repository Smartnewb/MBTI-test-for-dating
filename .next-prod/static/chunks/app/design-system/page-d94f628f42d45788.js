(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7],
  {
    '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Cdesign-system%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!':
      function (e, n, t) {
        Promise.resolve().then(t.bind(t, '(app-pages-browser)/./src/app/design-system/page.jsx'));
      },
    '(app-pages-browser)/./src/app/components/animations.jsx': function (e, n, t) {
      'use strict';
      t.d(n, {
        F: function () {
          return F;
        },
        K: function () {
          return p;
        },
      });
      var r = t('(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js'),
        s = t('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        a = t('(app-pages-browser)/./node_modules/@mui/material/Box/Box.js'),
        o = t(
          '(app-pages-browser)/./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'
        ),
        i = t('(app-pages-browser)/./node_modules/@mui/material/styles/styled.js'),
        c = t('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js');
      let l = (0, i.ZP)(a.Z)(e => {
        let { theme: n } = e;
        return { position: 'relative' };
      });
      var p = (0, c.forwardRef)(function (e, n) {
        let {
            animation: t = 'fadeIn',
            duration: r = 'normal',
            easing: a = 'easeInOut',
            staggerDelay: o = 100,
            initialDelay: i = 0,
            onScroll: p = !1,
            threshold: d = 0.2,
            children: m,
            sx: u = {},
            ...x
          } = e,
          g = (0, c.useRef)(null),
          f = n || g,
          [h, b] = (0, c.useState)(!p);
        (0, c.useEffect)(() => {
          if (!p) return;
          let e = new IntersectionObserver(
            n => {
              let [t] = n;
              t.isIntersecting && (b(!0), e.disconnect());
            },
            { threshold: d }
          );
          return (
            f.current && e.observe(f.current),
            () => {
              f.current && e.unobserve(f.current);
            }
          );
        }, [p, f, d]);
        let j = c.Children.map(m, (e, n) =>
          e && 'object' == typeof e
            ? (0, c.cloneElement)(e, {
                animation: h ? t : null,
                duration: r,
                delay: i + n * o,
                easing: a,
                style: { ...e.props.style, opacity: h ? 1 : 0 },
              })
            : e
        );
        return (0, s.jsx)(l, { ref: f, sx: u, ...x, children: j });
      });
      function d() {
        let e = (0, r._)([
          '\n  0% {\n    transform: perspective(1200px) rotateY(90deg);\n    opacity: 0;\n  }\n  100% {\n    transform: perspective(1200px) rotateY(0deg);\n    opacity: 1;\n  }\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        let e = (0, r._)([
          '\n  0% {\n    transform: perspective(1200px) rotateY(90deg) scale(0.9);\n    opacity: 0;\n  }\n  50% {\n    transform: perspective(1200px) rotateY(45deg) scale(0.95);\n    opacity: 0.5;\n  }\n  100% {\n    transform: perspective(1200px) rotateY(0deg) scale(1);\n    opacity: 1;\n  }\n',
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = (0, r._)([
          '\n  0% {\n    background-position: -100% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n',
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        let e = (0, r._)(['\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n']);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        let e = (0, r._)([
          '\n  0% {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n',
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        let e = (0, r._)([
          '\n  0% {\n    transform: translateX(-20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n',
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        let e = (0, r._)([
          '\n  0% {\n    transform: translateX(20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n',
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        let e = (0, r._)([
          '\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n',
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      let j = { fast: 300, normal: 500, slow: 800, verySlow: 1200 },
        y = (0, o.F4)(d()),
        C = (0, o.F4)(m()),
        w = (0, o.F4)(u()),
        Z = (0, o.F4)(x()),
        _ = (0, o.F4)(g()),
        v = (0, o.F4)(f()),
        k = (0, o.F4)(h()),
        I = (0, o.F4)(b()),
        A = (e, n) => {
          let t = j[n] || j.normal;
          switch (e) {
            case 'tarotFlip':
              return {
                animation: ''
                  .concat(y, ' ')
                  .concat(t, 'ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards'),
              };
            case 'tarotReveal':
              return {
                animation: ''
                  .concat(C, ' ')
                  .concat(t, 'ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards'),
              };
            case 'shine':
              return {
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  animation: ''.concat(w, ' ').concat(2 * t, 'ms linear infinite'),
                },
              };
            case 'fadeIn':
              return { animation: ''.concat(Z, ' ').concat(t, 'ms ease-in-out forwards') };
            case 'slideUp':
              return { animation: ''.concat(_, ' ').concat(t, 'ms ease-out forwards') };
            case 'slideRight':
              return { animation: ''.concat(v, ' ').concat(t, 'ms ease-out forwards') };
            case 'slideLeft':
              return { animation: ''.concat(k, ' ').concat(t, 'ms ease-out forwards') };
            case 'pulse':
              return { animation: ''.concat(I, ' ').concat(t, 'ms ease-in-out infinite') };
            default:
              return {};
          }
        },
        E = (0, i.ZP)(a.Z)(e => {
          let { theme: n, animation: t, duration: r, delay: s = 0 } = e;
          return { opacity: 0, ...A(t, r), animationDelay: ''.concat(s, 'ms') };
        });
      function F(e) {
        let {
          children: n,
          animation: t = 'fadeIn',
          duration: r = 'normal',
          delay: a = 0,
          sx: o = {},
          ...i
        } = e;
        return (0, s.jsx)(E, { animation: t, duration: r, delay: a, sx: o, ...i, children: n });
      }
    },
    '(app-pages-browser)/./src/app/design-system/page.jsx': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return j;
          },
        });
      var r = t('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        s = t('(app-pages-browser)/./node_modules/@mui/material/Container/Container.js'),
        a = t('(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js'),
        o = t('(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js'),
        i = t('(app-pages-browser)/./node_modules/@mui/material/Box/Box.js'),
        c = t('(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js'),
        l = t('(app-pages-browser)/./node_modules/@mui/material/Card/Card.js'),
        p = t('(app-pages-browser)/./node_modules/@mui/material/CardActionArea/CardActionArea.js'),
        d = t('(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js'),
        m = t('(app-pages-browser)/./node_modules/next/dist/api/navigation.js'),
        u = t('(app-pages-browser)/./src/app/components/animations.jsx'),
        x = t('(app-pages-browser)/./node_modules/@mui/icons-material/ColorLens.js'),
        g = t('(app-pages-browser)/./node_modules/@mui/icons-material/TextFormat.js'),
        f = t('(app-pages-browser)/./node_modules/@mui/icons-material/Widgets.js'),
        h = t('(app-pages-browser)/./node_modules/@mui/icons-material/GridView.js'),
        b = t('(app-pages-browser)/./node_modules/@mui/icons-material/Animation.js');
      function j() {
        let e = (0, m.useRouter)(),
          n = [
            {
              title: '색상 시스템',
              description: '달빛 연애 연구소의 색상 팔레트와 사용 가이드라인을 확인하세요.',
              icon: (0, r.jsx)(x.Z, { fontSize: 'large' }),
              path: '/design-system/colors',
              color: 'primary.main',
            },
            {
              title: '타이포그래피 시스템',
              description: '폰트, 크기, 두께 등 텍스트 스타일 가이드라인을 확인하세요.',
              icon: (0, r.jsx)(g.Z, { fontSize: 'large' }),
              path: '/design-system/typography',
              color: 'secondary.main',
            },
            {
              title: '컴포넌트 시스템',
              description: '버튼, 카드, 입력 필드 등 UI 컴포넌트를 확인하세요.',
              icon: (0, r.jsx)(f.Z, { fontSize: 'large' }),
              path: '/design-system/components',
              color: 'primary.dark',
            },
            {
              title: '레이아웃 시스템',
              description: '그리드, 컨테이너, 섹션 등 레이아웃 컴포넌트를 확인하세요.',
              icon: (0, r.jsx)(h.Z, { fontSize: 'large' }),
              path: '/design-system/layout',
              color: 'secondary.dark',
            },
            {
              title: '애니메이션 시스템',
              description: '전환, 강조, 피드백 등 애니메이션 효과를 확인하세요.',
              icon: (0, r.jsx)(b.Z, { fontSize: 'large' }),
              path: '/design-system/animations',
              color: 'primary.light',
            },
          ];
        return (0, r.jsxs)(s.Z, {
          maxWidth: 'lg',
          sx: { py: 6 },
          children: [
            (0, r.jsxs)(u.F, {
              animation: 'fadeIn',
              duration: 'normal',
              children: [
                (0, r.jsx)(a.Z, {
                  variant: 'h2',
                  component: 'h1',
                  sx: { mb: 2 },
                  children: '디자인 시스템',
                }),
                (0, r.jsx)(a.Z, {
                  variant: 'subtitle1',
                  sx: { mb: 6 },
                  children:
                    '달빛 연애 연구소의 디자인 시스템은 신비로운 타로 카드 컨셉을 기반으로 합니다. 일관된 사용자 경험을 제공하기 위한 디자인 가이드라인과 컴포넌트를 확인하세요.',
                }),
              ],
            }),
            (0, r.jsxs)(o.Z, {
              elevation: 3,
              sx: {
                p: 4,
                mb: 6,
                background: 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)',
                position: 'relative',
                overflow: 'hidden',
              },
              children: [
                (0, r.jsx)(i.Z, {
                  sx: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/images/tarot-pattern.png")',
                    backgroundSize: '200px',
                    backgroundRepeat: 'repeat',
                    opacity: 0.03,
                    zIndex: 0,
                  },
                }),
                (0, r.jsx)(i.Z, {
                  sx: { position: 'relative', zIndex: 1 },
                  children: (0, r.jsxs)(u.F, {
                    animation: 'slideUp',
                    duration: 'normal',
                    children: [
                      (0, r.jsx)(a.Z, { variant: 'h4', sx: { mb: 3 }, children: '디자인 원칙' }),
                      (0, r.jsx)(a.Z, {
                        variant: 'body1',
                        sx: { mb: 4 },
                        children:
                          '달빛 연애 연구소의 디자인 시스템은 다음과 같은 원칙을 기반으로 합니다:',
                      }),
                      (0, r.jsxs)(c.ZP, {
                        container: !0,
                        spacing: 3,
                        children: [
                          (0, r.jsx)(c.ZP, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: (0, r.jsxs)(i.Z, {
                              sx: { p: 2 },
                              children: [
                                (0, r.jsx)(a.Z, {
                                  variant: 'h6',
                                  sx: { mb: 1 },
                                  children: '신비로움',
                                }),
                                (0, r.jsx)(a.Z, {
                                  variant: 'body2',
                                  color: 'text.secondary',
                                  children:
                                    '어두운 배경, 보라색과 골드 색상, 그라데이션 효과 등을 통해 신비로운 분위기를 연출합니다. 타로 카드의 신비로운 이미지를 디자인 요소에 반영합니다.',
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(c.ZP, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: (0, r.jsxs)(i.Z, {
                              sx: { p: 2 },
                              children: [
                                (0, r.jsx)(a.Z, {
                                  variant: 'h6',
                                  sx: { mb: 1 },
                                  children: '직관적인 사용성',
                                }),
                                (0, r.jsx)(a.Z, {
                                  variant: 'body2',
                                  color: 'text.secondary',
                                  children:
                                    '사용자가 쉽게 이해하고 사용할 수 있는 UI를 제공합니다. 명확한 시각적 계층 구조와 일관된 상호작용 패턴을 유지합니다.',
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(c.ZP, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: (0, r.jsxs)(i.Z, {
                              sx: { p: 2 },
                              children: [
                                (0, r.jsx)(a.Z, {
                                  variant: 'h6',
                                  sx: { mb: 1 },
                                  children: '감성적 경험',
                                }),
                                (0, r.jsx)(a.Z, {
                                  variant: 'body2',
                                  color: 'text.secondary',
                                  children:
                                    '부드러운 애니메이션, 세련된 타이포그래피, 감성적인 색상을 통해 사용자에게 특별한 경험을 제공합니다. MBTI 테스트의 자기 발견 여정을 디자인으로 표현합니다.',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsxs)(u.K, {
              animation: 'slideUp',
              duration: 'normal',
              easing: 'mystical',
              staggerDelay: 100,
              children: [
                (0, r.jsx)(a.Z, { variant: 'h4', sx: { mb: 4 }, children: '디자인 시스템 가이드' }),
                (0, r.jsx)(c.ZP, {
                  container: !0,
                  spacing: 3,
                  children: n.map((n, t) =>
                    (0, r.jsx)(
                      c.ZP,
                      {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        md: 4,
                        children: (0, r.jsx)(l.Z, {
                          sx: {
                            height: '100%',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': { transform: 'translateY(-5px)', boxShadow: 8 },
                          },
                          children: (0, r.jsx)(p.Z, {
                            sx: { height: '100%' },
                            onClick: () => e.push(n.path),
                            children: (0, r.jsxs)(d.Z, {
                              sx: { height: '100%', display: 'flex', flexDirection: 'column' },
                              children: [
                                (0, r.jsx)(i.Z, {
                                  sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    bgcolor: ''.concat(n.color, '20'),
                                    color: n.color,
                                    mb: 2,
                                  },
                                  children: n.icon,
                                }),
                                (0, r.jsx)(a.Z, {
                                  variant: 'h5',
                                  component: 'h2',
                                  gutterBottom: !0,
                                  children: n.title,
                                }),
                                (0, r.jsx)(a.Z, {
                                  variant: 'body2',
                                  color: 'text.secondary',
                                  sx: { mb: 2, flexGrow: 1 },
                                  children: n.description,
                                }),
                                (0, r.jsx)(a.Z, {
                                  variant: 'button',
                                  color: 'primary',
                                  children: '자세히 보기',
                                }),
                              ],
                            }),
                          }),
                        }),
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [631, 934, 468, 971, 117, 744], function () {
      return e(
        (e.s =
          '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Cdesign-system%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!')
      );
    }),
      (_N_E = e.O());
  },
]);
