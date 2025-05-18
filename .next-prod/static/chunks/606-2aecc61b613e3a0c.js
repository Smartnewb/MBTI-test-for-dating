'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [606],
  {
    '(app-pages-browser)/./node_modules/@mui/material/CssBaseline/CssBaseline.js': function (
      e,
      t,
      s
    ) {
      var i = s('(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
        r = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
        n = s(
          '(app-pages-browser)/./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
        ),
        a = s('(app-pages-browser)/./node_modules/@mui/material/GlobalStyles/GlobalStyles.js'),
        o = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js');
      let u = (e, t) =>
          (0, i.Z)(
            {
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              boxSizing: 'border-box',
              WebkitTextSizeAdjust: '100%',
            },
            t && !e.vars && { colorScheme: e.palette.mode }
          ),
        l = e =>
          (0, i.Z)({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
            backgroundColor: (e.vars || e).palette.background.default,
            '@media print': { backgroundColor: (e.vars || e).palette.common.white },
          }),
        h = function (e) {
          var t;
          let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = {};
          s &&
            e.colorSchemes &&
            Object.entries(e.colorSchemes).forEach(t => {
              var s;
              let [i, n] = t;
              r[e.getColorSchemeSelector(i).replace(/\s*&/, '')] = {
                colorScheme: null == (s = n.palette) ? void 0 : s.mode,
              };
            });
          let n = (0, i.Z)(
              {
                html: u(e, s),
                '*, *::before, *::after': { boxSizing: 'inherit' },
                'strong, b': { fontWeight: e.typography.fontWeightBold },
                body: (0, i.Z)({ margin: 0 }, l(e), {
                  '&::backdrop': { backgroundColor: (e.vars || e).palette.background.default },
                }),
              },
              r
            ),
            a =
              null == (t = e.components) || null == (t = t.MuiCssBaseline)
                ? void 0
                : t.styleOverrides;
          return a && (n = [n, a]), n;
        };
      t.ZP = function (e) {
        let { children: t, enableColorScheme: s = !1 } = (0, n.i)({
          props: e,
          name: 'MuiCssBaseline',
        });
        return (0, o.jsxs)(r.Fragment, {
          children: [(0, o.jsx)(a.Z, { styles: e => h(e, s) }), t],
        });
      };
    },
    '(app-pages-browser)/./node_modules/@mui/material/GlobalStyles/GlobalStyles.js': function (
      e,
      t,
      s
    ) {
      s.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = s('(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/extends.js');
      s('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js');
      var r = s(
          '(app-pages-browser)/./node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js'
        ),
        n = s('(app-pages-browser)/./node_modules/@mui/system/esm/useTheme.js'),
        a = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        o = function (e) {
          let { styles: t, themeId: s, defaultTheme: i = {} } = e,
            o = (0, n.Z)(i),
            u = 'function' == typeof t ? t((s && o[s]) || o) : t;
          return (0, a.jsx)(r.Z, { styles: u });
        },
        u = s('(app-pages-browser)/./node_modules/@mui/material/styles/defaultTheme.js'),
        l = s('(app-pages-browser)/./node_modules/@mui/material/styles/identifier.js'),
        h = function (e) {
          return (0, a.jsx)(o, (0, i.Z)({}, e, { defaultTheme: u.Z, themeId: l.Z }));
        };
    },
    '(app-pages-browser)/./node_modules/@mui/material/styles/ThemeProvider.js': function (e, t, s) {
      s.d(t, {
        Z: function () {
          return w;
        },
      });
      var i = s('(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
        r = s(
          '(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
        ),
        n = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js');
      let a = n.createContext(null);
      function o() {
        return n.useContext(a);
      }
      var u =
          'function' == typeof Symbol && Symbol.for ? Symbol.for('mui.nested') : '__THEME_NESTED__',
        l = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        h = function (e) {
          let { children: t, theme: s } = e,
            r = o(),
            h = n.useMemo(() => {
              let e = null === r ? s : 'function' == typeof s ? s(r) : (0, i.Z)({}, r, s);
              return null != e && (e[u] = null !== r), e;
            }, [s, r]);
          return (0, l.jsx)(a.Provider, { value: h, children: t });
        },
        c = s(
          '(app-pages-browser)/./node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js'
        ),
        d = s('(app-pages-browser)/./node_modules/@mui/system/esm/useThemeWithoutDefault.js'),
        p = s('(app-pages-browser)/./node_modules/@mui/system/esm/RtlProvider/index.js'),
        f = s(
          '(app-pages-browser)/./node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js'
        );
      let m = {};
      function y(e, t, s) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return n.useMemo(() => {
          let n = (e && t[e]) || t;
          if ('function' == typeof s) {
            let a = s(n),
              o = e ? (0, i.Z)({}, t, { [e]: a }) : a;
            return r ? () => o : o;
          }
          return e ? (0, i.Z)({}, t, { [e]: s }) : (0, i.Z)({}, t, s);
        }, [e, t, s, r]);
      }
      var b = function (e) {
          let { children: t, theme: s, themeId: i } = e,
            r = (0, d.Z)(m),
            n = o() || m,
            a = y(i, r, s),
            u = y(i, n, s, !0),
            b = 'rtl' === a.direction;
          return (0, l.jsx)(h, {
            theme: u,
            children: (0, l.jsx)(c.T.Provider, {
              value: a,
              children: (0, l.jsx)(p.Z, {
                value: b,
                children: (0, l.jsx)(f.Z, {
                  value: null == a ? void 0 : a.components,
                  children: t,
                }),
              }),
            }),
          });
        },
        g = s('(app-pages-browser)/./node_modules/@mui/material/styles/identifier.js');
      let v = ['theme'];
      function w(e) {
        let { theme: t } = e,
          s = (0, r.Z)(e, v),
          n = t[g.Z],
          a = n || t;
        return (
          'function' != typeof t &&
            (n && !n.vars
              ? (a = (0, i.Z)({}, n, { vars: null }))
              : t && !t.vars && (a = (0, i.Z)({}, t, { vars: null }))),
          (0, l.jsx)(b, (0, i.Z)({}, s, { themeId: n ? g.Z : void 0, theme: a }))
        );
      }
    },
    '(app-pages-browser)/./node_modules/@mui/material/styles/responsiveFontSizes.js': function (
      e,
      t,
      s
    ) {
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = s('(app-pages-browser)/./node_modules/@babel/runtime/helpers/esm/extends.js'),
        r = s(
          '(app-pages-browser)/./node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js'
        );
      function n(e) {
        return String(parseFloat(e)).length === String(e).length;
      }
      function a(e) {
        return parseFloat(e);
      }
      function o(e) {
        var t;
        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            breakpoints: o = ['sm', 'md', 'lg'],
            disableAlign: u = !1,
            factor: l = 2,
            variants: h = [
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'subtitle1',
              'subtitle2',
              'body1',
              'body2',
              'caption',
              'button',
              'overline',
            ],
          } = s,
          c = (0, i.Z)({}, e);
        c.typography = (0, i.Z)({}, c.typography);
        let d = c.typography,
          p =
            ((t = d.htmlFontSize),
            (e, s) => {
              let i = String(e).match(/[\d.\-+]*\s*(.*)/)[1] || '';
              if (i === s) return e;
              let r = a(e);
              'px' !== i && ('em' === i ? (r = a(e) * a(t)) : 'rem' === i && (r = a(e) * a(t)));
              let n = r;
              if ('px' !== s) {
                if ('em' === s) n = r / a(t);
                else {
                  if ('rem' !== s) return e;
                  n = r / a(t);
                }
              }
              return parseFloat(n.toFixed(5)) + s;
            }),
          f = o.map(e => c.breakpoints.values[e]);
        return (
          h.forEach(e => {
            let t = d[e];
            if (!t) return;
            let s = parseFloat(p(t.fontSize, 'rem'));
            if (s <= 1) return;
            let { lineHeight: a } = t;
            if (!n(a) && !u) throw Error((0, r.Z)(6));
            n(a) || (a = parseFloat(p(a, 'rem')) / parseFloat(s));
            let o = null;
            u ||
              (o = e =>
                (function (e) {
                  let { size: t, grid: s } = e,
                    i = t - (t % s),
                    r = i + s;
                  return t - i < r - t ? i : r;
                })({
                  size: e,
                  grid: (function (e) {
                    let { lineHeight: t, pixels: s, htmlFontSize: i } = e;
                    return s / (t * i);
                  })({ pixels: 4, lineHeight: a, htmlFontSize: d.htmlFontSize }),
                })),
              (d[e] = (0, i.Z)(
                {},
                t,
                (function (e) {
                  let {
                      cssProperty: t,
                      min: s,
                      max: i,
                      unit: r = 'rem',
                      breakpoints: n = [600, 900, 1200],
                      transform: a = null,
                    } = e,
                    o = { [t]: ''.concat(s).concat(r) },
                    u = (i - s) / n[n.length - 1];
                  return (
                    n.forEach(e => {
                      let i = s + u * e;
                      null !== a && (i = a(i)),
                        (o['@media (min-width:'.concat(e, 'px)')] = {
                          [t]: ''.concat(Math.round(1e4 * i) / 1e4).concat(r),
                        });
                    }),
                    o
                  );
                })({
                  cssProperty: 'fontSize',
                  min: 1 + (s - 1) / l,
                  max: s,
                  unit: 'rem',
                  breakpoints: f,
                  transform: o,
                })
              ));
          }),
          c
        );
      }
    },
    '(app-pages-browser)/./node_modules/@tanstack/query-core/build/modern/queryClient.js':
      function (e, t, s) {
        s.d(t, {
          S: function () {
            return k;
          },
        });
        var i = 'undefined' == typeof window || 'Deno' in globalThis;
        function r() {}
        function n(e, t) {
          return 'function' == typeof e ? e(t) : e;
        }
        function a(e, t) {
          let {
            type: s = 'all',
            exact: i,
            fetchStatus: r,
            predicate: n,
            queryKey: a,
            stale: o,
          } = e;
          if (a) {
            if (i) {
              if (t.queryHash !== u(a, t.options)) return !1;
            } else if (!h(t.queryKey, a)) return !1;
          }
          if ('all' !== s) {
            let e = t.isActive();
            if (('active' === s && !e) || ('inactive' === s && e)) return !1;
          }
          return (
            ('boolean' != typeof o || t.isStale() === o) &&
            (!r || r === t.state.fetchStatus) &&
            (!n || !!n(t))
          );
        }
        function o(e, t) {
          let { exact: s, status: i, predicate: r, mutationKey: n } = e;
          if (n) {
            if (!t.options.mutationKey) return !1;
            if (s) {
              if (l(t.options.mutationKey) !== l(n)) return !1;
            } else if (!h(t.options.mutationKey, n)) return !1;
          }
          return (!i || t.state.status === i) && (!r || !!r(t));
        }
        function u(e, t) {
          return (t?.queryKeyHashFn || l)(e);
        }
        function l(e) {
          return JSON.stringify(e, (e, t) =>
            d(t)
              ? Object.keys(t)
                  .sort()
                  .reduce((e, s) => ((e[s] = t[s]), e), {})
              : t
          );
        }
        function h(e, t) {
          return (
            e === t ||
            (typeof e == typeof t &&
              !!e &&
              !!t &&
              'object' == typeof e &&
              'object' == typeof t &&
              Object.keys(t).every(s => h(e[s], t[s])))
          );
        }
        function c(e) {
          return Array.isArray(e) && e.length === Object.keys(e).length;
        }
        function d(e) {
          if (!p(e)) return !1;
          let t = e.constructor;
          if (void 0 === t) return !0;
          let s = t.prototype;
          return (
            !!(p(s) && s.hasOwnProperty('isPrototypeOf')) &&
            Object.getPrototypeOf(e) === Object.prototype
          );
        }
        function p(e) {
          return '[object Object]' === Object.prototype.toString.call(e);
        }
        function f(e, t, s = 0) {
          let i = [...e, t];
          return s && i.length > s ? i.slice(1) : i;
        }
        function m(e, t, s = 0) {
          let i = [t, ...e];
          return s && i.length > s ? i.slice(0, -1) : i;
        }
        var y = Symbol();
        function b(e, t) {
          return !e.queryFn && t?.initialPromise
            ? () => t.initialPromise
            : e.queryFn && e.queryFn !== y
              ? e.queryFn
              : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
        }
        var g = e => setTimeout(e, 0),
          v = (function () {
            let e = [],
              t = 0,
              s = e => {
                e();
              },
              i = e => {
                e();
              },
              r = g,
              n = i => {
                t
                  ? e.push(i)
                  : r(() => {
                      s(i);
                    });
              },
              a = () => {
                let t = e;
                (e = []),
                  t.length &&
                    r(() => {
                      i(() => {
                        t.forEach(e => {
                          s(e);
                        });
                      });
                    });
              };
            return {
              batch: e => {
                let s;
                t++;
                try {
                  s = e();
                } finally {
                  --t || a();
                }
                return s;
              },
              batchCalls:
                e =>
                (...t) => {
                  n(() => {
                    e(...t);
                  });
                },
              schedule: n,
              setNotifyFunction: e => {
                s = e;
              },
              setBatchNotifyFunction: e => {
                i = e;
              },
              setScheduler: e => {
                r = e;
              },
            };
          })(),
          w = class {
            constructor() {
              (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
            }
            subscribe(e) {
              return (
                this.listeners.add(e),
                this.onSubscribe(),
                () => {
                  this.listeners.delete(e), this.onUnsubscribe();
                }
              );
            }
            hasListeners() {
              return this.listeners.size > 0;
            }
            onSubscribe() {}
            onUnsubscribe() {}
          },
          C = new (class extends w {
            #e;
            #t;
            #s;
            constructor() {
              super(),
                (this.#s = e => {
                  if (!i && window.addEventListener) {
                    let t = () => e();
                    return (
                      window.addEventListener('visibilitychange', t, !1),
                      () => {
                        window.removeEventListener('visibilitychange', t);
                      }
                    );
                  }
                });
            }
            onSubscribe() {
              this.#t || this.setEventListener(this.#s);
            }
            onUnsubscribe() {
              this.hasListeners() || (this.#t?.(), (this.#t = void 0));
            }
            setEventListener(e) {
              (this.#s = e),
                this.#t?.(),
                (this.#t = e(e => {
                  'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
                }));
            }
            setFocused(e) {
              this.#e !== e && ((this.#e = e), this.onFocus());
            }
            onFocus() {
              let e = this.isFocused();
              this.listeners.forEach(t => {
                t(e);
              });
            }
            isFocused() {
              return 'boolean' == typeof this.#e
                ? this.#e
                : globalThis.document?.visibilityState !== 'hidden';
            }
          })(),
          S = new (class extends w {
            #i = !0;
            #t;
            #s;
            constructor() {
              super(),
                (this.#s = e => {
                  if (!i && window.addEventListener) {
                    let t = () => e(!0),
                      s = () => e(!1);
                    return (
                      window.addEventListener('online', t, !1),
                      window.addEventListener('offline', s, !1),
                      () => {
                        window.removeEventListener('online', t),
                          window.removeEventListener('offline', s);
                      }
                    );
                  }
                });
            }
            onSubscribe() {
              this.#t || this.setEventListener(this.#s);
            }
            onUnsubscribe() {
              this.hasListeners() || (this.#t?.(), (this.#t = void 0));
            }
            setEventListener(e) {
              (this.#s = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)));
            }
            setOnline(e) {
              this.#i !== e &&
                ((this.#i = e),
                this.listeners.forEach(t => {
                  t(e);
                }));
            }
            isOnline() {
              return this.#i;
            }
          })();
        function O(e) {
          return Math.min(1e3 * 2 ** e, 3e4);
        }
        function q(e) {
          return (e ?? 'online') !== 'online' || S.isOnline();
        }
        var P = class extends Error {
          constructor(e) {
            super('CancelledError'), (this.revert = e?.revert), (this.silent = e?.silent);
          }
        };
        function x(e) {
          return e instanceof P;
        }
        function j(e) {
          let t,
            s = !1,
            r = 0,
            n = !1,
            a = (function () {
              let e, t;
              let s = new Promise((s, i) => {
                (e = s), (t = i);
              });
              function i(e) {
                Object.assign(s, e), delete s.resolve, delete s.reject;
              }
              return (
                (s.status = 'pending'),
                s.catch(() => {}),
                (s.resolve = t => {
                  i({ status: 'fulfilled', value: t }), e(t);
                }),
                (s.reject = e => {
                  i({ status: 'rejected', reason: e }), t(e);
                }),
                s
              );
            })(),
            o = () => C.isFocused() && ('always' === e.networkMode || S.isOnline()) && e.canRun(),
            u = () => q(e.networkMode) && e.canRun(),
            l = s => {
              n || ((n = !0), e.onSuccess?.(s), t?.(), a.resolve(s));
            },
            h = s => {
              n || ((n = !0), e.onError?.(s), t?.(), a.reject(s));
            },
            c = () =>
              new Promise(s => {
                (t = e => {
                  (n || o()) && s(e);
                }),
                  e.onPause?.();
              }).then(() => {
                (t = void 0), n || e.onContinue?.();
              }),
            d = () => {
              let t;
              if (n) return;
              let a = 0 === r ? e.initialPromise : void 0;
              try {
                t = a ?? e.fn();
              } catch (e) {
                t = Promise.reject(e);
              }
              Promise.resolve(t)
                .then(l)
                .catch(t => {
                  if (n) return;
                  let a = e.retry ?? (i ? 0 : 3),
                    u = e.retryDelay ?? O,
                    l = 'function' == typeof u ? u(r, t) : u,
                    p =
                      !0 === a ||
                      ('number' == typeof a && r < a) ||
                      ('function' == typeof a && a(r, t));
                  if (s || !p) {
                    h(t);
                    return;
                  }
                  r++,
                    e.onFail?.(r, t),
                    new Promise(e => {
                      setTimeout(e, l);
                    })
                      .then(() => (o() ? void 0 : c()))
                      .then(() => {
                        s ? h(t) : d();
                      });
                });
            };
          return {
            promise: a,
            cancel: t => {
              n || (h(new P(t)), e.abort?.());
            },
            continue: () => (t?.(), a),
            cancelRetry: () => {
              s = !0;
            },
            continueRetry: () => {
              s = !1;
            },
            canStart: u,
            start: () => (u() ? d() : c().then(d), a),
          };
        }
        var F = class {
            #r;
            destroy() {
              this.clearGcTimeout();
            }
            scheduleGc() {
              var e;
              this.clearGcTimeout(),
                'number' == typeof (e = this.gcTime) &&
                  e >= 0 &&
                  e !== 1 / 0 &&
                  (this.#r = setTimeout(() => {
                    this.optionalRemove();
                  }, this.gcTime));
            }
            updateGcTime(e) {
              this.gcTime = Math.max(this.gcTime || 0, e ?? (i ? 1 / 0 : 3e5));
            }
            clearGcTimeout() {
              this.#r && (clearTimeout(this.#r), (this.#r = void 0));
            }
          },
          E = class extends F {
            #n;
            #a;
            #o;
            #u;
            #l;
            #h;
            #c;
            constructor(e) {
              super(),
                (this.#c = !1),
                (this.#h = e.defaultOptions),
                this.setOptions(e.options),
                (this.observers = []),
                (this.#u = e.client),
                (this.#o = this.#u.getQueryCache()),
                (this.queryKey = e.queryKey),
                (this.queryHash = e.queryHash),
                (this.#n = (function (e) {
                  let t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
                    s = void 0 !== t,
                    i = s
                      ? 'function' == typeof e.initialDataUpdatedAt
                        ? e.initialDataUpdatedAt()
                        : e.initialDataUpdatedAt
                      : 0;
                  return {
                    data: t,
                    dataUpdateCount: 0,
                    dataUpdatedAt: s ? (i ?? Date.now()) : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: s ? 'success' : 'pending',
                    fetchStatus: 'idle',
                  };
                })(this.options)),
                (this.state = e.state ?? this.#n),
                this.scheduleGc();
            }
            get meta() {
              return this.options.meta;
            }
            get promise() {
              return this.#l?.promise;
            }
            setOptions(e) {
              (this.options = { ...this.#h, ...e }), this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
              this.observers.length || 'idle' !== this.state.fetchStatus || this.#o.remove(this);
            }
            setData(e, t) {
              var s, i;
              let r =
                ((s = this.state.data),
                'function' == typeof (i = this.options).structuralSharing
                  ? i.structuralSharing(s, e)
                  : !1 !== i.structuralSharing
                    ? (function e(t, s) {
                        if (t === s) return t;
                        let i = c(t) && c(s);
                        if (i || (d(t) && d(s))) {
                          let r = i ? t : Object.keys(t),
                            n = r.length,
                            a = i ? s : Object.keys(s),
                            o = a.length,
                            u = i ? [] : {},
                            l = 0;
                          for (let n = 0; n < o; n++) {
                            let o = i ? n : a[n];
                            ((!i && r.includes(o)) || i) && void 0 === t[o] && void 0 === s[o]
                              ? ((u[o] = void 0), l++)
                              : ((u[o] = e(t[o], s[o])), u[o] === t[o] && void 0 !== t[o] && l++);
                          }
                          return n === o && l === n ? t : u;
                        }
                        return s;
                      })(s, e)
                    : e);
              return (
                this.#d({
                  data: r,
                  type: 'success',
                  dataUpdatedAt: t?.updatedAt,
                  manual: t?.manual,
                }),
                r
              );
            }
            setState(e, t) {
              this.#d({ type: 'setState', state: e, setStateOptions: t });
            }
            cancel(e) {
              let t = this.#l?.promise;
              return this.#l?.cancel(e), t ? t.then(r).catch(r) : Promise.resolve();
            }
            destroy() {
              super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
              this.destroy(), this.setState(this.#n);
            }
            isActive() {
              return this.observers.some(e => {
                var t;
                return !1 !== ('function' == typeof (t = e.options.enabled) ? t(this) : t);
              });
            }
            isDisabled() {
              return this.getObserversCount() > 0
                ? !this.isActive()
                : this.options.queryFn === y ||
                    this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
            }
            isStale() {
              return (
                !!this.state.isInvalidated ||
                (this.getObserversCount() > 0
                  ? this.observers.some(e => e.getCurrentResult().isStale)
                  : void 0 === this.state.data)
              );
            }
            isStaleByTime(e = 0) {
              return (
                this.state.isInvalidated ||
                void 0 === this.state.data ||
                !Math.max(this.state.dataUpdatedAt + (e || 0) - Date.now(), 0)
              );
            }
            onFocus() {
              let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
              e?.refetch({ cancelRefetch: !1 }), this.#l?.continue();
            }
            onOnline() {
              let e = this.observers.find(e => e.shouldFetchOnReconnect());
              e?.refetch({ cancelRefetch: !1 }), this.#l?.continue();
            }
            addObserver(e) {
              this.observers.includes(e) ||
                (this.observers.push(e),
                this.clearGcTimeout(),
                this.#o.notify({ type: 'observerAdded', query: this, observer: e }));
            }
            removeObserver(e) {
              this.observers.includes(e) &&
                ((this.observers = this.observers.filter(t => t !== e)),
                this.observers.length ||
                  (this.#l && (this.#c ? this.#l.cancel({ revert: !0 }) : this.#l.cancelRetry()),
                  this.scheduleGc()),
                this.#o.notify({ type: 'observerRemoved', query: this, observer: e }));
            }
            getObserversCount() {
              return this.observers.length;
            }
            invalidate() {
              this.state.isInvalidated || this.#d({ type: 'invalidate' });
            }
            fetch(e, t) {
              if ('idle' !== this.state.fetchStatus) {
                if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
                else if (this.#l) return this.#l.continueRetry(), this.#l.promise;
              }
              if ((e && this.setOptions(e), !this.options.queryFn)) {
                let e = this.observers.find(e => e.options.queryFn);
                e && this.setOptions(e.options);
              }
              let s = new AbortController(),
                i = e => {
                  Object.defineProperty(e, 'signal', {
                    enumerable: !0,
                    get: () => ((this.#c = !0), s.signal),
                  });
                },
                r = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#u,
                  state: this.state,
                  fetchFn: () => {
                    let e = b(this.options, t),
                      s = { client: this.#u, queryKey: this.queryKey, meta: this.meta };
                    return (i(s), (this.#c = !1), this.options.persister)
                      ? this.options.persister(e, s, this)
                      : e(s);
                  },
                };
              i(r),
                this.options.behavior?.onFetch(r, this),
                (this.#a = this.state),
                ('idle' === this.state.fetchStatus ||
                  this.state.fetchMeta !== r.fetchOptions?.meta) &&
                  this.#d({ type: 'fetch', meta: r.fetchOptions?.meta });
              let n = e => {
                (x(e) && e.silent) || this.#d({ type: 'error', error: e }),
                  x(e) ||
                    (this.#o.config.onError?.(e, this),
                    this.#o.config.onSettled?.(this.state.data, e, this)),
                  this.scheduleGc();
              };
              return (
                (this.#l = j({
                  initialPromise: t?.initialPromise,
                  fn: r.fetchFn,
                  abort: s.abort.bind(s),
                  onSuccess: e => {
                    if (void 0 === e) {
                      n(Error(`${this.queryHash} data is undefined`));
                      return;
                    }
                    try {
                      this.setData(e);
                    } catch (e) {
                      n(e);
                      return;
                    }
                    this.#o.config.onSuccess?.(e, this),
                      this.#o.config.onSettled?.(e, this.state.error, this),
                      this.scheduleGc();
                  },
                  onError: n,
                  onFail: (e, t) => {
                    this.#d({ type: 'failed', failureCount: e, error: t });
                  },
                  onPause: () => {
                    this.#d({ type: 'pause' });
                  },
                  onContinue: () => {
                    this.#d({ type: 'continue' });
                  },
                  retry: r.options.retry,
                  retryDelay: r.options.retryDelay,
                  networkMode: r.options.networkMode,
                  canRun: () => !0,
                })),
                this.#l.start()
              );
            }
            #d(e) {
              (this.state = (t => {
                switch (e.type) {
                  case 'failed':
                    return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
                  case 'pause':
                    return { ...t, fetchStatus: 'paused' };
                  case 'continue':
                    return { ...t, fetchStatus: 'fetching' };
                  case 'fetch':
                    var s;
                    return {
                      ...t,
                      ...((s = t.data),
                      {
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchStatus: q(this.options.networkMode) ? 'fetching' : 'paused',
                        ...(void 0 === s && { error: null, status: 'pending' }),
                      }),
                      fetchMeta: e.meta ?? null,
                    };
                  case 'success':
                    return {
                      ...t,
                      data: e.data,
                      dataUpdateCount: t.dataUpdateCount + 1,
                      dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                      error: null,
                      isInvalidated: !1,
                      status: 'success',
                      ...(!e.manual && {
                        fetchStatus: 'idle',
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                      }),
                    };
                  case 'error':
                    let i = e.error;
                    if (x(i) && i.revert && this.#a) return { ...this.#a, fetchStatus: 'idle' };
                    return {
                      ...t,
                      error: i,
                      errorUpdateCount: t.errorUpdateCount + 1,
                      errorUpdatedAt: Date.now(),
                      fetchFailureCount: t.fetchFailureCount + 1,
                      fetchFailureReason: i,
                      fetchStatus: 'idle',
                      status: 'error',
                    };
                  case 'invalidate':
                    return { ...t, isInvalidated: !0 };
                  case 'setState':
                    return { ...t, ...e.state };
                }
              })(this.state)),
                v.batch(() => {
                  this.observers.forEach(e => {
                    e.onQueryUpdate();
                  }),
                    this.#o.notify({ query: this, type: 'updated', action: e });
                });
            }
          },
          D = class extends w {
            constructor(e = {}) {
              super(), (this.config = e), (this.#p = new Map());
            }
            #p;
            build(e, t, s) {
              let i = t.queryKey,
                r = t.queryHash ?? u(i, t),
                n = this.get(r);
              return (
                n ||
                  ((n = new E({
                    client: e,
                    queryKey: i,
                    queryHash: r,
                    options: e.defaultQueryOptions(t),
                    state: s,
                    defaultOptions: e.getQueryDefaults(i),
                  })),
                  this.add(n)),
                n
              );
            }
            add(e) {
              this.#p.has(e.queryHash) ||
                (this.#p.set(e.queryHash, e), this.notify({ type: 'added', query: e }));
            }
            remove(e) {
              let t = this.#p.get(e.queryHash);
              t &&
                (e.destroy(),
                t === e && this.#p.delete(e.queryHash),
                this.notify({ type: 'removed', query: e }));
            }
            clear() {
              v.batch(() => {
                this.getAll().forEach(e => {
                  this.remove(e);
                });
              });
            }
            get(e) {
              return this.#p.get(e);
            }
            getAll() {
              return [...this.#p.values()];
            }
            find(e) {
              let t = { exact: !0, ...e };
              return this.getAll().find(e => a(t, e));
            }
            findAll(e = {}) {
              let t = this.getAll();
              return Object.keys(e).length > 0 ? t.filter(t => a(e, t)) : t;
            }
            notify(e) {
              v.batch(() => {
                this.listeners.forEach(t => {
                  t(e);
                });
              });
            }
            onFocus() {
              v.batch(() => {
                this.getAll().forEach(e => {
                  e.onFocus();
                });
              });
            }
            onOnline() {
              v.batch(() => {
                this.getAll().forEach(e => {
                  e.onOnline();
                });
              });
            }
          },
          M = class extends F {
            #f;
            #m;
            #l;
            constructor(e) {
              super(),
                (this.mutationId = e.mutationId),
                (this.#m = e.mutationCache),
                (this.#f = []),
                (this.state = e.state || {
                  context: void 0,
                  data: void 0,
                  error: null,
                  failureCount: 0,
                  failureReason: null,
                  isPaused: !1,
                  status: 'idle',
                  variables: void 0,
                  submittedAt: 0,
                }),
                this.setOptions(e.options),
                this.scheduleGc();
            }
            setOptions(e) {
              (this.options = e), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
              return this.options.meta;
            }
            addObserver(e) {
              this.#f.includes(e) ||
                (this.#f.push(e),
                this.clearGcTimeout(),
                this.#m.notify({ type: 'observerAdded', mutation: this, observer: e }));
            }
            removeObserver(e) {
              (this.#f = this.#f.filter(t => t !== e)),
                this.scheduleGc(),
                this.#m.notify({ type: 'observerRemoved', mutation: this, observer: e });
            }
            optionalRemove() {
              this.#f.length ||
                ('pending' === this.state.status ? this.scheduleGc() : this.#m.remove(this));
            }
            continue() {
              return this.#l?.continue() ?? this.execute(this.state.variables);
            }
            async execute(e) {
              let t = () => {
                this.#d({ type: 'continue' });
              };
              this.#l = j({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(e)
                    : Promise.reject(Error('No mutationFn found')),
                onFail: (e, t) => {
                  this.#d({ type: 'failed', failureCount: e, error: t });
                },
                onPause: () => {
                  this.#d({ type: 'pause' });
                },
                onContinue: t,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => this.#m.canRun(this),
              });
              let s = 'pending' === this.state.status,
                i = !this.#l.canStart();
              try {
                if (s) t();
                else {
                  this.#d({ type: 'pending', variables: e, isPaused: i }),
                    await this.#m.config.onMutate?.(e, this);
                  let t = await this.options.onMutate?.(e);
                  t !== this.state.context &&
                    this.#d({ type: 'pending', context: t, variables: e, isPaused: i });
                }
                let r = await this.#l.start();
                return (
                  await this.#m.config.onSuccess?.(r, e, this.state.context, this),
                  await this.options.onSuccess?.(r, e, this.state.context),
                  await this.#m.config.onSettled?.(
                    r,
                    null,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(r, null, e, this.state.context),
                  this.#d({ type: 'success', data: r }),
                  r
                );
              } catch (t) {
                try {
                  throw (
                    (await this.#m.config.onError?.(t, e, this.state.context, this),
                    await this.options.onError?.(t, e, this.state.context),
                    await this.#m.config.onSettled?.(
                      void 0,
                      t,
                      this.state.variables,
                      this.state.context,
                      this
                    ),
                    await this.options.onSettled?.(void 0, t, e, this.state.context),
                    t)
                  );
                } finally {
                  this.#d({ type: 'error', error: t });
                }
              } finally {
                this.#m.runNext(this);
              }
            }
            #d(e) {
              (this.state = (t => {
                switch (e.type) {
                  case 'failed':
                    return { ...t, failureCount: e.failureCount, failureReason: e.error };
                  case 'pause':
                    return { ...t, isPaused: !0 };
                  case 'continue':
                    return { ...t, isPaused: !1 };
                  case 'pending':
                    return {
                      ...t,
                      context: e.context,
                      data: void 0,
                      failureCount: 0,
                      failureReason: null,
                      error: null,
                      isPaused: e.isPaused,
                      status: 'pending',
                      variables: e.variables,
                      submittedAt: Date.now(),
                    };
                  case 'success':
                    return {
                      ...t,
                      data: e.data,
                      failureCount: 0,
                      failureReason: null,
                      error: null,
                      status: 'success',
                      isPaused: !1,
                    };
                  case 'error':
                    return {
                      ...t,
                      data: void 0,
                      error: e.error,
                      failureCount: t.failureCount + 1,
                      failureReason: e.error,
                      isPaused: !1,
                      status: 'error',
                    };
                }
              })(this.state)),
                v.batch(() => {
                  this.#f.forEach(t => {
                    t.onMutationUpdate(e);
                  }),
                    this.#m.notify({ mutation: this, type: 'updated', action: e });
                });
            }
          },
          A = class extends w {
            constructor(e = {}) {
              super(),
                (this.config = e),
                (this.#y = new Set()),
                (this.#b = new Map()),
                (this.#g = 0);
            }
            #y;
            #b;
            #g;
            build(e, t, s) {
              let i = new M({
                mutationCache: this,
                mutationId: ++this.#g,
                options: e.defaultMutationOptions(t),
                state: s,
              });
              return this.add(i), i;
            }
            add(e) {
              this.#y.add(e);
              let t = _(e);
              if ('string' == typeof t) {
                let s = this.#b.get(t);
                s ? s.push(e) : this.#b.set(t, [e]);
              }
              this.notify({ type: 'added', mutation: e });
            }
            remove(e) {
              if (this.#y.delete(e)) {
                let t = _(e);
                if ('string' == typeof t) {
                  let s = this.#b.get(t);
                  if (s) {
                    if (s.length > 1) {
                      let t = s.indexOf(e);
                      -1 !== t && s.splice(t, 1);
                    } else s[0] === e && this.#b.delete(t);
                  }
                }
              }
              this.notify({ type: 'removed', mutation: e });
            }
            canRun(e) {
              let t = _(e);
              if ('string' != typeof t) return !0;
              {
                let s = this.#b.get(t),
                  i = s?.find(e => 'pending' === e.state.status);
                return !i || i === e;
              }
            }
            runNext(e) {
              let t = _(e);
              if ('string' != typeof t) return Promise.resolve();
              {
                let s = this.#b.get(t)?.find(t => t !== e && t.state.isPaused);
                return s?.continue() ?? Promise.resolve();
              }
            }
            clear() {
              v.batch(() => {
                this.#y.forEach(e => {
                  this.notify({ type: 'removed', mutation: e });
                }),
                  this.#y.clear(),
                  this.#b.clear();
              });
            }
            getAll() {
              return Array.from(this.#y);
            }
            find(e) {
              let t = { exact: !0, ...e };
              return this.getAll().find(e => o(t, e));
            }
            findAll(e = {}) {
              return this.getAll().filter(t => o(e, t));
            }
            notify(e) {
              v.batch(() => {
                this.listeners.forEach(t => {
                  t(e);
                });
              });
            }
            resumePausedMutations() {
              let e = this.getAll().filter(e => e.state.isPaused);
              return v.batch(() => Promise.all(e.map(e => e.continue().catch(r))));
            }
          };
        function _(e) {
          return e.options.scope?.id;
        }
        function Q(e) {
          return {
            onFetch: (t, s) => {
              let i = t.options,
                r = t.fetchOptions?.meta?.fetchMore?.direction,
                n = t.state.data?.pages || [],
                a = t.state.data?.pageParams || [],
                o = { pages: [], pageParams: [] },
                u = 0,
                l = async () => {
                  let s = !1,
                    l = e => {
                      Object.defineProperty(e, 'signal', {
                        enumerable: !0,
                        get: () => (
                          t.signal.aborted
                            ? (s = !0)
                            : t.signal.addEventListener('abort', () => {
                                s = !0;
                              }),
                          t.signal
                        ),
                      });
                    },
                    h = b(t.options, t.fetchOptions),
                    c = async (e, i, r) => {
                      if (s) return Promise.reject();
                      if (null == i && e.pages.length) return Promise.resolve(e);
                      let n = {
                        client: t.client,
                        queryKey: t.queryKey,
                        pageParam: i,
                        direction: r ? 'backward' : 'forward',
                        meta: t.options.meta,
                      };
                      l(n);
                      let a = await h(n),
                        { maxPages: o } = t.options,
                        u = r ? m : f;
                      return { pages: u(e.pages, a, o), pageParams: u(e.pageParams, i, o) };
                    };
                  if (r && n.length) {
                    let e = 'backward' === r,
                      t = { pages: n, pageParams: a },
                      s = (
                        e
                          ? function (e, { pages: t, pageParams: s }) {
                              return t.length > 0
                                ? e.getPreviousPageParam?.(t[0], t, s[0], s)
                                : void 0;
                            }
                          : T
                      )(i, t);
                    o = await c(t, s, e);
                  } else {
                    let t = e ?? n.length;
                    do {
                      let e = 0 === u ? (a[0] ?? i.initialPageParam) : T(i, o);
                      if (u > 0 && null == e) break;
                      (o = await c(o, e)), u++;
                    } while (u < t);
                  }
                  return o;
                };
              t.options.persister
                ? (t.fetchFn = () =>
                    t.options.persister?.(
                      l,
                      {
                        client: t.client,
                        queryKey: t.queryKey,
                        meta: t.options.meta,
                        signal: t.signal,
                      },
                      s
                    ))
                : (t.fetchFn = l);
            },
          };
        }
        function T(e, { pages: t, pageParams: s }) {
          let i = t.length - 1;
          return t.length > 0 ? e.getNextPageParam(t[i], t, s[i], s) : void 0;
        }
        var k = class {
          #v;
          #m;
          #h;
          #w;
          #C;
          #S;
          #O;
          #q;
          constructor(e = {}) {
            (this.#v = e.queryCache || new D()),
              (this.#m = e.mutationCache || new A()),
              (this.#h = e.defaultOptions || {}),
              (this.#w = new Map()),
              (this.#C = new Map()),
              (this.#S = 0);
          }
          mount() {
            this.#S++,
              1 === this.#S &&
                ((this.#O = C.subscribe(async e => {
                  e && (await this.resumePausedMutations(), this.#v.onFocus());
                })),
                (this.#q = S.subscribe(async e => {
                  e && (await this.resumePausedMutations(), this.#v.onOnline());
                })));
          }
          unmount() {
            this.#S--,
              0 === this.#S && (this.#O?.(), (this.#O = void 0), this.#q?.(), (this.#q = void 0));
          }
          isFetching(e) {
            return this.#v.findAll({ ...e, fetchStatus: 'fetching' }).length;
          }
          isMutating(e) {
            return this.#m.findAll({ ...e, status: 'pending' }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#v.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              s = this.#v.build(this, t),
              i = s.state.data;
            return void 0 === i
              ? this.fetchQuery(e)
              : (e.revalidateIfStale && s.isStaleByTime(n(t.staleTime, s)) && this.prefetchQuery(t),
                Promise.resolve(i));
          }
          getQueriesData(e) {
            return this.#v.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, s) {
            let i = this.defaultQueryOptions({ queryKey: e }),
              r = this.#v.get(i.queryHash),
              n = r?.state.data,
              a = 'function' == typeof t ? t(n) : t;
            if (void 0 !== a) return this.#v.build(this, i).setData(a, { ...s, manual: !0 });
          }
          setQueriesData(e, t, s) {
            return v.batch(() =>
              this.#v.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, s)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#v.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#v;
            v.batch(() => {
              t.findAll(e).forEach(e => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let s = this.#v;
            return v.batch(
              () => (
                s.findAll(e).forEach(e => {
                  e.reset();
                }),
                this.refetchQueries({ type: 'active', ...e }, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let s = { revert: !0, ...t };
            return Promise.all(v.batch(() => this.#v.findAll(e).map(e => e.cancel(s))))
              .then(r)
              .catch(r);
          }
          invalidateQueries(e, t = {}) {
            return v.batch(() =>
              (this.#v.findAll(e).forEach(e => {
                e.invalidate();
              }),
              e?.refetchType === 'none')
                ? Promise.resolve()
                : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? 'active' }, t)
            );
          }
          refetchQueries(e, t = {}) {
            let s = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              v.batch(() =>
                this.#v
                  .findAll(e)
                  .filter(e => !e.isDisabled())
                  .map(e => {
                    let t = e.fetch(void 0, s);
                    return (
                      s.throwOnError || (t = t.catch(r)),
                      'paused' === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(r);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let s = this.#v.build(this, t);
            return s.isStaleByTime(n(t.staleTime, s)) ? s.fetch(t) : Promise.resolve(s.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(r).catch(r);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = Q(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(r).catch(r);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = Q(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return S.isOnline() ? this.#m.resumePausedMutations() : Promise.resolve();
          }
          getQueryCache() {
            return this.#v;
          }
          getMutationCache() {
            return this.#m;
          }
          getDefaultOptions() {
            return this.#h;
          }
          setDefaultOptions(e) {
            this.#h = e;
          }
          setQueryDefaults(e, t) {
            this.#w.set(l(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#w.values()],
              s = {};
            return (
              t.forEach(t => {
                h(e, t.queryKey) && Object.assign(s, t.defaultOptions);
              }),
              s
            );
          }
          setMutationDefaults(e, t) {
            this.#C.set(l(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#C.values()],
              s = {};
            return (
              t.forEach(t => {
                h(e, t.mutationKey) && Object.assign(s, t.defaultOptions);
              }),
              s
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#h.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = u(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = 'always' !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
              t.queryFn === y && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#h.mutations,
                  ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#v.clear(), this.#m.clear();
          }
        };
      },
    '(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js':
      function (e, t, s) {
        s.d(t, {
          aH: function () {
            return a;
          },
        });
        var i = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js'),
          r = s('(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js'),
          n = i.createContext(void 0),
          a = e => {
            let { client: t, children: s } = e;
            return (
              i.useEffect(
                () => (
                  t.mount(),
                  () => {
                    t.unmount();
                  }
                ),
                [t]
              ),
              (0, r.jsx)(n.Provider, { value: t, children: s })
            );
          };
      },
  },
]);
