'use strict';
(exports.id = 863),
  (exports.ids = [863]),
  (exports.modules = {
    '(ssr)/./src/app/hooks/useMbtiTest.js': (e, i, s) => {
      s.d(i, { Z: () => h });
      var t = s(
          '(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js'
        ),
        o = s('(ssr)/./node_modules/next/dist/api/navigation.js'),
        n = s('(ssr)/./node_modules/zustand/esm/index.mjs'),
        r = s('(ssr)/./node_modules/zustand/esm/middleware.mjs'),
        u = s('(ssr)/./src/app/utils/mbtiAnalyzer.js');
      let d = (0, n.Ue)(
        (0, r.tJ)(
          (e, i) => ({
            questions: [],
            currentQuestionIndex: 0,
            responses: {},
            result: null,
            isTestStarted: !1,
            isTestCompleted: !1,
            sessionId: null,
            setQuestions: i => e({ questions: i }),
            setCurrentQuestionIndex: i => e({ currentQuestionIndex: i }),
            goToNextQuestion: () => {
              let { currentQuestionIndex: s, questions: t } = i();
              s < t.length - 1 && e({ currentQuestionIndex: s + 1 });
            },
            goToPreviousQuestion: () => {
              let { currentQuestionIndex: s } = i();
              s > 0 && e({ currentQuestionIndex: s - 1 });
            },
            goToQuestion: s => {
              let { questions: t } = i();
              s >= 0 && s < t.length && e({ currentQuestionIndex: s });
            },
            addResponse: (s, t) => {
              let { responses: o } = i();
              e({ responses: { ...o, [s]: t } });
            },
            removeResponse: s => {
              let { responses: t } = i(),
                o = { ...t };
              delete o[s], e({ responses: o });
            },
            clearResponses: () => e({ responses: {} }),
            calculateResult: () => {
              let { questions: s, responses: t } = i(),
                o = Object.entries(t).map(([e, i]) => ({ questionId: parseInt(e), answer: i })),
                n = (0, u.wy)(s, o);
              return e({ result: n, isTestCompleted: !0 }), n;
            },
            startTest: () => e({ isTestStarted: !0, currentQuestionIndex: 0 }),
            completeTest: () => {
              let s = i().calculateResult();
              return e({ isTestCompleted: !0, result: s }), s;
            },
            restartTest: () =>
              e({ currentQuestionIndex: 0, responses: {}, result: null, isTestCompleted: !1 }),
            getProgress: () => {
              let { questions: e, responses: s } = i();
              return 0 === e.length ? 0 : Math.round((Object.keys(s).length / e.length) * 100);
            },
            getCurrentQuestionResponse: () => {
              let { questions: e, currentQuestionIndex: s, responses: t } = i();
              return 0 === e.length ? null : t[e[s].id] || null;
            },
            setSessionId: i => e({ sessionId: i }),
            resetStore: () =>
              e({
                questions: [],
                currentQuestionIndex: 0,
                responses: {},
                result: null,
                isTestStarted: !1,
                isTestCompleted: !1,
                sessionId: null,
              }),
          }),
          { name: 'mbti-test-storage', storage: (0, r.FL)(() => sessionStorage) }
        )
      );
      var p = s('(ssr)/./node_modules/@supabase/supabase-js/dist/module/index.js'),
        l = s('(ssr)/./src/app/utils/sampleQuestions.js');
      let a = e =>
          e.map(e => ({
            id: e.id,
            question: e.question,
            optionA: e.option_a,
            optionB: e.option_b,
            dimension: e.dimension,
            direction: e.direction,
          })),
        c = (0, p.eI)(
          'https://uboblerxqhlkwesjmvbo.supabase.co',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVib2JsZXJ4cWhsa3dlc2ptdmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0ODU2MTUsImV4cCI6MjA2MzA2MTYxNX0.UoMDiFnu_vEaxMsVxAOQAj8tnVQ4-c0fbkx6HW_hfww'
        ),
        m = async () => {
          try {
            let { data: e, error: i } = await c.getAllQuestions();
            if (i) throw (console.error('Error fetching questions from Supabase:', i), i);
            return a(e);
          } catch (e) {
            return console.error('Failed to fetch questions:', e), [];
          }
        },
        v = () => l.Z,
        I = async (e = !1) => (e ? v() : await m()),
        q = async (e, i, s, t = null) => {
          try {
            let { data: o, error: n } = t
              ? await c.saveUserResponse(t, i, s)
              : await c.saveAnonymousResponse(e, i, s);
            if (n) throw (console.error('Error saving user response:', n), n);
            return { success: !0, data: o };
          } catch (e) {
            return console.error('Failed to save user response:', e), { success: !1, error: e };
          }
        };
      var A = s('(ssr)/./src/app/utils/mbti.js'),
        b = s('(ssr)/./src/app/contexts/SupabaseContext.jsx');
      function h({ useSampleData: e = !1, autoSave: i = !0 } = {}) {
        let [s, n] = (0, t.useState)(!0),
          [r, p] = (0, t.useState)(null),
          [l, a] = (0, t.useState)(null),
          [c, m] = (0, t.useState)(null),
          v = (0, o.useRouter)(),
          { user: h, sessionId: g } = (0, b.$4)(),
          {
            questions: T,
            currentQuestionIndex: B,
            responses: x,
            result: y,
            isTestStarted: Q,
            isTestCompleted: S,
            sessionId: j,
            setQuestions: C,
            setCurrentQuestionIndex: J,
            goToNextQuestion: w,
            goToPreviousQuestion: F,
            goToQuestion: f,
            addResponse: R,
            removeResponse: k,
            clearResponses: E,
            calculateResult: N,
            startTest: M,
            completeTest: _,
            restartTest: P,
            getProgress: z,
            getCurrentQuestionResponse: O,
            setSessionId: Z,
            resetStore: U,
          } = d(),
          V = (0, t.useCallback)(async () => {
            try {
              n(!0);
              let i = await I(e);
              C(i), p(null);
            } catch (e) {
              console.error('Failed to fetch questions:', e),
                p('질문 데이터를 가져오는 데 실패했습니다.');
            } finally {
              n(!1);
            }
          }, [e, C]),
          X = (0, t.useCallback)(() => (0 === T.length ? null : T[B]), [T, B]),
          W = (0, t.useCallback)(
            async (e, s) => {
              let t = X();
              if (t) {
                if ((R(t.id, s), i && (j || h)))
                  try {
                    await q(j, t.id, s, h?.id);
                  } catch (e) {
                    console.error('Failed to save response:', e);
                  }
                B === T.length - 1 ? D() : w();
              }
            },
            [X, R, i, j, h, B, T.length, w]
          ),
          D = (0, t.useCallback)(async () => {
            let e = _();
            if (e && e.mbtiType) {
              a((0, A.BW)(e.mbtiType)), m((0, A.cQ)(e.mbtiType));
              try {
                await (0, u.TW)(e, h?.id, j);
              } catch (e) {
                console.error('Failed to save test result to Supabase:', e);
              }
              v.push('/result');
            }
            return e;
          }, [_, v, h, j]),
          Y = (0, t.useCallback)(() => {
            M(), v.push('/test/question');
          }, [M, v]),
          L = (0, t.useCallback)(() => {
            P(), a(null), m(null), v.push('/test');
          }, [P, v]);
        return {
          loading: s,
          error: r,
          questions: T,
          currentQuestionIndex: B,
          currentQuestion: X(),
          responses: x,
          result: y,
          isTestStarted: Q,
          isTestCompleted: S,
          progress: z(),
          currentResponse: O(),
          idealType: l,
          worstMatch: c,
          mbtiResult: y?.mbtiType,
          fetchQuestions: V,
          saveAnswer: W,
          goToNextQuestion: w,
          goToPreviousQuestion: F,
          handleStartTest: Y,
          handleRestartTest: L,
          finishTest: D,
          goToQuestion: f,
          clearResponses: E,
          resetStore: U,
        };
      }
    },
    '(ssr)/./src/app/utils/sampleQuestions.js': (e, i, s) => {
      s.d(i, { Z: () => t });
      let t = [
        {
          id: 1,
          question: '연인과 함께 있을 때 나는',
          optionA: '다양한 활동과 대화를 통해 에너지를 얻는다',
          optionB: '조용한 시간을 함께 보내며 에너지를 얻는다',
          dimension: 'E-I',
          direction: 'positive',
        },
        {
          id: 2,
          question: '데이트 장소로 더 선호하는 곳은',
          optionA: '활기찬 페스티벌이나 사람이 많은 장소',
          optionB: '조용한 카페나 한적한 장소',
          dimension: 'E-I',
          direction: 'positive',
        },
        {
          id: 3,
          question: '연인과의 갈등 후 나는',
          optionA: '바로 대화하고 해결하고 싶다',
          optionB: '혼자 생각할 시간이 필요하다',
          dimension: 'E-I',
          direction: 'positive',
        },
        {
          id: 4,
          question: '연인의 친구들을 만날 때 나는',
          optionA: '새로운 사람들과 만나는 것이 즐겁다',
          optionB: '부담스럽고 에너지가 소모된다',
          dimension: 'E-I',
          direction: 'positive',
        },
        {
          id: 5,
          question: '연애 중 힘든 일이 있을 때 나는',
          optionA: '여러 사람들과 이야기하며 해소한다',
          optionB: '혼자 생각하거나 가까운 한두 명에게만 털어놓는다',
          dimension: 'E-I',
          direction: 'positive',
        },
        {
          id: 6,
          question: '연인과의 관계에서 나는',
          optionA: '함께하는 활동과 경험을 중요시한다',
          optionB: '깊은 대화와 정서적 연결을 중요시한다',
          dimension: 'E-I',
          direction: 'negative',
        },
        {
          id: 7,
          question: '연인과의 대화에서 나는',
          optionA: '구체적인 일상과 현실적인 주제를 선호한다',
          optionB: '미래의 가능성과 추상적인 주제를 선호한다',
          dimension: 'S-N',
          direction: 'positive',
        },
        {
          id: 8,
          question: '연인에게 선물을 고를 때 나는',
          optionA: '실용적이고 당장 필요한 것을 선택한다',
          optionB: '의미 있고 창의적인 것을 선택한다',
          dimension: 'S-N',
          direction: 'positive',
        },
        {
          id: 9,
          question: '연인과의 여행에서 나는',
          optionA: '구체적인 일정과 계획을 중요시한다',
          optionB: '새로운 가능성과 즉흥적인 경험을 중요시한다',
          dimension: 'S-N',
          direction: 'positive',
        },
        {
          id: 10,
          question: '연인과의 미래를 생각할 때 나는',
          optionA: '현실적인 계획과 단계를 고려한다',
          optionB: '관계의 성장 가능성과 비전을 그린다',
          dimension: 'S-N',
          direction: 'positive',
        },
        {
          id: 11,
          question: '연인의 이야기를 들을 때 나는',
          optionA: '구체적인 사실과 세부사항에 집중한다',
          optionB: '이야기의 의미와 패턴에 집중한다',
          dimension: 'S-N',
          direction: 'positive',
        },
        {
          id: 12,
          question: '연인과 함께 영화를 볼 때 나는',
          optionA: '현실적이고 사실적인 이야기를 선호한다',
          optionB: '상상력이 풍부하고 창의적인 이야기를 선호한다',
          dimension: 'S-N',
          direction: 'negative',
        },
        {
          id: 13,
          question: '연인과의 중요한 결정에서 나는',
          optionA: '논리와 객관적인 사실을 기반으로 판단한다',
          optionB: '감정과 가치관을 기반으로 판단한다',
          dimension: 'T-F',
          direction: 'positive',
        },
        {
          id: 14,
          question: '연인과의 갈등 상황에서 나는',
          optionA: '논리적으로 문제를 분석하고 해결책을 찾는다',
          optionB: '서로의 감정을 고려하며 조화롭게 해결하려 한다',
          dimension: 'T-F',
          direction: 'positive',
        },
        {
          id: 15,
          question: '연인이 힘든 일을 겪을 때 나는',
          optionA: '문제 해결을 위한 실질적인 조언을 제공한다',
          optionB: '공감하고 정서적 지지를 보낸다',
          dimension: 'T-F',
          direction: 'positive',
        },
        {
          id: 16,
          question: '연인의 의견이 나와 다를 때 나는',
          optionA: '객관적인 사실을 바탕으로 논리적으로 접근한다',
          optionB: '서로의 가치관과 감정을 고려하여 접근한다',
          dimension: 'T-F',
          direction: 'positive',
        },
        {
          id: 17,
          question: '연인에게 나의 마음을 표현할 때 나는',
          optionA: '직접적이고 명확하게 표현한다',
          optionB: '섬세하고 따뜻한 방식으로 표현한다',
          dimension: 'T-F',
          direction: 'positive',
        },
        {
          id: 18,
          question: '연인이 나에게 조언을 구할 때 나는',
          optionA: '객관적이고 솔직한 의견을 제공한다',
          optionB: '상대방의 감정을 고려한 조언을 제공한다',
          dimension: 'T-F',
          direction: 'negative',
        },
        {
          id: 19,
          question: '연애할 때 데이트 계획은',
          optionA: '미리 계획을 세우고 준비하는 게 좋다',
          optionB: '즉흥적으로 결정해도 괜찮다',
          dimension: 'J-P',
          direction: 'positive',
        },
        {
          id: 20,
          question: '연인과의 약속에 나는',
          optionA: '정확한 시간과 장소를 미리 정해두는 것이 중요하다',
          optionB: '상황에 따라 유연하게 변경할 수 있는 것이 좋다',
          dimension: 'J-P',
          direction: 'positive',
        },
        {
          id: 21,
          question: '연인과의 여행에서 나는',
          optionA: '일정과 방문할 장소를 미리 계획한다',
          optionB: '그때그때 끌리는 곳을 자유롭게 탐험한다',
          dimension: 'J-P',
          direction: 'positive',
        },
        {
          id: 22,
          question: '연인과 함께 결정을 내릴 때 나는',
          optionA: '빠르게 결정하고 실행에 옮기는 것을 선호한다',
          optionB: '더 많은 정보와 가능성을 탐색하는 것을 선호한다',
          dimension: 'J-P',
          direction: 'positive',
        },
        {
          id: 23,
          question: '연인과의 일상에서 나는',
          optionA: '규칙적이고 체계적인 생활을 선호한다',
          optionB: '자유롭고 융통성 있는 생활을 선호한다',
          dimension: 'J-P',
          direction: 'positive',
        },
        {
          id: 24,
          question: '연인과의 미래 계획에 대해 나는',
          optionA: '구체적인 목표와 단계를 설정하는 것이 중요하다',
          optionB: '상황에 따라 유연하게 조정하는 것이 중요하다',
          dimension: 'J-P',
          direction: 'negative',
        },
      ];
    },
  });
