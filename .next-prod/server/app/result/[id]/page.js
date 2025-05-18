(() => {
  var e = {};
  (e.id = 299),
    (e.ids = [299]),
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
      '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fresult%2F%5Bid%5D%2Fpage&name=app%2Fresult%2F%5Bid%5D%2Fpage&pagePath=private-next-app-dir%2Fresult%2F%5Bid%5D%2Fpage.jsx&appDir=C%3A%5CUsers%5C%EC%A0%84%EC%A4%80%EC%98%81%5CDocuments%5Caugment-projects%5CMBTI%20test%20for%20dating%5Csrc%5Capp&appPaths=%2Fresult%2F%5Bid%5D%2Fpage&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=false&preferredRegion=&middlewareConfig=e30%3D!':
        (e, s, r) => {
          'use strict';
          r.r(s),
            r.d(s, {
              GlobalError: () => o.a,
              __next_app__: () => c,
              originalPathname: () => u,
              pages: () => p,
              routeModule: () => x,
              tree: () => l,
            }),
            r('(rsc)/./src/app/result/[id]/page.jsx'),
            r('(rsc)/./src/app/layout.js'),
            r('(rsc)/./node_modules/next/dist/client/components/not-found-error.js');
          var t = r(
              '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?d969'
            ),
            n = r('(rsc)/./node_modules/next/dist/server/future/route-kind.js'),
            a = r('(rsc)/./node_modules/next/dist/client/components/error-boundary.js'),
            o = r.n(a),
            i = r('(rsc)/./node_modules/next/dist/server/app-render/entry-base.js'),
            d = {};
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
              ].indexOf(e) && (d[e] = () => i[e]);
          r.d(s, d);
          let l = [
              '',
              {
                children: [
                  'result',
                  {
                    children: [
                      '[id]',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () =>
                                Promise.resolve().then(
                                  r.bind(r, '(rsc)/./src/app/result/[id]/page.jsx')
                                ),
                              'C:\\Users\\전준영\\Documents\\augment-projects\\MBTI test for dating\\src\\app\\result\\[id]\\page.jsx',
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
            p = [
              'C:\\Users\\전준영\\Documents\\augment-projects\\MBTI test for dating\\src\\app\\result\\[id]\\page.jsx',
            ],
            u = '/result/[id]/page',
            c = { require: r, loadChunk: () => Promise.resolve() },
            x = new t.AppPageRouteModule({
              definition: {
                kind: n.x.APP_PAGE,
                page: '/result/[id]/page',
                pathname: '/result/[id]',
                bundlePath: '',
                filename: '',
                appPaths: [],
              },
              userland: { loaderTree: l },
            });
        },
      '(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Cresult%5C%5C%5Bid%5D%5C%5Cpage.jsx%22%2C%22ids%22%3A%5B%5D%7D&server=true!':
        (e, s, r) => {
          Promise.resolve().then(r.bind(r, '(ssr)/./src/app/result/[id]/page.jsx'));
        },
      '(ssr)/./node_modules/uuid/dist/esm-node/v4.js': (e, s, r) => {
        'use strict';
        r.d(s, { Z: () => l });
        var t = r('crypto'),
          n = r.n(t);
        let a = { randomUUID: n().randomUUID },
          o = new Uint8Array(256),
          i = o.length,
          d = [];
        for (let e = 0; e < 256; ++e) d.push((e + 256).toString(16).slice(1));
        let l = function (e, s, r) {
          if (a.randomUUID && !s && !e) return a.randomUUID();
          let t =
            (e = e || {}).random ||
            (
              e.rng ||
              function () {
                return i > o.length - 16 && (n().randomFillSync(o), (i = 0)), o.slice(i, (i += 16));
              }
            )();
          if (((t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128), s)) {
            r = r || 0;
            for (let e = 0; e < 16; ++e) s[r + e] = t[e];
            return s;
          }
          return (function (e, s = 0) {
            return (
              d[e[s + 0]] +
              d[e[s + 1]] +
              d[e[s + 2]] +
              d[e[s + 3]] +
              '-' +
              d[e[s + 4]] +
              d[e[s + 5]] +
              '-' +
              d[e[s + 6]] +
              d[e[s + 7]] +
              '-' +
              d[e[s + 8]] +
              d[e[s + 9]] +
              '-' +
              d[e[s + 10]] +
              d[e[s + 11]] +
              d[e[s + 12]] +
              d[e[s + 13]] +
              d[e[s + 14]] +
              d[e[s + 15]]
            );
          })(t);
        };
      },
      '(ssr)/./src/app/result/[id]/page.jsx': (e, s, r) => {
        'use strict';
        r.r(s), r.d(s, { default: () => m });
        var t = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
          ),
          n = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          a = r('(ssr)/./node_modules/@mui/material/CircularProgress/CircularProgress.js'),
          o = r('(ssr)/./node_modules/@mui/material/Typography/Typography.js'),
          i = r('(ssr)/./node_modules/@mui/material/Button/Button.js'),
          d = r('(ssr)/./node_modules/@mui/material/Box/Box.js'),
          l = r('(ssr)/./node_modules/next/dist/api/navigation.js'),
          p = r('(ssr)/./src/app/components/animations.jsx'),
          u = r('(ssr)/./src/app/components/layout/index.js'),
          c = r('(ssr)/./src/app/components/test/TestResult.jsx');
        r('(ssr)/./src/app/services/resultService.js');
        var x = r('(ssr)/./node_modules/@mui/icons-material/Favorite.js');
        function m({ params: e }) {
          let s = (0, l.useRouter)(),
            [r, m] = (0, n.useState)(null),
            [g, j] = (0, n.useState)(!0),
            [C, h] = (0, n.useState)(null);
          e.id;
          let f = () => {
            s.push('/test');
          };
          return g
            ? t.jsx(u.Xg, {
                variant: 'result',
                children: (0, t.jsxs)(u.$0, {
                  centered: !0,
                  fullHeight: !0,
                  children: [
                    t.jsx(a.Z, { color: 'secondary' }),
                    t.jsx(o.Z, { variant: 'h5', sx: { mt: 3 }, children: '결과를 불러오는 중...' }),
                  ],
                }),
              })
            : C
              ? t.jsx(u.Xg, {
                  variant: 'result',
                  children: (0, t.jsxs)(u.$0, {
                    centered: !0,
                    fullHeight: !0,
                    children: [
                      t.jsx(o.Z, {
                        variant: 'h4',
                        color: 'error',
                        children: '오류가 발생했습니다',
                      }),
                      t.jsx(o.Z, {
                        variant: 'body1',
                        color: 'error',
                        sx: { mt: 2, mb: 4 },
                        children: C,
                      }),
                      t.jsx(i.Z, {
                        variant: 'contained',
                        color: 'primary',
                        onClick: () => s.push('/test'),
                        children: '테스트 시작하기',
                      }),
                    ],
                  }),
                })
              : r && r.mbtiType
                ? t.jsx(u.Xg, {
                    variant: 'result',
                    children: t.jsx(u.$0, {
                      centered: !0,
                      children: t.jsx(p.F, {
                        animation: 'fadeIn',
                        duration: 'normal',
                        children: (0, t.jsxs)(d.Z, {
                          sx: { maxWidth: 800, mx: 'auto', my: 4 },
                          children: [
                            t.jsx(d.Z, {
                              sx: { display: 'flex', justifyContent: 'center', mb: 4 },
                              children: t.jsx(x.Z, {
                                sx: {
                                  fontSize: 60,
                                  color: 'secondary.main',
                                  filter: 'drop-shadow(0 0 10px rgba(156, 39, 176, 0.5))',
                                },
                              }),
                            }),
                            t.jsx(o.Z, {
                              variant: 'h3',
                              sx: { textAlign: 'center', mb: 4 },
                              children: 'MBTI 연애 유형 결과',
                            }),
                            t.jsx(c.Z, {
                              mbtiType: r.mbtiType,
                              scores: r.scores,
                              idealType: r.idealType,
                              worstMatch: r.worstMatch,
                              onRestart: f,
                            }),
                            t.jsx(d.Z, {
                              sx: { display: 'flex', justifyContent: 'center', mt: 4 },
                              children: t.jsx(i.Z, {
                                variant: 'contained',
                                color: 'primary',
                                onClick: f,
                                children: '나도 테스트 해보기',
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  })
                : t.jsx(u.Xg, {
                    variant: 'result',
                    children: (0, t.jsxs)(u.$0, {
                      centered: !0,
                      fullHeight: !0,
                      children: [
                        t.jsx(o.Z, { variant: 'h4', children: '결과를 찾을 수 없습니다' }),
                        t.jsx(o.Z, {
                          variant: 'body1',
                          sx: { mt: 2, mb: 4 },
                          children: '공유된 결과가 만료되었거나 존재하지 않습니다.',
                        }),
                        t.jsx(i.Z, {
                          variant: 'contained',
                          color: 'primary',
                          onClick: () => s.push('/test'),
                          children: '테스트 시작하기',
                        }),
                      ],
                    }),
                  });
        }
      },
      '(rsc)/./src/app/result/[id]/page.jsx': (e, s, r) => {
        'use strict';
        r.r(s), r.d(s, { default: () => t });
        let t = (0,
        r('(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js')
          .createProxy)(
          String.raw`C:\Users\전준영\Documents\augment-projects\MBTI test for dating\src\app\result\[id]\page.jsx#default`
        );
      },
    });
  var s = require('../../../webpack-runtime.js');
  s.C(e);
  var r = e => s((s.s = e)),
    t = s.X(0, [276, 576, 5, 541, 421, 718, 246, 687, 171, 191, 696], () =>
      r(
        '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fresult%2F%5Bid%5D%2Fpage&name=app%2Fresult%2F%5Bid%5D%2Fpage&pagePath=private-next-app-dir%2Fresult%2F%5Bid%5D%2Fpage.jsx&appDir=C%3A%5CUsers%5C%EC%A0%84%EC%A4%80%EC%98%81%5CDocuments%5Caugment-projects%5CMBTI%20test%20for%20dating%5Csrc%5Capp&appPaths=%2Fresult%2F%5Bid%5D%2Fpage&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=false&preferredRegion=&middlewareConfig=e30%3D!'
      )
    );
  module.exports = t;
})();
