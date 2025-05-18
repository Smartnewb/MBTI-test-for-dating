(() => {
  var e = {};
  (e.id = 124),
    (e.ids = [124]),
    (e.modules = {
      '../../client/components/action-async-storage.external': e => {
        'use strict';
        e.exports = require('next/dist/client/components/action-async-storage.external.js');
      },
      '../../client/components/request-async-storage.external': e => {
        'use strict';
        e.exports = require('next/dist/client/components/request-async-storage.external.js');
      },
      '../../client/components/static-generation-async-storage.external': e => {
        'use strict';
        e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
      },
      'next/dist/compiled/next-server/app-page.runtime.prod.js': e => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      buffer: e => {
        'use strict';
        e.exports = require('buffer');
      },
      crypto: e => {
        'use strict';
        e.exports = require('crypto');
      },
      events: e => {
        'use strict';
        e.exports = require('events');
      },
      http: e => {
        'use strict';
        e.exports = require('http');
      },
      https: e => {
        'use strict';
        e.exports = require('https');
      },
      net: e => {
        'use strict';
        e.exports = require('net');
      },
      punycode: e => {
        'use strict';
        e.exports = require('punycode');
      },
      stream: e => {
        'use strict';
        e.exports = require('stream');
      },
      tls: e => {
        'use strict';
        e.exports = require('tls');
      },
      url: e => {
        'use strict';
        e.exports = require('url');
      },
      zlib: e => {
        'use strict';
        e.exports = require('zlib');
      },
      '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ftest%2Fquestion%2Fpage&name=app%2Ftest%2Fquestion%2Fpage&pagePath=private-next-app-dir%2Ftest%2Fquestion%2Fpage.jsx&appDir=C%3A%5CUsers%5C%EC%A0%84%EC%A4%80%EC%98%81%5CDocuments%5Caugment-projects%5CMBTI%20test%20for%20dating%5Csrc%5Capp&appPaths=%2Ftest%2Fquestion%2Fpage&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=false&preferredRegion=&middlewareConfig=e30%3D!':
        (e, t, r) => {
          'use strict';
          r.r(t),
            r.d(t, {
              GlobalError: () => n.a,
              __next_app__: () => m,
              originalPathname: () => p,
              pages: () => u,
              routeModule: () => c,
              tree: () => d,
            }),
            r('(rsc)/./src/app/test/question/page.jsx'),
            r('(rsc)/./src/app/layout.js'),
            r('(rsc)/./node_modules/next/dist/client/components/not-found-error.js');
          var s = r(
              '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?d969'
            ),
            o = r('(rsc)/./node_modules/next/dist/server/future/route-kind.js'),
            a = r('(rsc)/./node_modules/next/dist/client/components/error-boundary.js'),
            n = r.n(a),
            i = r('(rsc)/./node_modules/next/dist/server/app-render/entry-base.js'),
            l = {};
          for (let e in i)
            0 >
              [
                'default',
                'tree',
                'pages',
                'GlobalError',
                'originalPathname',
                '__next_app__',
                'routeModule',
              ].indexOf(e) && (l[e] = () => i[e]);
          r.d(t, l);
          let d = [
              '',
              {
                children: [
                  'test',
                  {
                    children: [
                      'question',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () =>
                                Promise.resolve().then(
                                  r.bind(r, '(rsc)/./src/app/test/question/page.jsx')
                                ),
                              'C:\\Users\\전준영\\Documents\\augment-projects\\MBTI test for dating\\src\\app\\test\\question\\page.jsx',
                            ],
                          },
                        ],
                      },
                      {},
                    ],
                  },
                  {},
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(r.bind(r, '(rsc)/./src/app/layout.js')),
                  'C:\\Users\\전준영\\Documents\\augment-projects\\MBTI test for dating\\src\\app\\layout.js',
                ],
                'not-found': [
                  () =>
                    Promise.resolve().then(
                      r.t.bind(
                        r,
                        '(rsc)/./node_modules/next/dist/client/components/not-found-error.js',
                        23
                      )
                    ),
                  'next/dist/client/components/not-found-error',
                ],
              },
            ],
            u = [
              'C:\\Users\\전준영\\Documents\\augment-projects\\MBTI test for dating\\src\\app\\test\\question\\page.jsx',
            ],
            p = '/test/question/page',
            m = { require: r, loadChunk: () => Promise.resolve() },
            c = new s.AppPageRouteModule({
              definition: {
                kind: o.x.APP_PAGE,
                page: '/test/question/page',
                pathname: '/test/question',
                bundlePath: '',
                filename: '',
                appPaths: [],
              },
              userland: { loaderTree: d },
            });
        },
      '(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Ctest%5C%5Cquestion%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=true!':
        (e, t, r) => {
          Promise.resolve().then(r.bind(r, '(ssr)/./src/app/test/question/page.jsx'));
        },
      '(ssr)/./node_modules/@mui/material/FormControl/FormControl.js': (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => j });
        var s = r(
            '(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
          ),
          o = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
          a = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          n = r('(ssr)/./node_modules/clsx/dist/clsx.mjs'),
          i = r('(ssr)/./node_modules/@mui/utils/esm/composeClasses/composeClasses.js'),
          l = r('(ssr)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'),
          d = r('(ssr)/./node_modules/@mui/material/styles/styled.js'),
          u = r('(ssr)/./node_modules/@mui/material/InputBase/utils.js'),
          p = r('(ssr)/./node_modules/@mui/material/utils/capitalize.js'),
          m = r('(ssr)/./node_modules/@mui/material/utils/isMuiElement.js'),
          c = r('(ssr)/./node_modules/@mui/material/FormControl/FormControlContext.js'),
          g = r(
            '(ssr)/./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          x = r('(ssr)/./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js');
        function f(e) {
          return (0, x.ZP)('MuiFormControl', e);
        }
        (0, g.Z)('MuiFormControl', [
          'root',
          'marginNone',
          'marginNormal',
          'marginDense',
          'fullWidth',
          'disabled',
        ]);
        var h = r(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
        );
        let b = [
            'children',
            'className',
            'color',
            'component',
            'disabled',
            'error',
            'focused',
            'fullWidth',
            'hiddenLabel',
            'margin',
            'required',
            'size',
            'variant',
          ],
          y = e => {
            let { classes: t, margin: r, fullWidth: s } = e,
              o = { root: ['root', 'none' !== r && `margin${(0, p.Z)(r)}`, s && 'fullWidth'] };
            return (0, i.Z)(o, f, t);
          },
          v = (0, d.ZP)('div', {
            name: 'MuiFormControl',
            slot: 'Root',
            overridesResolver: ({ ownerState: e }, t) =>
              (0, o.Z)({}, t.root, t[`margin${(0, p.Z)(e.margin)}`], e.fullWidth && t.fullWidth),
          })(({ ownerState: e }) =>
            (0, o.Z)(
              {
                display: 'inline-flex',
                flexDirection: 'column',
                position: 'relative',
                minWidth: 0,
                padding: 0,
                margin: 0,
                border: 0,
                verticalAlign: 'top',
              },
              'normal' === e.margin && { marginTop: 16, marginBottom: 8 },
              'dense' === e.margin && { marginTop: 8, marginBottom: 4 },
              e.fullWidth && { width: '100%' }
            )
          ),
          j = a.forwardRef(function (e, t) {
            let r;
            let i = (0, l.i)({ props: e, name: 'MuiFormControl' }),
              {
                children: d,
                className: p,
                color: g = 'primary',
                component: x = 'div',
                disabled: f = !1,
                error: j = !1,
                focused: C,
                fullWidth: Z = !1,
                hiddenLabel: P = !1,
                margin: _ = 'none',
                required: k = !1,
                size: F = 'medium',
                variant: w = 'outlined',
              } = i,
              $ = (0, s.Z)(i, b),
              q = (0, o.Z)({}, i, {
                color: g,
                component: x,
                disabled: f,
                error: j,
                fullWidth: Z,
                hiddenLabel: P,
                margin: _,
                required: k,
                size: F,
                variant: w,
              }),
              S = y(q),
              [B, I] = a.useState(() => {
                let e = !1;
                return (
                  d &&
                    a.Children.forEach(d, t => {
                      if (!(0, m.Z)(t, ['Input', 'Select'])) return;
                      let r = (0, m.Z)(t, ['Select']) ? t.props.input : t;
                      r && (0, u.B7)(r.props) && (e = !0);
                    }),
                  e
                );
              }),
              [R, M] = a.useState(() => {
                let e = !1;
                return (
                  d &&
                    a.Children.forEach(d, t => {
                      (0, m.Z)(t, ['Input', 'Select']) &&
                        ((0, u.vd)(t.props, !0) || (0, u.vd)(t.props.inputProps, !0)) &&
                        (e = !0);
                    }),
                  e
                );
              }),
              [z, E] = a.useState(!1);
            f && z && E(!1);
            let D = void 0 === C || f ? z : C,
              A = a.useMemo(
                () => ({
                  adornedStart: B,
                  setAdornedStart: I,
                  color: g,
                  disabled: f,
                  error: j,
                  filled: R,
                  focused: D,
                  fullWidth: Z,
                  hiddenLabel: P,
                  size: F,
                  onBlur: () => {
                    E(!1);
                  },
                  onEmpty: () => {
                    M(!1);
                  },
                  onFilled: () => {
                    M(!0);
                  },
                  onFocus: () => {
                    E(!0);
                  },
                  registerEffect: r,
                  required: k,
                  variant: w,
                }),
                [B, g, f, j, R, D, Z, P, r, k, F, w]
              );
            return (0, h.jsx)(c.Z.Provider, {
              value: A,
              children: (0, h.jsx)(
                v,
                (0, o.Z)({ as: x, ownerState: q, className: (0, n.Z)(S.root, p), ref: t }, $, {
                  children: d,
                })
              ),
            });
          });
      },
      '(ssr)/./node_modules/@mui/material/FormControl/FormControlContext.js': (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => s });
        let s = r(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
        ).createContext(void 0);
      },
      '(ssr)/./node_modules/@mui/material/FormControl/useFormControl.js': (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => a });
        var s = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          o = r('(ssr)/./node_modules/@mui/material/FormControl/FormControlContext.js');
        function a() {
          return s.useContext(o.Z);
        }
      },
      '(ssr)/./node_modules/@mui/material/InputBase/utils.js': (e, t, r) => {
        'use strict';
        function s(e) {
          return null != e && !(Array.isArray(e) && 0 === e.length);
        }
        function o(e, t = !1) {
          return (
            e &&
            ((s(e.value) && '' !== e.value) || (t && s(e.defaultValue) && '' !== e.defaultValue))
          );
        }
        function a(e) {
          return e.startAdornment;
        }
        r.d(t, { B7: () => a, vd: () => o });
      },
      '(ssr)/./node_modules/@mui/material/LinearProgress/LinearProgress.js': (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => M });
        var s = r(
            '(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
          ),
          o = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
          a = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          n = r('(ssr)/./node_modules/clsx/dist/clsx.mjs'),
          i = r('(ssr)/./node_modules/@mui/utils/esm/composeClasses/composeClasses.js'),
          l = r('(ssr)/./node_modules/@emotion/react/dist/emotion-react.esm.js'),
          d = r('(ssr)/./node_modules/@mui/system/colorManipulator.js'),
          u = r('(ssr)/./node_modules/@mui/system/esm/RtlProvider/index.js'),
          p = r('(ssr)/./node_modules/@mui/material/utils/capitalize.js'),
          m = r('(ssr)/./node_modules/@mui/material/styles/styled.js'),
          c = r('(ssr)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'),
          g = r(
            '(ssr)/./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          x = r('(ssr)/./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js');
        function f(e) {
          return (0, x.ZP)('MuiLinearProgress', e);
        }
        (0, g.Z)('MuiLinearProgress', [
          'root',
          'colorPrimary',
          'colorSecondary',
          'determinate',
          'indeterminate',
          'buffer',
          'query',
          'dashed',
          'dashedColorPrimary',
          'dashedColorSecondary',
          'bar',
          'barColorPrimary',
          'barColorSecondary',
          'bar1Indeterminate',
          'bar1Determinate',
          'bar1Buffer',
          'bar2Indeterminate',
          'bar2Buffer',
        ]);
        var h = r(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
        );
        let b = ['className', 'color', 'value', 'valueBuffer', 'variant'],
          y = e => e,
          v,
          j,
          C,
          Z,
          P,
          _,
          k = (0, l.F4)(
            v ||
              (v = y`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)
          ),
          F = (0, l.F4)(
            j ||
              (j = y`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)
          ),
          w = (0, l.F4)(
            C ||
              (C = y`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)
          ),
          $ = e => {
            let { classes: t, variant: r, color: s } = e,
              o = {
                root: ['root', `color${(0, p.Z)(s)}`, r],
                dashed: ['dashed', `dashedColor${(0, p.Z)(s)}`],
                bar1: [
                  'bar',
                  `barColor${(0, p.Z)(s)}`,
                  ('indeterminate' === r || 'query' === r) && 'bar1Indeterminate',
                  'determinate' === r && 'bar1Determinate',
                  'buffer' === r && 'bar1Buffer',
                ],
                bar2: [
                  'bar',
                  'buffer' !== r && `barColor${(0, p.Z)(s)}`,
                  'buffer' === r && `color${(0, p.Z)(s)}`,
                  ('indeterminate' === r || 'query' === r) && 'bar2Indeterminate',
                  'buffer' === r && 'bar2Buffer',
                ],
              };
            return (0, i.Z)(o, f, t);
          },
          q = (e, t) =>
            'inherit' === t
              ? 'currentColor'
              : e.vars
                ? e.vars.palette.LinearProgress[`${t}Bg`]
                : 'light' === e.palette.mode
                  ? (0, d.$n)(e.palette[t].main, 0.62)
                  : (0, d._j)(e.palette[t].main, 0.5),
          S = (0, m.ZP)('span', {
            name: 'MuiLinearProgress',
            slot: 'Root',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [t.root, t[`color${(0, p.Z)(r.color)}`], t[r.variant]];
            },
          })(({ ownerState: e, theme: t }) =>
            (0, o.Z)(
              {
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                height: 4,
                zIndex: 0,
                '@media print': { colorAdjust: 'exact' },
                backgroundColor: q(t, e.color),
              },
              'inherit' === e.color &&
                'buffer' !== e.variant && {
                  backgroundColor: 'none',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'currentColor',
                    opacity: 0.3,
                  },
                },
              'buffer' === e.variant && { backgroundColor: 'transparent' },
              'query' === e.variant && { transform: 'rotate(180deg)' }
            )
          ),
          B = (0, m.ZP)('span', {
            name: 'MuiLinearProgress',
            slot: 'Dashed',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [t.dashed, t[`dashedColor${(0, p.Z)(r.color)}`]];
            },
          })(
            ({ ownerState: e, theme: t }) => {
              let r = q(t, e.color);
              return (0, o.Z)(
                { position: 'absolute', marginTop: 0, height: '100%', width: '100%' },
                'inherit' === e.color && { opacity: 0.3 },
                {
                  backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,
                  backgroundSize: '10px 10px',
                  backgroundPosition: '0 -23px',
                }
              );
            },
            (0, l.iv)(
              Z ||
                (Z = y`
    animation: ${0} 3s infinite linear;
  `),
              w
            )
          ),
          I = (0, m.ZP)('span', {
            name: 'MuiLinearProgress',
            slot: 'Bar1',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [
                t.bar,
                t[`barColor${(0, p.Z)(r.color)}`],
                ('indeterminate' === r.variant || 'query' === r.variant) && t.bar1Indeterminate,
                'determinate' === r.variant && t.bar1Determinate,
                'buffer' === r.variant && t.bar1Buffer,
              ];
            },
          })(
            ({ ownerState: e, theme: t }) =>
              (0, o.Z)(
                {
                  width: '100%',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  top: 0,
                  transition: 'transform 0.2s linear',
                  transformOrigin: 'left',
                  backgroundColor:
                    'inherit' === e.color ? 'currentColor' : (t.vars || t).palette[e.color].main,
                },
                'determinate' === e.variant && { transition: 'transform .4s linear' },
                'buffer' === e.variant && { zIndex: 1, transition: 'transform .4s linear' }
              ),
            ({ ownerState: e }) =>
              ('indeterminate' === e.variant || 'query' === e.variant) &&
              (0, l.iv)(
                P ||
                  (P = y`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
                k
              )
          ),
          R = (0, m.ZP)('span', {
            name: 'MuiLinearProgress',
            slot: 'Bar2',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [
                t.bar,
                t[`barColor${(0, p.Z)(r.color)}`],
                ('indeterminate' === r.variant || 'query' === r.variant) && t.bar2Indeterminate,
                'buffer' === r.variant && t.bar2Buffer,
              ];
            },
          })(
            ({ ownerState: e, theme: t }) =>
              (0, o.Z)(
                {
                  width: '100%',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  top: 0,
                  transition: 'transform 0.2s linear',
                  transformOrigin: 'left',
                },
                'buffer' !== e.variant && {
                  backgroundColor:
                    'inherit' === e.color ? 'currentColor' : (t.vars || t).palette[e.color].main,
                },
                'inherit' === e.color && { opacity: 0.3 },
                'buffer' === e.variant && {
                  backgroundColor: q(t, e.color),
                  transition: 'transform .4s linear',
                }
              ),
            ({ ownerState: e }) =>
              ('indeterminate' === e.variant || 'query' === e.variant) &&
              (0, l.iv)(
                _ ||
                  (_ = y`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
                F
              )
          ),
          M = a.forwardRef(function (e, t) {
            let r = (0, c.i)({ props: e, name: 'MuiLinearProgress' }),
              {
                className: a,
                color: i = 'primary',
                value: l,
                valueBuffer: d,
                variant: p = 'indeterminate',
              } = r,
              m = (0, s.Z)(r, b),
              g = (0, o.Z)({}, r, { color: i, variant: p }),
              x = $(g),
              f = (0, u.V)(),
              y = {},
              v = { bar1: {}, bar2: {} };
            if (('determinate' === p || 'buffer' === p) && void 0 !== l) {
              (y['aria-valuenow'] = Math.round(l)),
                (y['aria-valuemin'] = 0),
                (y['aria-valuemax'] = 100);
              let e = l - 100;
              f && (e = -e), (v.bar1.transform = `translateX(${e}%)`);
            }
            if ('buffer' === p && void 0 !== d) {
              let e = (d || 0) - 100;
              f && (e = -e), (v.bar2.transform = `translateX(${e}%)`);
            }
            return (0, h.jsxs)(
              S,
              (0, o.Z)(
                { className: (0, n.Z)(x.root, a), ownerState: g, role: 'progressbar' },
                y,
                { ref: t },
                m,
                {
                  children: [
                    'buffer' === p ? (0, h.jsx)(B, { className: x.dashed, ownerState: g }) : null,
                    (0, h.jsx)(I, { className: x.bar1, ownerState: g, style: v.bar1 }),
                    'determinate' === p
                      ? null
                      : (0, h.jsx)(R, { className: x.bar2, ownerState: g, style: v.bar2 }),
                  ],
                }
              )
            );
          });
      },
      '(ssr)/./src/app/test/question/page.jsx': (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => eh, dynamic: () => ef });
        var s = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          ),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          a = r('(ssr)/./node_modules/@mui/material/Typography/Typography.js'),
          n = r('(ssr)/./node_modules/next/dist/api/navigation.js'),
          i = r('(ssr)/./src/app/components/animations.jsx'),
          l = r('(ssr)/./src/app/components/layout/index.js'),
          d = r('(ssr)/./node_modules/@mui/material/Box/Box.js'),
          u = r('(ssr)/./node_modules/@mui/material/FormControl/FormControl.js'),
          p = r('(ssr)/./node_modules/@mui/material/styles/styled.js'),
          m = r('(ssr)/./src/app/components/mystical/index.js'),
          c = r('(ssr)/./src/app/components/TarotCard.jsx');
        r('(ssr)/./src/app/components/MysticalButton.jsx');
        var g = r('(ssr)/./node_modules/@mui/material/LinearProgress/LinearProgress.js');
        let x = (0, p.ZP)(d.Z)(({ theme: e }) => ({
            width: '100%',
            marginBottom: e.spacing(2),
            marginTop: e.spacing(2),
          })),
          f = (0, p.ZP)(g.Z)(({ theme: e, variant: t }) => ({
            height: 10,
            borderRadius: 5,
            backgroundColor: e.palette.background.paper,
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
            ...('primary' === t && {
              '& .MuiLinearProgress-bar': {
                background: `linear-gradient(90deg, ${e.palette.primary.dark} 0%, ${e.palette.primary.main} 100%)`,
                borderRadius: 5,
              },
            }),
            ...('secondary' === t && {
              '& .MuiLinearProgress-bar': {
                background: `linear-gradient(90deg, ${e.palette.secondary.dark} 0%, ${e.palette.secondary.main} 100%)`,
                borderRadius: 5,
              },
            }),
            ...('mystical' === t && {
              '& .MuiLinearProgress-bar': {
                background: `linear-gradient(90deg, ${e.palette.primary.main} 0%, ${e.palette.secondary.main} 100%)`,
                borderRadius: 5,
                boxShadow: `0 0 10px ${e.palette.primary.main}80`,
                animation: 'glow 1.5s ease-in-out infinite alternate',
              },
              '@keyframes glow': {
                '0%': { boxShadow: `0 0 5px ${e.palette.primary.main}40` },
                '100%': { boxShadow: `0 0 15px ${e.palette.primary.main}80` },
              },
            }),
          })),
          h = (0, p.ZP)(d.Z)(({ theme: e }) => ({
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: e.spacing(0.5),
          })),
          b = (0, p.ZP)(d.Z)(({ theme: e, active: t, completed: r }) => ({
            width: 12,
            height: 12,
            borderRadius: '50%',
            margin: '0 2px',
            transition: `all ${e.transitions.duration.standard}ms ${e.transitions.easing.easeInOut}`,
            ...(r && {
              backgroundColor: e.palette.primary.main,
              boxShadow: `0 0 5px ${e.palette.primary.main}`,
            }),
            ...(t &&
              !r && {
                backgroundColor: e.palette.secondary.main,
                boxShadow: `0 0 5px ${e.palette.secondary.main}`,
              }),
            ...(!t &&
              !r && {
                backgroundColor: e.palette.background.paper,
                border: `1px solid ${e.palette.divider}`,
              }),
          })),
          y = (0, o.forwardRef)(function (e, t) {
            let {
              value: r,
              variant: o = 'primary',
              label: n,
              showPercentage: i = !0,
              totalSteps: l,
              currentStep: u,
              sx: p = {},
              ...m
            } = e;
            return (0, s.jsxs)(x, {
              ref: t,
              sx: p,
              children: [
                (n || i) &&
                  (0, s.jsxs)(h, {
                    children: [
                      n && s.jsx(a.Z, { variant: 'caption', color: 'text.secondary', children: n }),
                      i &&
                        (0, s.jsxs)(a.Z, {
                          variant: 'caption',
                          color: 'text.secondary',
                          children: [Math.round(r), '%'],
                        }),
                    ],
                  }),
                s.jsx(f, { value: r, variant: o || 'determinate', ...m }),
                l && u
                  ? s.jsx(d.Z, {
                      sx: { display: 'flex', justifyContent: 'center', mt: 1 },
                      children: Array.from({ length: l }).map((e, t) =>
                        s.jsx(b, { active: t + 1 === u, completed: t + 1 < u }, t)
                      ),
                    })
                  : null,
              ],
            });
          });
        var v = r('(ssr)/./node_modules/@mui/material/Paper/Paper.js'),
          j = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'),
          C = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
          Z = r('(ssr)/./node_modules/clsx/dist/clsx.mjs'),
          P = r('(ssr)/./node_modules/@mui/utils/esm/composeClasses/composeClasses.js'),
          _ = r('(ssr)/./node_modules/@mui/system/colorManipulator.js'),
          k = r('(ssr)/./node_modules/@mui/material/utils/capitalize.js'),
          F = r('(ssr)/./node_modules/@mui/material/styles/rootShouldForwardProp.js'),
          w = r('(ssr)/./node_modules/@mui/material/utils/useControlled.js'),
          $ = r('(ssr)/./node_modules/@mui/material/FormControl/useFormControl.js'),
          q = r('(ssr)/./node_modules/@mui/material/ButtonBase/ButtonBase.js'),
          S = r(
            '(ssr)/./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          B = r('(ssr)/./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js');
        function I(e) {
          return (0, B.ZP)('PrivateSwitchBase', e);
        }
        (0, S.Z)('PrivateSwitchBase', [
          'root',
          'checked',
          'disabled',
          'input',
          'edgeStart',
          'edgeEnd',
        ]);
        let R = [
            'autoFocus',
            'checked',
            'checkedIcon',
            'className',
            'defaultChecked',
            'disabled',
            'disableFocusRipple',
            'edge',
            'icon',
            'id',
            'inputProps',
            'inputRef',
            'name',
            'onBlur',
            'onChange',
            'onFocus',
            'readOnly',
            'required',
            'tabIndex',
            'type',
            'value',
          ],
          M = e => {
            let { classes: t, checked: r, disabled: s, edge: o } = e,
              a = {
                root: ['root', r && 'checked', s && 'disabled', o && `edge${(0, k.Z)(o)}`],
                input: ['input'],
              };
            return (0, P.Z)(a, I, t);
          },
          z = (0, p.ZP)(q.Z)(({ ownerState: e }) =>
            (0, C.Z)(
              { padding: 9, borderRadius: '50%' },
              'start' === e.edge && { marginLeft: 'small' === e.size ? -3 : -12 },
              'end' === e.edge && { marginRight: 'small' === e.size ? -3 : -12 }
            )
          ),
          E = (0, p.ZP)('input', { shouldForwardProp: F.Z })({
            cursor: 'inherit',
            position: 'absolute',
            opacity: 0,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            zIndex: 1,
          }),
          D = o.forwardRef(function (e, t) {
            let {
                autoFocus: r,
                checked: o,
                checkedIcon: a,
                className: n,
                defaultChecked: i,
                disabled: l,
                disableFocusRipple: d = !1,
                edge: u = !1,
                icon: p,
                id: m,
                inputProps: c,
                inputRef: g,
                name: x,
                onBlur: f,
                onChange: h,
                onFocus: b,
                readOnly: y,
                required: v = !1,
                tabIndex: P,
                type: _,
                value: k,
              } = e,
              F = (0, j.Z)(e, R),
              [q, S] = (0, w.Z)({
                controlled: o,
                default: !!i,
                name: 'SwitchBase',
                state: 'checked',
              }),
              B = (0, $.Z)(),
              I = l;
            B && void 0 === I && (I = B.disabled);
            let D = 'checkbox' === _ || 'radio' === _,
              A = (0, C.Z)({}, e, { checked: q, disabled: I, disableFocusRipple: d, edge: u }),
              U = M(A);
            return (0, s.jsxs)(
              z,
              (0, C.Z)(
                {
                  component: 'span',
                  className: (0, Z.Z)(U.root, n),
                  centerRipple: !0,
                  focusRipple: !d,
                  disabled: I,
                  tabIndex: null,
                  role: void 0,
                  onFocus: e => {
                    b && b(e), B && B.onFocus && B.onFocus(e);
                  },
                  onBlur: e => {
                    f && f(e), B && B.onBlur && B.onBlur(e);
                  },
                  ownerState: A,
                  ref: t,
                },
                F,
                {
                  children: [
                    (0, s.jsx)(
                      E,
                      (0, C.Z)(
                        {
                          autoFocus: r,
                          checked: o,
                          defaultChecked: i,
                          className: U.input,
                          disabled: I,
                          id: D ? m : void 0,
                          name: x,
                          onChange: e => {
                            if (e.nativeEvent.defaultPrevented) return;
                            let t = e.target.checked;
                            S(t), h && h(e, t);
                          },
                          readOnly: y,
                          ref: g,
                          required: v,
                          ownerState: A,
                          tabIndex: P,
                          type: _,
                        },
                        'checkbox' === _ && void 0 === k ? {} : { value: k },
                        c
                      )
                    ),
                    q ? a : p,
                  ],
                }
              )
            );
          });
        var A = r(
            '(ssr)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
          ),
          U = r('(ssr)/./node_modules/@mui/material/utils/createSvgIcon.js');
        let L = (0, U.Z)(
            (0, s.jsx)('path', {
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            }),
            'RadioButtonUnchecked'
          ),
          W = (0, U.Z)(
            (0, s.jsx)('path', {
              d: 'M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z',
            }),
            'RadioButtonChecked'
          ),
          N = (0, p.ZP)('span', { shouldForwardProp: F.Z })({
            position: 'relative',
            display: 'flex',
          }),
          T = (0, p.ZP)(L)({ transform: 'scale(1)' }),
          O = (0, p.ZP)(W)(({ theme: e, ownerState: t }) =>
            (0, C.Z)(
              {
                left: 0,
                position: 'absolute',
                transform: 'scale(0)',
                transition: e.transitions.create('transform', {
                  easing: e.transitions.easing.easeIn,
                  duration: e.transitions.duration.shortest,
                }),
              },
              t.checked && {
                transform: 'scale(1)',
                transition: e.transitions.create('transform', {
                  easing: e.transitions.easing.easeOut,
                  duration: e.transitions.duration.shortest,
                }),
              }
            )
          ),
          X = function (e) {
            let { checked: t = !1, classes: r = {}, fontSize: o } = e,
              a = (0, C.Z)({}, e, { checked: t });
            return (0, s.jsxs)(N, {
              className: r.root,
              ownerState: a,
              children: [
                (0, s.jsx)(T, { fontSize: o, className: r.background, ownerState: a }),
                (0, s.jsx)(O, { fontSize: o, className: r.dot, ownerState: a }),
              ],
            });
          };
        var H = r('(ssr)/./node_modules/@mui/material/utils/createChainedFunction.js');
        let G = o.createContext(void 0);
        function V(e) {
          return (0, B.ZP)('MuiRadio', e);
        }
        let Y = (0, S.Z)('MuiRadio', [
            'root',
            'checked',
            'disabled',
            'colorPrimary',
            'colorSecondary',
            'sizeSmall',
          ]),
          K = ['checked', 'checkedIcon', 'color', 'icon', 'name', 'onChange', 'size', 'className'],
          Q = e => {
            let { classes: t, color: r, size: s } = e,
              o = { root: ['root', `color${(0, k.Z)(r)}`, 'medium' !== s && `size${(0, k.Z)(s)}`] };
            return (0, C.Z)({}, t, (0, P.Z)(o, V, t));
          },
          J = (0, p.ZP)(D, {
            shouldForwardProp: e => (0, F.Z)(e) || 'classes' === e,
            name: 'MuiRadio',
            slot: 'Root',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [
                t.root,
                'medium' !== r.size && t[`size${(0, k.Z)(r.size)}`],
                t[`color${(0, k.Z)(r.color)}`],
              ];
            },
          })(({ theme: e, ownerState: t }) =>
            (0, C.Z)(
              { color: (e.vars || e).palette.text.secondary },
              !t.disableRipple && {
                '&:hover': {
                  backgroundColor: e.vars
                    ? `rgba(${'default' === t.color ? e.vars.palette.action.activeChannel : e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : (0, _.Fq)(
                        'default' === t.color ? e.palette.action.active : e.palette[t.color].main,
                        e.palette.action.hoverOpacity
                      ),
                  '@media (hover: none)': { backgroundColor: 'transparent' },
                },
              },
              'default' !== t.color && {
                [`&.${Y.checked}`]: { color: (e.vars || e).palette[t.color].main },
              },
              { [`&.${Y.disabled}`]: { color: (e.vars || e).palette.action.disabled } }
            )
          ),
          ee = (0, s.jsx)(X, { checked: !0 }),
          et = (0, s.jsx)(X, {}),
          er = o.forwardRef(function (e, t) {
            var r, a, n, i;
            let l = (0, A.i)({ props: e, name: 'MuiRadio' }),
              {
                checked: d,
                checkedIcon: u = ee,
                color: p = 'primary',
                icon: m = et,
                name: c,
                onChange: g,
                size: x = 'medium',
                className: f,
              } = l,
              h = (0, j.Z)(l, K),
              b = (0, C.Z)({}, l, { color: p, size: x }),
              y = Q(b),
              v = o.useContext(G),
              P = d,
              _ = (0, H.Z)(g, v && v.onChange),
              k = c;
            return (
              v &&
                (void 0 === P &&
                  ((n = v.value),
                  (P =
                    'object' == typeof (i = l.value) && null !== i
                      ? n === i
                      : String(n) === String(i))),
                void 0 === k && (k = v.name)),
              (0, s.jsx)(
                J,
                (0, C.Z)(
                  {
                    type: 'radio',
                    icon: o.cloneElement(m, { fontSize: null != (r = et.props.fontSize) ? r : x }),
                    checkedIcon: o.cloneElement(u, {
                      fontSize: null != (a = ee.props.fontSize) ? a : x,
                    }),
                    ownerState: b,
                    classes: y,
                    name: k,
                    checked: P,
                    onChange: _,
                    ref: t,
                    className: (0, Z.Z)(y.root, f),
                  },
                  h
                )
              )
            );
          }),
          es = (0, p.ZP)(v.Z)(({ theme: e, selected: t, disabled: r }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: e.spacing(2, 3),
            marginBottom: e.spacing(2),
            borderRadius: 2 * e.shape.borderRadius,
            cursor: r ? 'default' : 'pointer',
            overflow: 'hidden',
            transition: `all ${e.transitions.duration.standard}ms ${e.transitions.easing.easeInOut}`,
            backgroundColor: e.palette.background.paper,
            border: `1px solid ${e.palette.divider}`,
            ...(t && {
              backgroundColor: `${e.palette.primary.main}10`,
              borderColor: e.palette.primary.main,
              boxShadow: `0 0 10px ${e.palette.primary.main}40`,
            }),
            ...(!r && {
              '&:hover': {
                backgroundColor: t
                  ? `${e.palette.primary.main}15`
                  : `${e.palette.background.default}80`,
                borderColor: t ? e.palette.primary.main : e.palette.primary.light,
                transform: 'translateY(-2px)',
                boxShadow: `0 4px 8px ${e.palette.primary.main}20`,
              },
              '&:active': {
                transform: 'translateY(0)',
                boxShadow: `0 2px 4px ${e.palette.primary.main}20`,
              },
            }),
            ...(r && {
              opacity: 0.6,
              backgroundColor: e.palette.action.disabledBackground,
              borderColor: e.palette.action.disabled,
            }),
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: t
                ? `linear-gradient(135deg, ${e.palette.primary.main}05, ${e.palette.primary.main}15)`
                : 'transparent',
              opacity: 0.5,
              zIndex: 0,
              transition: `all ${e.transitions.duration.standard}ms ${e.transitions.easing.easeInOut}`,
            },
          })),
          eo = (0, p.ZP)(er)(({ theme: e, selected: t }) => ({
            color: t ? e.palette.primary.main : e.palette.text.secondary,
            padding: e.spacing(1),
            '&.Mui-checked': { color: e.palette.primary.main },
          })),
          ea = (0, p.ZP)(a.Z)(({ theme: e, selected: t }) => ({
            flexGrow: 1,
            fontFamily: e.typography.fontFamily.secondary,
            fontWeight: t ? e.typography.fontWeight.medium : e.typography.fontWeight.regular,
            color: t ? e.palette.text.primary : e.palette.text.secondary,
            transition: `all ${e.transitions.duration.standard}ms ${e.transitions.easing.easeInOut}`,
            zIndex: 1,
          })),
          en = (0, p.ZP)(d.Z)(({ theme: e, selected: t }) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            borderRadius: '50%',
            backgroundColor: t ? e.palette.primary.main : 'transparent',
            border: `2px solid ${t ? e.palette.primary.main : e.palette.divider}`,
            color: t ? e.palette.primary.contrastText : e.palette.text.secondary,
            fontWeight: e.typography.fontWeight.bold,
            marginRight: e.spacing(2),
            transition: `all ${e.transitions.duration.standard}ms ${e.transitions.easing.easeInOut}`,
            zIndex: 1,
          })),
          ei = (0, o.forwardRef)(function (e, t) {
            let {
              value: r,
              label: o,
              selected: a = !1,
              disabled: n = !1,
              onChange: l,
              index: d = 0,
              sx: u = {},
              ...p
            } = e;
            return s.jsx(i.F, {
              animation: 'slideRight',
              duration: 'normal',
              delay: 150 * d,
              children: (0, s.jsxs)(es, {
                ref: t,
                selected: a,
                disabled: n,
                onClick: () => {
                  !n && l && l(r);
                },
                onKeyDown: e => {
                  n || ('Enter' !== e.key && ' ' !== e.key) || (e.preventDefault(), l(r));
                },
                tabIndex: n ? -1 : 0,
                role: 'radio',
                'aria-checked': a,
                sx: u,
                elevation: a ? 2 : 0,
                ...p,
                children: [
                  s.jsx(en, { selected: a, children: r }),
                  s.jsx(ea, { variant: 'body1', selected: a, children: o }),
                  s.jsx(eo, {
                    checked: a,
                    disabled: n,
                    value: r,
                    name: `option-${r}`,
                    inputProps: { 'aria-label': o },
                    onChange: () => l(r),
                    selected: a,
                    tabIndex: -1,
                  }),
                ],
              }),
            });
          }),
          el = (0, p.ZP)(d.Z)(({ theme: e }) => ({
            position: 'relative',
            padding: e.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          })),
          ed = (0, p.ZP)(a.Z)(({ theme: e }) => ({
            fontFamily: e.typography.fontFamily.secondary,
            fontWeight: e.typography.fontWeight.medium,
            fontSize: '1rem',
            color: e.palette.secondary.main,
            marginBottom: e.spacing(2),
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: '30%',
              height: 2,
              background: `linear-gradient(90deg, ${e.palette.secondary.main}, transparent)`,
            },
          })),
          eu = (0, p.ZP)(a.Z)(({ theme: e }) => ({
            fontFamily: e.typography.fontFamily.secondary,
            fontWeight: e.typography.fontWeight.semibold,
            fontSize: '1.5rem',
            marginBottom: e.spacing(4),
            textAlign: 'center',
            color: e.palette.text.primary,
            lineHeight: 1.4,
            [e.breakpoints.down('sm')]: { fontSize: '1.25rem' },
          })),
          ep = (0, p.ZP)(d.Z)(({ theme: e }) => ({
            marginBottom: e.spacing(4),
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: e.spacing(2),
          })),
          em = (0, p.ZP)(d.Z)(({ theme: e }) => ({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
            zIndex: 1,
          })),
          ec = (0, p.ZP)(d.Z)(({ theme: e }) => ({
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
          }));
        function eg({
          questionNumber: e,
          totalQuestions: t,
          question: r,
          selectedOption: n,
          onAnswer: l,
          onPrevious: d,
          isFirst: p = !1,
          isLast: g = !1,
          transitionDirection: x = 'next',
          sx: f = {},
        }) {
          let [h, b] = (0, o.useState)(n),
            [v, j] = (0, o.useState)(!1),
            C = (0, o.useRef)(null),
            Z = e => {
              b(e), j(!0), setTimeout(() => j(!1), 300);
            },
            P = ((e - 1) / t) * 100;
          return r
            ? s.jsx(c.Z, {
                ref: C,
                variant: 'primary',
                sx: {
                  maxWidth: 600,
                  mx: 'auto',
                  minHeight: 500,
                  transition: 'transform 0.3s ease-out',
                  transform: v ? 'scale(1.02)' : 'scale(1)',
                  ...f,
                },
                children: (0, s.jsxs)(el, {
                  children: [
                    s.jsx(ec, {}),
                    (0, s.jsxs)(em, {
                      children: [
                        s.jsx(i.F, {
                          animation: 'fadeIn',
                          duration: 'fast',
                          children: s.jsx(y, {
                            value: P,
                            variant: 'mystical',
                            label: `질문 ${e}/${t}`,
                            totalSteps: t,
                            currentStep: e,
                          }),
                        }),
                        (0, s.jsxs)(i.F, {
                          animation: 'fadeIn',
                          duration: 'normal',
                          delay: 100,
                          children: [
                            (0, s.jsxs)(ed, { variant: 'subtitle2', children: ['질문 ', e] }),
                            s.jsx(eu, { variant: 'h4', children: r.question }),
                          ],
                        }),
                        s.jsx(ep, {
                          children: (0, s.jsxs)(u.Z, {
                            component: 'fieldset',
                            fullWidth: !0,
                            children: [
                              s.jsx(ei, {
                                value: 'A',
                                label: r.optionA,
                                selected: 'A' === h,
                                onChange: Z,
                                index: 0,
                              }),
                              s.jsx(ei, {
                                value: 'B',
                                label: r.optionB,
                                selected: 'B' === h,
                                onChange: Z,
                                index: 1,
                              }),
                            ],
                          }),
                        }),
                        s.jsx(i.F, {
                          animation: 'fadeIn',
                          duration: 'normal',
                          delay: 300,
                          children: s.jsx(m.e7, {
                            variant: 'mystical',
                            type: 'button',
                            position: 'between',
                            showPrev: !p && !!d,
                            showNext: !0,
                            disableNext: !h,
                            nextLabel: g ? '결과 보기' : '다음 질문',
                            onPrev: d,
                            onNext: () => {
                              h && l(h);
                            },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : s.jsx(c.Z, {
                variant: 'primary',
                sx: { maxWidth: 600, mx: 'auto', minHeight: 500, ...f },
                children: s.jsx(el, {
                  children: s.jsx(i.F, {
                    animation: 'pulse',
                    duration: 'slow',
                    children: s.jsx(a.Z, {
                      variant: 'h5',
                      sx: { textAlign: 'center', my: 10 },
                      children: '질문을 불러오는 중...',
                    }),
                  }),
                }),
              });
        }
        (0, p.ZP)(d.Z)(({ theme: e }) => ({
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: e.spacing(2),
        }));
        var ex = r('(ssr)/./src/app/hooks/useMbtiTest.js');
        let ef = 'force-dynamic';
        function eh() {
          (0, n.useRouter)();
          let {
            loading: e,
            error: t,
            questions: r,
            currentQuestionIndex: o,
            currentQuestion: d,
            currentResponse: u,
            isTestCompleted: p,
            saveAnswer: m,
            goToPreviousQuestion: c,
            handleCompleteTest: g,
          } = (0, ex.Z)();
          return e
            ? s.jsx(l.Xg, {
                variant: 'test',
                children: s.jsx(l.$0, {
                  centered: !0,
                  fullHeight: !0,
                  children: s.jsx(a.Z, { variant: 'h4', children: '질문을 불러오는 중...' }),
                }),
              })
            : t
              ? s.jsx(l.Xg, {
                  variant: 'test',
                  children: (0, s.jsxs)(l.$0, {
                    centered: !0,
                    fullHeight: !0,
                    children: [
                      s.jsx(a.Z, {
                        variant: 'h4',
                        color: 'error',
                        children: '오류가 발생했습니다',
                      }),
                      s.jsx(a.Z, { variant: 'body1', color: 'error', sx: { mt: 2 }, children: t }),
                    ],
                  }),
                })
              : r && 0 !== r.length
                ? o < 0 || o >= r.length
                  ? s.jsx(l.Xg, {
                      variant: 'test',
                      children: (0, s.jsxs)(l.$0, {
                        centered: !0,
                        fullHeight: !0,
                        children: [
                          s.jsx(a.Z, { variant: 'h4', children: '잘못된 질문 인덱스입니다' }),
                          s.jsx(a.Z, {
                            variant: 'body1',
                            sx: { mt: 2 },
                            children: '테스트를 다시 시작해주세요.',
                          }),
                        ],
                      }),
                    })
                  : s.jsx(l.Xg, {
                      variant: 'test',
                      children: s.jsx(l.$0, {
                        children: s.jsx(i.F, {
                          animation: 'fadeIn',
                          duration: 'fast',
                          children: s.jsx(eg, {
                            questionNumber: o + 1,
                            totalQuestions: r.length,
                            question: d,
                            selectedOption: u,
                            onAnswer: e => {
                              o === r.length - 1 ? (m(d.id, e), g()) : m(d.id, e);
                            },
                            onPrevious: c,
                            isFirst: 0 === o,
                            isLast: o === r.length - 1,
                          }),
                        }),
                      }),
                    })
                : s.jsx(l.Xg, {
                    variant: 'test',
                    children: (0, s.jsxs)(l.$0, {
                      centered: !0,
                      fullHeight: !0,
                      children: [
                        s.jsx(a.Z, { variant: 'h4', children: '질문을 불러올 수 없습니다' }),
                        s.jsx(a.Z, {
                          variant: 'body1',
                          sx: { mt: 2 },
                          children: '테스트를 다시 시작해주세요.',
                        }),
                      ],
                    }),
                  });
        }
      },
      '(rsc)/./src/app/test/question/page.jsx': (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => a, dynamic: () => o });
        var s = r(
          '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js'
        );
        let o = (0, s.createProxy)(
            String.raw`C:\Users\전준영\Documents\augment-projects\MBTI test for dating\src\app\test\question\page.jsx#dynamic`
          ),
          a = (0, s.createProxy)(
            String.raw`C:\Users\전준영\Documents\augment-projects\MBTI test for dating\src\app\test\question\page.jsx#default`
          );
      },
    });
  var t = require('../../../webpack-runtime.js');
  t.C(e);
  var r = e => t((t.s = e)),
    s = t.X(0, [276, 576, 5, 541, 421, 521, 246, 687, 171, 191, 863], () =>
      r(
        '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ftest%2Fquestion%2Fpage&name=app%2Ftest%2Fquestion%2Fpage&pagePath=private-next-app-dir%2Ftest%2Fquestion%2Fpage.jsx&appDir=C%3A%5CUsers%5C%EC%A0%84%EC%A4%80%EC%98%81%5CDocuments%5Caugment-projects%5CMBTI%20test%20for%20dating%5Csrc%5Capp&appPaths=%2Ftest%2Fquestion%2Fpage&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=false&preferredRegion=&middlewareConfig=e30%3D!'
      )
    );
  module.exports = s;
})();
