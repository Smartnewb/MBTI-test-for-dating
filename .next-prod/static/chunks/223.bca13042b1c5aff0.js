'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [223],
  {
    '(app-pages-browser)/./node_modules/ws/browser.js': function (e) {
      e.exports = function () {
        throw Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object'
        );
      };
    },
  },
]);
