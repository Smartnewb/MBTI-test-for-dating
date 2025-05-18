'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [880],
  {
    '(app-pages-browser)/./src/app/utils/mbti.js': function (e, t, s) {
      s.d(t, {
        BW: function () {
          return r;
        },
        TA: function () {
          return i;
        },
        cQ: function () {
          return a;
        },
      });
      let n = {
          INTJ: {
            name: '전략가',
            description: '독립적이고 분석적인 당신은 논리와 전략적 사고를 중요시합니다.',
            strengths: ['지적 호기심', '독립성', '목표 지향적', '신뢰성'],
            weaknesses: ['감정 표현 어려움', '완벽주의', '비판적 성향', '고집이 강함'],
            datingStyle: '장기적인 계획과 지적 교류를 중시하며, 파트너의 독립성을 존중합니다.',
          },
          INTP: {
            name: '논리술사',
            description: '호기심 많고 창의적인 당신은 지적 도전과 논리적 분석을 즐깁니다.',
            strengths: ['창의적 사고', '적응력', '지적 호기심', '독창성'],
            weaknesses: ['감정 표현 부족', '우유부단함', '현실 무시', '사회적 고립'],
            datingStyle:
              '지적 대화와 개인 공간을 중시하며, 파트너와의 깊은 사고 교류를 추구합니다.',
          },
          ENTJ: {
            name: '통솔자',
            description: '자신감 있고 결단력 있는 당신은 리더십과 효율성을 중요시합니다.',
            strengths: ['리더십', '결단력', '효율성', '목표 지향적'],
            weaknesses: ['지나친 통제', '감정 무시', '참을성 부족', '완벽주의'],
            datingStyle: '목표 지향적이고 효율적인 관계를 추구하며, 파트너의 성장을 지원합니다.',
          },
          ENTP: {
            name: '변론가',
            description: '창의적이고 논쟁을 즐기는 당신은 새로운 아이디어와 가능성을 탐색합니다.',
            strengths: ['창의성', '적응력', '유머 감각', '논리적 사고'],
            weaknesses: ['집중력 부족', '논쟁적', '규칙 무시', '감정 둔감'],
            datingStyle: '지적 자극과 다양한 경험을 추구하며, 파트너와의 활발한 대화를 즐깁니다.',
          },
          INFJ: {
            name: '옹호자',
            description: '이상주의적이고 통찰력 있는 당신은 깊은 연결과 의미를 추구합니다.',
            strengths: ['공감 능력', '직관력', '헌신적', '창의적'],
            weaknesses: ['완벽주의', '지나친 이상주의', '갈등 회피', '감정 과부하'],
            datingStyle:
              '깊고 의미 있는 관계를 추구하며, 파트너와의 정서적, 영적 연결을 중요시합니다.',
          },
          INFP: {
            name: '중재자',
            description: '이상주의적이고 감성적인 당신은 깊은 감정과 진정성을 중요시합니다.',
            strengths: ['공감 능력', '진실된 소통', '창의적 표현', '깊은 유대감'],
            weaknesses: ['이상적 기대', '현실과 괴리', '갈등 회피', '감정 기복'],
            datingStyle:
              '깊은 정서적 연결과 의미 있는 대화를 통해 파트너와 특별한 유대감을 형성합니다.',
          },
          ENFJ: {
            name: '선도자',
            description: '카리스마 있고 영감을 주는 당신은 타인의 성장과 조화를 중요시합니다.',
            strengths: ['공감 능력', '사교성', '영감 제공', '헌신적'],
            weaknesses: ['과도한 자기희생', '인정 욕구', '비판에 민감', '지나친 이상주의'],
            datingStyle: '파트너의 성장을 지원하고 조화로운 관계를 위해 적극적으로 소통합니다.',
          },
          ENFP: {
            name: '활동가',
            description: '열정적이고 창의적인 당신은 가능성과 새로운 경험을 추구합니다.',
            strengths: ['열정', '창의성', '공감 능력', '적응력'],
            weaknesses: ['집중력 부족', '우유부단함', '현실 무시', '감정 기복'],
            datingStyle:
              '자유롭고 진정성 있는 관계를 추구하며, 파트너와 함께 새로운 경험을 즐깁니다.',
          },
          ISTJ: {
            name: '현실주의자',
            description: '책임감 있고 체계적인 당신은 신뢰성과 안정성을 중요시합니다.',
            strengths: ['신뢰성', '책임감', '체계적', '실용적'],
            weaknesses: ['변화에 저항', '감정 표현 부족', '융통성 부족', '비판적'],
            datingStyle:
              '안정적이고 신뢰할 수 있는 관계를 추구하며, 책임감 있게 파트너를 대합니다.',
          },
          ISFJ: {
            name: '수호자',
            description: '따뜻하고 헌신적인 당신은 타인의 필요와 안정을 중요시합니다.',
            strengths: ['헌신적', '세심함', '신뢰성', '실용적'],
            weaknesses: ['자기주장 부족', '변화에 저항', '비판에 민감', '과도한 자기희생'],
            datingStyle:
              '안정적이고 조화로운 관계를 추구하며, 파트너의 필요에 세심하게 반응합니다.',
          },
          ESTJ: {
            name: '경영자',
            description: '체계적이고 실용적인 당신은 질서와 효율성을 중요시합니다.',
            strengths: ['조직력', '책임감', '결단력', '신뢰성'],
            weaknesses: ['융통성 부족', '감정 둔감', '지나친 통제', '비판적'],
            datingStyle:
              '명확한 역할과 책임이 있는 안정적인 관계를 추구하며, 파트너에게 헌신합니다.',
          },
          ESFJ: {
            name: '집정관',
            description: '사교적이고 배려심 깊은 당신은 조화와 협력을 중요시합니다.',
            strengths: ['사교성', '배려심', '조직력', '협력적'],
            weaknesses: ['비판에 민감', '인정 욕구', '갈등 회피', '지나친 자기희생'],
            datingStyle:
              '조화롭고 안정적인 관계를 추구하며, 파트너의 필요를 적극적으로 충족시킵니다.',
          },
          ISTP: {
            name: '장인',
            description: '독립적이고 적응력 있는 당신은 실용성과 효율성을 중요시합니다.',
            strengths: ['적응력', '문제 해결 능력', '독립성', '실용적'],
            weaknesses: ['감정 표현 부족', '약속에 무관심', '규칙 무시', '충동적'],
            datingStyle:
              '자유롭고 독립적인 관계를 추구하며, 파트너에게 공간과 자율성을 제공합니다.',
          },
          ISFP: {
            name: '모험가',
            description: '감성적이고 예술적인 당신은 진정성과 자유를 중요시합니다.',
            strengths: ['감성적 표현', '충실함', '적응력', '조화로움'],
            weaknesses: ['갈등 회피', '계획성 부족', '자기주장 부족', '감정 기복'],
            datingStyle: '진정성 있고 자유로운 관계를 추구하며, 파트너와 감성적인 교류를 즐깁니다.',
          },
          ESTP: {
            name: '사업가',
            description: '활동적이고 현실적인 당신은 즉각적인 경험과 효율성을 중요시합니다.',
            strengths: ['적응력', '실용적', '활동적', '문제 해결 능력'],
            weaknesses: ['장기 계획 부족', '감정 둔감', '인내심 부족', '위험 감수'],
            datingStyle:
              '활동적이고 자유로운 관계를 추구하며, 파트너와 함께 새로운 경험을 즐깁니다.',
          },
          ESFP: {
            name: '연예인',
            description: '사교적이고 열정적인 당신은 즐거움과 경험을 중요시합니다.',
            strengths: ['사교성', '열정', '적응력', '낙관적'],
            weaknesses: ['장기 계획 부족', '집중력 부족', '갈등 회피', '감정 기복'],
            datingStyle: '즐겁고 활기찬 관계를 추구하며, 파트너와 함께 현재의 순간을 즐깁니다.',
          },
        },
        r = e =>
          ({
            INFP: 'ENFJ',
            ENFP: 'INFJ',
            ISTJ: 'ESFP',
            ISFJ: 'ENFP',
            INFJ: 'ENFP',
            INTJ: 'ENFP',
            ISTP: 'ENFJ',
            ISFP: 'ESFJ',
            INTP: 'ENTJ',
            ESTP: 'INFJ',
            ESFP: 'ISFJ',
            ENTP: 'INFP',
            ENTJ: 'INFP',
            ESFJ: 'ISFP',
            ENFJ: 'INFP',
            ESTJ: 'INFP',
          })[e] || 'ENFP',
        a = e =>
          ({
            INFP: 'ESTJ',
            ENFP: 'ISTJ',
            INFJ: 'ESTP',
            ENFJ: 'ISTP',
            INTP: 'ESFJ',
            ENTP: 'ISFJ',
            INTJ: 'ESFP',
            ENTJ: 'ISFP',
            ISFP: 'ENTJ',
            ESFP: 'INTJ',
            ISTP: 'ENFJ',
            ESTP: 'INFJ',
            ISFJ: 'ENTP',
            ESFJ: 'INTP',
            ISTJ: 'ENFP',
            ESTJ: 'INFP',
          })[e] || 'ESTJ',
        i = e => n[e] || null;
    },
    '(app-pages-browser)/./src/app/utils/mbtiAnalyzer.js': function (e, t, s) {
      let n;
      s.d(t, {
        wy: function () {
          return M;
        },
        TW: function () {
          return T;
        },
      });
      var r = s('(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js'),
        a = s('(app-pages-browser)/./src/app/utils/supabase.js');
      s('(app-pages-browser)/./src/app/utils/mbti.js');
      let i = (e, t) => {
          if (!t || 0 === t.length) return 0;
          let s = {};
          e.forEach(e => {
            s[e.dimension] || (s[e.dimension] = []), s[e.dimension].push(e);
          });
          let n = new Map();
          t.forEach(e => {
            n.set(e.questionId, e.answer);
          });
          let r = 0,
            a = 0;
          return (
            Object.keys(s).forEach(e => {
              let t = s[e];
              if (t.length < 2) return;
              let i = [];
              if (
                (t.forEach(e => {
                  let t = n.get(e.id);
                  void 0 !== t && i.push({ questionId: e.id, answer: t, direction: e.direction });
                }),
                i.length < 2)
              )
                return;
              let o = 0,
                l = 0;
              for (let e = 0; e < i.length; e++)
                for (let t = e + 1; t < i.length; t++) {
                  let s = i[e],
                    n = i[t];
                  s.direction === n.direction
                    ? 2 >= Math.abs(s.answer - n.answer) && o++
                    : 2 >= Math.abs(s.answer + n.answer - 6) && o++,
                    l++;
                }
              (r += l > 0 ? Math.round((o / l) * 100) : 0), a++;
            }),
            a > 0 ? Math.round(r / a) : 0
          );
        },
        o = e => {
          if (!e || 0 === e.length) return 0;
          if (e.length < 3) return 30;
          let t = {};
          e.forEach(e => {
            let s = e.answer;
            t[s] = (t[s] || 0) + 1;
          });
          let s = Object.keys(t).length,
            n = Math.max(...Object.values(t)) / e.length;
          return Math.round(0.5 * Math.min(100, 20 * s) + 0.5 * Math.max(0, 100 - 100 * n));
        },
        l = (e, t, s, n) => {
          let r = i(e, t),
            a = o(t),
            l = s.overallCompleteness,
            c = Object.values(n).reduce((e, t) => e + t, 0) / 4,
            d = Math.round(0.3 * r + 0.2 * a + 0.2 * l + 0.3 * c),
            u = 'low';
          return (
            (u =
              d >= 80
                ? 'very-high'
                : d >= 65
                  ? 'high'
                  : d >= 50
                    ? 'medium'
                    : d >= 35
                      ? 'low'
                      : 'very-low'),
            {
              score: d,
              level: u,
              factors: { consistency: r, pattern: a, completeness: l, certainty: c },
            }
          );
        },
        c = new Map(),
        d = e =>
          e && 0 !== e.length
            ? [...e]
                .sort((e, t) => e.questionId - t.questionId)
                .map(e => ''.concat(e.questionId, ':').concat(e.answer))
                .join('|')
            : 'empty',
        u = e => {
          if (!e || 0 === e.length) return new Map();
          let t = new Map();
          return (
            e.forEach(e => {
              t.set(e.questionId, e.answer);
            }),
            t
          );
        },
        h = e => {
          if (!e || 0 === e.length) return { byId: new Map(), byDimension: {} };
          let t = new Map(),
            s = { 'E-I': [], 'S-N': [], 'T-F': [], 'J-P': [] };
          return (
            e.forEach(e => {
              t.set(e.id, e), s[e.dimension] && s[e.dimension].push(e);
            }),
            { byId: t, byDimension: s }
          );
        },
        p = { 'E-I': 1, 'S-N': 1.2, 'T-F': 1.5, 'J-P': 1.3 },
        I = { 1: 1.2, 2: 1, 3: 1.3, 4: 0.9, 5: 1.4, 6: 1.2, 7: 1.1, 8: 1.5 },
        S = { MIN: 1, MAX: 5 },
        E = (e, t) => {
          let s = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
            n = { 'E-I': 0, 'S-N': 0, 'T-F': 0, 'J-P': 0 };
          if (!t || 0 === t.length) return s;
          let r = u(t);
          return (
            h(e),
            e.forEach(e => {
              let t;
              let a = r.get(e.id);
              if (a) {
                if ('A' === a) t = 5;
                else if ('B' === a) t = 1;
                else if (isNaN((t = parseInt(a))) || t < S.MIN || t > S.MAX) return;
                n[e.dimension]++,
                  (t *= (p[e.dimension] || 1) * (I[e.id] || 1)),
                  'E-I' === e.dimension
                    ? 'positive' === e.direction
                      ? ((s.E += t), (s.I += S.MAX + 1 - t))
                      : ((s.I += t), (s.E += S.MAX + 1 - t))
                    : 'S-N' === e.dimension
                      ? 'positive' === e.direction
                        ? ((s.S += t), (s.N += S.MAX + 1 - t))
                        : ((s.N += t), (s.S += S.MAX + 1 - t))
                      : 'T-F' === e.dimension
                        ? 'positive' === e.direction
                          ? ((s.T += t), (s.F += S.MAX + 1 - t))
                          : ((s.F += t), (s.T += S.MAX + 1 - t))
                        : 'J-P' === e.dimension &&
                          ('positive' === e.direction
                            ? ((s.J += t), (s.P += S.MAX + 1 - t))
                            : ((s.P += t), (s.J += S.MAX + 1 - t)));
              }
            }),
            n['E-I'] > 0 &&
              ((s.E = Math.round((s.E / n['E-I']) * 100) / 100),
              (s.I = Math.round((s.I / n['E-I']) * 100) / 100)),
            n['S-N'] > 0 &&
              ((s.S = Math.round((s.S / n['S-N']) * 100) / 100),
              (s.N = Math.round((s.N / n['S-N']) * 100) / 100)),
            n['T-F'] > 0 &&
              ((s.T = Math.round((s.T / n['T-F']) * 100) / 100),
              (s.F = Math.round((s.F / n['T-F']) * 100) / 100)),
            n['J-P'] > 0 &&
              ((s.J = Math.round((s.J / n['J-P']) * 100) / 100),
              (s.P = Math.round((s.P / n['J-P']) * 100) / 100)),
            s
          );
        },
        N = e => ({
          'E-I': Math.abs(e.E - e.I),
          'S-N': Math.abs(e.S - e.N),
          'T-F': Math.abs(e.T - e.F),
          'J-P': Math.abs(e.J - e.P),
        }),
        F = e => {
          let t = S.MAX;
          return {
            'E-I': Math.round((Math.abs(e.E - e.I) / t) * 100),
            'S-N': Math.round((Math.abs(e.S - e.N) / t) * 100),
            'T-F': Math.round((Math.abs(e.T - e.F) / t) * 100),
            'J-P': Math.round((Math.abs(e.J - e.P) / t) * 100),
          };
        },
        J = { 'E-I': 'E', 'S-N': 'N', 'T-F': 'F', 'J-P': 'P' },
        m = e => {
          let t = [];
          return (
            0.5 >= Math.abs(e.E - e.I) ? t.push(J['E-I']) : t.push(e.E > e.I ? 'E' : 'I'),
            0.5 >= Math.abs(e.S - e.N) ? t.push(J['S-N']) : t.push(e.S > e.N ? 'S' : 'N'),
            0.5 >= Math.abs(e.T - e.F) ? t.push(J['T-F']) : t.push(e.T > e.F ? 'T' : 'F'),
            0.5 >= Math.abs(e.J - e.P) ? t.push(J['J-P']) : t.push(e.J > e.P ? 'J' : 'P'),
            t.join('')
          );
        },
        P = (e, t) => {
          let s = {
              'E-I': { total: 0, answered: 0 },
              'S-N': { total: 0, answered: 0 },
              'T-F': { total: 0, answered: 0 },
              'J-P': { total: 0, answered: 0 },
            },
            n = new Map();
          t.forEach(e => {
            n.set(e.questionId, e.answer);
          }),
            e.forEach(e => {
              let t = e.dimension;
              s[t].total++, n.has(e.id) && s[t].answered++;
            });
          let r = {
              'E-I':
                s['E-I'].total > 0 ? Math.round((s['E-I'].answered / s['E-I'].total) * 100) : 0,
              'S-N':
                s['S-N'].total > 0 ? Math.round((s['S-N'].answered / s['S-N'].total) * 100) : 0,
              'T-F':
                s['T-F'].total > 0 ? Math.round((s['T-F'].answered / s['T-F'].total) * 100) : 0,
              'J-P':
                s['J-P'].total > 0 ? Math.round((s['J-P'].answered / s['J-P'].total) * 100) : 0,
            },
            a = e.length,
            i = t.length,
            o = a > 0 ? Math.round((i / a) * 100) : 0;
          return {
            dimensionCompleteness: r,
            overallCompleteness: o,
            isComplete: 100 === o,
            hasSufficientData: Object.values(r).every(e => e >= 50),
          };
        },
        g = (e, t) =>
          Math.max(
            0,
            Math.min(
              100,
              Math.round(
                (Object.values(e).reduce((e, t) => e + t, 0) / 4) * 0.7 +
                  0.3 * t.overallCompleteness
              )
            )
          ),
        M =
          ((n = (e, t) => {
            let s = P(e, t),
              n = E(e, t),
              r = N(n),
              a = F(n),
              i = g(a, s),
              o = m(n),
              c = l(e, t, s, a);
            return {
              mbtiType: o,
              scores: n,
              dimensionDifferences: r,
              dimensionCertainty: a,
              completeness: s,
              reliability: i,
              confidence: c,
              timestamp: new Date().toISOString(),
            };
          }),
          function (e, t) {
            for (var s = arguments.length, r = Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++)
              r[a - 2] = arguments[a];
            let i = d(t);
            if (c.has(i)) return c.get(i);
            let o = n(e, t, ...r);
            if (c.size >= 100) {
              let e = c.keys().next().value;
              c.delete(e);
            }
            return c.set(i, o), o;
          }),
        T = async function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          try {
            var i, o, l;
            let c = {
              mbti_type: e.mbtiType,
              e_i_score: e.scores.E - e.scores.I,
              s_n_score: e.scores.S - e.scores.N,
              t_f_score: e.scores.T - e.scores.F,
              j_p_score: e.scores.J - e.scores.P,
              reliability: e.reliability || 0,
              completeness:
                (null === (i = e.completeness) || void 0 === i ? void 0 : i.overallCompleteness) ||
                0,
              confidence_score:
                (null === (o = e.confidence) || void 0 === o ? void 0 : o.score) || 0,
              confidence_level:
                (null === (l = e.confidence) || void 0 === l ? void 0 : l.level) || 'medium',
              share_id: (0, r.Z)(),
              created_at: new Date().toISOString(),
            };
            (c.e_score = e.scores.E),
              (c.i_score = e.scores.I),
              (c.s_score = e.scores.S),
              (c.n_score = e.scores.N),
              (c.t_score = e.scores.T),
              (c.f_score = e.scores.F),
              (c.j_score = e.scores.J),
              (c.p_score = e.scores.P),
              (c.dimension_certainty = JSON.stringify(e.dimensionCertainty || {})),
              e.confidence &&
                e.confidence.factors &&
                (c.confidence_factors = JSON.stringify(e.confidence.factors)),
              t && (c.user_id = t),
              s && (c.session_id = s),
              n && (c.email = n);
            let { data: d, error: u } = await a.ZP.from('test_results').insert([c]).select();
            if (u) throw (console.error('Error saving test result:', u), u);
            return d[0];
          } catch (e) {
            throw (console.error('Failed to save test result:', e), e);
          }
        };
    },
    '(app-pages-browser)/./src/app/utils/supabase.js': function (e, t, s) {
      var n = s('(app-pages-browser)/./node_modules/@supabase/supabase-js/dist/module/index.js');
      let r = 'https://uboblerxqhlkwesjmvbo.supabase.co',
        a =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVib2JsZXJ4cWhsa3dlc2ptdmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0ODU2MTUsImV4cCI6MjA2MzA2MTYxNX0.UoMDiFnu_vEaxMsVxAOQAj8tnVQ4-c0fbkx6HW_hfww';
      (r && a) ||
        console.error(
          'Supabase URL or Anonymous Key is missing. Please check your environment variables.'
        );
      let i = (0, n.eI)(r, a);
      t.ZP = i;
    },
  },
]);
