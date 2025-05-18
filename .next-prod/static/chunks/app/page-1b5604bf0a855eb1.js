(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Ccomponents%5C%5CHomePage.jsx%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=false!':
      function (t, e, a) {
        Promise.resolve().then(a.bind(a, '(app-pages-browser)/./src/app/components/HomePage.jsx'));
      },
    '(app-pages-browser)/./src/app/components/HomePage.jsx': function (t, e, a) {
      'use strict';
      a.d(e, {
        default: function () {
          return tC;
        },
      });
      var r = a('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        n = a('(app-pages-browser)/./src/app/components/layout/index.js'),
        o = a('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
        i = a('(app-pages-browser)/./node_modules/@mui/material/Box/Box.js'),
        s = a('(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js'),
        l = a('(app-pages-browser)/./node_modules/@mui/material/Container/Container.js'),
        c = a('(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js'),
        d = a('(app-pages-browser)/./node_modules/@mui/material/styles/styled.js'),
        p = a('(app-pages-browser)/./node_modules/next/dist/api/navigation.js');
      let m = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
          fast: 300,
          normal: 500,
          slow: 800,
          verySlow: 1200,
        },
        x = {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
          mystical: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
          magical: 'cubic-bezier(0.6, 0.01, 0.05, 1)',
          bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        },
        g =
          (m.normal,
          x.easeInOut,
          m.normal,
          x.mystical,
          m.normal,
          x.mystical,
          m.normal,
          x.mystical,
          m.normal,
          x.mystical,
          m.normal,
          x.mystical,
          m.normal,
          x.mystical,
          m.normal,
          x.mystical,
          {
            duration: m,
            easing: x,
            keyframes: {
              fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
              fadeOut: { from: { opacity: 1 }, to: { opacity: 0 } },
              slideUp: {
                from: { transform: 'translateY(20px)', opacity: 0 },
                to: { transform: 'translateY(0)', opacity: 1 },
              },
              slideDown: {
                from: { transform: 'translateY(-20px)', opacity: 0 },
                to: { transform: 'translateY(0)', opacity: 1 },
              },
              slideRight: {
                from: { transform: 'translateX(-20px)', opacity: 0 },
                to: { transform: 'translateX(0)', opacity: 1 },
              },
              slideLeft: {
                from: { transform: 'translateX(20px)', opacity: 0 },
                to: { transform: 'translateX(0)', opacity: 1 },
              },
              zoomIn: {
                from: { transform: 'scale(0.9)', opacity: 0 },
                to: { transform: 'scale(1)', opacity: 1 },
              },
              zoomOut: {
                from: { transform: 'scale(1.1)', opacity: 0 },
                to: { transform: 'scale(1)', opacity: 1 },
              },
              rotate: {
                from: { transform: 'rotate(-5deg)', opacity: 0 },
                to: { transform: 'rotate(0deg)', opacity: 1 },
              },
              glow: {
                '0%': {
                  boxShadow: '0 0 5px rgba(107, 63, 160, 0.5), 0 0 10px rgba(212, 175, 55, 0.3)',
                },
                '50%': {
                  boxShadow: '0 0 15px rgba(107, 63, 160, 0.7), 0 0 20px rgba(212, 175, 55, 0.5)',
                },
                '100%': {
                  boxShadow: '0 0 5px rgba(107, 63, 160, 0.5), 0 0 10px rgba(212, 175, 55, 0.3)',
                },
              },
              twinkle: {
                '0%': { opacity: 0.3, transform: 'scale(1)' },
                '50%': { opacity: 1, transform: 'scale(1.2)' },
                '100%': { opacity: 0.3, transform: 'scale(1)' },
              },
              flipCard: {
                '0%': { transform: 'rotateY(0deg)' },
                '100%': { transform: 'rotateY(180deg)' },
              },
              ripple: {
                '0%': { transform: 'scale(0)', opacity: 1 },
                '100%': { transform: 'scale(2)', opacity: 0 },
              },
              gradientShift: {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' },
              },
              tarotReveal: {
                '0%': { transform: 'translateY(20px) rotateY(90deg)', opacity: 0 },
                '100%': { transform: 'translateY(0) rotateY(0)', opacity: 1 },
              },
              mysticalShake: {
                '0%': { transform: 'translateX(0)' },
                '25%': { transform: 'translateX(-5px) rotate(-1deg)' },
                '50%': { transform: 'translateX(5px) rotate(1deg)' },
                '75%': { transform: 'translateX(-5px) rotate(-1deg)' },
                '100%': { transform: 'translateX(0)' },
              },
              float: {
                '0%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
                '100%': { transform: 'translateY(0)' },
              },
              flash: {
                '0%': { opacity: 1 },
                '25%': { opacity: 0.5 },
                '50%': { opacity: 1 },
                '75%': { opacity: 0.5 },
                '100%': { opacity: 1 },
              },
              typing: { '0%': { width: '0%' }, '100%': { width: '100%' } },
              blink: {
                '0%': { borderRightColor: 'transparent' },
                '50%': { borderRightColor: 'currentColor' },
                '100%': { borderRightColor: 'transparent' },
              },
            },
          }),
        f = (0, d.ZP)(i.Z)(t => {
          let { theme: e, animation: a, duration: r, delay: n, easing: o, infinite: i } = t,
            s = g.keyframes[a],
            l = 'string' == typeof r ? g.duration[r] : r,
            c = g.easing[o] || o,
            d = {};
          if (a)
            switch (a) {
              case 'tarotReveal':
                d = { transformStyle: 'preserve-3d', perspective: '1000px' };
                break;
              case 'float':
                d = { transform: 'translateY(0)' };
                break;
              case 'typing':
                d = {
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  borderRight: '3px solid',
                  width: '0',
                };
                break;
              case 'glow':
                d = { transition: 'box-shadow 0.3s ease' };
            }
          return {
            animation:
              s &&
              ''
                .concat(a, ' ')
                .concat(l, 'ms ')
                .concat(c, ' ')
                .concat(n, 'ms ')
                .concat(i ? 'infinite' : 'forwards'),
            ...d,
            '@keyframes fadeIn': g.keyframes.fadeIn,
            '@keyframes fadeOut': g.keyframes.fadeOut,
            '@keyframes slideUp': g.keyframes.slideUp,
            '@keyframes slideDown': g.keyframes.slideDown,
            '@keyframes slideRight': g.keyframes.slideRight,
            '@keyframes slideLeft': g.keyframes.slideLeft,
            '@keyframes zoomIn': g.keyframes.zoomIn,
            '@keyframes zoomOut': g.keyframes.zoomOut,
            '@keyframes rotate': g.keyframes.rotate,
            '@keyframes glow': g.keyframes.glow,
            '@keyframes twinkle': g.keyframes.twinkle,
            '@keyframes flipCard': g.keyframes.flipCard,
            '@keyframes ripple': g.keyframes.ripple,
            '@keyframes gradientShift': g.keyframes.gradientShift,
            '@keyframes tarotReveal': g.keyframes.tarotReveal,
            '@keyframes mysticalShake': g.keyframes.mysticalShake,
            '@keyframes float': g.keyframes.float,
            '@keyframes flash': g.keyframes.flash,
            '@keyframes typing': g.keyframes.typing,
            '@keyframes blink': g.keyframes.blink,
          };
        }),
        u = (0, o.forwardRef)(function (t, e) {
          let {
              animation: a = 'fadeIn',
              duration: n = 'normal',
              delay: i = 0,
              easing: s = 'easeInOut',
              infinite: l = !1,
              onScroll: c = !1,
              threshold: d = 0.2,
              children: p,
              sx: m = {},
              ...x
            } = t,
            u = (0, o.useRef)(null),
            h = e || u,
            [y, b] = (0, o.useState)(!c);
          (0, o.useEffect)(() => {
            if (!c) return;
            let t = new IntersectionObserver(
              e => {
                let [a] = e;
                a.isIntersecting && (b(!0), t.disconnect());
              },
              { threshold: d }
            );
            return (
              h.current && t.observe(h.current),
              () => {
                h.current && t.unobserve(h.current);
              }
            );
          }, [c, h, d]);
          let j = 'string' == typeof n ? g.duration[n] : n;
          return (0, r.jsx)(f, {
            ref: h,
            animation: y ? a : null,
            duration: j,
            delay: i,
            easing: s,
            infinite: l,
            sx: { opacity: y ? 1 : 0, ...m },
            ...x,
            children: p,
          });
        }),
        h = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: -1,
          };
        }),
        y = (0, d.ZP)(i.Z)(t => {
          let { theme: e, colors: a, duration: r, easing: n } = t,
            o = 'string' == typeof r ? g.duration[r] : r,
            i = g.easing[n] || n;
          return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, '.concat(a.join(', '), ')'),
            backgroundSize: '400% 400%',
            animation: 'gradientShift '.concat(3 * o, 'ms ').concat(i, ' infinite'),
            '@keyframes gradientShift': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          };
        }),
        b = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };
        }),
        j = (0, d.ZP)(i.Z)(t => {
          let { theme: e, size: a, color: r, duration: n, delay: o } = t;
          return {
            position: 'absolute',
            width: a,
            height: a,
            backgroundColor: r,
            borderRadius: '50%',
            opacity: 0,
            animation: 'particle '.concat(n, 'ms ease-in-out ').concat(o, 'ms infinite'),
            '@keyframes particle': {
              '0%': { transform: 'translateY(100vh) scale(0)', opacity: 0 },
              '50%': { opacity: 1 },
              '100%': { transform: 'translateY(-20vh) scale(1)', opacity: 0 },
            },
          };
        }),
        w = (0, d.ZP)(i.Z)(t => {
          let { theme: e, color: a, duration: r, easing: n } = t,
            o = 'string' == typeof r ? g.duration[r] : r,
            i = g.easing[n] || n;
          return {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to top, '.concat(a, ' 0%, transparent 100%)'),
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              height: '200px',
              backgroundRepeat: 'repeat-x',
              backgroundSize: '1600px 200px',
              bottom: 0,
            },
            '&::before': {
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 200'%3E%3Cpath fill='rgba(255, 255, 255, 0.2)' d='M0,192 C220,100 440,100 660,192 C880,290 1100,290 1320,192 L1320,200 L0,200 Z'/%3E%3C/svg%3E\")",
              animation: 'wave '.concat(o, 'ms ').concat(i, ' infinite linear'),
            },
            '&::after': {
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 200'%3E%3Cpath fill='rgba(255, 255, 255, 0.1)' d='M0,192 C320,100 640,100 960,192 C1280,290 1440,200 1600,150 L1600,200 L0,200 Z'/%3E%3C/svg%3E\")",
              animation: 'wave '.concat(1.5 * o, 'ms ').concat(i, ' infinite linear'),
            },
            '@keyframes wave': {
              '0%': { backgroundPositionX: '0' },
              '100%': { backgroundPositionX: '1600px' },
            },
          };
        }),
        k = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
          };
        }),
        v = (0, d.ZP)(i.Z)(t => {
          let { theme: e, size: a, color: r, duration: n, delay: o, top: i, left: s } = t;
          return {
            position: 'absolute',
            width: a,
            height: a,
            backgroundColor: 'transparent',
            borderRadius: '50%',
            boxShadow: '0 0 '
              .concat(2 * a, 'px ')
              .concat(a, 'px ')
              .concat(r),
            top: ''.concat(i, '%'),
            left: ''.concat(s, '%'),
            opacity: 0.3,
            animation: 'twinkle '.concat(n, 'ms ease-in-out ').concat(o, 'ms infinite'),
            '@keyframes twinkle': {
              '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
              '50%': { opacity: 1, transform: 'scale(1.2)' },
            },
          };
        }),
        Z = (0, o.forwardRef)(function (t, e) {
          let {
              type: a = 'gradient',
              colors: n = ['#6B3FA0', '#9C27B0', '#3F51B5'],
              waveColor: i = '#6B3FA0',
              particleCount: s = 50,
              starCount: l = 100,
              duration: c = 'slow',
              easing: d = 'easeInOut',
              sx: p = {},
              ...m
            } = t,
            x = (0, o.useRef)(null),
            f = e || x,
            u = Array.from({ length: s }).map((t, e) => ({
              id: e,
              size: 10 * Math.random() + 2,
              color: n[Math.floor(Math.random() * n.length)],
              duration: 1e4 * Math.random() + 5e3,
              delay: 5e3 * Math.random(),
              left: 100 * Math.random(),
            })),
            Z = Array.from({ length: l }).map((t, e) => ({
              id: e,
              size: 2 * Math.random() + 0.5,
              color: '#FFFFFF',
              duration: 5e3 * Math.random() + 2e3,
              delay: 2e3 * Math.random(),
              top: 100 * Math.random(),
              left: 100 * Math.random(),
            }));
          return ('string' == typeof c && g.duration[c], 'gradient' === a)
            ? (0, r.jsx)(h, {
                ref: f,
                sx: p,
                ...m,
                children: (0, r.jsx)(y, { colors: n, duration: c, easing: d }),
              })
            : 'particles' === a
              ? (0, r.jsx)(h, {
                  ref: f,
                  sx: p,
                  ...m,
                  children: (0, r.jsx)(b, {
                    children: u.map(t =>
                      (0, r.jsx)(
                        j,
                        {
                          size: t.size,
                          color: t.color,
                          duration: t.duration,
                          delay: t.delay,
                          style: { left: ''.concat(t.left, '%') },
                        },
                        t.id
                      )
                    ),
                  }),
                })
              : 'wave' === a
                ? (0, r.jsx)(h, {
                    ref: f,
                    sx: p,
                    ...m,
                    children: (0, r.jsx)(w, { color: i, duration: c, easing: d }),
                  })
                : 'stars' === a
                  ? (0, r.jsx)(h, {
                      ref: f,
                      sx: p,
                      ...m,
                      children: (0, r.jsx)(k, {
                        children: Z.map(t =>
                          (0, r.jsx)(
                            v,
                            {
                              size: t.size,
                              color: t.color,
                              duration: t.duration,
                              delay: t.delay,
                              top: t.top,
                              left: t.left,
                            },
                            t.id
                          )
                        ),
                      }),
                    })
                  : (0, r.jsx)(h, { ref: f, sx: p, ...m });
        }),
        S = (0, d.ZP)(i.Z)(t => {
          let {
              theme: e,
              animation: a,
              duration: r,
              delay: n,
              easing: o,
              infinite: i,
              size: s,
              color: l,
            } = t,
            c = g.keyframes[a] || I(a),
            d = 'string' == typeof r ? g.duration[r] : r,
            p = g.easing[o] || o;
          return {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: l || 'inherit',
            fontSize: 'small' === s ? 20 : 'medium' === s ? 24 : 'large' === s ? 36 : s,
            lineHeight: 1,
            animation:
              c &&
              ''
                .concat(a, ' ')
                .concat(d, 'ms ')
                .concat(p, ' ')
                .concat(n, 'ms ')
                .concat(i ? 'infinite' : 'forwards'),
            '@keyframes rotate': g.keyframes.rotate,
            '@keyframes pulse': g.keyframes.pulse,
            '@keyframes fadeIn': g.keyframes.fadeIn,
            '@keyframes zoomIn': g.keyframes.zoomIn,
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            '@keyframes shake': {
              '0%, 100%': { transform: 'translateX(0)' },
              '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
              '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
            },
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
            '@keyframes ping': {
              '0%': { transform: 'scale(1)', opacity: 1 },
              '75%, 100%': { transform: 'scale(2)', opacity: 0 },
            },
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            '@keyframes heartbeat': {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.2)' },
            },
            '@keyframes flip': {
              '0%': { transform: 'perspective(400px) rotateY(0)' },
              '100%': { transform: 'perspective(400px) rotateY(360deg)' },
            },
            '@keyframes swing': {
              '0%, 100%': { transform: 'rotate(0deg)' },
              '20%': { transform: 'rotate(15deg)' },
              '40%': { transform: 'rotate(-10deg)' },
              '60%': { transform: 'rotate(5deg)' },
              '80%': { transform: 'rotate(-5deg)' },
            },
            '@keyframes tada': {
              '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
              '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
              '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
              '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
            },
          };
        }),
        I = t => {
          switch (t) {
            case 'bounce':
            case 'float':
              return {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              };
            case 'shake':
              return {
                '0%, 100%': { transform: 'translateX(0)' },
                '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
                '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
              };
            case 'spin':
              return {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              };
            case 'ping':
              return {
                '0%': { transform: 'scale(1)', opacity: 1 },
                '75%, 100%': { transform: 'scale(2)', opacity: 0 },
              };
            case 'heartbeat':
              return { '0%, 100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.2)' } };
            case 'flip':
              return {
                '0%': { transform: 'perspective(400px) rotateY(0)' },
                '100%': { transform: 'perspective(400px) rotateY(360deg)' },
              };
            case 'swing':
              return {
                '0%, 100%': { transform: 'rotate(0deg)' },
                '20%': { transform: 'rotate(15deg)' },
                '40%': { transform: 'rotate(-10deg)' },
                '60%': { transform: 'rotate(5deg)' },
                '80%': { transform: 'rotate(-5deg)' },
              };
            case 'tada':
              return {
                '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
                '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
                '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
                '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
              };
            default:
              return null;
          }
        },
        C = (0, o.forwardRef)(function (t, e) {
          let {
              children: a,
              animation: n = 'fadeIn',
              duration: i = 'normal',
              delay: s = 0,
              easing: l = 'easeInOut',
              infinite: c = !1,
              onScroll: d = !1,
              threshold: p = 0.2,
              size: m = 'medium',
              color: x,
              sx: g = {},
              ...f
            } = t,
            u = (0, o.useRef)(null),
            h = e || u,
            [y, b] = (0, o.useState)(!d);
          return (
            (0, o.useEffect)(() => {
              if (!d) return;
              let t = new IntersectionObserver(
                e => {
                  let [a] = e;
                  a.isIntersecting && (b(!0), t.disconnect());
                },
                { threshold: p }
              );
              return (
                h.current && t.observe(h.current),
                () => {
                  h.current && t.unobserve(h.current);
                }
              );
            }, [d, h, p]),
            (0, r.jsx)(S, {
              ref: h,
              animation: y ? n : null,
              duration: i,
              delay: s,
              easing: l,
              infinite: c,
              size: m,
              color: x,
              sx: { opacity: y || 'fadeIn' === n ? 1 : 0, ...g },
              ...f,
              children: a,
            })
          );
        });
      var z = a('(app-pages-browser)/./src/app/components/TarotCard.jsx'),
        P = a('(app-pages-browser)/./src/app/components/MysticalButton.jsx');
      function M(t) {
        let e,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
        return function () {
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
          e ||
            (t(...n),
            (e = !0),
            setTimeout(() => {
              e = !1;
            }, a));
        };
      }
      var F = a('(app-pages-browser)/./node_modules/@mui/icons-material/AutoAwesome.js'),
        B = a('(app-pages-browser)/./node_modules/@mui/icons-material/Favorite.js'),
        R = a('(app-pages-browser)/./node_modules/@mui/icons-material/WbTwilight.js'),
        E = a('(app-pages-browser)/./node_modules/@mui/icons-material/NightsStay.js');
      let T = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, '
              .concat(e.palette.background.default, ' 0%, ')
              .concat(e.palette.background.paper, ' 100%)'),
          };
        }),
        A = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, '
              .concat(e.palette.common.white, ', ')
              .concat(e.palette.grey[300], ')'),
            boxShadow: '0 0 30px 10px '.concat(e.palette.primary.light, '40'),
            opacity: 0.7,
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '10%',
              left: '15%',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, '.concat(
                e.palette.grey[300],
                ', transparent)'
              ),
              opacity: 0.8,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '40%',
              left: '60%',
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, '.concat(
                e.palette.grey[300],
                ', transparent)'
              ),
              opacity: 0.6,
            },
            [e.breakpoints.down('md')]: { width: '80px', height: '80px', top: '5%', right: '5%' },
          };
        }),
        Y = (0, d.ZP)(s.Z)(t => {
          let { theme: e } = t;
          return {
            fontFamily: '"Playfair Display", "Noto Serif KR", serif',
            fontWeight: 700,
            fontSize: '3.5rem',
            textAlign: 'center',
            marginBottom: e.spacing(1),
            background: 'linear-gradient(135deg, '
              .concat(e.palette.primary.main, ' 0%, ')
              .concat(e.palette.secondary.main, ' 100%)'),
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 15px '.concat(e.palette.primary.main, '80'),
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, '.concat(
                e.palette.secondary.main,
                ', transparent)'
              ),
              opacity: 0.7,
            },
            [e.breakpoints.down('md')]: { fontSize: '2.5rem', '&::after': { width: '80px' } },
          };
        }),
        _ = (0, d.ZP)(s.Z)(t => {
          let { theme: e } = t;
          return {
            fontFamily:
              '"Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: e.spacing(4),
            color: e.palette.text.secondary,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '30px',
              height: '30px',
              background:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='".concat(
                  encodeURIComponent(e.palette.secondary.main),
                  "'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E\")"
                ),
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.3,
              zIndex: -1,
            },
            [e.breakpoints.down('md')]: { fontSize: '1.2rem' },
          };
        }),
        N = (0, d.ZP)(i.Z)(t => {
          let { theme: e, size: a, top: r, left: n, delay: o, color: i } = t;
          return {
            position: 'absolute',
            width: a,
            height: a,
            top: r,
            left: n,
            borderRadius: '50%',
            background: i || e.palette.secondary.main,
            boxShadow: '0 0 '
              .concat(a, 'px ')
              .concat(a / 2, 'px ')
              .concat(i || e.palette.secondary.main),
            animation: 'twinkle '
              .concat(2 + 3 * Math.random(), 's ease-in-out ')
              .concat(o, 's infinite'),
            opacity: 0.7,
            zIndex: 0,
            '@keyframes twinkle': {
              '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
              '50%': { opacity: 0.3, transform: 'scale(0.8)' },
            },
          };
        }),
        W = (0, d.ZP)(i.Z)(t => {
          let { theme: e, top: a, left: r, delay: n, duration: o } = t;
          return {
            position: 'absolute',
            top: a,
            left: r,
            width: '100px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, '.concat(e.palette.common.white, ')'),
            opacity: 0,
            zIndex: 0,
            transform: 'rotate(-45deg)',
            animation: 'shootingStar '.concat(o, 's linear ').concat(n, 's infinite'),
            boxShadow: '0 0 10px 1px '.concat(e.palette.common.white),
            '@keyframes shootingStar': {
              '0%': { opacity: 0, transform: 'translateX(0) translateY(0) rotate(-45deg)' },
              '10%, 15%': { opacity: 1 },
              '100%': {
                opacity: 0,
                transform: 'translateX(-500px) translateY(500px) rotate(-45deg)',
              },
            },
          };
        }),
        X = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'relative',
            perspective: '1000px',
            width: '100%',
            height: '100%',
            '&:hover .card': {
              transform: 'rotateY(10deg) rotateX(5deg)',
              boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.3),\n                0 0 20px '
                .concat(e.palette.primary.main, '40,\n                0 0 30px ')
                .concat(e.palette.secondary.main, '30'),
            },
            '&:hover .card-back': {
              transform: 'translateX(-20px) translateY(20px) rotateZ(-8deg)',
            },
            '&:hover .card-glow': { opacity: 1 },
          };
        }),
        O = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 2 * e.shape.borderRadius,
            background: 'radial-gradient(circle at center, '.concat(
              e.palette.primary.main,
              '20 0%, transparent 70%)'
            ),
            opacity: 0,
            transition: 'opacity 0.5s ease-in-out',
            pointerEvents: 'none',
            zIndex: 1,
          };
        });
      function L() {
        let t = (0, p.useRouter)(),
          [e, a] = (0, o.useState)([]),
          [d, m] = (0, o.useState)([]),
          x = (0, o.useRef)(null),
          [g, f] = (0, o.useState)({ x: 0, y: 0 });
        (0, o.useEffect)(() => {
          let t = t => {
              let e = [],
                a = ['#D4AF37', '#9C27B0', '#6B3FA0', '#FFFFFF'];
              for (let r = 0; r < t; r++)
                e.push({
                  id: r,
                  size: 2 + 4 * Math.random(),
                  top: ''.concat(100 * Math.random(), '%'),
                  left: ''.concat(100 * Math.random(), '%'),
                  delay: 5 * Math.random(),
                  color: a[Math.floor(Math.random() * a.length)],
                });
              return e;
            },
            e = t => {
              let e = [];
              for (let a = 0; a < t; a++)
                e.push({
                  id: a,
                  top: ''.concat(30 * Math.random(), '%'),
                  left: ''.concat(70 * Math.random() + 30, '%'),
                  delay: 15 * Math.random() + 5,
                  duration: 3 * Math.random() + 2,
                });
              return e;
            },
            r = sessionStorage.getItem('heroStars'),
            n = sessionStorage.getItem('heroShootingStars');
          if (r && n)
            try {
              a(JSON.parse(r)), m(JSON.parse(n));
            } catch (o) {
              console.error('Failed to parse cached stars:', o);
              let r = t(30),
                n = e(3);
              a(r),
                m(n),
                sessionStorage.setItem('heroStars', JSON.stringify(r)),
                sessionStorage.setItem('heroShootingStars', JSON.stringify(n));
            }
          else {
            let r = t(30),
              n = e(3);
            a(r),
              m(n),
              sessionStorage.setItem('heroStars', JSON.stringify(r)),
              sessionStorage.setItem('heroShootingStars', JSON.stringify(n));
          }
        }, []),
          (0, o.useEffect)(() => {
            let t = t => {
              if (!x.current) return;
              let e = x.current.getBoundingClientRect(),
                a = e.left + e.width / 2,
                r = e.top + e.height / 2;
              f({ x: 0.05 * (t.clientX - a), y: -(0.05 * (t.clientY - r)) });
            };
            return (
              window.addEventListener('mousemove', t),
              () => {
                window.removeEventListener('mousemove', t);
              }
            );
          }, []);
        let h = (0, o.useCallback)(
          M(() => {
            let e = document.createElement('div');
            (e.style.position = 'fixed'),
              (e.style.top = '0'),
              (e.style.left = '0'),
              (e.style.width = '100%'),
              (e.style.height = '3px'),
              (e.style.background = 'linear-gradient(to right, #6B3FA0, #E91E63)'),
              (e.style.zIndex = '9999'),
              (e.style.animation = 'loading 1s infinite linear'),
              document.body.appendChild(e);
            let a = document.createElement('style');
            (a.innerHTML =
              '\n        @keyframes loading {\n          0% { width: 0; }\n          50% { width: 50%; }\n          100% { width: 100%; }\n        }\n      '),
              document.head.appendChild(a),
              setTimeout(() => {
                t.push('/test');
              }, 300);
          }, 500),
          [t]
        );
        return (0, r.jsxs)(T, {
          children: [
            (0, r.jsx)(Z, { type: 'stars', starCount: 0 }),
            (0, r.jsx)(A, {
              children: (0, r.jsx)(C, {
                animation: 'pulse',
                duration: 'slow',
                infinite: !0,
                children: (0, r.jsx)(E.Z, {
                  sx: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: 40,
                    color: 'rgba(255,255,255,0.1)',
                  },
                }),
              }),
            }),
            (0, r.jsx)(n.$0, {
              children: (0, r.jsx)(l.Z, {
                maxWidth: 'lg',
                children: (0, r.jsxs)(c.ZP, {
                  container: !0,
                  spacing: 4,
                  alignItems: 'center',
                  children: [
                    (0, r.jsx)(c.ZP, {
                      item: !0,
                      xs: 12,
                      md: 6,
                      children: (0, r.jsxs)(u, {
                        animation: 'fadeIn',
                        duration: 'normal',
                        children: [
                          (0, r.jsx)(Y, { variant: 'h1', children: '달빛 연애 연구소' }),
                          (0, r.jsx)(_, {
                            variant: 'h2',
                            children: '당신의 MBTI로 알아보는 연애 유형과 이상형',
                          }),
                          (0, r.jsxs)(u, {
                            animation: 'slideUp',
                            duration: 'normal',
                            delay: 300,
                            children: [
                              (0, r.jsx)(s.Z, {
                                variant: 'body1',
                                sx: {
                                  mb: 4,
                                  textAlign: { xs: 'center', md: 'left' },
                                  position: 'relative',
                                  zIndex: 2,
                                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                },
                                children:
                                  '타로 카드의 신비로운 힘으로 당신의 MBTI 연애 유형을 분석해드립니다. 24개의 질문에 답하고 당신의 연애 스타일과 가장 잘 맞는 이상형을 찾아보세요.',
                              }),
                              (0, r.jsx)(i.Z, {
                                sx: {
                                  display: 'flex',
                                  justifyContent: { xs: 'center', md: 'flex-start' },
                                },
                                children: (0, r.jsx)(u, {
                                  animation: 'pulse',
                                  duration: 'slow',
                                  delay: 1e3,
                                  children: (0, r.jsx)(P.Z, {
                                    variant: 'mystical',
                                    size: 'large',
                                    onClick: h,
                                    startIcon: (0, r.jsx)(F.Z, {}),
                                    sx: {
                                      position: 'relative',
                                      zIndex: 2,
                                      '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: t =>
                                          '0 10px 20px -5px '
                                            .concat(t.palette.primary.main, '40, 0 0 15px ')
                                            .concat(t.palette.secondary.main, '30'),
                                      },
                                      transition: 'all 0.3s ease-in-out',
                                    },
                                    children: '테스트 시작하기',
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)(c.ZP, {
                      item: !0,
                      xs: 12,
                      md: 6,
                      children: (0, r.jsx)(u, {
                        animation: 'zoomIn',
                        duration: 'slow',
                        delay: 500,
                        children: (0, r.jsx)(X, {
                          children: (0, r.jsxs)(i.Z, {
                            sx: { position: 'relative' },
                            ref: x,
                            children: [
                              (0, r.jsx)(O, { className: 'card-glow' }),
                              (0, r.jsx)(z.Z, {
                                variant: 'primary',
                                title: '당신의 MBTI 연애 유형은?',
                                sx: {
                                  maxWidth: { xs: 280, md: 320 },
                                  mx: 'auto',
                                  transition: 'all 0.5s ease-in-out',
                                  transform: 'rotateY('
                                    .concat(g.x, 'deg) rotateX(')
                                    .concat(g.y, 'deg)'),
                                  className: 'card',
                                },
                                children: (0, r.jsxs)(i.Z, {
                                  sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    p: 2,
                                    position: 'relative',
                                    overflow: 'hidden',
                                  },
                                  children: [
                                    (0, r.jsx)(C, {
                                      animation: 'pulse',
                                      duration: 'slow',
                                      infinite: !0,
                                      size: 'large',
                                      color: 'white',
                                      children: (0, r.jsx)(B.Z, {
                                        fontSize: 'inherit',
                                        sx: {
                                          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
                                        },
                                      }),
                                    }),
                                    (0, r.jsx)(s.Z, {
                                      variant: 'h4',
                                      sx: {
                                        color: 'white',
                                        textAlign: 'center',
                                        mb: 2,
                                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                        fontFamily: t => t.typography.fontFamily.secondary,
                                      },
                                      children: 'MBTI 연애 테스트',
                                    }),
                                    (0, r.jsx)(s.Z, {
                                      variant: 'body1',
                                      sx: {
                                        color: 'white',
                                        textAlign: 'center',
                                        mb: 4,
                                        textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                                      },
                                      children:
                                        '당신의 MBTI 유형을 기반으로 연애 성향과 이상형을 분석해드립니다.',
                                    }),
                                    (0, r.jsx)(i.Z, {
                                      sx: {
                                        position: 'relative',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                      },
                                      children: (0, r.jsx)(C, {
                                        animation: 'float',
                                        duration: 'slow',
                                        infinite: !0,
                                        size: 'large',
                                        color: 'white',
                                        children: (0, r.jsx)(R.Z, {
                                          fontSize: 'inherit',
                                          sx: { opacity: 0.8 },
                                        }),
                                      }),
                                    }),
                                    (0, r.jsx)(i.Z, {
                                      sx: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'url("/images/tarot-pattern.png")',
                                        backgroundSize: '200px',
                                        backgroundRepeat: 'repeat',
                                        opacity: 0.05,
                                        zIndex: -1,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)(z.Z, {
                                variant: 'secondary',
                                sx: {
                                  maxWidth: { xs: 280, md: 320 },
                                  height: 450,
                                  position: 'absolute',
                                  top: 10,
                                  left: '50%',
                                  transform: 'translateX(-50%) rotateZ(-5deg)',
                                  zIndex: -1,
                                  opacity: 0.7,
                                  transition: 'transform 0.5s ease-in-out',
                                  className: 'card-back',
                                },
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            e.map(t =>
              (0, r.jsx)(
                N,
                { size: t.size, top: t.top, left: t.left, delay: t.delay, color: t.color },
                t.id
              )
            ),
            d.map(t =>
              (0, r.jsx)(
                W,
                { top: t.top, left: t.left, delay: t.delay, duration: t.duration },
                t.id
              )
            ),
          ],
        });
      }
      var D = a('(app-pages-browser)/./src/app/components/mystical/index.js'),
        J = a('(app-pages-browser)/./node_modules/@mui/icons-material/Psychology.js'),
        H = a('(app-pages-browser)/./node_modules/@mui/icons-material/Share.js'),
        U = a('(app-pages-browser)/./node_modules/@mui/icons-material/Star.js');
      let q = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'relative',
            padding: e.spacing(8, 0),
            background: e.palette.background.default,
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100px',
              background: 'linear-gradient(to bottom, transparent, '.concat(
                e.palette.background.default,
                ')'
              ),
              zIndex: 1,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("/images/tarot-pattern.png")',
              backgroundSize: '200px',
              backgroundRepeat: 'repeat',
              opacity: 0.02,
              zIndex: 0,
              pointerEvents: 'none',
            },
          };
        }),
        G = (0, d.ZP)(z.Z)(t => {
          let { theme: e, color: a } = t;
          return {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '5px',
              background: 'linear-gradient(to right, '
                .concat(a || e.palette.primary.main, ', ')
                .concat(e.palette.secondary.main, ')'),
              opacity: 0.7,
              zIndex: 1,
            },
            '&:hover': {
              transform: 'translateY(-10px) scale(1.02)',
              boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2), 0 0 20px '.concat(
                a || e.palette.primary.main,
                '30'
              ),
              '& .card-icon': { transform: 'scale(1.1) rotate(5deg)' },
              '& .card-decoration': { opacity: 0.1 },
            },
          };
        }),
        $ = (0, d.ZP)(i.Z)(t => {
          let { theme: e, color: a } = t;
          return {
            width: 80,
            height: 80,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: e.spacing(2),
            background: 'linear-gradient(135deg, '
              .concat(a || e.palette.primary.main, '30, ')
              .concat(a || e.palette.primary.main, '10)'),
            boxShadow: '0 8px 20px '
              .concat(a || e.palette.primary.main, '20, 0 0 0 1px ')
              .concat(a || e.palette.primary.main, '10'),
            position: 'relative',
            transition: 'all 0.3s ease',
            className: 'card-icon',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -5,
              left: -5,
              right: -5,
              bottom: -5,
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, '.concat(
                a || e.palette.primary.main,
                '10 0%, transparent 70%)'
              ),
              opacity: 0.5,
              zIndex: 0,
            },
          };
        }),
        K = (0, d.ZP)(i.Z)(t => {
          let { theme: e, color: a } = t;
          return {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle at top right, '.concat(
              a || e.palette.primary.main,
              '10, transparent 70%)'
            ),
            opacity: 0.05,
            transition: 'opacity 0.3s ease',
            className: 'card-decoration',
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '30px',
              height: '30px',
              background:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='".concat(
                  encodeURIComponent(a || e.palette.primary.main),
                  "'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E\")"
                ),
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.3,
            },
          };
        });
      function Q() {
        let t = (function (t) {
          let e = new Map();
          return function () {
            for (var a = arguments.length, r = Array(a), n = 0; n < a; n++) r[n] = arguments[n];
            let o = JSON.stringify(r);
            if (e.has(o)) return e.get(o);
            let i = t(...r);
            return e.set(o, i), i;
          };
        })(() => [
          {
            id: 1,
            icon: (0, r.jsx)(J.Z, {}),
            decorationIcon: (0, r.jsx)(U.Z, {}),
            title: '정확한 MBTI 분석',
            description:
              '24개의 질문을 통해 당신의 MBTI 유형을 정확하게 분석합니다. 연애 상황에 특화된 질문으로 더 정확한 결과를 제공합니다.',
            color: '#6B3FA0',
            animation: 'pulse',
          },
          {
            id: 2,
            icon: (0, r.jsx)(B.Z, {}),
            decorationIcon: (0, r.jsx)(R.Z, {}),
            title: '이상형 매칭',
            description:
              '당신의 MBTI 유형과 가장 잘 맞는 이상형을 알려드립니다. MBTI 궁합 이론을 바탕으로 당신과 가장 잘 맞는 유형을 찾아보세요.',
            color: '#E91E63',
            animation: 'heartbeat',
          },
          {
            id: 3,
            icon: (0, r.jsx)(F.Z, {}),
            decorationIcon: (0, r.jsx)(U.Z, {}),
            title: '연애 성향 분석',
            description:
              '당신의 연애 강점과 약점, 연애 스타일을 상세하게 분석해드립니다. 자신의 연애 패턴을 이해하고 더 나은 관계를 만들어보세요.',
            color: '#FF9800',
            animation: 'float',
          },
          {
            id: 4,
            icon: (0, r.jsx)(H.Z, {}),
            decorationIcon: (0, r.jsx)(R.Z, {}),
            title: '결과 공유',
            description:
              '테스트 결과를 친구나 연인과 공유할 수 있습니다. 서로의 MBTI 유형을 비교하고 더 깊이 이해해보세요.',
            color: '#2196F3',
            animation: 'bounce',
          },
        ])();
        return (0, r.jsx)(q, {
          children: (0, r.jsx)(n.$0, {
            children: (0, r.jsxs)(l.Z, {
              maxWidth: 'lg',
              children: [
                (0, r.jsx)(u, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  onScroll: !0,
                  children: (0, r.jsx)(i.Z, {
                    sx: { textAlign: 'center', mb: 2 },
                    children: (0, r.jsx)(D.Pr, {
                      title: '테스트 특징',
                      subtitle: '달빛 연애 연구소의 MBTI 테스트가 특별한 이유',
                      align: 'center',
                      hasGradient: !0,
                      animation: 'none',
                    }),
                  }),
                }),
                (0, r.jsx)(u, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  delay: 200,
                  onScroll: !0,
                  children: (0, r.jsx)(i.Z, {
                    sx: { display: 'flex', justifyContent: 'center', mb: 6 },
                    children: (0, r.jsx)(n.Gg, {
                      variant: 'mystical',
                      thickness: 2,
                      glow: !0,
                      decorated: !0,
                      icon: (0, r.jsx)(U.Z, {}),
                      sx: { maxWidth: 300 },
                    }),
                  }),
                }),
                (0, r.jsx)(c.ZP, {
                  container: !0,
                  spacing: 4,
                  children: t.map((t, e) =>
                    (0, r.jsx)(
                      c.ZP,
                      {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        md: 3,
                        children: (0, r.jsx)(u, {
                          animation: 'slideUp',
                          duration: 'normal',
                          delay: 150 * e,
                          onScroll: !0,
                          threshold: 0.1,
                          children: (0, r.jsxs)(G, {
                            variant: 'paper',
                            color: t.color,
                            children: [
                              (0, r.jsx)(K, { color: t.color }),
                              (0, r.jsxs)(i.Z, {
                                sx: { position: 'relative', zIndex: 2, p: 3 },
                                children: [
                                  (0, r.jsx)($, {
                                    color: t.color,
                                    children: (0, r.jsx)(C, {
                                      animation: t.animation,
                                      duration: 'slow',
                                      infinite: !0,
                                      color: t.color,
                                      children: t.icon,
                                    }),
                                  }),
                                  (0, r.jsx)(s.Z, {
                                    variant: 'h6',
                                    sx: {
                                      mb: 2,
                                      fontWeight: 'bold',
                                      fontFamily: t => t.typography.fontFamily.secondary,
                                      color: t.color,
                                    },
                                    children: t.title,
                                  }),
                                  (0, r.jsx)(s.Z, {
                                    variant: 'body2',
                                    sx: {
                                      color: 'text.secondary',
                                      position: 'relative',
                                      zIndex: 2,
                                    },
                                    children: t.description,
                                  }),
                                  (0, r.jsx)(i.Z, {
                                    sx: {
                                      position: 'absolute',
                                      bottom: -10,
                                      right: -10,
                                      opacity: 0.1,
                                      transform: 'rotate(-15deg)',
                                      color: t.color,
                                    },
                                    children: t.decorationIcon,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      },
                      t.id
                    )
                  ),
                }),
                (0, r.jsx)(u, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  delay: 600,
                  onScroll: !0,
                  children: (0, r.jsx)(i.Z, {
                    sx: { display: 'flex', justifyContent: 'center', mt: 8 },
                    children: (0, r.jsx)(n.Gg, {
                      variant: 'mystical',
                      thickness: 1,
                      text: '신비로운 타로 카드의 힘으로 당신의 MBTI 연애 유형을 분석해보세요',
                      sx: { maxWidth: 600 },
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var V = a('(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js'),
        tt = a('(app-pages-browser)/./src/app/components/animations.jsx');
      (0, d.ZP)(i.Z)(t => {
        let { theme: e, direction: a } = t;
        return {
          display: 'flex',
          flexDirection: 'vertical' === a ? 'column' : 'row',
          alignItems: 'center',
          gap: e.spacing(1),
        };
      }),
        (0, d.ZP)(V.Z)(t => {
          let { theme: e, platform: a } = t,
            r = {
              facebook: '#1877F2',
              twitter: '#1DA1F2',
              whatsapp: '#25D366',
              telegram: '#0088CC',
              link: e.palette.primary.main,
            };
          return {
            backgroundColor: ''.concat(r[a], '20'),
            color: r[a],
            transition: 'all 0.3s ease',
            '&:hover': { backgroundColor: ''.concat(r[a], '40'), transform: 'translateY(-3px)' },
          };
        });
      var te = a('(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js');
      let ta = (0, d.ZP)(te.Z)(t => {
          let { theme: e, variant: a } = t,
            r = {
              padding: e.spacing(4),
              borderRadius: 2 * e.shape.borderRadius,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              position: 'relative',
            };
          return 'primary' === a
            ? {
                ...r,
                background: 'linear-gradient(135deg, '
                  .concat(e.palette.primary.dark, '80 0%, ')
                  .concat(e.palette.primary.main, '40 100%)'),
                color: e.palette.common.white,
              }
            : 'secondary' === a
              ? {
                  ...r,
                  background: 'linear-gradient(135deg, '
                    .concat(e.palette.secondary.dark, '80 0%, ')
                    .concat(e.palette.secondary.main, '40 100%)'),
                  color: e.palette.common.white,
                }
              : 'mystical' === a
                ? {
                    ...r,
                    background: 'linear-gradient(135deg, '
                      .concat(e.palette.primary.dark, '80 0%, ')
                      .concat(e.palette.secondary.dark, '80 100%)'),
                    color: e.palette.common.white,
                  }
                : 'light' === a
                  ? {
                      ...r,
                      background: e.palette.background.paper,
                      color: e.palette.text.primary,
                      border: '1px solid '.concat(e.palette.divider),
                    }
                  : {
                      ...r,
                      background: e.palette.background.default,
                      color: e.palette.text.primary,
                    };
        }),
        tr = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, '.concat(
              e.palette.primary.main,
              '20 0%, transparent 70%)'
            ),
            opacity: 0.5,
            zIndex: 0,
          };
        });
      function tn(t) {
        let {
          title: e,
          description: a,
          buttonText: n = '시작하기',
          onClick: o,
          variant: l = 'default',
          buttonVariant: c = 'mystical',
          buttonSize: d = 'medium',
          icon: p,
          animation: m = 'fadeIn',
          onScroll: x = !1,
          sx: g = {},
        } = t;
        return (0, r.jsx)(tt.F, {
          animation: m,
          duration: 'normal',
          onScroll: x,
          children: (0, r.jsxs)(ta, {
            variant: l,
            sx: g,
            children: [
              (0, r.jsx)(tr, {}),
              (0, r.jsxs)(i.Z, {
                sx: { position: 'relative', zIndex: 1 },
                children: [
                  (0, r.jsx)(s.Z, {
                    variant: 'h4',
                    sx: {
                      mb: 2,
                      fontWeight: 'bold',
                      fontFamily: t => t.typography.fontFamily.secondary,
                    },
                    children: e,
                  }),
                  a &&
                    (0, r.jsx)(s.Z, { variant: 'body1', sx: { mb: 4, opacity: 0.9 }, children: a }),
                  (0, r.jsx)(P.Z, {
                    variant: c,
                    size: d,
                    onClick: o,
                    startIcon: p || (0, r.jsx)(F.Z, {}),
                    children: n,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var to = a('(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js'),
        ti = a('(app-pages-browser)/./node_modules/@mui/material/Rating/Rating.js'),
        ts = a('(app-pages-browser)/./node_modules/@mui/icons-material/FormatQuote.js');
      let tl = (0, d.ZP)(i.Z)(t => {
          let { theme: e, variant: a } = t,
            r = {
              padding: e.spacing(3),
              borderRadius: e.shape.borderRadius,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              },
            };
          return 'primary' === a
            ? {
                ...r,
                background: 'linear-gradient(135deg, '
                  .concat(e.palette.primary.dark, '20 0%, ')
                  .concat(e.palette.primary.main, '10 100%)'),
                borderLeft: '4px solid '.concat(e.palette.primary.main),
              }
            : 'secondary' === a
              ? {
                  ...r,
                  background: 'linear-gradient(135deg, '
                    .concat(e.palette.secondary.dark, '20 0%, ')
                    .concat(e.palette.secondary.main, '10 100%)'),
                  borderLeft: '4px solid '.concat(e.palette.secondary.main),
                }
              : 'mystical' === a
                ? {
                    ...r,
                    background: 'linear-gradient(135deg, '
                      .concat(e.palette.primary.dark, '20 0%, ')
                      .concat(e.palette.secondary.dark, '20 100%)'),
                    borderLeft: '4px solid '.concat(e.palette.secondary.main),
                  }
                : {
                    ...r,
                    background: e.palette.background.paper,
                    borderLeft: '4px solid '.concat(e.palette.primary.main),
                  };
        }),
        tc = (0, d.ZP)(ts.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'absolute',
            top: 10,
            right: 10,
            fontSize: 40,
            color: e.palette.primary.main,
            opacity: 0.2,
            transform: 'rotate(180deg)',
          };
        }),
        td = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return { display: 'flex', alignItems: 'center', marginTop: e.spacing(2) };
        });
      function tp(t) {
        let {
          text: e,
          name: a,
          mbtiType: n,
          avatarSrc: o,
          rating: l,
          variant: c = 'default',
          animation: d = 'fadeIn',
          onScroll: p = !1,
          sx: m = {},
        } = t;
        return (0, r.jsx)(tt.F, {
          animation: d,
          duration: 'normal',
          onScroll: p,
          children: (0, r.jsxs)(tl, {
            variant: c,
            sx: m,
            children: [
              (0, r.jsx)(tc, {}),
              (0, r.jsx)(s.Z, {
                variant: 'body1',
                sx: { fontStyle: 'italic', mb: 2, position: 'relative', zIndex: 1 },
                children: e,
              }),
              (0, r.jsxs)(td, {
                children: [
                  (0, r.jsx)(to.Z, {
                    src: o,
                    alt: a,
                    sx: {
                      width: 50,
                      height: 50,
                      mr: 2,
                      bgcolor: t => (o ? void 0 : t.palette.primary.main),
                    },
                    children:
                      !o &&
                      (a
                        ? a
                            .split(' ')
                            .map(t => t[0])
                            .join('')
                            .toUpperCase()
                        : ''),
                  }),
                  (0, r.jsxs)(i.Z, {
                    children: [
                      (0, r.jsx)(s.Z, {
                        variant: 'subtitle1',
                        sx: { fontWeight: 'bold' },
                        children: a,
                      }),
                      n &&
                        (0, r.jsxs)(s.Z, {
                          variant: 'caption',
                          sx: { color: 'text.secondary', display: 'block' },
                          children: ['MBTI: ', n],
                        }),
                      void 0 !== l &&
                        (0, r.jsx)(ti.Z, {
                          value: l,
                          readOnly: !0,
                          size: 'small',
                          sx: { mt: 0.5 },
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function tm(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = { quality: 80, format: 'webp', ...e };
        if (t.startsWith('http') || t.startsWith('https')) return t;
        let r = t,
          n = [];
        return (
          a.width && n.push('w='.concat(a.width)),
          a.height && n.push('h='.concat(a.height)),
          a.quality && n.push('q='.concat(a.quality)),
          a.format && n.push('fm='.concat(a.format)),
          n.length > 0 && (r += '?'.concat(n.join('&'))),
          r
        );
      }
      var tx = a('(app-pages-browser)/./node_modules/@mui/icons-material/ArrowBackIosNew.js'),
        tg = a('(app-pages-browser)/./node_modules/@mui/icons-material/ArrowForwardIos.js');
      let tf = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'relative',
            padding: e.spacing(8, 0),
            background: 'linear-gradient(135deg, '
              .concat(e.palette.primary.dark, '10, ')
              .concat(e.palette.secondary.dark, '10)'),
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("/images/tarot-pattern.png")',
              backgroundSize: '200px',
              backgroundRepeat: 'repeat',
              opacity: 0.02,
              zIndex: 0,
              pointerEvents: 'none',
            },
          };
        }),
        tu = (0, d.ZP)(V.Z)(t => {
          let { theme: e } = t;
          return {
            background: e.palette.background.paper,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1), 0 0 10px '.concat(
              e.palette.primary.main,
              '20'
            ),
            transition: 'all 0.3s ease',
            '&:hover': {
              background: e.palette.background.default,
              transform: 'scale(1.1)',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15), 0 0 15px '.concat(
                e.palette.primary.main,
                '30'
              ),
            },
          };
        }),
        th = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            maxWidth: 800,
            margin: '0 auto',
          };
        }),
        ty = (0, d.ZP)(i.Z)(t => {
          let { theme: e, offset: a } = t;
          return {
            display: 'flex',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'translateX('.concat(a, '%)'),
          };
        }),
        tb = (0, d.ZP)(i.Z)(t => {
          let { theme: e, active: a } = t;
          return {
            flex: '0 0 100%',
            opacity: a ? 1 : 0.3,
            transform: a ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: e.spacing(2),
          };
        }),
        tj = (0, d.ZP)(i.Z)(t => {
          let { theme: e, position: a } = t;
          return {
            position: 'absolute',
            ['top' === a ? 'top' : 'bottom']: -10,
            ['top' === a ? 'left' : 'right']: -10,
            color: e.palette.primary.main,
            opacity: 0.1,
            fontSize: 80,
            transform: 'top' === a ? 'rotate(180deg)' : 'none',
            zIndex: 0,
          };
        });
      function tw() {
        let t = (0, o.useMemo)(
            () => [
              {
                id: 1,
                name: '김지민',
                mbtiType: 'ENFP',
                avatarSrc: tm('/images/avatars/avatar1.jpg', {
                  width: 100,
                  height: 100,
                  quality: 80,
                }),
                text: '정말 재미있는 테스트였어요! 제 MBTI 유형과 연애 스타일이 정확하게 맞아서 놀랐습니다. 이상형으로 나온 INTJ 유형의 친구를 소개받았는데, 정말 잘 맞네요!',
                rating: 5,
                color: '#6B3FA0',
              },
              {
                id: 2,
                name: '이현우',
                mbtiType: 'ISTJ',
                avatarSrc: tm('/images/avatars/avatar2.jpg', {
                  width: 100,
                  height: 100,
                  quality: 80,
                }),
                text: '처음에는 그냥 재미로 시작했는데, 결과가 너무 정확해서 깜짝 놀랐어요. 제 연애 패턴과 약점을 정확히 짚어주어서 많은 도움이 되었습니다. 친구들에게도 추천했어요!',
                rating: 4,
                color: '#E91E63',
              },
              {
                id: 3,
                name: '박소연',
                mbtiType: 'INFJ',
                avatarSrc: tm('/images/avatars/avatar3.jpg', {
                  width: 100,
                  height: 100,
                  quality: 80,
                }),
                text: '타로 카드 테마가 정말 신비롭고 예뻐요! 결과도 상세하게 나와서 만족스러웠습니다. 특히 이상형 매칭 부분이 흥미로웠어요. 연인과 함께 테스트해보니 더 재미있었습니다.',
                rating: 5,
                color: '#FF9800',
              },
              {
                id: 4,
                name: '정민준',
                mbtiType: 'ENTP',
                avatarSrc: tm('/images/avatars/avatar4.jpg', {
                  width: 100,
                  height: 100,
                  quality: 80,
                }),
                text: '다른 MBTI 테스트와는 다르게 연애 관점에서 분석해주는 점이 특별했어요. 제 성격과 연애 스타일을 정확하게 파악해주었고, 이상형 추천도 도움이 되었습니다!',
                rating: 5,
                color: '#2196F3',
              },
            ],
            []
          ),
          [e, a] = (0, o.useState)(0),
          [s, c] = (0, o.useState)(!0);
        (0, o.useEffect)(() => {
          if (!s) return;
          let e = setInterval(() => {
            a(e => (e === t.length - 1 ? 0 : e + 1));
          }, 5e3);
          return () => clearInterval(e);
        }, [s, t.length]);
        let d = (0, o.useCallback)(() => {
            c(!1);
            let t = setTimeout(() => {
              c(!0);
            }, 3e4);
            return () => clearTimeout(t);
          }, []),
          p = (0, o.useCallback)(
            M(() => {
              d(), a(e => (0 === e ? t.length - 1 : e - 1));
            }, 300),
            [t.length, d]
          ),
          m = (0, o.useCallback)(
            M(() => {
              d(), a(e => (e === t.length - 1 ? 0 : e + 1));
            }, 300),
            [t.length, d]
          ),
          x = (0, o.useCallback)(
            t => {
              d(), a(t);
            },
            [d]
          );
        return (0, r.jsx)(tf, {
          children: (0, r.jsx)(n.$0, {
            children: (0, r.jsxs)(l.Z, {
              maxWidth: 'lg',
              children: [
                (0, r.jsx)(u, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  onScroll: !0,
                  children: (0, r.jsx)(i.Z, {
                    sx: { textAlign: 'center', mb: 2 },
                    children: (0, r.jsx)(D.Pr, {
                      title: '사용자 후기',
                      subtitle: '달빛 연애 연구소를 경험한 사용자들의 이야기',
                      align: 'center',
                      hasGradient: !0,
                    }),
                  }),
                }),
                (0, r.jsx)(u, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  delay: 200,
                  onScroll: !0,
                  children: (0, r.jsx)(i.Z, {
                    sx: { display: 'flex', justifyContent: 'center', mb: 6 },
                    children: (0, r.jsx)(n.Gg, {
                      variant: 'mystical',
                      thickness: 2,
                      glow: !0,
                      decorated: !0,
                      icon: (0, r.jsx)(ts.Z, {}),
                      sx: { maxWidth: 300 },
                    }),
                  }),
                }),
                (0, r.jsxs)(u, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  onScroll: !0,
                  children: [
                    (0, r.jsxs)(i.Z, {
                      sx: { position: 'relative', my: 4 },
                      children: [
                        (0, r.jsx)(th, {
                          children: (0, r.jsx)(ty, {
                            offset: -(100 * e),
                            children: t.map((t, a) =>
                              (0, r.jsx)(
                                tb,
                                {
                                  active: a === e,
                                  children: (0, r.jsxs)(i.Z, {
                                    sx: { position: 'relative' },
                                    children: [
                                      (0, r.jsx)(tj, {
                                        position: 'top',
                                        children: (0, r.jsx)(ts.Z, { fontSize: 'inherit' }),
                                      }),
                                      (0, r.jsx)(tp, {
                                        text: t.text,
                                        name: t.name,
                                        mbtiType: t.mbtiType,
                                        avatarSrc: t.avatarSrc,
                                        rating: t.rating,
                                        variant: 'mystical',
                                        sx: {
                                          position: 'relative',
                                          zIndex: 2,
                                          boxShadow:
                                            '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 20px '.concat(
                                              t.color,
                                              '30'
                                            ),
                                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                          transform: a === e ? 'translateY(0)' : 'translateY(20px)',
                                          opacity: a === e ? 1 : 0.5,
                                        },
                                      }),
                                      (0, r.jsx)(tj, {
                                        position: 'bottom',
                                        children: (0, r.jsx)(ts.Z, { fontSize: 'inherit' }),
                                      }),
                                    ],
                                  }),
                                },
                                t.id
                              )
                            ),
                          }),
                        }),
                        (0, r.jsxs)(i.Z, {
                          sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            top: '50%',
                            left: { xs: -10, md: -20 },
                            right: { xs: -10, md: -20 },
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                          },
                          children: [
                            (0, r.jsx)(u, {
                              animation: 'fadeIn',
                              duration: 'fast',
                              children: (0, r.jsx)(tu, {
                                onClick: p,
                                size: 'large',
                                'aria-label': '이전 후기',
                                sx: { width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } },
                                children: (0, r.jsx)(C, {
                                  animation: 'pulse',
                                  duration: 'slow',
                                  infinite: !0,
                                  children: (0, r.jsx)(tx.Z, { fontSize: 'small' }),
                                }),
                              }),
                            }),
                            (0, r.jsx)(u, {
                              animation: 'fadeIn',
                              duration: 'fast',
                              children: (0, r.jsx)(tu, {
                                onClick: m,
                                size: 'large',
                                'aria-label': '다음 후기',
                                sx: { width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } },
                                children: (0, r.jsx)(C, {
                                  animation: 'pulse',
                                  duration: 'slow',
                                  infinite: !0,
                                  children: (0, r.jsx)(tg.Z, { fontSize: 'small' }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(i.Z, {
                      sx: { display: 'flex', justifyContent: 'center', mt: 4 },
                      children: t.map((t, a) =>
                        (0, r.jsx)(
                          u,
                          {
                            animation: 'fadeIn',
                            duration: 'normal',
                            delay: 100 * a,
                            children: (0, r.jsx)(i.Z, {
                              sx: {
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                mx: 0.8,
                                bgcolor: a === e ? t.color : 'grey.300',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: a === e ? 'scale(1.2)' : 'scale(1)',
                                boxShadow: a === e ? '0 0 10px '.concat(t.color, '80') : 'none',
                                '&:hover': {
                                  transform: 'scale(1.3)',
                                  bgcolor: t.color,
                                  opacity: 0.8,
                                },
                              },
                              onClick: () => x(a),
                              'aria-label': ''.concat(a + 1, '번 후기로 이동'),
                            }),
                          },
                          t.id
                        )
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)(u, {
                  animation: 'fadeIn',
                  duration: 'normal',
                  delay: 600,
                  onScroll: !0,
                  children: (0, r.jsx)(i.Z, {
                    sx: { display: 'flex', justifyContent: 'center', mt: 8 },
                    children: (0, r.jsx)(n.Gg, {
                      variant: 'mystical',
                      thickness: 1,
                      text: '당신의 MBTI 연애 유형도 알아보세요',
                      sx: { maxWidth: 600 },
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      let tk = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: e.spacing(4),
            position: 'relative',
            perspective: '1000px',
            [e.breakpoints.down('md')]: { flexDirection: 'column', alignItems: 'center' },
          };
        }),
        tv = (0, d.ZP)(z.Z)(t => {
          let { theme: e, index: a, isHovered: r } = t;
          return {
            maxWidth: 200,
            minHeight: 300,
            margin: e.spacing(0, 2),
            transform: 'rotate('.concat((a - 1) * 10, 'deg) translateZ(').concat(r ? 50 : 0, 'px)'),
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            zIndex: r ? 10 : a,
            boxShadow: r
              ? '0 20px 30px rgba(0, 0, 0, 0.3), 0 0 30px '.concat(e.palette.primary.main, '40')
              : '0 10px 20px rgba(0, 0, 0, 0.2)',
            [e.breakpoints.down('md')]: {
              margin: e.spacing(2, 0),
              transform: r ? 'translateY(-10px)' : 'none',
            },
          };
        }),
        tZ = (0, d.ZP)(i.Z)(t => {
          let { theme: e, size: a, top: r, left: n, delay: o, color: i } = t;
          return {
            position: 'absolute',
            width: a,
            height: a,
            top: r,
            left: n,
            borderRadius: '50%',
            background: i || e.palette.secondary.main,
            boxShadow: '0 0 '
              .concat(a, 'px ')
              .concat(a / 2, 'px ')
              .concat(i || e.palette.secondary.main),
            animation: 'twinkle '
              .concat(2 + 3 * Math.random(), 's ease-in-out ')
              .concat(o, 's infinite'),
            opacity: 0.7,
            zIndex: 0,
            '@keyframes twinkle': {
              '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
              '50%': { opacity: 0.3, transform: 'scale(0.8)' },
            },
          };
        }),
        tS = (0, d.ZP)(i.Z)(t => {
          let { theme: e } = t;
          return {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            marginTop: e.spacing(4),
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle at center, '.concat(
                e.palette.primary.main,
                '20 0%, transparent 70%)'
              ),
              opacity: 0.5,
              zIndex: 0,
              borderRadius: '50%',
            },
          };
        });
      function tI() {
        let t = (0, p.useRouter)(),
          [e, a] = (0, o.useState)(null),
          [c, d] = (0, o.useState)([]);
        (0, o.useEffect)(() => {
          let t = t => {
              let e = [],
                a = ['#D4AF37', '#9C27B0', '#6B3FA0', '#FFFFFF'];
              for (let r = 0; r < t; r++)
                e.push({
                  id: r,
                  size: 2 + 4 * Math.random(),
                  top: ''.concat(100 * Math.random(), '%'),
                  left: ''.concat(100 * Math.random(), '%'),
                  delay: 5 * Math.random(),
                  color: a[Math.floor(Math.random() * a.length)],
                });
              return e;
            },
            e = sessionStorage.getItem('ctaStars');
          if (e)
            try {
              d(JSON.parse(e));
            } catch (a) {
              console.error('Failed to parse cached stars:', a);
              let e = t(15);
              d(e), sessionStorage.setItem('ctaStars', JSON.stringify(e));
            }
          else {
            let e = t(15);
            d(e), sessionStorage.setItem('ctaStars', JSON.stringify(e));
          }
        }, []);
        let m = (0, o.useCallback)(
            M(() => {
              let e = document.createElement('div');
              (e.style.position = 'fixed'),
                (e.style.top = '0'),
                (e.style.left = '0'),
                (e.style.width = '100%'),
                (e.style.height = '3px'),
                (e.style.background = 'linear-gradient(to right, #6B3FA0, #E91E63)'),
                (e.style.zIndex = '9999'),
                (e.style.animation = 'loading 1s infinite linear'),
                document.body.appendChild(e);
              let a = document.createElement('style');
              (a.innerHTML =
                '\n        @keyframes loading {\n          0% { width: 0; }\n          50% { width: 50%; }\n          100% { width: 100%; }\n        }\n      '),
                document.head.appendChild(a),
                setTimeout(() => {
                  t.push('/test');
                }, 300);
            }, 500),
            [t]
          ),
          x = (0, o.useCallback)(t => {
            a(t);
          }, []),
          g = (0, o.useCallback)(() => {
            a(null);
          }, []),
          f = (0, o.useMemo)(
            () => [
              {
                id: 1,
                title: 'ENFP',
                description: '열정적인 연애 탐험가',
                variant: 'primary',
                icon: (0, r.jsx)(B.Z, {}),
                color: '#6B3FA0',
              },
              {
                id: 2,
                title: 'INFJ',
                description: '이상적 관계의 수호자',
                variant: 'secondary',
                icon: (0, r.jsx)(R.Z, {}),
                color: '#E91E63',
              },
              {
                id: 3,
                title: 'ENTJ',
                description: '목표 지향적 연애 리더',
                variant: 'primary',
                icon: (0, r.jsx)(U.Z, {}),
                color: '#FF9800',
              },
            ],
            []
          );
        return (0, r.jsx)(D._H, {
          variant: 'mystical',
          hasStars: !1,
          children: (0, r.jsxs)(i.Z, {
            sx: { position: 'relative', overflow: 'hidden' },
            children: [
              (0, r.jsx)(Z, { type: 'stars', starCount: 0 }),
              c.map(t =>
                (0, r.jsx)(
                  tZ,
                  { size: t.size, top: t.top, left: t.left, delay: t.delay, color: t.color },
                  t.id
                )
              ),
              (0, r.jsxs)(l.Z, {
                maxWidth: 'lg',
                children: [
                  (0, r.jsx)(u, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    onScroll: !0,
                    children: (0, r.jsxs)(i.Z, {
                      sx: { textAlign: 'center', mb: 2 },
                      children: [
                        (0, r.jsx)(D.QD, {
                          variant: 'h2',
                          textVariant: 'mystical',
                          sx: { fontWeight: 'bold', textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' },
                          children: '당신의 MBTI 연애 유형은 무엇일까요?',
                        }),
                        (0, r.jsx)(n.Gg, {
                          variant: 'mystical',
                          thickness: 2,
                          glow: !0,
                          decorated: !0,
                          sx: { maxWidth: 300, mx: 'auto', my: 2 },
                        }),
                        (0, r.jsx)(s.Z, {
                          variant: 'subtitle1',
                          sx: {
                            textAlign: 'center',
                            mb: 4,
                            color: 'white',
                            opacity: 0.9,
                            maxWidth: 700,
                            mx: 'auto',
                            textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                          },
                          children:
                            '지금 바로 테스트를 시작하고 당신의 연애 스타일과 이상형을 알아보세요. 5분 안에 완료할 수 있는 간단한 테스트로 당신의 MBTI 연애 유형을 발견하세요!',
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(u, {
                    animation: 'zoomIn',
                    duration: 'normal',
                    delay: 300,
                    onScroll: !0,
                    children: (0, r.jsx)(tk, {
                      children: f.map((t, a) =>
                        (0, r.jsx)(
                          tv,
                          {
                            variant: t.variant,
                            title: t.title,
                            index: a,
                            isHovered: e === t.id,
                            onMouseEnter: () => x(t.id),
                            onMouseLeave: g,
                            sx: { opacity: e === t.id ? 1 : 0.9 },
                            children: (0, r.jsxs)(i.Z, {
                              sx: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                p: 2,
                                position: 'relative',
                              },
                              children: [
                                (0, r.jsx)(C, {
                                  animation: e === t.id ? 'pulse' : 'none',
                                  duration: 'slow',
                                  infinite: e === t.id,
                                  color: 'white',
                                  size: 'large',
                                  sx: { mb: 2 },
                                  children: t.icon,
                                }),
                                (0, r.jsx)(s.Z, {
                                  variant: 'body1',
                                  sx: {
                                    textAlign: 'center',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    mb: 1,
                                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                                  },
                                  children: t.description,
                                }),
                                (0, r.jsx)(i.Z, {
                                  sx: {
                                    position: 'absolute',
                                    bottom: 10,
                                    right: 10,
                                    opacity: 0.2,
                                    transform: 'rotate(-15deg)',
                                  },
                                  children: t.icon,
                                }),
                              ],
                            }),
                          },
                          t.id
                        )
                      ),
                    }),
                  }),
                  (0, r.jsx)(u, {
                    animation: 'slideUp',
                    duration: 'normal',
                    delay: 500,
                    onScroll: !0,
                    children: (0, r.jsx)(tS, {
                      children: (0, r.jsx)(tn, {
                        title: '지금 바로 테스트를 시작하세요!',
                        description: '당신의 MBTI 연애 유형을 알아보고 이상형을 찾아보세요.',
                        buttonText: '테스트 시작하기',
                        onClick: m,
                        variant: 'mystical',
                        buttonVariant: 'glow',
                        buttonSize: 'large',
                        icon: (0, r.jsx)(C, {
                          animation: 'pulse',
                          duration: 'slow',
                          infinite: !0,
                          children: (0, r.jsx)(F.Z, {}),
                        }),
                        sx: {
                          maxWidth: 500,
                          position: 'relative',
                          zIndex: 2,
                          boxShadow: t =>
                            '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px '.concat(
                              t.palette.primary.main,
                              '30'
                            ),
                          '& .MuiButton-root': {
                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            '&:hover': {
                              transform: 'translateY(-5px) scale(1.05)',
                              boxShadow: t =>
                                '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 30px '.concat(
                                  t.palette.primary.main,
                                  '50'
                                ),
                            },
                          },
                        },
                      }),
                    }),
                  }),
                  (0, r.jsx)(u, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    delay: 700,
                    onScroll: !0,
                    children: (0, r.jsx)(i.Z, {
                      sx: { display: 'flex', justifyContent: 'center', mt: 8 },
                      children: (0, r.jsx)(n.Gg, {
                        variant: 'mystical',
                        thickness: 1,
                        text: '신비로운 타로 카드의 힘으로 당신의 MBTI 연애 유형을 분석해보세요',
                        sx: { maxWidth: 600 },
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function tC() {
        return (0, r.jsxs)(n.Xg, {
          variant: 'home',
          children: [(0, r.jsx)(L, {}), (0, r.jsx)(Q, {}), (0, r.jsx)(tw, {}), (0, r.jsx)(tI, {})],
        });
      }
    },
  },
  function (t) {
    t.O(0, [631, 934, 150, 936, 216, 330, 864, 80, 971, 117, 744], function () {
      return t(
        (t.s =
          '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Ccomponents%5C%5CHomePage.jsx%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=false!')
      );
    }),
      (_N_E = t.O());
  },
]);
