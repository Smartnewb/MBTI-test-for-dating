(exports.id = 246),
  (exports.ids = [246]),
  (exports.modules = {
    '(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Capp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cerror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Clayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Crender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!':
      (r, o, e) => {
        Promise.resolve().then(
          e.t.bind(e, '(ssr)/./node_modules/next/dist/client/components/app-router.js', 23)
        ),
          Promise.resolve().then(
            e.t.bind(e, '(ssr)/./node_modules/next/dist/client/components/client-page.js', 23)
          ),
          Promise.resolve().then(
            e.t.bind(e, '(ssr)/./node_modules/next/dist/client/components/error-boundary.js', 23)
          ),
          Promise.resolve().then(
            e.t.bind(e, '(ssr)/./node_modules/next/dist/client/components/layout-router.js', 23)
          ),
          Promise.resolve().then(
            e.t.bind(
              e,
              '(ssr)/./node_modules/next/dist/client/components/not-found-boundary.js',
              23
            )
          ),
          Promise.resolve().then(
            e.t.bind(
              e,
              '(ssr)/./node_modules/next/dist/client/components/render-from-template-context.js',
              23
            )
          );
      },
    '(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Cglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5C%EC%A0%84%EC%A4%80%EC%98%81%5C%5CDocuments%5C%5Caugment-projects%5C%5CMBTI%20test%20for%20dating%5C%5Csrc%5C%5Capp%5C%5Cproviders.js%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true!':
      (r, o, e) => {
        Promise.resolve().then(e.bind(e, '(ssr)/./src/app/providers.js'));
      },
    '(ssr)/./src/app/contexts/SupabaseContext.jsx': (r, o, e) => {
      'use strict';
      e.d(o, { $4: () => l, FV: () => n });
      var s = e(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
        ),
        a = e(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
        ),
        t = e('(ssr)/./src/app/utils/supabase.js');
      let i = (0, a.createContext)();
      function n({ children: r }) {
        let [o, e] = (0, a.useState)(null),
          [n, l] = (0, a.useState)(!0),
          [d, c] = (0, a.useState)(null),
          m = async (r, o) => {
            try {
              let { data: e, error: s } = await t.ZP.auth.signUp({ email: r, password: o });
              if (s) throw s;
              return { success: !0, data: e };
            } catch (r) {
              return console.error('Error signing up:', r), { success: !1, error: r };
            }
          },
          p = async (r, o) => {
            try {
              let { data: e, error: s } = await t.ZP.auth.signInWithPassword({
                email: r,
                password: o,
              });
              if (s) throw s;
              return { success: !0, data: e };
            } catch (r) {
              return console.error('Error signing in:', r), { success: !1, error: r };
            }
          },
          u = async () => {
            try {
              let { error: r } = await t.ZP.auth.signOut();
              if (r) throw r;
              return { success: !0 };
            } catch (r) {
              return console.error('Error signing out:', r), { success: !1, error: r };
            }
          },
          g = async r => {
            try {
              let { data: o, error: e } = await t.ZP.auth.resetPasswordForEmail(r, {
                redirectTo: `${window.location.origin}/reset-password`,
              });
              if (e) throw e;
              return { success: !0, data: o };
            } catch (r) {
              return console.error('Error resetting password:', r), { success: !1, error: r };
            }
          },
          y = async r => {
            try {
              let { data: o, error: e } = await t.ZP.auth.updateUser({ password: r });
              if (e) throw e;
              return { success: !0, data: o };
            } catch (r) {
              return console.error('Error updating password:', r), { success: !1, error: r };
            }
          };
        return s.jsx(i.Provider, {
          value: {
            user: o,
            loading: n,
            sessionId: d,
            signUp: m,
            signIn: p,
            signOut: u,
            resetPassword: g,
            updatePassword: y,
          },
          children: r,
        });
      }
      function l() {
        let r = (0, a.useContext)(i);
        if (void 0 === r) throw Error('useSupabase must be used within a SupabaseProvider');
        return r;
      }
    },
    '(rsc)/./src/app/globals.css': () => {},
    '(ssr)/./src/app/providers.js': (r, o, e) => {
      'use strict';
      e.d(o, { default: () => b });
      var s = e(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js'
        ),
        a = e(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
        ),
        t = e('(ssr)/./node_modules/@tanstack/query-core/build/modern/queryClient.js'),
        i = e('(ssr)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js'),
        n = e('(ssr)/./src/app/contexts/SupabaseContext.jsx'),
        l = e('(ssr)/./node_modules/@mui/material/styles/createTheme.js'),
        d = e('(ssr)/./node_modules/@mui/material/styles/ThemeProvider.js'),
        c = e('(ssr)/./node_modules/@mui/material/CssBaseline/CssBaseline.js');
      let m = {
        colors: {
          primary: { main: '#6B3FA0', light: '#9A6DD7', dark: '#4A2B70', contrastText: '#FFFFFF' },
          secondary: {
            main: '#F2C94C',
            light: '#FFE082',
            dark: '#C9A227',
            contrastText: '#1A1A2E',
          },
          background: { default: '#0F0F1A', paper: '#1A1A2E', card: '#1E1E32' },
          text: { primary: '#F5F5F7', secondary: '#B8B8C7', disabled: '#6C6C7F' },
          semantic: { error: '#FF5252', warning: '#FFB74D', info: '#64B5F6', success: '#66BB6A' },
          misc: { divider: 'rgba(255, 255, 255, 0.12)' },
          gradients: {
            primary: 'linear-gradient(135deg, #6B3FA0 0%, #9A6DD7 100%)',
            secondary: 'linear-gradient(135deg, #F2C94C 0%, #FFE082 100%)',
            mystical: 'linear-gradient(135deg, #2E1A47 0%, #6B3FA0 50%, #2E1A47 100%)',
            dark: 'linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)',
          },
        },
        typography: {
          fontFamily: {
            primary:
              '"Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            display: '"Playfair Display", "Noto Serif KR", serif',
          },
          fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
          },
          fontWeight: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 },
          lineHeight: { none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2 },
          letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
          },
          variants: {
            h1: {
              fontFamily: '"Playfair Display", "Noto Serif KR", serif',
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            },
            h2: {
              fontFamily: '"Playfair Display", "Noto Serif KR", serif',
              fontSize: '2.25rem',
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
            },
            h3: {
              fontFamily: '"Playfair Display", "Noto Serif KR", serif',
              fontSize: '1.875rem',
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: '0',
            },
            h4: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '0' },
            h5: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '0' },
            h6: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '0' },
            subtitle1: {
              fontSize: '1.125rem',
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: '0.00938em',
            },
            subtitle2: {
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: 1.57,
              letterSpacing: '0.00714em',
            },
            body1: {
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '0.00938em',
            },
            body2: {
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 1.43,
              letterSpacing: '0.01071em',
            },
            button: {
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: 1.75,
              letterSpacing: '0.02857em',
              textTransform: 'none',
            },
            caption: {
              fontSize: '0.75rem',
              fontWeight: 400,
              lineHeight: 1.66,
              letterSpacing: '0.03333em',
            },
            overline: {
              fontSize: '0.75rem',
              fontWeight: 400,
              lineHeight: 2.66,
              letterSpacing: '0.08333em',
              textTransform: 'uppercase',
            },
          },
        },
        spacing: {
          unit: 8,
          values: {
            0: '0',
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            8: '2rem',
            10: '2.5rem',
            12: '3rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            32: '8rem',
            40: '10rem',
            48: '12rem',
            56: '14rem',
            64: '16rem',
          },
        },
        borders: {
          width: { none: '0', thin: '1px', thick: '2px', thicker: '4px' },
          radius: {
            none: '0',
            sm: '0.125rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
          },
        },
        shadows: {
          none: 'none',
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          outline: '0 0 0 3px rgba(107, 63, 160, 0.5)',
          mystical: '0 4px 20px rgba(107, 63, 160, 0.5), 0 0 0 1px rgba(107, 63, 160, 0.1)',
          glow: '0 0 15px rgba(107, 63, 160, 0.7), 0 0 5px rgba(242, 201, 76, 0.5)',
        },
        animations: {
          easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
          },
          duration: {
            fastest: '100ms',
            fast: '200ms',
            normal: '300ms',
            slow: '500ms',
            slower: '700ms',
            slowest: '1000ms',
          },
        },
        breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
        zIndex: {
          mobileStepper: 1e3,
          speedDial: 1050,
          appBar: 1100,
          drawer: 1200,
          modal: 1300,
          snackbar: 1400,
          tooltip: 1500,
        },
      };
      var p = e('(ssr)/./node_modules/@mui/material/styles/responsiveFontSizes.js');
      let u = (0, l.Z)({
          palette: {
            mode: 'dark',
            primary: {
              main: m.colors.primary.main,
              light: m.colors.primary.light,
              dark: m.colors.primary.dark,
              contrastText: m.colors.primary.contrastText,
              ...(m.colors.primary[50] && { 50: m.colors.primary[50] }),
              ...(m.colors.primary[100] && { 100: m.colors.primary[100] }),
              ...(m.colors.primary[200] && { 200: m.colors.primary[200] }),
              ...(m.colors.primary[300] && { 300: m.colors.primary[300] }),
              ...(m.colors.primary[400] && { 400: m.colors.primary[400] }),
              ...(m.colors.primary[500] && { 500: m.colors.primary[500] }),
              ...(m.colors.primary[600] && { 600: m.colors.primary[600] }),
              ...(m.colors.primary[700] && { 700: m.colors.primary[700] }),
              ...(m.colors.primary[800] && { 800: m.colors.primary[800] }),
              ...(m.colors.primary[900] && { 900: m.colors.primary[900] }),
            },
            secondary: {
              main: m.colors.secondary.main,
              light: m.colors.secondary.light,
              dark: m.colors.secondary.dark,
              contrastText: m.colors.secondary.contrastText,
              ...(m.colors.secondary[50] && { 50: m.colors.secondary[50] }),
              ...(m.colors.secondary[100] && { 100: m.colors.secondary[100] }),
              ...(m.colors.secondary[200] && { 200: m.colors.secondary[200] }),
              ...(m.colors.secondary[300] && { 300: m.colors.secondary[300] }),
              ...(m.colors.secondary[400] && { 400: m.colors.secondary[400] }),
              ...(m.colors.secondary[500] && { 500: m.colors.secondary[500] }),
              ...(m.colors.secondary[600] && { 600: m.colors.secondary[600] }),
              ...(m.colors.secondary[700] && { 700: m.colors.secondary[700] }),
              ...(m.colors.secondary[800] && { 800: m.colors.secondary[800] }),
              ...(m.colors.secondary[900] && { 900: m.colors.secondary[900] }),
            },
            background: { default: m.colors.background.default, paper: m.colors.background.paper },
            text: {
              primary: m.colors.text.primary,
              secondary: m.colors.text.secondary,
              disabled: m.colors.text.disabled,
            },
            error: { main: m.colors.semantic.error },
            warning: { main: m.colors.semantic.warning },
            info: { main: m.colors.semantic.info },
            success: { main: m.colors.semantic.success },
            divider: m.colors.misc.divider,
          },
          colors: {
            ...m.colors,
            primary: {
              ...m.colors.primary,
              100: m.colors.primary[100] || m.colors.primary.light,
              200: m.colors.primary[200] || m.colors.primary.light,
              300: m.colors.primary[300] || m.colors.primary.light,
              400: m.colors.primary[400] || m.colors.primary.main,
              500: m.colors.primary[500] || m.colors.primary.main,
              600: m.colors.primary[600] || m.colors.primary.dark,
              700: m.colors.primary[700] || m.colors.primary.dark,
              800: m.colors.primary[800] || m.colors.primary.dark,
              900: m.colors.primary[900] || m.colors.primary.dark,
            },
            secondary: {
              ...m.colors.secondary,
              100: m.colors.secondary[100] || m.colors.secondary.light,
              200: m.colors.secondary[200] || m.colors.secondary.light,
              300: m.colors.secondary[300] || m.colors.secondary.light,
              400: m.colors.secondary[400] || m.colors.secondary.main,
              500: m.colors.secondary[500] || m.colors.secondary.main,
              600: m.colors.secondary[600] || m.colors.secondary.dark,
              700: m.colors.secondary[700] || m.colors.secondary.dark,
              800: m.colors.secondary[800] || m.colors.secondary.dark,
              900: m.colors.secondary[900] || m.colors.secondary.dark,
            },
          },
          typography: {
            fontFamily: m.typography.fontFamily.primary,
            h1: m.typography.variants.h1,
            h2: m.typography.variants.h2,
            h3: m.typography.variants.h3,
            h4: m.typography.variants.h4,
            h5: m.typography.variants.h5,
            h6: m.typography.variants.h6,
            subtitle1: m.typography.variants.subtitle1,
            subtitle2: m.typography.variants.subtitle2,
            body1: m.typography.variants.body1,
            body2: m.typography.variants.body2,
            button: m.typography.variants.button,
            caption: m.typography.variants.caption,
            overline: m.typography.variants.overline,
          },
          spacing: r => `${m.spacing.unit * r}px`,
          breakpoints: { values: m.breakpoints.values },
          shadows: [
            'none',
            m.shadows.sm,
            m.shadows.md,
            m.shadows.lg,
            m.shadows.xl,
            m.shadows['2xl'],
            m.shadows.inner,
            m.shadows.outline,
            m.shadows.mystical,
            m.shadows.glow,
            ...Array(15).fill(m.shadows.md),
          ],
          shape: { borderRadius: parseInt(m.borders.radius.md) },
          transitions: {
            easing: {
              easeInOut: m.animations.easing.easeInOut,
              easeOut: m.animations.easing.easeOut,
              easeIn: m.animations.easing.easeIn,
              sharp: m.animations.easing.sharp,
            },
            duration: {
              shortest: parseInt(m.animations.duration.fastest),
              shorter: parseInt(m.animations.duration.fast),
              short: parseInt(m.animations.duration.normal),
              standard: parseInt(m.animations.duration.normal),
              complex: parseInt(m.animations.duration.slow),
              enteringScreen: parseInt(m.animations.duration.normal),
              leavingScreen: parseInt(m.animations.duration.fast),
            },
          },
          zIndex: m.zIndex,
          components: {
            MuiButton: {
              defaultProps: { disableElevation: !1 },
              styleOverrides: {
                root: {
                  borderRadius: m.borders.radius.lg,
                  textTransform: 'none',
                  fontWeight: m.typography.fontWeight.medium,
                  padding: `${m.spacing.values[2]} ${m.spacing.values[4]}`,
                  transition: `all ${m.animations.duration.normal} ${m.animations.easing.easeInOut}`,
                },
                contained: {
                  boxShadow: m.shadows.md,
                  '&:hover': { boxShadow: m.shadows.lg, transform: 'translateY(-2px)' },
                },
                containedPrimary: {
                  background: m.colors.gradients.primary,
                  '&:hover': { background: m.colors.gradients.primary, filter: 'brightness(1.1)' },
                },
                containedSecondary: {
                  background: m.colors.gradients.secondary,
                  '&:hover': {
                    background: m.colors.gradients.secondary,
                    filter: 'brightness(1.1)',
                  },
                },
                outlined: {
                  borderWidth: m.borders.width.thick,
                  '&:hover': { borderWidth: m.borders.width.thick },
                },
                outlinedPrimary: {
                  borderColor: m.colors.primary.main,
                  '&:hover': { backgroundColor: `${m.colors.primary.main}15` },
                },
                outlinedSecondary: {
                  borderColor: m.colors.secondary.main,
                  '&:hover': { backgroundColor: `${m.colors.secondary.main}15` },
                },
                text: { '&:hover': { backgroundColor: 'rgba(138, 79, 255, 0.08)' } },
              },
              variants: [
                {
                  props: { variant: 'mystical' },
                  style: {
                    background: m.colors.gradients.mystical,
                    color: m.colors.text.primary,
                    boxShadow: m.shadows.mystical,
                    '&:hover': {
                      boxShadow: m.shadows.glow,
                      background: m.colors.gradients.mystical,
                      filter: 'brightness(1.1)',
                      transform: 'translateY(-2px)',
                    },
                  },
                },
                {
                  props: { variant: 'tarot' },
                  style: {
                    background: 'transparent',
                    color: m.colors.secondary.main,
                    border: `${m.borders.width.thick} solid ${m.colors.secondary.main}`,
                    fontFamily: m.typography.fontFamily.decorative,
                    letterSpacing: m.typography.letterSpacing.wide,
                    '&:hover': {
                      background: `${m.colors.secondary.main}15`,
                      borderColor: m.colors.secondary.light,
                      color: m.colors.secondary.light,
                    },
                  },
                },
              ],
            },
            MuiCard: {
              styleOverrides: {
                root: {
                  backgroundColor: m.colors.background.card,
                  borderRadius: m.borders.radius.lg,
                  boxShadow: m.shadows.md,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: `all ${m.animations.duration.normal} ${m.animations.easing.easeInOut}`,
                  '&:hover': { boxShadow: m.shadows.lg, transform: 'translateY(-4px)' },
                },
              },
              variants: [
                {
                  props: { variant: 'tarot' },
                  style: {
                    backgroundColor: m.colors.background.card,
                    borderRadius: m.borders.radius.lg,
                    boxShadow: m.shadows.mystical,
                    border: `${m.borders.width.thin} solid ${m.colors.secondary.main}`,
                    overflow: 'hidden',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: 'inherit',
                      padding: '2px',
                      background: m.colors.gradients.mystical,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none',
                    },
                    '&:hover': {
                      boxShadow: m.shadows.glow,
                      transform: 'translateY(-4px) scale(1.02)',
                    },
                  },
                },
                {
                  props: { variant: 'result' },
                  style: {
                    backgroundColor: m.colors.background.card,
                    borderRadius: m.borders.radius.lg,
                    boxShadow: m.shadows.lg,
                    overflow: 'hidden',
                    position: 'relative',
                    background: `linear-gradient(135deg, ${m.colors.background.card} 0%, ${m.colors.background.elevated} 100%)`,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `radial-gradient(circle at top right, ${m.colors.primary.main}20, transparent 70%)`,
                      pointerEvents: 'none',
                    },
                    '&:hover': { boxShadow: m.shadows.glow, transform: 'translateY(-4px)' },
                  },
                },
                {
                  props: { variant: 'mystical' },
                  style: {
                    backgroundColor: 'transparent',
                    borderRadius: m.borders.radius.lg,
                    boxShadow: 'none',
                    overflow: 'hidden',
                    position: 'relative',
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(26, 26, 46, 0.7)',
                    border: '1px solid rgba(138, 79, 255, 0.3)',
                    '&:hover': {
                      boxShadow: m.shadows.mystical,
                      borderColor: 'rgba(138, 79, 255, 0.5)',
                    },
                  },
                },
              ],
            },
            MuiTextField: {
              styleOverrides: {
                root: {
                  '& .MuiOutlinedInput-root': {
                    borderRadius: m.borders.radius.md,
                    backgroundColor: 'rgba(26, 26, 46, 0.5)',
                    '& fieldset': {
                      borderColor: m.colors.misc.divider,
                      transition: `all ${m.animations.duration.fast} ${m.animations.easing.easeInOut}`,
                    },
                    '&:hover fieldset': { borderColor: m.colors.primary.light },
                    '&.Mui-focused fieldset': {
                      borderColor: m.colors.primary.main,
                      borderWidth: m.borders.width.thick,
                      boxShadow: `0 0 0 2px ${m.colors.primary.main}30`,
                    },
                    '& .MuiInputBase-input': {
                      color: m.colors.text.primary,
                      '&::placeholder': { color: m.colors.text.secondary, opacity: 0.7 },
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: m.colors.text.secondary,
                    '&.Mui-focused': { color: m.colors.primary.light },
                  },
                  '& .MuiFormHelperText-root': { marginLeft: 0 },
                },
              },
              variants: [
                {
                  props: { variant: 'mystical' },
                  style: {
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(26, 26, 46, 0.3)',
                      backdropFilter: 'blur(4px)',
                      '& fieldset': { borderColor: 'rgba(138, 79, 255, 0.3)' },
                      '&:hover fieldset': { borderColor: 'rgba(138, 79, 255, 0.5)' },
                      '&.Mui-focused fieldset': {
                        borderColor: m.colors.primary.main,
                        borderWidth: m.borders.width.thick,
                        boxShadow: `0 0 0 2px ${m.colors.primary.main}30`,
                      },
                    },
                  },
                },
              ],
            },
            MuiIconButton: {
              styleOverrides: {
                root: {
                  color: m.colors.text.secondary,
                  transition: `all ${m.animations.duration.fast} ${m.animations.easing.easeInOut}`,
                  '&:hover': {
                    backgroundColor: 'rgba(138, 79, 255, 0.08)',
                    color: m.colors.text.primary,
                    transform: 'scale(1.1)',
                  },
                },
              },
              variants: [
                {
                  props: { color: 'primary' },
                  style: {
                    color: m.colors.primary.main,
                    '&:hover': {
                      backgroundColor: 'rgba(138, 79, 255, 0.08)',
                      color: m.colors.primary.light,
                    },
                  },
                },
                {
                  props: { color: 'secondary' },
                  style: {
                    color: m.colors.secondary.main,
                    '&:hover': {
                      backgroundColor: 'rgba(242, 201, 76, 0.08)',
                      color: m.colors.secondary.light,
                    },
                  },
                },
                {
                  props: { variant: 'mystical' },
                  style: {
                    color: m.colors.primary.main,
                    border: '1px solid rgba(138, 79, 255, 0.3)',
                    borderRadius: '50%',
                    padding: m.spacing.values[1],
                    '&:hover': {
                      backgroundColor: 'rgba(138, 79, 255, 0.08)',
                      borderColor: 'rgba(138, 79, 255, 0.5)',
                      boxShadow: m.colors.misc.glowPurple,
                    },
                  },
                },
              ],
            },
            MuiAppBar: {
              styleOverrides: {
                root: {
                  backgroundColor: 'transparent',
                  backgroundImage: m.colors.gradients.dark,
                  boxShadow: 'none',
                  borderBottom: `${m.borders.width.thin} solid ${m.colors.misc.divider}`,
                  backdropFilter: 'blur(10px)',
                },
              },
              variants: [
                {
                  props: { color: 'transparent' },
                  style: {
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                    boxShadow: 'none',
                    borderBottom: 'none',
                  },
                },
                {
                  props: { color: 'mystical' },
                  style: {
                    backgroundColor: 'rgba(26, 26, 46, 0.7)',
                    backgroundImage: 'none',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(138, 79, 255, 0.2)',
                  },
                },
              ],
            },
            MuiLinearProgress: {
              styleOverrides: {
                root: {
                  borderRadius: m.borders.radius.full,
                  height: 8,
                  backgroundColor: 'rgba(138, 79, 255, 0.2)',
                  overflow: 'hidden',
                },
                bar: {
                  borderRadius: m.borders.radius.full,
                  backgroundImage: m.colors.gradients.mystical,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    animation: 'shimmer 2s infinite',
                  },
                  '@keyframes shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                  },
                },
              },
              variants: [
                {
                  props: { color: 'secondary' },
                  style: {
                    '& .MuiLinearProgress-bar': { backgroundImage: m.colors.gradients.secondary },
                  },
                },
              ],
            },
            MuiPaper: {
              styleOverrides: {
                root: { backgroundColor: m.colors.background.paper, backgroundImage: 'none' },
              },
              variants: [
                {
                  props: { variant: 'mystical' },
                  style: {
                    backgroundColor: 'rgba(26, 26, 46, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(138, 79, 255, 0.2)',
                  },
                },
              ],
            },
          },
        }),
        g = (u = (0, p.Z)(u)),
        y = (0, a.createContext)({ mode: 'dark', toggleMode: () => {}, theme: g });
      function h({ children: r }) {
        let [o, e] = (0, a.useState)('dark'),
          t = (0, l.Z)({
            ...g,
            palette: {
              ...g.palette,
              mode: 'light',
              primary: { ...g.palette.primary },
              secondary: { ...g.palette.secondary },
              background: { default: '#FAFAFA', paper: '#FFFFFF' },
              text: { primary: '#000000', secondary: '#333333', disabled: '#666666' },
            },
          }),
          i = 'light' === o ? t : g;
        return s.jsx(y.Provider, {
          value: {
            mode: o,
            toggleMode: () => {
              let r = 'dark' === o ? 'light' : 'dark';
              e(r), localStorage.setItem('themeMode', r);
            },
            theme: i,
          },
          children: (0, s.jsxs)(d.Z, { theme: i, children: [s.jsx(c.ZP, {}), r] }),
        });
      }
      function b({ children: r }) {
        let [o] = (0, a.useState)(
          () =>
            new t.S({
              defaultOptions: { queries: { staleTime: 6e4, refetchOnWindowFocus: !1, retry: 1 } },
            })
        );
        return (0, s.jsxs)(i.aH, {
          client: o,
          children: [s.jsx(h, { children: s.jsx(n.FV, { children: r }) }), !1],
        });
      }
    },
    '(ssr)/./src/app/utils/supabase.js': (r, o, e) => {
      'use strict';
      e.d(o, { ZP: () => i });
      var s = e('(ssr)/./node_modules/@supabase/supabase-js/dist/module/index.js');
      let a = 'https://uboblerxqhlkwesjmvbo.supabase.co',
        t =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVib2JsZXJ4cWhsa3dlc2ptdmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0ODU2MTUsImV4cCI6MjA2MzA2MTYxNX0.UoMDiFnu_vEaxMsVxAOQAj8tnVQ4-c0fbkx6HW_hfww';
      (a && t) ||
        console.error(
          'Supabase URL or Anonymous Key is missing. Please check your environment variables.'
        );
      let i = (0, s.eI)(a, t);
    },
    '(rsc)/./src/app/layout.js': (r, o, e) => {
      'use strict';
      e.r(o), e.d(o, { default: () => d, metadata: () => l, viewport: () => n });
      var s = e(
        '(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js'
      );
      e('(rsc)/./src/app/globals.css');
      let a = (0,
        e('(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js')
          .createProxy)(
          String.raw`C:\Users\전준영\Documents\augment-projects\MBTI test for dating\src\app\providers.js#default`
        ),
        t = {
          title: '달빛 연애 연구소',
          description: 'MBTI 기반 연애 성향 테스트로 당신의 연애 스타일과 이상형을 알아보세요.',
          keywords: 'MBTI, 연애, 테스트, 성향, 이상형, 궁합, 타로, 달빛 연애 연구소',
          authors: [{ name: '달빛 연애 연구소' }],
          creator: '달빛 연애 연구소',
          publisher: '달빛 연애 연구소',
          metadataBase: new URL('https://mbti-dating-test.vercel.app'),
          openGraph: {
            title: '달빛 연애 연구소 - MBTI 연애 테스트',
            description: 'MBTI 기반 연애 성향 테스트로 당신의 연애 스타일과 이상형을 알아보세요.',
            url: 'https://mbti-dating-test.vercel.app',
            siteName: '달빛 연애 연구소',
            images: [
              {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: '달빛 연애 연구소 - MBTI 연애 테스트',
              },
            ],
            locale: 'ko_KR',
            type: 'website',
          },
          twitter: {
            card: 'summary_large_image',
            title: '달빛 연애 연구소 - MBTI 연애 테스트',
            description: 'MBTI 기반 연애 성향 테스트로 당신의 연애 스타일과 이상형을 알아보세요.',
            images: ['/images/og-image.jpg'],
          },
          robots: {
            index: !0,
            follow: !0,
            googleBot: { index: !0, follow: !0, 'max-image-preview': 'large', 'max-snippet': -1 },
          },
          icons: { icon: '/favicon.ico', shortcut: '/favicon.ico', apple: '/apple-touch-icon.png' },
          manifest: '/manifest.json',
        },
        i = {
          ...t,
          title: '달빛 연애 연구소 - MBTI 연애 테스트',
          description:
            '타로 카드의 신비로운 힘으로 당신의 MBTI 연애 유형을 분석해드립니다. 당신의 연애 스타일과 이상형을 알아보세요.',
        };
      ({ ...t });
      let n = { width: 'device-width', initialScale: 1, maximumScale: 1, themeColor: '#6B3FA0' },
        l = {
          title: '달빛 연애 연구소 - MBTI 연애 테스트',
          description:
            'Z세대를 위한 MBTI 기반 연애 심리 테스트, 당신의 연애 스타일과 이상형을 알아보세요',
          ...i,
        };
      function d({ children: r }) {
        return s.jsx('html', {
          lang: 'ko',
          children: s.jsx('body', { children: s.jsx(a, { children: r }) }),
        });
      }
    },
  });
