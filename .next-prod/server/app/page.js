(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
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
      '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fpage&name=app%2Fpage&pagePath=private-next-app-dir%2Fpage.js&appDir=C%3A%5CUsers%5C%EC%A0%84%EC%A4%80%EC%98%81%5CDocuments%5Caugment-projects%5CMBTI%20test%20for%20dating%5Csrc%5Capp&appPaths=%2Fpage&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=false&preferredRegion=&middlewareConfig=e30%3D!':
        (e, t, r) => {
          'use strict';
          r.r(t),
            r.d(t, {
              GlobalError: () => i.a,
              __next_app__: () => p,
              originalPathname: () => m,
              pages: () => c,
              routeModule: () => u,
              tree: () => d,
            }),
            r('(rsc)/./src/app/page.js'),
            r('(rsc)/./src/app/layout.js'),
            r('(rsc)/./node_modules/next/dist/client/components/not-found-error.js');
          var a = r(
              '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?d969'
            ),
            s = r('(rsc)/./node_modules/next/dist/server/future/route-kind.js'),
            o = r('(rsc)/./node_modules/next/dist/client/components/error-boundary.js'),
            i = r.n(o),
            n = r('(rsc)/./node_modules/next/dist/server/app-render/entry-base.js'),
            l = {};
          for (let e in n)
            0 >
              [
                'default',
                'tree',
                'pages',
                'GlobalError',
                'originalPathname',
                '__next_app__',
                'routeModule',
              ].indexOf(e) && (l[e] = () => n[e]);
          r.d(t, l);
          let d = [
              '',
              {
                children: [
                  '__PAGE__',
                  {},
                  {
                    page: [
                      () => Promise.resolve().then(r.bind(r, '(rsc)/./src/app/page.js')),
                      'C:\\Users\\전준영\\Documents\\augment-projects\\MBTI test for dating\\src\\app\\page.js',
                    ],
                  },
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
            c = [
              'C:\\Users\\전준영\\Documents\\augment-projects\\MBTI test for dating\\src\\app\\page.js',
            ],
            m = '/page',
            p = { require: r, loadChunk: () => Promise.resolve() },
            u = new a.AppPageRouteModule({
              definition: {
                kind: s.x.APP_PAGE,
                page: '/page',
                pathname: '/',
                bundlePath: '',
                filename: '',
                appPaths: [],
              },
              userland: { loaderTree: d },
            });
        },
      '(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Ccomponents%5C%5CHomePage.jsx%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true!':
        (e, t, r) => {
          Promise.resolve().then(r.bind(r, '(ssr)/./src/app/components/HomePage.jsx'));
        },
      '(ssr)/./node_modules/@mui/icons-material/ArrowBackIosNew.js': (e, t, r) => {
        'use strict';
        var a = r('(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
        t.Z = void 0;
        var s = a(r('(ssr)/./node_modules/@mui/icons-material/utils/createSvgIcon.js')),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          );
        t.Z = (0, s.default)(
          (0, o.jsx)('path', { d: 'M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z' }),
          'ArrowBackIosNew'
        );
      },
      '(ssr)/./node_modules/@mui/icons-material/ArrowForwardIos.js': (e, t, r) => {
        'use strict';
        var a = r('(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
        t.Z = void 0;
        var s = a(r('(ssr)/./node_modules/@mui/icons-material/utils/createSvgIcon.js')),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          );
        t.Z = (0, s.default)(
          (0, o.jsx)('path', { d: 'M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z' }),
          'ArrowForwardIos'
        );
      },
      '(ssr)/./node_modules/@mui/icons-material/Favorite.js': (e, t, r) => {
        'use strict';
        var a = r('(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
        t.Z = void 0;
        var s = a(r('(ssr)/./node_modules/@mui/icons-material/utils/createSvgIcon.js')),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          );
        t.Z = (0, s.default)(
          (0, o.jsx)('path', {
            d: 'm12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z',
          }),
          'Favorite'
        );
      },
      '(ssr)/./node_modules/@mui/icons-material/FormatQuote.js': (e, t, r) => {
        'use strict';
        var a = r('(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
        t.Z = void 0;
        var s = a(r('(ssr)/./node_modules/@mui/icons-material/utils/createSvgIcon.js')),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          );
        t.Z = (0, s.default)(
          (0, o.jsx)('path', { d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' }),
          'FormatQuote'
        );
      },
      '(ssr)/./node_modules/@mui/icons-material/NightsStay.js': (e, t, r) => {
        'use strict';
        var a = r('(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
        t.Z = void 0;
        var s = a(r('(ssr)/./node_modules/@mui/icons-material/utils/createSvgIcon.js')),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          );
        t.Z = (0, s.default)(
          [
            (0, o.jsx)(
              'path',
              {
                d: 'M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41',
              },
              '0'
            ),
            (0, o.jsx)(
              'path',
              {
                d: 'M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2',
              },
              '1'
            ),
          ],
          'NightsStay'
        );
      },
      '(ssr)/./node_modules/@mui/icons-material/Psychology.js': (e, t, r) => {
        'use strict';
        var a = r('(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
        t.Z = void 0;
        var s = a(r('(ssr)/./node_modules/@mui/icons-material/utils/createSvgIcon.js')),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          );
        t.Z = (0, s.default)(
          [
            (0, o.jsx)(
              'path',
              {
                d: 'M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43',
              },
              '0'
            ),
            (0, o.jsx)(
              'path',
              {
                d: 'M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7m3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39',
              },
              '1'
            ),
          ],
          'Psychology'
        );
      },
      '(ssr)/./node_modules/@mui/icons-material/Share.js': (e, t, r) => {
        'use strict';
        var a = r('(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
        t.Z = void 0;
        var s = a(r('(ssr)/./node_modules/@mui/icons-material/utils/createSvgIcon.js')),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          );
        t.Z = (0, s.default)(
          (0, o.jsx)('path', {
            d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92',
          }),
          'Share'
        );
      },
      '(ssr)/./node_modules/@mui/material/Avatar/Avatar.js': (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => Z });
        var a = r(
            '(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
          ),
          s = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          i = r('(ssr)/./node_modules/clsx/dist/clsx.mjs'),
          n = r('(ssr)/./node_modules/@mui/utils/esm/composeClasses/composeClasses.js'),
          l = r('(ssr)/./node_modules/@mui/material/styles/styled.js'),
          d = r('(ssr)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'),
          c = r('(ssr)/./node_modules/@mui/material/utils/createSvgIcon.js'),
          m = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          );
        let p = (0, c.Z)(
          (0, m.jsx)('path', {
            d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          }),
          'Person'
        );
        var u = r(
            '(ssr)/./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          x = r('(ssr)/./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js');
        function f(e) {
          return (0, x.ZP)('MuiAvatar', e);
        }
        (0, u.Z)('MuiAvatar', [
          'root',
          'colorDefault',
          'circular',
          'rounded',
          'square',
          'img',
          'fallback',
        ]);
        var g = r('(ssr)/./node_modules/@mui/material/utils/useSlot.js');
        let h = [
            'alt',
            'children',
            'className',
            'component',
            'slots',
            'slotProps',
            'imgProps',
            'sizes',
            'src',
            'srcSet',
            'variant',
          ],
          y = e => {
            let { classes: t, variant: r, colorDefault: a } = e;
            return (0, n.Z)(
              { root: ['root', r, a && 'colorDefault'], img: ['img'], fallback: ['fallback'] },
              f,
              t
            );
          },
          b = (0, l.ZP)('div', {
            name: 'MuiAvatar',
            slot: 'Root',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
            },
          })(({ theme: e }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            width: 40,
            height: 40,
            fontFamily: e.typography.fontFamily,
            fontSize: e.typography.pxToRem(20),
            lineHeight: 1,
            borderRadius: '50%',
            overflow: 'hidden',
            userSelect: 'none',
            variants: [
              {
                props: { variant: 'rounded' },
                style: { borderRadius: (e.vars || e).shape.borderRadius },
              },
              { props: { variant: 'square' }, style: { borderRadius: 0 } },
              {
                props: { colorDefault: !0 },
                style: (0, s.Z)(
                  { color: (e.vars || e).palette.background.default },
                  e.vars
                    ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
                    : (0, s.Z)(
                        { backgroundColor: e.palette.grey[400] },
                        e.applyStyles('dark', { backgroundColor: e.palette.grey[600] })
                      )
                ),
              },
            ],
          })),
          v = (0, l.ZP)('img', {
            name: 'MuiAvatar',
            slot: 'Img',
            overridesResolver: (e, t) => t.img,
          })({
            width: '100%',
            height: '100%',
            textAlign: 'center',
            objectFit: 'cover',
            color: 'transparent',
            textIndent: 1e4,
          }),
          j = (0, l.ZP)(p, {
            name: 'MuiAvatar',
            slot: 'Fallback',
            overridesResolver: (e, t) => t.fallback,
          })({ width: '75%', height: '75%' }),
          Z = o.forwardRef(function (e, t) {
            let r = (0, d.i)({ props: e, name: 'MuiAvatar' }),
              {
                alt: n,
                children: l,
                className: c,
                component: p = 'div',
                slots: u = {},
                slotProps: x = {},
                imgProps: f,
                sizes: Z,
                src: k,
                srcSet: w,
                variant: C = 'circular',
              } = r,
              S = (0, a.Z)(r, h),
              I = null,
              P = (function ({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: a }) {
                let [s, i] = o.useState(!1);
                return (
                  o.useEffect(() => {
                    if (!r && !a) return;
                    i(!1);
                    let s = !0,
                      o = new Image();
                    return (
                      (o.onload = () => {
                        s && i('loaded');
                      }),
                      (o.onerror = () => {
                        s && i('error');
                      }),
                      (o.crossOrigin = e),
                      (o.referrerPolicy = t),
                      (o.src = r),
                      a && (o.srcset = a),
                      () => {
                        s = !1;
                      }
                    );
                  }, [e, t, r, a]),
                  s
                );
              })((0, s.Z)({}, f, { src: k, srcSet: w })),
              _ = k || w,
              $ = _ && 'error' !== P,
              z = (0, s.Z)({}, r, { colorDefault: !$, component: p, variant: C }),
              R = y(z),
              [F, M] = (0, g.Z)('img', {
                className: R.img,
                elementType: v,
                externalForwardedProps: { slots: u, slotProps: { img: (0, s.Z)({}, f, x.img) } },
                additionalProps: { alt: n, src: k, srcSet: w, sizes: Z },
                ownerState: z,
              });
            return (
              (I = $
                ? (0, m.jsx)(F, (0, s.Z)({}, M))
                : l || 0 === l
                  ? l
                  : _ && n
                    ? n[0]
                    : (0, m.jsx)(j, { ownerState: z, className: R.fallback })),
              (0, m.jsx)(
                b,
                (0, s.Z)({ as: p, ownerState: z, className: (0, i.Z)(R.root, c), ref: t }, S, {
                  children: I,
                })
              )
            );
          });
      },
      '(ssr)/./node_modules/@mui/material/Container/Container.js': (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => M });
        var a = r(
            '(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
          ),
          s = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          i = r('(ssr)/./node_modules/clsx/dist/clsx.mjs'),
          n = r('(ssr)/./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'),
          l = r('(ssr)/./node_modules/@mui/utils/esm/composeClasses/composeClasses.js'),
          d = r('(ssr)/./node_modules/@mui/utils/esm/capitalize/capitalize.js'),
          c = r('(ssr)/./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js'),
          m = r('(ssr)/./node_modules/@mui/system/esm/useTheme.js'),
          p = r('(ssr)/./node_modules/@mui/styled-engine/index.js'),
          u = r('(ssr)/./node_modules/@mui/utils/esm/deepmerge/deepmerge.js'),
          x = r('(ssr)/./node_modules/@mui/system/esm/createTheme/createTheme.js'),
          f = r('(ssr)/./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js');
        let g = ['ownerState'],
          h = ['variants'],
          y = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
        function b(e) {
          return 'ownerState' !== e && 'theme' !== e && 'sx' !== e && 'as' !== e;
        }
        let v = (0, x.Z)(),
          j = e => (e ? e.charAt(0).toLowerCase() + e.slice(1) : e);
        function Z({ defaultTheme: e, theme: t, themeId: r }) {
          return 0 === Object.keys(t).length ? e : t[r] || t;
        }
        function k(e, t) {
          let { ownerState: r } = t,
            o = (0, a.Z)(t, g),
            i = 'function' == typeof e ? e((0, s.Z)({ ownerState: r }, o)) : e;
          if (Array.isArray(i)) return i.flatMap(e => k(e, (0, s.Z)({ ownerState: r }, o)));
          if (i && 'object' == typeof i && Array.isArray(i.variants)) {
            let { variants: e = [] } = i,
              t = (0, a.Z)(i, h);
            return (
              e.forEach(e => {
                let a = !0;
                'function' == typeof e.props
                  ? (a = e.props((0, s.Z)({ ownerState: r }, o, r)))
                  : Object.keys(e.props).forEach(t => {
                      (null == r ? void 0 : r[t]) !== e.props[t] && o[t] !== e.props[t] && (a = !1);
                    }),
                  a &&
                    (Array.isArray(t) || (t = [t]),
                    t.push(
                      'function' == typeof e.style
                        ? e.style((0, s.Z)({ ownerState: r }, o, r))
                        : e.style
                    ));
              }),
              t
            );
          }
          return i;
        }
        let w = (function (e = {}) {
          let {
              themeId: t,
              defaultTheme: r = v,
              rootShouldForwardProp: o = b,
              slotShouldForwardProp: i = b,
            } = e,
            n = e =>
              (0, f.Z)(
                (0, s.Z)({}, e, { theme: Z((0, s.Z)({}, e, { defaultTheme: r, themeId: t })) })
              );
          return (
            (n.__mui_systemSx = !0),
            (e, l = {}) => {
              var d;
              let c;
              (0, p.internal_processStyles)(e, e =>
                e.filter(e => !(null != e && e.__mui_systemSx))
              );
              let {
                  name: m,
                  slot: x,
                  skipVariantsResolver: f,
                  skipSx: g,
                  overridesResolver: h = (d = j(x)) ? (e, t) => t[d] : null,
                } = l,
                v = (0, a.Z)(l, y),
                w = void 0 !== f ? f : (x && 'Root' !== x && 'root' !== x) || !1,
                C = g || !1,
                S = b;
              'Root' === x || 'root' === x
                ? (S = o)
                : x
                  ? (S = i)
                  : 'string' == typeof e && e.charCodeAt(0) > 96 && (S = void 0);
              let I = (0, p.default)(e, (0, s.Z)({ shouldForwardProp: S, label: c }, v)),
                P = e =>
                  ('function' == typeof e && e.__emotion_real !== e) || (0, u.P)(e)
                    ? a =>
                        k(
                          e,
                          (0, s.Z)({}, a, {
                            theme: Z({ theme: a.theme, defaultTheme: r, themeId: t }),
                          })
                        )
                    : e,
                _ = (a, ...o) => {
                  let i = P(a),
                    l = o ? o.map(P) : [];
                  m &&
                    h &&
                    l.push(e => {
                      let a = Z((0, s.Z)({}, e, { defaultTheme: r, themeId: t }));
                      if (!a.components || !a.components[m] || !a.components[m].styleOverrides)
                        return null;
                      let o = a.components[m].styleOverrides,
                        i = {};
                      return (
                        Object.entries(o).forEach(([t, r]) => {
                          i[t] = k(r, (0, s.Z)({}, e, { theme: a }));
                        }),
                        h(e, i)
                      );
                    }),
                    m &&
                      !w &&
                      l.push(e => {
                        var a;
                        let o = Z((0, s.Z)({}, e, { defaultTheme: r, themeId: t }));
                        return k(
                          {
                            variants:
                              null == o || null == (a = o.components) || null == (a = a[m])
                                ? void 0
                                : a.variants,
                          },
                          (0, s.Z)({}, e, { theme: o })
                        );
                      }),
                    C || l.push(n);
                  let d = l.length - o.length;
                  if (Array.isArray(a) && d > 0) {
                    let e = Array(d).fill('');
                    (i = [...a, ...e]).raw = [...a.raw, ...e];
                  }
                  let c = I(i, ...l);
                  return e.muiName && (c.muiName = e.muiName), c;
                };
              return I.withConfig && (_.withConfig = I.withConfig), _;
            }
          );
        })();
        var C = r(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
        );
        let S = ['className', 'component', 'disableGutters', 'fixed', 'maxWidth', 'classes'],
          I = (0, x.Z)(),
          P = w('div', {
            name: 'MuiContainer',
            slot: 'Root',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [
                t.root,
                t[`maxWidth${(0, d.Z)(String(r.maxWidth))}`],
                r.fixed && t.fixed,
                r.disableGutters && t.disableGutters,
              ];
            },
          }),
          _ = e =>
            (function ({ props: e, name: t, defaultTheme: r, themeId: a }) {
              let s = (0, m.Z)(r);
              return a && (s = s[a] || s), (0, c.Z)({ theme: s, name: t, props: e });
            })({ props: e, name: 'MuiContainer', defaultTheme: I }),
          $ = (e, t) => {
            let { classes: r, fixed: a, disableGutters: s, maxWidth: o } = e,
              i = {
                root: [
                  'root',
                  o && `maxWidth${(0, d.Z)(String(o))}`,
                  a && 'fixed',
                  s && 'disableGutters',
                ],
              };
            return (0, l.Z)(i, e => (0, n.ZP)(t, e), r);
          };
        var z = r('(ssr)/./node_modules/@mui/material/utils/capitalize.js'),
          R = r('(ssr)/./node_modules/@mui/material/styles/styled.js'),
          F = r('(ssr)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js');
        let M = (function (e = {}) {
          let {
              createStyledComponent: t = P,
              useThemeProps: r = _,
              componentName: n = 'MuiContainer',
            } = e,
            l = t(
              ({ theme: e, ownerState: t }) =>
                (0, s.Z)(
                  {
                    width: '100%',
                    marginLeft: 'auto',
                    boxSizing: 'border-box',
                    marginRight: 'auto',
                    display: 'block',
                  },
                  !t.disableGutters && {
                    paddingLeft: e.spacing(2),
                    paddingRight: e.spacing(2),
                    [e.breakpoints.up('sm')]: {
                      paddingLeft: e.spacing(3),
                      paddingRight: e.spacing(3),
                    },
                  }
                ),
              ({ theme: e, ownerState: t }) =>
                t.fixed &&
                Object.keys(e.breakpoints.values).reduce((t, r) => {
                  let a = e.breakpoints.values[r];
                  return (
                    0 !== a && (t[e.breakpoints.up(r)] = { maxWidth: `${a}${e.breakpoints.unit}` }),
                    t
                  );
                }, {}),
              ({ theme: e, ownerState: t }) =>
                (0, s.Z)(
                  {},
                  'xs' === t.maxWidth && {
                    [e.breakpoints.up('xs')]: { maxWidth: Math.max(e.breakpoints.values.xs, 444) },
                  },
                  t.maxWidth &&
                    'xs' !== t.maxWidth && {
                      [e.breakpoints.up(t.maxWidth)]: {
                        maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
                      },
                    }
                )
            );
          return o.forwardRef(function (e, t) {
            let o = r(e),
              {
                className: d,
                component: c = 'div',
                disableGutters: m = !1,
                fixed: p = !1,
                maxWidth: u = 'lg',
              } = o,
              x = (0, a.Z)(o, S),
              f = (0, s.Z)({}, o, { component: c, disableGutters: m, fixed: p, maxWidth: u }),
              g = $(f, n);
            return (0, C.jsx)(
              l,
              (0, s.Z)({ as: c, ownerState: f, className: (0, i.Z)(g.root, d), ref: t }, x)
            );
          });
        })({
          createStyledComponent: (0, R.ZP)('div', {
            name: 'MuiContainer',
            slot: 'Root',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [
                t.root,
                t[`maxWidth${(0, z.Z)(String(r.maxWidth))}`],
                r.fixed && t.fixed,
                r.disableGutters && t.disableGutters,
              ];
            },
          }),
          useThemeProps: e => (0, F.i)({ props: e, name: 'MuiContainer' }),
        });
      },
      '(ssr)/./node_modules/@mui/material/utils/useSlot.js': (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => p });
        var a = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
          s = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'),
          o = r('(ssr)/./node_modules/@mui/utils/esm/useForkRef/useForkRef.js'),
          i = r('(ssr)/./node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js'),
          n = r(
            '(ssr)/./node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js'
          ),
          l = r('(ssr)/./node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js');
        let d = [
            'className',
            'elementType',
            'ownerState',
            'externalForwardedProps',
            'getSlotOwnerState',
            'internalForwardedProps',
          ],
          c = ['component', 'slots', 'slotProps'],
          m = ['component'];
        function p(e, t) {
          let {
              className: r,
              elementType: p,
              ownerState: u,
              externalForwardedProps: x,
              getSlotOwnerState: f,
              internalForwardedProps: g,
            } = t,
            h = (0, s.Z)(t, d),
            { component: y, slots: b = { [e]: void 0 }, slotProps: v = { [e]: void 0 } } = x,
            j = (0, s.Z)(x, c),
            Z = b[e] || p,
            k = (0, n.Z)(v[e], u),
            w = (0, l.Z)(
              (0, a.Z)({ className: r }, h, {
                externalForwardedProps: 'root' === e ? j : void 0,
                externalSlotProps: k,
              })
            ),
            {
              props: { component: C },
              internalRef: S,
            } = w,
            I = (0, s.Z)(w.props, m),
            P = (0, o.Z)(S, null == k ? void 0 : k.ref, t.ref),
            _ = f ? f(I) : {},
            $ = (0, a.Z)({}, u, _),
            z = 'root' === e ? C || y : C,
            R = (0, i.Z)(
              Z,
              (0, a.Z)(
                {},
                'root' === e && !y && !b[e] && g,
                'root' !== e && !b[e] && g,
                I,
                z && { as: z },
                { ref: P }
              ),
              $
            );
          return (
            Object.keys(_).forEach(e => {
              delete R[e];
            }),
            [Z, R]
          );
        }
      },
      '(ssr)/./src/app/components/HomePage.jsx': (e, t, r) => {
        'use strict';
        r.d(t, { default: () => e6 });
        var a = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          ),
          s = r('(ssr)/./src/app/components/layout/index.js'),
          o = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          i = r('(ssr)/./node_modules/@mui/material/Box/Box.js'),
          n = r('(ssr)/./node_modules/@mui/material/Typography/Typography.js'),
          l = r('(ssr)/./node_modules/@mui/material/Container/Container.js'),
          d = r('(ssr)/./node_modules/@mui/material/Grid/Grid.js'),
          c = r('(ssr)/./node_modules/@mui/material/styles/styled.js'),
          m = r('(ssr)/./node_modules/next/dist/api/navigation.js');
        let p = {
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
          u = {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
            mystical: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            magical: 'cubic-bezier(0.6, 0.01, 0.05, 1)',
            bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          },
          x =
            (p.normal,
            u.easeInOut,
            p.normal,
            u.mystical,
            p.normal,
            u.mystical,
            p.normal,
            u.mystical,
            p.normal,
            u.mystical,
            p.normal,
            u.mystical,
            p.normal,
            u.mystical,
            p.normal,
            u.mystical,
            {
              duration: p,
              easing: u,
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
          f = (0, c.ZP)(i.Z)(
            ({ theme: e, animation: t, duration: r, delay: a, easing: s, infinite: o }) => {
              let i = x.keyframes[t],
                n = 'string' == typeof r ? x.duration[r] : r,
                l = x.easing[s] || s,
                d = {};
              if (t)
                switch (t) {
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
                animation: i && `${t} ${n}ms ${l} ${a}ms ${o ? 'infinite' : 'forwards'}`,
                ...d,
                '@keyframes fadeIn': x.keyframes.fadeIn,
                '@keyframes fadeOut': x.keyframes.fadeOut,
                '@keyframes slideUp': x.keyframes.slideUp,
                '@keyframes slideDown': x.keyframes.slideDown,
                '@keyframes slideRight': x.keyframes.slideRight,
                '@keyframes slideLeft': x.keyframes.slideLeft,
                '@keyframes zoomIn': x.keyframes.zoomIn,
                '@keyframes zoomOut': x.keyframes.zoomOut,
                '@keyframes rotate': x.keyframes.rotate,
                '@keyframes glow': x.keyframes.glow,
                '@keyframes twinkle': x.keyframes.twinkle,
                '@keyframes flipCard': x.keyframes.flipCard,
                '@keyframes ripple': x.keyframes.ripple,
                '@keyframes gradientShift': x.keyframes.gradientShift,
                '@keyframes tarotReveal': x.keyframes.tarotReveal,
                '@keyframes mysticalShake': x.keyframes.mysticalShake,
                '@keyframes float': x.keyframes.float,
                '@keyframes flash': x.keyframes.flash,
                '@keyframes typing': x.keyframes.typing,
                '@keyframes blink': x.keyframes.blink,
              };
            }
          ),
          g = (0, o.forwardRef)(function (e, t) {
            let {
                animation: r = 'fadeIn',
                duration: s = 'normal',
                delay: i = 0,
                easing: n = 'easeInOut',
                infinite: l = !1,
                onScroll: d = !1,
                threshold: c = 0.2,
                children: m,
                sx: p = {},
                ...u
              } = e,
              g = (0, o.useRef)(null),
              h = t || g,
              [y, b] = (0, o.useState)(!d);
            (0, o.useEffect)(() => {}, [d, h, c]);
            let v = 'string' == typeof s ? x.duration[s] : s;
            return a.jsx(f, {
              ref: h,
              animation: y ? r : null,
              duration: v,
              delay: i,
              easing: n,
              infinite: l,
              sx: { opacity: y ? 1 : 0, ...p },
              ...u,
              children: m,
            });
          }),
          h = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: -1,
          })),
          y = (0, c.ZP)(i.Z)(({ theme: e, colors: t, duration: r, easing: a }) => {
            let s = 'string' == typeof r ? x.duration[r] : r,
              o = x.easing[a] || a;
            return {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${t.join(', ')})`,
              backgroundSize: '400% 400%',
              animation: `gradientShift ${3 * s}ms ${o} infinite`,
              '@keyframes gradientShift': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' },
              },
            };
          }),
          b = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          })),
          v = (0, c.ZP)(i.Z)(({ theme: e, size: t, color: r, duration: a, delay: s }) => ({
            position: 'absolute',
            width: t,
            height: t,
            backgroundColor: r,
            borderRadius: '50%',
            opacity: 0,
            animation: `particle ${a}ms ease-in-out ${s}ms infinite`,
            '@keyframes particle': {
              '0%': { transform: 'translateY(100vh) scale(0)', opacity: 0 },
              '50%': { opacity: 1 },
              '100%': { transform: 'translateY(-20vh) scale(1)', opacity: 0 },
            },
          })),
          j = (0, c.ZP)(i.Z)(({ theme: e, color: t, duration: r, easing: a }) => {
            let s = 'string' == typeof r ? x.duration[r] : r,
              o = x.easing[a] || a;
            return {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '200px',
              background: `linear-gradient(to top, ${t} 0%, transparent 100%)`,
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
                animation: `wave ${s}ms ${o} infinite linear`,
              },
              '&::after': {
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 200'%3E%3Cpath fill='rgba(255, 255, 255, 0.1)' d='M0,192 C320,100 640,100 960,192 C1280,290 1440,200 1600,150 L1600,200 L0,200 Z'/%3E%3C/svg%3E\")",
                animation: `wave ${1.5 * s}ms ${o} infinite linear`,
              },
              '@keyframes wave': {
                '0%': { backgroundPositionX: '0' },
                '100%': { backgroundPositionX: '1600px' },
              },
            };
          }),
          Z = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
          })),
          k = (0, c.ZP)(i.Z)(
            ({ theme: e, size: t, color: r, duration: a, delay: s, top: o, left: i }) => ({
              position: 'absolute',
              width: t,
              height: t,
              backgroundColor: 'transparent',
              borderRadius: '50%',
              boxShadow: `0 0 ${2 * t}px ${t}px ${r}`,
              top: `${o}%`,
              left: `${i}%`,
              opacity: 0.3,
              animation: `twinkle ${a}ms ease-in-out ${s}ms infinite`,
              '@keyframes twinkle': {
                '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
                '50%': { opacity: 1, transform: 'scale(1.2)' },
              },
            })
          ),
          w = (0, o.forwardRef)(function (e, t) {
            let {
                type: r = 'gradient',
                colors: s = ['#6B3FA0', '#9C27B0', '#3F51B5'],
                waveColor: i = '#6B3FA0',
                particleCount: n = 50,
                starCount: l = 100,
                duration: d = 'slow',
                easing: c = 'easeInOut',
                sx: m = {},
                ...p
              } = e,
              u = (0, o.useRef)(null),
              f = t || u,
              g = Array.from({ length: n }).map((e, t) => ({
                id: t,
                size: 10 * Math.random() + 2,
                color: s[Math.floor(Math.random() * s.length)],
                duration: 1e4 * Math.random() + 5e3,
                delay: 5e3 * Math.random(),
                left: 100 * Math.random(),
              })),
              w = Array.from({ length: l }).map((e, t) => ({
                id: t,
                size: 2 * Math.random() + 0.5,
                color: '#FFFFFF',
                duration: 5e3 * Math.random() + 2e3,
                delay: 2e3 * Math.random(),
                top: 100 * Math.random(),
                left: 100 * Math.random(),
              }));
            return ('string' == typeof d && x.duration[d], 'gradient' === r)
              ? a.jsx(h, {
                  ref: f,
                  sx: m,
                  ...p,
                  children: a.jsx(y, { colors: s, duration: d, easing: c }),
                })
              : 'particles' === r
                ? a.jsx(h, {
                    ref: f,
                    sx: m,
                    ...p,
                    children: a.jsx(b, {
                      children: g.map(e =>
                        a.jsx(
                          v,
                          {
                            size: e.size,
                            color: e.color,
                            duration: e.duration,
                            delay: e.delay,
                            style: { left: `${e.left}%` },
                          },
                          e.id
                        )
                      ),
                    }),
                  })
                : 'wave' === r
                  ? a.jsx(h, {
                      ref: f,
                      sx: m,
                      ...p,
                      children: a.jsx(j, { color: i, duration: d, easing: c }),
                    })
                  : 'stars' === r
                    ? a.jsx(h, {
                        ref: f,
                        sx: m,
                        ...p,
                        children: a.jsx(Z, {
                          children: w.map(e =>
                            a.jsx(
                              k,
                              {
                                size: e.size,
                                color: e.color,
                                duration: e.duration,
                                delay: e.delay,
                                top: e.top,
                                left: e.left,
                              },
                              e.id
                            )
                          ),
                        }),
                      })
                    : a.jsx(h, { ref: f, sx: m, ...p });
          }),
          C = (0, c.ZP)(i.Z)(
            ({
              theme: e,
              animation: t,
              duration: r,
              delay: a,
              easing: s,
              infinite: o,
              size: i,
              color: n,
            }) => {
              let l = x.keyframes[t] || S(t),
                d = 'string' == typeof r ? x.duration[r] : r,
                c = x.easing[s] || s;
              return {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: n || 'inherit',
                fontSize: 'small' === i ? 20 : 'medium' === i ? 24 : 'large' === i ? 36 : i,
                lineHeight: 1,
                animation: l && `${t} ${d}ms ${c} ${a}ms ${o ? 'infinite' : 'forwards'}`,
                '@keyframes rotate': x.keyframes.rotate,
                '@keyframes pulse': x.keyframes.pulse,
                '@keyframes fadeIn': x.keyframes.fadeIn,
                '@keyframes zoomIn': x.keyframes.zoomIn,
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
            }
          ),
          S = e => {
            switch (e) {
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
                return {
                  '0%, 100%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.2)' },
                };
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
          I = (0, o.forwardRef)(function (e, t) {
            let {
                children: r,
                animation: s = 'fadeIn',
                duration: i = 'normal',
                delay: n = 0,
                easing: l = 'easeInOut',
                infinite: d = !1,
                onScroll: c = !1,
                threshold: m = 0.2,
                size: p = 'medium',
                color: u,
                sx: x = {},
                ...f
              } = e,
              g = (0, o.useRef)(null),
              h = t || g,
              [y, b] = (0, o.useState)(!c);
            return (
              (0, o.useEffect)(() => {}, [c, h, m]),
              a.jsx(C, {
                ref: h,
                animation: y ? s : null,
                duration: i,
                delay: n,
                easing: l,
                infinite: d,
                size: p,
                color: u,
                sx: { opacity: y || 'fadeIn' === s ? 1 : 0, ...x },
                ...f,
                children: r,
              })
            );
          });
        var P = r('(ssr)/./src/app/components/TarotCard.jsx'),
          _ = r('(ssr)/./src/app/components/MysticalButton.jsx');
        function $(e, t = 300) {
          let r;
          return function (...a) {
            r ||
              (e(...a),
              (r = !0),
              setTimeout(() => {
                r = !1;
              }, t));
          };
        }
        var z = r('(ssr)/./node_modules/@mui/icons-material/AutoAwesome.js'),
          R = r('(ssr)/./node_modules/@mui/icons-material/Favorite.js'),
          F = r('(ssr)/./node_modules/@mui/icons-material/WbTwilight.js'),
          M = r('(ssr)/./node_modules/@mui/icons-material/NightsStay.js');
        let A = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${e.palette.background.default} 0%, ${e.palette.background.paper} 100%)`,
          })),
          E = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${e.palette.common.white}, ${e.palette.grey[300]})`,
            boxShadow: `0 0 30px 10px ${e.palette.primary.light}40`,
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
              background: `radial-gradient(circle at center, ${e.palette.grey[300]}, transparent)`,
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
              background: `radial-gradient(circle at center, ${e.palette.grey[300]}, transparent)`,
              opacity: 0.6,
            },
            [e.breakpoints.down('md')]: { width: '80px', height: '80px', top: '5%', right: '5%' },
          })),
          T = (0, c.ZP)(n.Z)(({ theme: e }) => ({
            fontFamily: '"Playfair Display", "Noto Serif KR", serif',
            fontWeight: 700,
            fontSize: '3.5rem',
            textAlign: 'center',
            marginBottom: e.spacing(1),
            background: `linear-gradient(135deg, ${e.palette.primary.main} 0%, ${e.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: `0 0 15px ${e.palette.primary.main}80`,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${e.palette.secondary.main}, transparent)`,
              opacity: 0.7,
            },
            [e.breakpoints.down('md')]: { fontSize: '2.5rem', '&::after': { width: '80px' } },
          })),
          B = (0, c.ZP)(n.Z)(({ theme: e }) => ({
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
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${encodeURIComponent(e.palette.secondary.main)}'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.3,
              zIndex: -1,
            },
            [e.breakpoints.down('md')]: { fontSize: '1.2rem' },
          })),
          L = (0, c.ZP)(i.Z)(({ theme: e, size: t, top: r, left: a, delay: s, color: o }) => ({
            position: 'absolute',
            width: t,
            height: t,
            top: r,
            left: a,
            borderRadius: '50%',
            background: o || e.palette.secondary.main,
            boxShadow: `0 0 ${t}px ${t / 2}px ${o || e.palette.secondary.main}`,
            animation: `twinkle ${2 + 3 * Math.random()}s ease-in-out ${s}s infinite`,
            opacity: 0.7,
            zIndex: 0,
            '@keyframes twinkle': {
              '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
              '50%': { opacity: 0.3, transform: 'scale(0.8)' },
            },
          })),
          W = (0, c.ZP)(i.Z)(({ theme: e, top: t, left: r, delay: a, duration: s }) => ({
            position: 'absolute',
            top: t,
            left: r,
            width: '100px',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${e.palette.common.white})`,
            opacity: 0,
            zIndex: 0,
            transform: 'rotate(-45deg)',
            animation: `shootingStar ${s}s linear ${a}s infinite`,
            boxShadow: `0 0 10px 1px ${e.palette.common.white}`,
            '@keyframes shootingStar': {
              '0%': { opacity: 0, transform: 'translateX(0) translateY(0) rotate(-45deg)' },
              '10%, 15%': { opacity: 1 },
              '100%': {
                opacity: 0,
                transform: 'translateX(-500px) translateY(500px) rotate(-45deg)',
              },
            },
          })),
          D = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'relative',
            perspective: '1000px',
            width: '100%',
            height: '100%',
            '&:hover .card': {
              transform: 'rotateY(10deg) rotateX(5deg)',
              boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.3),
                0 0 20px ${e.palette.primary.main}40,
                0 0 30px ${e.palette.secondary.main}30`,
            },
            '&:hover .card-back': {
              transform: 'translateX(-20px) translateY(20px) rotateZ(-8deg)',
            },
            '&:hover .card-glow': { opacity: 1 },
          })),
          N = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 2 * e.shape.borderRadius,
            background: `radial-gradient(circle at center, ${e.palette.primary.main}20 0%, transparent 70%)`,
            opacity: 0,
            transition: 'opacity 0.5s ease-in-out',
            pointerEvents: 'none',
            zIndex: 1,
          }));
        function Y() {
          let e = (0, m.useRouter)(),
            [t, r] = (0, o.useState)([]),
            [c, p] = (0, o.useState)([]),
            u = (0, o.useRef)(null),
            [x, f] = (0, o.useState)({ x: 0, y: 0 }),
            h = (0, o.useCallback)(
              $(() => {
                let t = document.createElement('div');
                (t.style.position = 'fixed'),
                  (t.style.top = '0'),
                  (t.style.left = '0'),
                  (t.style.width = '100%'),
                  (t.style.height = '3px'),
                  (t.style.background = 'linear-gradient(to right, #6B3FA0, #E91E63)'),
                  (t.style.zIndex = '9999'),
                  (t.style.animation = 'loading 1s infinite linear'),
                  document.body.appendChild(t);
                let r = document.createElement('style');
                (r.innerHTML = `
        @keyframes loading {
          0% { width: 0; }
          50% { width: 50%; }
          100% { width: 100%; }
        }
      `),
                  document.head.appendChild(r),
                  setTimeout(() => {
                    e.push('/test');
                  }, 300);
              }, 500),
              [e]
            );
          return (0, a.jsxs)(A, {
            children: [
              a.jsx(w, { type: 'stars', starCount: 0 }),
              a.jsx(E, {
                children: a.jsx(I, {
                  animation: 'pulse',
                  duration: 'slow',
                  infinite: !0,
                  children: a.jsx(M.Z, {
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
              a.jsx(s.$0, {
                children: a.jsx(l.Z, {
                  maxWidth: 'lg',
                  children: (0, a.jsxs)(d.ZP, {
                    container: !0,
                    spacing: 4,
                    alignItems: 'center',
                    children: [
                      a.jsx(d.ZP, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        children: (0, a.jsxs)(g, {
                          animation: 'fadeIn',
                          duration: 'normal',
                          children: [
                            a.jsx(T, { variant: 'h1', children: '달빛 연애 연구소' }),
                            a.jsx(B, {
                              variant: 'h2',
                              children: '당신의 MBTI로 알아보는 연애 유형과 이상형',
                            }),
                            (0, a.jsxs)(g, {
                              animation: 'slideUp',
                              duration: 'normal',
                              delay: 300,
                              children: [
                                a.jsx(n.Z, {
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
                                a.jsx(i.Z, {
                                  sx: {
                                    display: 'flex',
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                  },
                                  children: a.jsx(g, {
                                    animation: 'pulse',
                                    duration: 'slow',
                                    delay: 1e3,
                                    children: a.jsx(_.Z, {
                                      variant: 'mystical',
                                      size: 'large',
                                      onClick: h,
                                      startIcon: a.jsx(z.Z, {}),
                                      sx: {
                                        position: 'relative',
                                        zIndex: 2,
                                        '&:hover': {
                                          transform: 'translateY(-3px)',
                                          boxShadow: e =>
                                            `0 10px 20px -5px ${e.palette.primary.main}40, 0 0 15px ${e.palette.secondary.main}30`,
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
                      a.jsx(d.ZP, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        children: a.jsx(g, {
                          animation: 'zoomIn',
                          duration: 'slow',
                          delay: 500,
                          children: a.jsx(D, {
                            children: (0, a.jsxs)(i.Z, {
                              sx: { position: 'relative' },
                              ref: u,
                              children: [
                                a.jsx(N, { className: 'card-glow' }),
                                a.jsx(P.Z, {
                                  variant: 'primary',
                                  title: '당신의 MBTI 연애 유형은?',
                                  sx: {
                                    maxWidth: { xs: 280, md: 320 },
                                    mx: 'auto',
                                    transition: 'all 0.5s ease-in-out',
                                    transform: `rotateY(${x.x}deg) rotateX(${x.y}deg)`,
                                    className: 'card',
                                  },
                                  children: (0, a.jsxs)(i.Z, {
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
                                      a.jsx(I, {
                                        animation: 'pulse',
                                        duration: 'slow',
                                        infinite: !0,
                                        size: 'large',
                                        color: 'white',
                                        children: a.jsx(R.Z, {
                                          fontSize: 'inherit',
                                          sx: {
                                            filter:
                                              'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
                                          },
                                        }),
                                      }),
                                      a.jsx(n.Z, {
                                        variant: 'h4',
                                        sx: {
                                          color: 'white',
                                          textAlign: 'center',
                                          mb: 2,
                                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                          fontFamily: e => e.typography.fontFamily.secondary,
                                        },
                                        children: 'MBTI 연애 테스트',
                                      }),
                                      a.jsx(n.Z, {
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
                                      a.jsx(i.Z, {
                                        sx: {
                                          position: 'relative',
                                          width: '100%',
                                          display: 'flex',
                                          justifyContent: 'center',
                                        },
                                        children: a.jsx(I, {
                                          animation: 'float',
                                          duration: 'slow',
                                          infinite: !0,
                                          size: 'large',
                                          color: 'white',
                                          children: a.jsx(F.Z, {
                                            fontSize: 'inherit',
                                            sx: { opacity: 0.8 },
                                          }),
                                        }),
                                      }),
                                      a.jsx(i.Z, {
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
                                a.jsx(P.Z, {
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
              t.map(e =>
                a.jsx(
                  L,
                  { size: e.size, top: e.top, left: e.left, delay: e.delay, color: e.color },
                  e.id
                )
              ),
              c.map(e =>
                a.jsx(W, { top: e.top, left: e.left, delay: e.delay, duration: e.duration }, e.id)
              ),
            ],
          });
        }
        var q = r('(ssr)/./src/app/components/mystical/index.js'),
          O = r('(ssr)/./node_modules/@mui/icons-material/Psychology.js'),
          H = r('(ssr)/./node_modules/@mui/icons-material/Share.js'),
          X = r('(ssr)/./node_modules/@mui/icons-material/Star.js');
        let U = (0, c.ZP)(i.Z)(({ theme: e }) => ({
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
              background: `linear-gradient(to bottom, transparent, ${e.palette.background.default})`,
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
          })),
          V = (0, c.ZP)(P.Z)(({ theme: e, color: t }) => ({
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
              background: `linear-gradient(to right, ${t || e.palette.primary.main}, ${e.palette.secondary.main})`,
              opacity: 0.7,
              zIndex: 1,
            },
            '&:hover': {
              transform: 'translateY(-10px) scale(1.02)',
              boxShadow: `0 20px 30px rgba(0, 0, 0, 0.2), 0 0 20px ${t || e.palette.primary.main}30`,
              '& .card-icon': { transform: 'scale(1.1) rotate(5deg)' },
              '& .card-decoration': { opacity: 0.1 },
            },
          })),
          G = (0, c.ZP)(i.Z)(({ theme: e, color: t }) => ({
            width: 80,
            height: 80,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: e.spacing(2),
            background: `linear-gradient(135deg, ${t || e.palette.primary.main}30, ${t || e.palette.primary.main}10)`,
            boxShadow: `0 8px 20px ${t || e.palette.primary.main}20, 0 0 0 1px ${t || e.palette.primary.main}10`,
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
              background: `radial-gradient(circle at center, ${t || e.palette.primary.main}10 0%, transparent 70%)`,
              opacity: 0.5,
              zIndex: 0,
            },
          })),
          J = (0, c.ZP)(i.Z)(({ theme: e, color: t }) => ({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '150px',
            height: '150px',
            background: `radial-gradient(circle at top right, ${t || e.palette.primary.main}10, transparent 70%)`,
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
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${encodeURIComponent(t || e.palette.primary.main)}'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.3,
            },
          }));
        function Q() {
          let e = (function (e) {
            let t = new Map();
            return function (...r) {
              let a = JSON.stringify(r);
              if (t.has(a)) return t.get(a);
              let s = e(...r);
              return t.set(a, s), s;
            };
          })(() => [
            {
              id: 1,
              icon: a.jsx(O.Z, {}),
              decorationIcon: a.jsx(X.Z, {}),
              title: '정확한 MBTI 분석',
              description:
                '24개의 질문을 통해 당신의 MBTI 유형을 정확하게 분석합니다. 연애 상황에 특화된 질문으로 더 정확한 결과를 제공합니다.',
              color: '#6B3FA0',
              animation: 'pulse',
            },
            {
              id: 2,
              icon: a.jsx(R.Z, {}),
              decorationIcon: a.jsx(F.Z, {}),
              title: '이상형 매칭',
              description:
                '당신의 MBTI 유형과 가장 잘 맞는 이상형을 알려드립니다. MBTI 궁합 이론을 바탕으로 당신과 가장 잘 맞는 유형을 찾아보세요.',
              color: '#E91E63',
              animation: 'heartbeat',
            },
            {
              id: 3,
              icon: a.jsx(z.Z, {}),
              decorationIcon: a.jsx(X.Z, {}),
              title: '연애 성향 분석',
              description:
                '당신의 연애 강점과 약점, 연애 스타일을 상세하게 분석해드립니다. 자신의 연애 패턴을 이해하고 더 나은 관계를 만들어보세요.',
              color: '#FF9800',
              animation: 'float',
            },
            {
              id: 4,
              icon: a.jsx(H.Z, {}),
              decorationIcon: a.jsx(F.Z, {}),
              title: '결과 공유',
              description:
                '테스트 결과를 친구나 연인과 공유할 수 있습니다. 서로의 MBTI 유형을 비교하고 더 깊이 이해해보세요.',
              color: '#2196F3',
              animation: 'bounce',
            },
          ])();
          return a.jsx(U, {
            children: a.jsx(s.$0, {
              children: (0, a.jsxs)(l.Z, {
                maxWidth: 'lg',
                children: [
                  a.jsx(g, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    onScroll: !0,
                    children: a.jsx(i.Z, {
                      sx: { textAlign: 'center', mb: 2 },
                      children: a.jsx(q.Pr, {
                        title: '테스트 특징',
                        subtitle: '달빛 연애 연구소의 MBTI 테스트가 특별한 이유',
                        align: 'center',
                        hasGradient: !0,
                        animation: 'none',
                      }),
                    }),
                  }),
                  a.jsx(g, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    delay: 200,
                    onScroll: !0,
                    children: a.jsx(i.Z, {
                      sx: { display: 'flex', justifyContent: 'center', mb: 6 },
                      children: a.jsx(s.Gg, {
                        variant: 'mystical',
                        thickness: 2,
                        glow: !0,
                        decorated: !0,
                        icon: a.jsx(X.Z, {}),
                        sx: { maxWidth: 300 },
                      }),
                    }),
                  }),
                  a.jsx(d.ZP, {
                    container: !0,
                    spacing: 4,
                    children: e.map((e, t) =>
                      a.jsx(
                        d.ZP,
                        {
                          item: !0,
                          xs: 12,
                          sm: 6,
                          md: 3,
                          children: a.jsx(g, {
                            animation: 'slideUp',
                            duration: 'normal',
                            delay: 150 * t,
                            onScroll: !0,
                            threshold: 0.1,
                            children: (0, a.jsxs)(V, {
                              variant: 'paper',
                              color: e.color,
                              children: [
                                a.jsx(J, { color: e.color }),
                                (0, a.jsxs)(i.Z, {
                                  sx: { position: 'relative', zIndex: 2, p: 3 },
                                  children: [
                                    a.jsx(G, {
                                      color: e.color,
                                      children: a.jsx(I, {
                                        animation: e.animation,
                                        duration: 'slow',
                                        infinite: !0,
                                        color: e.color,
                                        children: e.icon,
                                      }),
                                    }),
                                    a.jsx(n.Z, {
                                      variant: 'h6',
                                      sx: {
                                        mb: 2,
                                        fontWeight: 'bold',
                                        fontFamily: e => e.typography.fontFamily.secondary,
                                        color: e.color,
                                      },
                                      children: e.title,
                                    }),
                                    a.jsx(n.Z, {
                                      variant: 'body2',
                                      sx: {
                                        color: 'text.secondary',
                                        position: 'relative',
                                        zIndex: 2,
                                      },
                                      children: e.description,
                                    }),
                                    a.jsx(i.Z, {
                                      sx: {
                                        position: 'absolute',
                                        bottom: -10,
                                        right: -10,
                                        opacity: 0.1,
                                        transform: 'rotate(-15deg)',
                                        color: e.color,
                                      },
                                      children: e.decorationIcon,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                  a.jsx(g, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    delay: 600,
                    onScroll: !0,
                    children: a.jsx(i.Z, {
                      sx: { display: 'flex', justifyContent: 'center', mt: 8 },
                      children: a.jsx(s.Gg, {
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
        var K = r('(ssr)/./node_modules/@mui/material/IconButton/IconButton.js'),
          ee = r('(ssr)/./src/app/components/animations.jsx');
        (0, c.ZP)(i.Z)(({ theme: e, direction: t }) => ({
          display: 'flex',
          flexDirection: 'vertical' === t ? 'column' : 'row',
          alignItems: 'center',
          gap: e.spacing(1),
        })),
          (0, c.ZP)(K.Z)(({ theme: e, platform: t }) => {
            let r = {
              facebook: '#1877F2',
              twitter: '#1DA1F2',
              whatsapp: '#25D366',
              telegram: '#0088CC',
              link: e.palette.primary.main,
            };
            return {
              backgroundColor: `${r[t]}20`,
              color: r[t],
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: `${r[t]}40`, transform: 'translateY(-3px)' },
            };
          });
        var et = r('(ssr)/./node_modules/@mui/material/Paper/Paper.js');
        let er = (0, c.ZP)(et.Z)(({ theme: e, variant: t }) => {
            let r = {
              padding: e.spacing(4),
              borderRadius: 2 * e.shape.borderRadius,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              position: 'relative',
            };
            return 'primary' === t
              ? {
                  ...r,
                  background: `linear-gradient(135deg, ${e.palette.primary.dark}80 0%, ${e.palette.primary.main}40 100%)`,
                  color: e.palette.common.white,
                }
              : 'secondary' === t
                ? {
                    ...r,
                    background: `linear-gradient(135deg, ${e.palette.secondary.dark}80 0%, ${e.palette.secondary.main}40 100%)`,
                    color: e.palette.common.white,
                  }
                : 'mystical' === t
                  ? {
                      ...r,
                      background: `linear-gradient(135deg, ${e.palette.primary.dark}80 0%, ${e.palette.secondary.dark}80 100%)`,
                      color: e.palette.common.white,
                    }
                  : 'light' === t
                    ? {
                        ...r,
                        background: e.palette.background.paper,
                        color: e.palette.text.primary,
                        border: `1px solid ${e.palette.divider}`,
                      }
                    : {
                        ...r,
                        background: e.palette.background.default,
                        color: e.palette.text.primary,
                      };
          }),
          ea = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${e.palette.primary.main}20 0%, transparent 70%)`,
            opacity: 0.5,
            zIndex: 0,
          }));
        function es({
          title: e,
          description: t,
          buttonText: r = '시작하기',
          onClick: s,
          variant: o = 'default',
          buttonVariant: l = 'mystical',
          buttonSize: d = 'medium',
          icon: c,
          animation: m = 'fadeIn',
          onScroll: p = !1,
          sx: u = {},
        }) {
          return a.jsx(ee.F, {
            animation: m,
            duration: 'normal',
            onScroll: p,
            children: (0, a.jsxs)(er, {
              variant: o,
              sx: u,
              children: [
                a.jsx(ea, {}),
                (0, a.jsxs)(i.Z, {
                  sx: { position: 'relative', zIndex: 1 },
                  children: [
                    a.jsx(n.Z, {
                      variant: 'h4',
                      sx: {
                        mb: 2,
                        fontWeight: 'bold',
                        fontFamily: e => e.typography.fontFamily.secondary,
                      },
                      children: e,
                    }),
                    t && a.jsx(n.Z, { variant: 'body1', sx: { mb: 4, opacity: 0.9 }, children: t }),
                    a.jsx(_.Z, {
                      variant: l,
                      size: d,
                      onClick: s,
                      startIcon: c || a.jsx(z.Z, {}),
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var eo = r('(ssr)/./node_modules/@mui/material/Avatar/Avatar.js'),
          ei = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'),
          en = r('(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
          el = r('(ssr)/./node_modules/clsx/dist/clsx.mjs'),
          ed = r('(ssr)/./node_modules/@mui/utils/esm/clamp/clamp.js');
        let ec = {
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: '1px',
        };
        var em = r('(ssr)/./node_modules/@mui/utils/esm/composeClasses/composeClasses.js'),
          ep = r('(ssr)/./node_modules/@mui/system/esm/RtlProvider/index.js'),
          eu = r('(ssr)/./node_modules/@mui/material/utils/capitalize.js'),
          ex = r('(ssr)/./node_modules/@mui/material/utils/useId.js'),
          ef = r('(ssr)/./node_modules/@mui/material/utils/useControlled.js'),
          eg = r('(ssr)/./node_modules/@mui/material/utils/useIsFocusVisible.js'),
          eh = r('(ssr)/./node_modules/@mui/material/utils/useForkRef.js'),
          ey = r('(ssr)/./node_modules/@mui/material/utils/createSvgIcon.js');
        let eb = (0, ey.Z)(
            (0, a.jsx)('path', {
              d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
            }),
            'Star'
          ),
          ev = (0, ey.Z)(
            (0, a.jsx)('path', {
              d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
            }),
            'StarBorder'
          );
        var ej = r(
            '(ssr)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
          ),
          eZ = r('(ssr)/./node_modules/@mui/material/styles/slotShouldForwardProp.js'),
          ek = r(
            '(ssr)/./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          ew = r(
            '(ssr)/./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          );
        function eC(e) {
          return (0, ew.ZP)('MuiRating', e);
        }
        let eS = (0, ek.Z)('MuiRating', [
            'root',
            'sizeSmall',
            'sizeMedium',
            'sizeLarge',
            'readOnly',
            'disabled',
            'focusVisible',
            'visuallyHidden',
            'pristine',
            'label',
            'labelEmptyValueActive',
            'icon',
            'iconEmpty',
            'iconFilled',
            'iconHover',
            'iconFocus',
            'iconActive',
            'decimal',
          ]),
          eI = ['value'],
          eP = [
            'className',
            'defaultValue',
            'disabled',
            'emptyIcon',
            'emptyLabelText',
            'getLabelText',
            'highlightSelectedOnly',
            'icon',
            'IconContainerComponent',
            'max',
            'name',
            'onChange',
            'onChangeActive',
            'onMouseLeave',
            'onMouseMove',
            'precision',
            'readOnly',
            'size',
            'value',
          ];
        function e_(e, t) {
          return null == e
            ? e
            : Number(
                (Math.round(e / t) * t).toFixed(
                  (function (e) {
                    let t = e.toString().split('.')[1];
                    return t ? t.length : 0;
                  })(t)
                )
              );
        }
        let e$ = e => {
            let {
                classes: t,
                size: r,
                readOnly: a,
                disabled: s,
                emptyValueFocused: o,
                focusVisible: i,
              } = e,
              n = {
                root: [
                  'root',
                  `size${(0, eu.Z)(r)}`,
                  s && 'disabled',
                  i && 'focusVisible',
                  a && 'readOnly',
                ],
                label: ['label', 'pristine'],
                labelEmptyValue: [o && 'labelEmptyValueActive'],
                icon: ['icon'],
                iconEmpty: ['iconEmpty'],
                iconFilled: ['iconFilled'],
                iconHover: ['iconHover'],
                iconFocus: ['iconFocus'],
                iconActive: ['iconActive'],
                decimal: ['decimal'],
                visuallyHidden: ['visuallyHidden'],
              };
            return (0, em.Z)(n, eC, t);
          },
          ez = (0, c.ZP)('span', {
            name: 'MuiRating',
            slot: 'Root',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [
                { [`& .${eS.visuallyHidden}`]: t.visuallyHidden },
                t.root,
                t[`size${(0, eu.Z)(r.size)}`],
                r.readOnly && t.readOnly,
              ];
            },
          })(({ theme: e, ownerState: t }) =>
            (0, en.Z)(
              {
                display: 'inline-flex',
                position: 'relative',
                fontSize: e.typography.pxToRem(24),
                color: '#faaf00',
                cursor: 'pointer',
                textAlign: 'left',
                width: 'min-content',
                WebkitTapHighlightColor: 'transparent',
                [`&.${eS.disabled}`]: {
                  opacity: (e.vars || e).palette.action.disabledOpacity,
                  pointerEvents: 'none',
                },
                [`&.${eS.focusVisible} .${eS.iconActive}`]: { outline: '1px solid #999' },
                [`& .${eS.visuallyHidden}`]: ec,
              },
              'small' === t.size && { fontSize: e.typography.pxToRem(18) },
              'large' === t.size && { fontSize: e.typography.pxToRem(30) },
              t.readOnly && { pointerEvents: 'none' }
            )
          ),
          eR = (0, c.ZP)('label', {
            name: 'MuiRating',
            slot: 'Label',
            overridesResolver: ({ ownerState: e }, t) => [
              t.label,
              e.emptyValueFocused && t.labelEmptyValueActive,
            ],
          })(({ ownerState: e }) =>
            (0, en.Z)(
              { cursor: 'inherit' },
              e.emptyValueFocused && {
                top: 0,
                bottom: 0,
                position: 'absolute',
                outline: '1px solid #999',
                width: '100%',
              }
            )
          ),
          eF = (0, c.ZP)('span', {
            name: 'MuiRating',
            slot: 'Icon',
            overridesResolver: (e, t) => {
              let { ownerState: r } = e;
              return [
                t.icon,
                r.iconEmpty && t.iconEmpty,
                r.iconFilled && t.iconFilled,
                r.iconHover && t.iconHover,
                r.iconFocus && t.iconFocus,
                r.iconActive && t.iconActive,
              ];
            },
          })(({ theme: e, ownerState: t }) =>
            (0, en.Z)(
              {
                display: 'flex',
                transition: e.transitions.create('transform', {
                  duration: e.transitions.duration.shortest,
                }),
                pointerEvents: 'none',
              },
              t.iconActive && { transform: 'scale(1.2)' },
              t.iconEmpty && { color: (e.vars || e).palette.action.disabled }
            )
          ),
          eM = (0, c.ZP)('span', {
            name: 'MuiRating',
            slot: 'Decimal',
            shouldForwardProp: e => (0, eZ.Z)(e) && 'iconActive' !== e,
            overridesResolver: (e, t) => {
              let { iconActive: r } = e;
              return [t.decimal, r && t.iconActive];
            },
          })(({ iconActive: e }) =>
            (0, en.Z)({ position: 'relative' }, e && { transform: 'scale(1.2)' })
          );
        function eA(e) {
          let t = (0, ei.Z)(e, eI);
          return (0, a.jsx)('span', (0, en.Z)({}, t));
        }
        function eE(e) {
          let {
              classes: t,
              disabled: r,
              emptyIcon: s,
              focus: i,
              getLabelText: n,
              highlightSelectedOnly: l,
              hover: d,
              icon: c,
              IconContainerComponent: m,
              isActive: p,
              itemValue: u,
              labelProps: x,
              name: f,
              onBlur: g,
              onChange: h,
              onClick: y,
              onFocus: b,
              readOnly: v,
              ownerState: j,
              ratingValue: Z,
              ratingValueRounded: k,
            } = e,
            w = l ? u === Z : u <= Z,
            C = u <= d,
            S = u <= i,
            I = u === k,
            P = (0, ex.Z)(),
            _ = (0, a.jsx)(eF, {
              as: m,
              value: u,
              className: (0, el.Z)(
                t.icon,
                w ? t.iconFilled : t.iconEmpty,
                C && t.iconHover,
                S && t.iconFocus,
                p && t.iconActive
              ),
              ownerState: (0, en.Z)({}, j, {
                iconEmpty: !w,
                iconFilled: w,
                iconHover: C,
                iconFocus: S,
                iconActive: p,
              }),
              children: s && !w ? s : c,
            });
          return v
            ? (0, a.jsx)('span', (0, en.Z)({}, x, { children: _ }))
            : (0, a.jsxs)(o.Fragment, {
                children: [
                  (0, a.jsxs)(
                    eR,
                    (0, en.Z)(
                      { ownerState: (0, en.Z)({}, j, { emptyValueFocused: void 0 }), htmlFor: P },
                      x,
                      {
                        children: [
                          _,
                          (0, a.jsx)('span', { className: t.visuallyHidden, children: n(u) }),
                        ],
                      }
                    )
                  ),
                  (0, a.jsx)('input', {
                    className: t.visuallyHidden,
                    onFocus: b,
                    onBlur: g,
                    onChange: h,
                    onClick: y,
                    disabled: r,
                    value: u,
                    id: P,
                    type: 'radio',
                    name: f,
                    checked: I,
                  }),
                ],
              });
        }
        let eT = (0, a.jsx)(eb, { fontSize: 'inherit' }),
          eB = (0, a.jsx)(ev, { fontSize: 'inherit' });
        function eL(e) {
          return `${e} Star${1 !== e ? 's' : ''}`;
        }
        let eW = o.forwardRef(function (e, t) {
          let r = (0, ej.i)({ name: 'MuiRating', props: e }),
            {
              className: s,
              defaultValue: i = null,
              disabled: n = !1,
              emptyIcon: l = eB,
              emptyLabelText: d = 'Empty',
              getLabelText: c = eL,
              highlightSelectedOnly: m = !1,
              icon: p = eT,
              IconContainerComponent: u = eA,
              max: x = 5,
              name: f,
              onChange: g,
              onChangeActive: h,
              onMouseLeave: y,
              onMouseMove: b,
              precision: v = 1,
              readOnly: j = !1,
              size: Z = 'medium',
              value: k,
            } = r,
            w = (0, ei.Z)(r, eP),
            C = (0, ex.Z)(f),
            [S, I] = (0, ef.Z)({ controlled: k, default: i, name: 'Rating' }),
            P = e_(S, v),
            _ = (0, ep.V)(),
            [{ hover: $, focus: z }, R] = o.useState({ hover: -1, focus: -1 }),
            F = P;
          -1 !== $ && (F = $), -1 !== z && (F = z);
          let { isFocusVisibleRef: M, onBlur: A, onFocus: E, ref: T } = (0, eg.Z)(),
            [B, L] = o.useState(!1),
            W = o.useRef(),
            D = (0, eh.Z)(T, W, t),
            N = e => {
              let t = '' === e.target.value ? null : parseFloat(e.target.value);
              -1 !== $ && (t = $), I(t), g && g(e, t);
            },
            Y = e => {
              (0 !== e.clientX || 0 !== e.clientY) &&
                (R({ hover: -1, focus: -1 }),
                I(null),
                g && parseFloat(e.target.value) === P && g(e, null));
            },
            q = e => {
              E(e), !0 === M.current && L(!0);
              let t = parseFloat(e.target.value);
              R(e => ({ hover: e.hover, focus: t }));
            },
            O = e => {
              -1 === $ &&
                (A(e), !1 === M.current && L(!1), R(e => ({ hover: e.hover, focus: -1 })));
            },
            [H, X] = o.useState(!1),
            U = (0, en.Z)({}, r, {
              defaultValue: i,
              disabled: n,
              emptyIcon: l,
              emptyLabelText: d,
              emptyValueFocused: H,
              focusVisible: B,
              getLabelText: c,
              icon: p,
              IconContainerComponent: u,
              max: x,
              precision: v,
              readOnly: j,
              size: Z,
            }),
            V = e$(U);
          return (0, a.jsxs)(
            ez,
            (0, en.Z)(
              {
                ref: D,
                onMouseMove: e => {
                  b && b(e);
                  let { right: t, left: r, width: a } = W.current.getBoundingClientRect(),
                    s = e_(x * (_ ? (t - e.clientX) / a : (e.clientX - r) / a) + v / 2, v);
                  (s = (0, ed.Z)(s, v, x)),
                    R(e => (e.hover === s && e.focus === s ? e : { hover: s, focus: s })),
                    L(!1),
                    h && $ !== s && h(e, s);
                },
                onMouseLeave: e => {
                  y && y(e), R({ hover: -1, focus: -1 }), h && -1 !== $ && h(e, -1);
                },
                className: (0, el.Z)(V.root, s, j && 'MuiRating-readOnly'),
                ownerState: U,
                role: j ? 'img' : null,
                'aria-label': j ? c(F) : null,
              },
              w,
              {
                children: [
                  Array.from(Array(x)).map((e, t) => {
                    let r = t + 1,
                      s = {
                        classes: V,
                        disabled: n,
                        emptyIcon: l,
                        focus: z,
                        getLabelText: c,
                        highlightSelectedOnly: m,
                        hover: $,
                        icon: p,
                        IconContainerComponent: u,
                        name: C,
                        onBlur: O,
                        onChange: N,
                        onClick: Y,
                        onFocus: q,
                        ratingValue: F,
                        ratingValueRounded: P,
                        readOnly: j,
                        ownerState: U,
                      },
                      o = r === Math.ceil(F) && (-1 !== $ || -1 !== z);
                    if (v < 1) {
                      let e = Array.from(Array(1 / v));
                      return (0, a.jsx)(
                        eM,
                        {
                          className: (0, el.Z)(V.decimal, o && V.iconActive),
                          ownerState: U,
                          iconActive: o,
                          children: e.map((t, o) => {
                            let i = e_(r - 1 + (o + 1) * v, v);
                            return (0, a.jsx)(
                              eE,
                              (0, en.Z)({}, s, {
                                isActive: !1,
                                itemValue: i,
                                labelProps: {
                                  style:
                                    e.length - 1 === o
                                      ? {}
                                      : {
                                          width: i === F ? `${(o + 1) * v * 100}%` : '0%',
                                          overflow: 'hidden',
                                          position: 'absolute',
                                        },
                                },
                              }),
                              i
                            );
                          }),
                        },
                        r
                      );
                    }
                    return (0, a.jsx)(eE, (0, en.Z)({}, s, { isActive: o, itemValue: r }), r);
                  }),
                  !j &&
                    !n &&
                    (0, a.jsxs)(eR, {
                      className: (0, el.Z)(V.label, V.labelEmptyValue),
                      ownerState: U,
                      children: [
                        (0, a.jsx)('input', {
                          className: V.visuallyHidden,
                          value: '',
                          id: `${C}-empty`,
                          type: 'radio',
                          name: C,
                          checked: null == P,
                          onFocus: () => X(!0),
                          onBlur: () => X(!1),
                          onChange: N,
                        }),
                        (0, a.jsx)('span', { className: V.visuallyHidden, children: d }),
                      ],
                    }),
                ],
              }
            )
          );
        });
        var eD = r('(ssr)/./node_modules/@mui/icons-material/FormatQuote.js');
        let eN = (0, c.ZP)(i.Z)(({ theme: e, variant: t }) => {
            let r = {
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
            return 'primary' === t
              ? {
                  ...r,
                  background: `linear-gradient(135deg, ${e.palette.primary.dark}20 0%, ${e.palette.primary.main}10 100%)`,
                  borderLeft: `4px solid ${e.palette.primary.main}`,
                }
              : 'secondary' === t
                ? {
                    ...r,
                    background: `linear-gradient(135deg, ${e.palette.secondary.dark}20 0%, ${e.palette.secondary.main}10 100%)`,
                    borderLeft: `4px solid ${e.palette.secondary.main}`,
                  }
                : 'mystical' === t
                  ? {
                      ...r,
                      background: `linear-gradient(135deg, ${e.palette.primary.dark}20 0%, ${e.palette.secondary.dark}20 100%)`,
                      borderLeft: `4px solid ${e.palette.secondary.main}`,
                    }
                  : {
                      ...r,
                      background: e.palette.background.paper,
                      borderLeft: `4px solid ${e.palette.primary.main}`,
                    };
          }),
          eY = (0, c.ZP)(eD.Z)(({ theme: e }) => ({
            position: 'absolute',
            top: 10,
            right: 10,
            fontSize: 40,
            color: e.palette.primary.main,
            opacity: 0.2,
            transform: 'rotate(180deg)',
          })),
          eq = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            display: 'flex',
            alignItems: 'center',
            marginTop: e.spacing(2),
          }));
        function eO({
          text: e,
          name: t,
          mbtiType: r,
          avatarSrc: s,
          rating: o,
          variant: l = 'default',
          animation: d = 'fadeIn',
          onScroll: c = !1,
          sx: m = {},
        }) {
          return a.jsx(ee.F, {
            animation: d,
            duration: 'normal',
            onScroll: c,
            children: (0, a.jsxs)(eN, {
              variant: l,
              sx: m,
              children: [
                a.jsx(eY, {}),
                a.jsx(n.Z, {
                  variant: 'body1',
                  sx: { fontStyle: 'italic', mb: 2, position: 'relative', zIndex: 1 },
                  children: e,
                }),
                (0, a.jsxs)(eq, {
                  children: [
                    a.jsx(eo.Z, {
                      src: s,
                      alt: t,
                      sx: {
                        width: 50,
                        height: 50,
                        mr: 2,
                        bgcolor: e => (s ? void 0 : e.palette.primary.main),
                      },
                      children:
                        !s &&
                        (t
                          ? t
                              .split(' ')
                              .map(e => e[0])
                              .join('')
                              .toUpperCase()
                          : ''),
                    }),
                    (0, a.jsxs)(i.Z, {
                      children: [
                        a.jsx(n.Z, {
                          variant: 'subtitle1',
                          sx: { fontWeight: 'bold' },
                          children: t,
                        }),
                        r &&
                          (0, a.jsxs)(n.Z, {
                            variant: 'caption',
                            sx: { color: 'text.secondary', display: 'block' },
                            children: ['MBTI: ', r],
                          }),
                        void 0 !== o &&
                          a.jsx(eW, { value: o, readOnly: !0, size: 'small', sx: { mt: 0.5 } }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function eH(e, t = {}) {
          let r = { quality: 80, format: 'webp', ...t };
          if (e.startsWith('http') || e.startsWith('https')) return e;
          let a = e,
            s = [];
          return (
            r.width && s.push(`w=${r.width}`),
            r.height && s.push(`h=${r.height}`),
            r.quality && s.push(`q=${r.quality}`),
            r.format && s.push(`fm=${r.format}`),
            s.length > 0 && (a += `?${s.join('&')}`),
            a
          );
        }
        var eX = r('(ssr)/./node_modules/@mui/icons-material/ArrowBackIosNew.js'),
          eU = r('(ssr)/./node_modules/@mui/icons-material/ArrowForwardIos.js');
        let eV = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'relative',
            padding: e.spacing(8, 0),
            background: `linear-gradient(135deg, ${e.palette.primary.dark}10, ${e.palette.secondary.dark}10)`,
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
          })),
          eG = (0, c.ZP)(K.Z)(({ theme: e }) => ({
            background: e.palette.background.paper,
            boxShadow: `0 4px 10px rgba(0, 0, 0, 0.1), 0 0 10px ${e.palette.primary.main}20`,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: e.palette.background.default,
              transform: 'scale(1.1)',
              boxShadow: `0 6px 15px rgba(0, 0, 0, 0.15), 0 0 15px ${e.palette.primary.main}30`,
            },
          })),
          eJ = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            maxWidth: 800,
            margin: '0 auto',
          })),
          eQ = (0, c.ZP)(i.Z)(({ theme: e, offset: t }) => ({
            display: 'flex',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(${t}%)`,
          })),
          eK = (0, c.ZP)(i.Z)(({ theme: e, active: t }) => ({
            flex: '0 0 100%',
            opacity: t ? 1 : 0.3,
            transform: t ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: e.spacing(2),
          })),
          e0 = (0, c.ZP)(i.Z)(({ theme: e, position: t }) => ({
            position: 'absolute',
            ['top' === t ? 'top' : 'bottom']: -10,
            ['top' === t ? 'left' : 'right']: -10,
            color: e.palette.primary.main,
            opacity: 0.1,
            fontSize: 80,
            transform: 'top' === t ? 'rotate(180deg)' : 'none',
            zIndex: 0,
          }));
        function e1() {
          let e = (0, o.useMemo)(
              () => [
                {
                  id: 1,
                  name: '김지민',
                  mbtiType: 'ENFP',
                  avatarSrc: eH('/images/avatars/avatar1.jpg', {
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
                  avatarSrc: eH('/images/avatars/avatar2.jpg', {
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
                  avatarSrc: eH('/images/avatars/avatar3.jpg', {
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
                  avatarSrc: eH('/images/avatars/avatar4.jpg', {
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
            [t, r] = (0, o.useState)(0),
            [n, d] = (0, o.useState)(!0),
            c = (0, o.useCallback)(() => {
              d(!1);
              let e = setTimeout(() => {
                d(!0);
              }, 3e4);
              return () => clearTimeout(e);
            }, []),
            m = (0, o.useCallback)(
              $(() => {
                c(), r(t => (0 === t ? e.length - 1 : t - 1));
              }, 300),
              [e.length, c]
            ),
            p = (0, o.useCallback)(
              $(() => {
                c(), r(t => (t === e.length - 1 ? 0 : t + 1));
              }, 300),
              [e.length, c]
            ),
            u = (0, o.useCallback)(
              e => {
                c(), r(e);
              },
              [c]
            );
          return a.jsx(eV, {
            children: a.jsx(s.$0, {
              children: (0, a.jsxs)(l.Z, {
                maxWidth: 'lg',
                children: [
                  a.jsx(g, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    onScroll: !0,
                    children: a.jsx(i.Z, {
                      sx: { textAlign: 'center', mb: 2 },
                      children: a.jsx(q.Pr, {
                        title: '사용자 후기',
                        subtitle: '달빛 연애 연구소를 경험한 사용자들의 이야기',
                        align: 'center',
                        hasGradient: !0,
                      }),
                    }),
                  }),
                  a.jsx(g, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    delay: 200,
                    onScroll: !0,
                    children: a.jsx(i.Z, {
                      sx: { display: 'flex', justifyContent: 'center', mb: 6 },
                      children: a.jsx(s.Gg, {
                        variant: 'mystical',
                        thickness: 2,
                        glow: !0,
                        decorated: !0,
                        icon: a.jsx(eD.Z, {}),
                        sx: { maxWidth: 300 },
                      }),
                    }),
                  }),
                  (0, a.jsxs)(g, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    onScroll: !0,
                    children: [
                      (0, a.jsxs)(i.Z, {
                        sx: { position: 'relative', my: 4 },
                        children: [
                          a.jsx(eJ, {
                            children: a.jsx(eQ, {
                              offset: -(100 * t),
                              children: e.map((e, r) =>
                                a.jsx(
                                  eK,
                                  {
                                    active: r === t,
                                    children: (0, a.jsxs)(i.Z, {
                                      sx: { position: 'relative' },
                                      children: [
                                        a.jsx(e0, {
                                          position: 'top',
                                          children: a.jsx(eD.Z, { fontSize: 'inherit' }),
                                        }),
                                        a.jsx(eO, {
                                          text: e.text,
                                          name: e.name,
                                          mbtiType: e.mbtiType,
                                          avatarSrc: e.avatarSrc,
                                          rating: e.rating,
                                          variant: 'mystical',
                                          sx: {
                                            position: 'relative',
                                            zIndex: 2,
                                            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1), 0 0 20px ${e.color}30`,
                                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transform:
                                              r === t ? 'translateY(0)' : 'translateY(20px)',
                                            opacity: r === t ? 1 : 0.5,
                                          },
                                        }),
                                        a.jsx(e0, {
                                          position: 'bottom',
                                          children: a.jsx(eD.Z, { fontSize: 'inherit' }),
                                        }),
                                      ],
                                    }),
                                  },
                                  e.id
                                )
                              ),
                            }),
                          }),
                          (0, a.jsxs)(i.Z, {
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
                              a.jsx(g, {
                                animation: 'fadeIn',
                                duration: 'fast',
                                children: a.jsx(eG, {
                                  onClick: m,
                                  size: 'large',
                                  'aria-label': '이전 후기',
                                  sx: { width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } },
                                  children: a.jsx(I, {
                                    animation: 'pulse',
                                    duration: 'slow',
                                    infinite: !0,
                                    children: a.jsx(eX.Z, { fontSize: 'small' }),
                                  }),
                                }),
                              }),
                              a.jsx(g, {
                                animation: 'fadeIn',
                                duration: 'fast',
                                children: a.jsx(eG, {
                                  onClick: p,
                                  size: 'large',
                                  'aria-label': '다음 후기',
                                  sx: { width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } },
                                  children: a.jsx(I, {
                                    animation: 'pulse',
                                    duration: 'slow',
                                    infinite: !0,
                                    children: a.jsx(eU.Z, { fontSize: 'small' }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsx(i.Z, {
                        sx: { display: 'flex', justifyContent: 'center', mt: 4 },
                        children: e.map((e, r) =>
                          a.jsx(
                            g,
                            {
                              animation: 'fadeIn',
                              duration: 'normal',
                              delay: 100 * r,
                              children: a.jsx(i.Z, {
                                sx: {
                                  width: 12,
                                  height: 12,
                                  borderRadius: '50%',
                                  mx: 0.8,
                                  bgcolor: r === t ? e.color : 'grey.300',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  transform: r === t ? 'scale(1.2)' : 'scale(1)',
                                  boxShadow: r === t ? `0 0 10px ${e.color}80` : 'none',
                                  '&:hover': {
                                    transform: 'scale(1.3)',
                                    bgcolor: e.color,
                                    opacity: 0.8,
                                  },
                                },
                                onClick: () => u(r),
                                'aria-label': `${r + 1}번 후기로 이동`,
                              }),
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
                  a.jsx(g, {
                    animation: 'fadeIn',
                    duration: 'normal',
                    delay: 600,
                    onScroll: !0,
                    children: a.jsx(i.Z, {
                      sx: { display: 'flex', justifyContent: 'center', mt: 8 },
                      children: a.jsx(s.Gg, {
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
        let e2 = (0, c.ZP)(i.Z)(({ theme: e }) => ({
            display: 'flex',
            justifyContent: 'center',
            marginBottom: e.spacing(4),
            position: 'relative',
            perspective: '1000px',
            [e.breakpoints.down('md')]: { flexDirection: 'column', alignItems: 'center' },
          })),
          e5 = (0, c.ZP)(P.Z)(({ theme: e, index: t, isHovered: r }) => ({
            maxWidth: 200,
            minHeight: 300,
            margin: e.spacing(0, 2),
            transform: `rotate(${(t - 1) * 10}deg) translateZ(${r ? 50 : 0}px)`,
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            zIndex: r ? 10 : t,
            boxShadow: r
              ? `0 20px 30px rgba(0, 0, 0, 0.3), 0 0 30px ${e.palette.primary.main}40`
              : '0 10px 20px rgba(0, 0, 0, 0.2)',
            [e.breakpoints.down('md')]: {
              margin: e.spacing(2, 0),
              transform: r ? 'translateY(-10px)' : 'none',
            },
          })),
          e3 = (0, c.ZP)(i.Z)(({ theme: e, size: t, top: r, left: a, delay: s, color: o }) => ({
            position: 'absolute',
            width: t,
            height: t,
            top: r,
            left: a,
            borderRadius: '50%',
            background: o || e.palette.secondary.main,
            boxShadow: `0 0 ${t}px ${t / 2}px ${o || e.palette.secondary.main}`,
            animation: `twinkle ${2 + 3 * Math.random()}s ease-in-out ${s}s infinite`,
            opacity: 0.7,
            zIndex: 0,
            '@keyframes twinkle': {
              '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
              '50%': { opacity: 0.3, transform: 'scale(0.8)' },
            },
          })),
          e4 = (0, c.ZP)(i.Z)(({ theme: e }) => ({
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
              background: `radial-gradient(circle at center, ${e.palette.primary.main}20 0%, transparent 70%)`,
              opacity: 0.5,
              zIndex: 0,
              borderRadius: '50%',
            },
          }));
        function e8() {
          let e = (0, m.useRouter)(),
            [t, r] = (0, o.useState)(null),
            [d, c] = (0, o.useState)([]),
            p = (0, o.useCallback)(
              $(() => {
                let t = document.createElement('div');
                (t.style.position = 'fixed'),
                  (t.style.top = '0'),
                  (t.style.left = '0'),
                  (t.style.width = '100%'),
                  (t.style.height = '3px'),
                  (t.style.background = 'linear-gradient(to right, #6B3FA0, #E91E63)'),
                  (t.style.zIndex = '9999'),
                  (t.style.animation = 'loading 1s infinite linear'),
                  document.body.appendChild(t);
                let r = document.createElement('style');
                (r.innerHTML = `
        @keyframes loading {
          0% { width: 0; }
          50% { width: 50%; }
          100% { width: 100%; }
        }
      `),
                  document.head.appendChild(r),
                  setTimeout(() => {
                    e.push('/test');
                  }, 300);
              }, 500),
              [e]
            ),
            u = (0, o.useCallback)(e => {
              r(e);
            }, []),
            x = (0, o.useCallback)(() => {
              r(null);
            }, []),
            f = (0, o.useMemo)(
              () => [
                {
                  id: 1,
                  title: 'ENFP',
                  description: '열정적인 연애 탐험가',
                  variant: 'primary',
                  icon: a.jsx(R.Z, {}),
                  color: '#6B3FA0',
                },
                {
                  id: 2,
                  title: 'INFJ',
                  description: '이상적 관계의 수호자',
                  variant: 'secondary',
                  icon: a.jsx(F.Z, {}),
                  color: '#E91E63',
                },
                {
                  id: 3,
                  title: 'ENTJ',
                  description: '목표 지향적 연애 리더',
                  variant: 'primary',
                  icon: a.jsx(X.Z, {}),
                  color: '#FF9800',
                },
              ],
              []
            );
          return a.jsx(q._H, {
            variant: 'mystical',
            hasStars: !1,
            children: (0, a.jsxs)(i.Z, {
              sx: { position: 'relative', overflow: 'hidden' },
              children: [
                a.jsx(w, { type: 'stars', starCount: 0 }),
                d.map(e =>
                  a.jsx(
                    e3,
                    { size: e.size, top: e.top, left: e.left, delay: e.delay, color: e.color },
                    e.id
                  )
                ),
                (0, a.jsxs)(l.Z, {
                  maxWidth: 'lg',
                  children: [
                    a.jsx(g, {
                      animation: 'fadeIn',
                      duration: 'normal',
                      onScroll: !0,
                      children: (0, a.jsxs)(i.Z, {
                        sx: { textAlign: 'center', mb: 2 },
                        children: [
                          a.jsx(q.QD, {
                            variant: 'h2',
                            textVariant: 'mystical',
                            sx: { fontWeight: 'bold', textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' },
                            children: '당신의 MBTI 연애 유형은 무엇일까요?',
                          }),
                          a.jsx(s.Gg, {
                            variant: 'mystical',
                            thickness: 2,
                            glow: !0,
                            decorated: !0,
                            sx: { maxWidth: 300, mx: 'auto', my: 2 },
                          }),
                          a.jsx(n.Z, {
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
                    a.jsx(g, {
                      animation: 'zoomIn',
                      duration: 'normal',
                      delay: 300,
                      onScroll: !0,
                      children: a.jsx(e2, {
                        children: f.map((e, r) =>
                          a.jsx(
                            e5,
                            {
                              variant: e.variant,
                              title: e.title,
                              index: r,
                              isHovered: t === e.id,
                              onMouseEnter: () => u(e.id),
                              onMouseLeave: x,
                              sx: { opacity: t === e.id ? 1 : 0.9 },
                              children: (0, a.jsxs)(i.Z, {
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
                                  a.jsx(I, {
                                    animation: t === e.id ? 'pulse' : 'none',
                                    duration: 'slow',
                                    infinite: t === e.id,
                                    color: 'white',
                                    size: 'large',
                                    sx: { mb: 2 },
                                    children: e.icon,
                                  }),
                                  a.jsx(n.Z, {
                                    variant: 'body1',
                                    sx: {
                                      textAlign: 'center',
                                      color: 'white',
                                      fontWeight: 'bold',
                                      mb: 1,
                                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                                    },
                                    children: e.description,
                                  }),
                                  a.jsx(i.Z, {
                                    sx: {
                                      position: 'absolute',
                                      bottom: 10,
                                      right: 10,
                                      opacity: 0.2,
                                      transform: 'rotate(-15deg)',
                                    },
                                    children: e.icon,
                                  }),
                                ],
                              }),
                            },
                            e.id
                          )
                        ),
                      }),
                    }),
                    a.jsx(g, {
                      animation: 'slideUp',
                      duration: 'normal',
                      delay: 500,
                      onScroll: !0,
                      children: a.jsx(e4, {
                        children: a.jsx(es, {
                          title: '지금 바로 테스트를 시작하세요!',
                          description: '당신의 MBTI 연애 유형을 알아보고 이상형을 찾아보세요.',
                          buttonText: '테스트 시작하기',
                          onClick: p,
                          variant: 'mystical',
                          buttonVariant: 'glow',
                          buttonSize: 'large',
                          icon: a.jsx(I, {
                            animation: 'pulse',
                            duration: 'slow',
                            infinite: !0,
                            children: a.jsx(z.Z, {}),
                          }),
                          sx: {
                            maxWidth: 500,
                            position: 'relative',
                            zIndex: 2,
                            boxShadow: e =>
                              `0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px ${e.palette.primary.main}30`,
                            '& .MuiButton-root': {
                              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                              '&:hover': {
                                transform: 'translateY(-5px) scale(1.05)',
                                boxShadow: e =>
                                  `0 15px 30px rgba(0, 0, 0, 0.3), 0 0 30px ${e.palette.primary.main}50`,
                              },
                            },
                          },
                        }),
                      }),
                    }),
                    a.jsx(g, {
                      animation: 'fadeIn',
                      duration: 'normal',
                      delay: 700,
                      onScroll: !0,
                      children: a.jsx(i.Z, {
                        sx: { display: 'flex', justifyContent: 'center', mt: 8 },
                        children: a.jsx(s.Gg, {
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
        function e6() {
          return (0, a.jsxs)(s.Xg, {
            variant: 'home',
            children: [a.jsx(Y, {}), a.jsx(Q, {}), a.jsx(e1, {}), a.jsx(e8, {})],
          });
        }
      },
      '(rsc)/./src/app/page.js': (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var a = r(
          '(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js'
        );
        let s = (0,
        r('(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js')
          .createProxy)(
          String.raw`C:\Users\전준영\Documents\augment-projects\MBTI test for dating\src\app\components\HomePage.jsx#default`
        );
        function o() {
          return a.jsx(s, {});
        }
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = e => t((t.s = e)),
    a = t.X(0, [276, 576, 5, 541, 421, 246, 687, 191], () =>
      r(
        '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fpage&name=app%2Fpage&pagePath=private-next-app-dir%2Fpage.js&appDir=C%3A%5CUsers%5C%EC%A0%84%EC%A4%80%EC%98%81%5CDocuments%5Caugment-projects%5CMBTI%20test%20for%20dating%5Csrc%5Capp&appPaths=%2Fpage&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=false&preferredRegion=&middlewareConfig=e30%3D!'
      )
    );
  module.exports = a;
})();
