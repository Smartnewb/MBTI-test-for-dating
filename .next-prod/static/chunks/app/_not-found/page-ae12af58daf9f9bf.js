(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [409],
  {
    '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=next%2Fdist%2Fclient%2Fcomponents%2Fnot-found-error&page=%2F_not-found%2Fpage!':
      function (e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/_not-found/page',
          function () {
            return t(
              '(app-pages-browser)/./node_modules/next/dist/client/components/not-found-error.js'
            );
          },
        ]);
      },
    '(app-pages-browser)/./node_modules/next/dist/client/components/not-found-error.js': function (
      e,
      n,
      t
    ) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        Object.defineProperty(n, 'default', {
          enumerable: !0,
          get: function () {
            return d;
          },
        }),
        t('(app-pages-browser)/./node_modules/@swc/helpers/esm/_interop_require_default.js');
      let o = t('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js');
      t('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js');
      let r = {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        s = { display: 'inline-block' },
        i = {
          display: 'inline-block',
          margin: '0 20px 0 0',
          padding: '0 23px 0 0',
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: 'top',
          lineHeight: '49px',
        },
        l = { fontSize: 14, fontWeight: 400, lineHeight: '49px', margin: 0 };
      function d() {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)('title', { children: '404: This page could not be found.' }),
            (0, o.jsx)('div', {
              style: r,
              children: (0, o.jsxs)('div', {
                children: [
                  (0, o.jsx)('style', {
                    dangerouslySetInnerHTML: {
                      __html:
                        'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}',
                    },
                  }),
                  (0, o.jsx)('h1', { className: 'next-error-h1', style: i, children: '404' }),
                  (0, o.jsx)('div', {
                    style: s,
                    children: (0, o.jsx)('h2', {
                      style: l,
                      children: 'This page could not be found.',
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, '__esModule', { value: !0 }),
        Object.assign(n.default, n),
        (e.exports = n.default));
    },
  },
  function (e) {
    e.O(0, [971, 117, 744], function () {
      return e(
        (e.s =
          '(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=next%2Fdist%2Fclient%2Fcomponents%2Fnot-found-error&page=%2F_not-found%2Fpage!')
      );
    }),
      (_N_E = e.O());
  },
]);
