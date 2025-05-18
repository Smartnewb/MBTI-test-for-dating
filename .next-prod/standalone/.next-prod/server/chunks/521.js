'use strict';
(exports.id = 521),
  (exports.ids = [521]),
  (exports.modules = {
    '(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js': (
      e,
      t,
      r
    ) => {
      var n = r(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
        ),
        s =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        o = n.useState,
        i = n.useEffect,
        a = n.useLayoutEffect,
        u = n.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !s(e, r);
        } catch (e) {
          return !0;
        }
      }
      var d =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = o({ inst: { value: r, getSnapshot: t } }),
                s = n[0].inst,
                d = n[1];
              return (
                a(
                  function () {
                    (s.value = r), (s.getSnapshot = t), l(s) && d({ inst: s });
                  },
                  [e, r, t]
                ),
                i(
                  function () {
                    return (
                      l(s) && d({ inst: s }),
                      e(function () {
                        l(s) && d({ inst: s });
                      })
                    );
                  },
                  [e]
                ),
                u(r),
                r
              );
            };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d;
    },
    '(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js':
      (e, t, r) => {
        var n = r(
            '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
          ),
          s = r('(ssr)/./node_modules/use-sync-external-store/shim/index.js'),
          o =
            'function' == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                },
          i = s.useSyncExternalStore,
          a = n.useRef,
          u = n.useEffect,
          l = n.useMemo,
          d = n.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, r, n, s) {
          var c = a(null);
          if (null === c.current) {
            var m = { hasValue: !1, value: null };
            c.current = m;
          } else m = c.current;
          var f = i(
            e,
            (c = l(
              function () {
                function e(e) {
                  if (!u) {
                    if (((u = !0), (i = e), (e = n(e)), void 0 !== s && m.hasValue)) {
                      var t = m.value;
                      if (s(t, e)) return (a = t);
                    }
                    return (a = e);
                  }
                  if (((t = a), o(i, e))) return t;
                  var r = n(e);
                  return void 0 !== s && s(t, r) ? ((i = e), t) : ((i = e), (a = r));
                }
                var i,
                  a,
                  u = !1,
                  l = void 0 === r ? null : r;
                return [
                  function () {
                    return e(t());
                  },
                  null === l
                    ? void 0
                    : function () {
                        return e(l());
                      },
                ];
              },
              [t, r, n, s]
            ))[0],
            c[1]
          );
          return (
            u(
              function () {
                (m.hasValue = !0), (m.value = f);
              },
              [f]
            ),
            d(f),
            f
          );
        };
      },
    '(ssr)/./node_modules/use-sync-external-store/shim/index.js': (e, t, r) => {
      e.exports = r(
        '(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js'
      );
    },
    '(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js': (e, t, r) => {
      e.exports = r(
        '(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js'
      );
    },
    '(ssr)/./node_modules/uuid/dist/esm-node/v4.js': (e, t, r) => {
      r.d(t, { Z: () => l });
      var n = r('crypto'),
        s = r.n(n);
      let o = { randomUUID: s().randomUUID },
        i = new Uint8Array(256),
        a = i.length,
        u = [];
      for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).slice(1));
      let l = function (e, t, r) {
        if (o.randomUUID && !t && !e) return o.randomUUID();
        let n =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              return a > i.length - 16 && (s().randomFillSync(i), (a = 0)), i.slice(a, (a += 16));
            }
          )();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = n[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            u[e[t + 0]] +
            u[e[t + 1]] +
            u[e[t + 2]] +
            u[e[t + 3]] +
            '-' +
            u[e[t + 4]] +
            u[e[t + 5]] +
            '-' +
            u[e[t + 6]] +
            u[e[t + 7]] +
            '-' +
            u[e[t + 8]] +
            u[e[t + 9]] +
            '-' +
            u[e[t + 10]] +
            u[e[t + 11]] +
            u[e[t + 12]] +
            u[e[t + 13]] +
            u[e[t + 14]] +
            u[e[t + 15]]
          );
        })(n);
      };
    },
    '(ssr)/./node_modules/zustand/esm/index.mjs': (e, t, r) => {
      r.d(t, { Ue: () => m });
      let n = e => {
          let t;
          let r = new Set(),
            n = (e, n) => {
              let s = 'function' == typeof e ? e(t) : e;
              if (!Object.is(s, t)) {
                let e = t;
                (t = (null != n ? n : 'object' != typeof s || null === s)
                  ? s
                  : Object.assign({}, t, s)),
                  r.forEach(r => r(t, e));
              }
            },
            s = () => t,
            o = {
              setState: n,
              getState: s,
              getInitialState: () => i,
              subscribe: e => (r.add(e), () => r.delete(e)),
              destroy: () => {
                console.warn(
                  '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'
                ),
                  r.clear();
              },
            },
            i = (t = e(n, s, o));
          return o;
        },
        s = e => (e ? n(e) : n);
      var o = r(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
        ),
        i = r('(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js');
      let { useDebugValue: a } = o,
        { useSyncExternalStoreWithSelector: u } = i,
        l = !1,
        d = e => e,
        c = e => {
          'function' != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          let t = 'function' == typeof e ? s(e) : e,
            r = (e, r) =>
              (function (e, t = d, r) {
                r &&
                  !l &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                  ),
                  (l = !0));
                let n = u(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
                return a(n), n;
              })(t, e, r);
          return Object.assign(r, t), r;
        },
        m = e => (e ? c(e) : c);
    },
    '(ssr)/./node_modules/zustand/esm/middleware.mjs': (e, t, r) => {
      function n(e, t) {
        let r;
        try {
          r = e();
        } catch (e) {
          return;
        }
        return {
          getItem: e => {
            var n;
            let s = e => (null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver)),
              o = null != (n = r.getItem(e)) ? n : null;
            return o instanceof Promise ? o.then(s) : s(o);
          },
          setItem: (e, n) => r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
          removeItem: e => r.removeItem(e),
        };
      }
      r.d(t, { FL: () => n, tJ: () => a });
      let s = e => t => {
          try {
            let r = e(t);
            if (r instanceof Promise) return r;
            return {
              then: e => s(e)(r),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: t => s(t)(e),
            };
          }
        },
        o = (e, t) => (r, n, o) => {
          let i,
            a,
            u = {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: e => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            l = !1,
            d = new Set(),
            c = new Set();
          try {
            i = u.getStorage();
          } catch (e) {}
          if (!i)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`
                ),
                  r(...e);
              },
              n,
              o
            );
          let m = s(u.serialize),
            f = () => {
              let e;
              let t = m({ state: u.partialize({ ...n() }), version: u.version })
                .then(e => i.setItem(u.name, e))
                .catch(t => {
                  e = t;
                });
              if (e) throw e;
              return t;
            },
            v = o.setState;
          o.setState = (e, t) => {
            v(e, t), f();
          };
          let g = e(
              (...e) => {
                r(...e), f();
              },
              n,
              o
            ),
            h = () => {
              var e;
              if (!i) return;
              (l = !1), d.forEach(e => e(n()));
              let t = (null == (e = u.onRehydrateStorage) ? void 0 : e.call(u, n())) || void 0;
              return s(i.getItem.bind(i))(u.name)
                .then(e => {
                  if (e) return u.deserialize(e);
                })
                .then(e => {
                  if (e) {
                    if ('number' != typeof e.version || e.version === u.version) return e.state;
                    if (u.migrate) return u.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then(e => {
                  var t;
                  return r((a = u.merge(e, null != (t = n()) ? t : g)), !0), f();
                })
                .then(() => {
                  null == t || t(a, void 0), (l = !0), c.forEach(e => e(a));
                })
                .catch(e => {
                  null == t || t(void 0, e);
                });
            };
          return (
            (o.persist = {
              setOptions: e => {
                (u = { ...u, ...e }), e.getStorage && (i = e.getStorage());
              },
              clearStorage: () => {
                null == i || i.removeItem(u.name);
              },
              getOptions: () => u,
              rehydrate: () => h(),
              hasHydrated: () => l,
              onHydrate: e => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
              onFinishHydration: e => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
            }),
            h(),
            a || g
          );
        },
        i = (e, t) => (r, o, i) => {
          let a,
            u = {
              storage: n(() => localStorage),
              partialize: e => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            l = !1,
            d = new Set(),
            c = new Set(),
            m = u.storage;
          if (!m)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`
                ),
                  r(...e);
              },
              o,
              i
            );
          let f = () => {
              let e = u.partialize({ ...o() });
              return m.setItem(u.name, { state: e, version: u.version });
            },
            v = i.setState;
          i.setState = (e, t) => {
            v(e, t), f();
          };
          let g = e(
            (...e) => {
              r(...e), f();
            },
            o,
            i
          );
          i.getInitialState = () => g;
          let h = () => {
            var e, t;
            if (!m) return;
            (l = !1),
              d.forEach(e => {
                var t;
                return e(null != (t = o()) ? t : g);
              });
            let n =
              (null == (t = u.onRehydrateStorage)
                ? void 0
                : t.call(u, null != (e = o()) ? e : g)) || void 0;
            return s(m.getItem.bind(m))(u.name)
              .then(e => {
                if (e) {
                  if ('number' != typeof e.version || e.version === u.version) return [!1, e.state];
                  if (u.migrate) return [!0, u.migrate(e.state, e.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
                return [!1, void 0];
              })
              .then(e => {
                var t;
                let [n, s] = e;
                if ((r((a = u.merge(s, null != (t = o()) ? t : g)), !0), n)) return f();
              })
              .then(() => {
                null == n || n(a, void 0), (a = o()), (l = !0), c.forEach(e => e(a));
              })
              .catch(e => {
                null == n || n(void 0, e);
              });
          };
          return (
            (i.persist = {
              setOptions: e => {
                (u = { ...u, ...e }), e.storage && (m = e.storage);
              },
              clearStorage: () => {
                null == m || m.removeItem(u.name);
              },
              getOptions: () => u,
              rehydrate: () => h(),
              hasHydrated: () => l,
              onHydrate: e => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
              onFinishHydration: e => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
            }),
            u.skipHydration || h(),
            a || g
          );
        },
        a = (e, t) =>
          'getStorage' in t || 'serialize' in t || 'deserialize' in t
            ? (console.warn(
                '[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.'
              ),
              o(e, t))
            : i(e, t);
    },
  });
