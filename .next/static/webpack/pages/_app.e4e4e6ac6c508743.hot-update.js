"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --max-width: 1100px;\\r\\n  --border-radius: 12px;\\r\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\r\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\r\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\r\\n\\r\\n  --foreground-rgb: 0, 0, 0;\\r\\n  --background-start-rgb: 214, 219, 220;\\r\\n  --background-end-rgb: 255, 255, 255;\\r\\n\\r\\n  --primary-glow: conic-gradient(\\r\\n    from 180deg at 50% 50%,\\r\\n    #16abff33 0deg,\\r\\n    #0885ff33 55deg,\\r\\n    #54d6ff33 120deg,\\r\\n    #0071ff33 160deg,\\r\\n    transparent 360deg\\r\\n  );\\r\\n  --secondary-glow: radial-gradient(\\r\\n    rgba(255, 255, 255, 1),\\r\\n    rgba(255, 255, 255, 0)\\r\\n  );\\r\\n\\r\\n  --tile-start-rgb: 239, 245, 249;\\r\\n  --tile-end-rgb: 228, 232, 233;\\r\\n  --tile-border: conic-gradient(\\r\\n    #00000080,\\r\\n    #00000040,\\r\\n    #00000030,\\r\\n    #00000020,\\r\\n    #00000010,\\r\\n    #00000010,\\r\\n    #00000080\\r\\n  );\\r\\n\\r\\n  --callout-rgb: 238, 240, 241;\\r\\n  --callout-border-rgb: 172, 175, 176;\\r\\n  --card-rgb: 180, 185, 188;\\r\\n  --card-border-rgb: 131, 134, 135;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --foreground-rgb: 255, 255, 255;\\r\\n    /* background start wouldnt change colour? not sure why its stuck at black, so i added a background colour instead in the body class. */\\r\\n    --background-end-rgb: 100, 236, 247;\\r\\n\\r\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(121, 83, 227, 0));\\r\\n    --secondary-glow: linear-gradient(\\r\\n      to bottom right,\\r\\n      rgba(0, 64, 255, 0),\\r\\n      rgba(1, 65, 255, 0),\\r\\n      rgba(1, 65, 255, 0.575)\\r\\n    );\\r\\n\\r\\n    --tile-start-rgb: 2, 13, 46;\\r\\n    --tile-end-rgb: 2, 5, 19;\\r\\n    --tile-border: conic-gradient(\\r\\n      #ffffff80,\\r\\n      #ffffff40,\\r\\n      #ffffff30,\\r\\n      #ffffff20,\\r\\n      #ffffff10,\\r\\n      #ffffff10,\\r\\n      #ffffff80\\r\\n    );\\r\\n\\r\\n    --callout-rgb: 20, 20, 20;\\r\\n    --callout-border-rgb: 108, 108, 108;\\r\\n    --card-rgb: 100, 100, 100;\\r\\n    --card-border-rgb: 200, 200, 200;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  max-width: 100vw;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: rgb(var(--foreground-rgb));\\r\\n  background: linear-gradient(\\r\\n      to bottom,\\r\\n      transparent,\\r\\n      rgb(var(--background-end-rgb))\\r\\n    )\\r\\n    rgb(var(--background-start-rgb));\\r\\n    background-color: #68237b;\\r\\n    \\r\\n}\\r\\n\\r\\n.titles {\\r\\n  margin-bottom: 1em;\\r\\n  font-family: 'Franklin Gothic Medium';\\r\\n  font-size: 50px;\\r\\n  display: contents;\\r\\n}\\r\\n\\r\\n.text-background {\\r\\n  background-color: #140947;\\r\\n  border: thick solid #68237b;\\r\\n  border-radius: 20px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  html {\\r\\n    color-scheme: dark;\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,qBAAqB;EACrB;;4DAE0D;;EAE1D,yBAAyB;EACzB,qCAAqC;EACrC,mCAAmC;;EAEnC;;;;;;;GAOC;EACD;;;GAGC;;EAED,+BAA+B;EAC/B,6BAA6B;EAC7B;;;;;;;;GAQC;;EAED,4BAA4B;EAC5B,mCAAmC;EACnC,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE;IACE,+BAA+B;IAC/B,uIAAuI;IACvI,mCAAmC;;IAEnC,6EAA6E;IAC7E;;;;;KAKC;;IAED,2BAA2B;IAC3B,wBAAwB;IACxB;;;;;;;;KAQC;;IAED,yBAAyB;IACzB,mCAAmC;IACnC,yBAAyB;IACzB,gCAAgC;EAClC;AACF;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC;;;;;oCAKkC;IAChC,yBAAyB;;AAE7B;;AAEA;EACE,kBAAkB;EAClB,qCAAqC;EACrC,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;AACf;;;;AAIA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF\",\"sourcesContent\":[\":root {\\r\\n  --max-width: 1100px;\\r\\n  --border-radius: 12px;\\r\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\r\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\r\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\r\\n\\r\\n  --foreground-rgb: 0, 0, 0;\\r\\n  --background-start-rgb: 214, 219, 220;\\r\\n  --background-end-rgb: 255, 255, 255;\\r\\n\\r\\n  --primary-glow: conic-gradient(\\r\\n    from 180deg at 50% 50%,\\r\\n    #16abff33 0deg,\\r\\n    #0885ff33 55deg,\\r\\n    #54d6ff33 120deg,\\r\\n    #0071ff33 160deg,\\r\\n    transparent 360deg\\r\\n  );\\r\\n  --secondary-glow: radial-gradient(\\r\\n    rgba(255, 255, 255, 1),\\r\\n    rgba(255, 255, 255, 0)\\r\\n  );\\r\\n\\r\\n  --tile-start-rgb: 239, 245, 249;\\r\\n  --tile-end-rgb: 228, 232, 233;\\r\\n  --tile-border: conic-gradient(\\r\\n    #00000080,\\r\\n    #00000040,\\r\\n    #00000030,\\r\\n    #00000020,\\r\\n    #00000010,\\r\\n    #00000010,\\r\\n    #00000080\\r\\n  );\\r\\n\\r\\n  --callout-rgb: 238, 240, 241;\\r\\n  --callout-border-rgb: 172, 175, 176;\\r\\n  --card-rgb: 180, 185, 188;\\r\\n  --card-border-rgb: 131, 134, 135;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --foreground-rgb: 255, 255, 255;\\r\\n    /* background start wouldnt change colour? not sure why its stuck at black, so i added a background colour instead in the body class. */\\r\\n    --background-end-rgb: 100, 236, 247;\\r\\n\\r\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(121, 83, 227, 0));\\r\\n    --secondary-glow: linear-gradient(\\r\\n      to bottom right,\\r\\n      rgba(0, 64, 255, 0),\\r\\n      rgba(1, 65, 255, 0),\\r\\n      rgba(1, 65, 255, 0.575)\\r\\n    );\\r\\n\\r\\n    --tile-start-rgb: 2, 13, 46;\\r\\n    --tile-end-rgb: 2, 5, 19;\\r\\n    --tile-border: conic-gradient(\\r\\n      #ffffff80,\\r\\n      #ffffff40,\\r\\n      #ffffff30,\\r\\n      #ffffff20,\\r\\n      #ffffff10,\\r\\n      #ffffff10,\\r\\n      #ffffff80\\r\\n    );\\r\\n\\r\\n    --callout-rgb: 20, 20, 20;\\r\\n    --callout-border-rgb: 108, 108, 108;\\r\\n    --card-rgb: 100, 100, 100;\\r\\n    --card-border-rgb: 200, 200, 200;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  max-width: 100vw;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: rgb(var(--foreground-rgb));\\r\\n  background: linear-gradient(\\r\\n      to bottom,\\r\\n      transparent,\\r\\n      rgb(var(--background-end-rgb))\\r\\n    )\\r\\n    rgb(var(--background-start-rgb));\\r\\n    background-color: #68237b;\\r\\n    \\r\\n}\\r\\n\\r\\n.titles {\\r\\n  margin-bottom: 1em;\\r\\n  font-family: 'Franklin Gothic Medium';\\r\\n  font-size: 50px;\\r\\n  display: contents;\\r\\n}\\r\\n\\r\\n.text-background {\\r\\n  background-color: #140947;\\r\\n  border: thick solid #68237b;\\r\\n  border-radius: 20px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  html {\\r\\n    color-scheme: dark;\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxMV0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzExXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGlEQUFpRCwwQkFBMEIsNEJBQTRCLDhOQUE4TixvQ0FBb0MsNENBQTRDLDBDQUEwQywyTUFBMk0sNkdBQTZHLDBDQUEwQyxvQ0FBb0MseUtBQXlLLHVDQUF1QywwQ0FBMEMsZ0NBQWdDLHVDQUF1QyxLQUFLLDZDQUE2QyxhQUFhLHdDQUF3Qyw0TEFBNEwsMEZBQTBGLDJLQUEySyx3Q0FBd0MsaUNBQWlDLDJMQUEyTCxzQ0FBc0MsNENBQTRDLGtDQUFrQyx5Q0FBeUMsT0FBTyxLQUFLLFdBQVcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsS0FBSyx1QkFBdUIsdUJBQXVCLHlCQUF5QixLQUFLLGNBQWMsd0NBQXdDLHNLQUFzSyxrQ0FBa0MsYUFBYSxpQkFBaUIseUJBQXlCLDRDQUE0QyxzQkFBc0Isd0JBQXdCLEtBQUssMEJBQTBCLGdDQUFnQyxrQ0FBa0MsMEJBQTBCLG9CQUFvQixLQUFLLG1CQUFtQixxQkFBcUIsNEJBQTRCLEtBQUssNkNBQTZDLFlBQVksMkJBQTJCLE9BQU8sS0FBSyxXQUFXLG1GQUFtRixZQUFZLGFBQWEsT0FBTyxRQUFRLGFBQWEsYUFBYSxjQUFjLFlBQVksS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsVUFBVSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFVBQVUsT0FBTyxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLGdDQUFnQywwQkFBMEIsNEJBQTRCLDhOQUE4TixvQ0FBb0MsNENBQTRDLDBDQUEwQywyTUFBMk0sNkdBQTZHLDBDQUEwQyxvQ0FBb0MseUtBQXlLLHVDQUF1QywwQ0FBMEMsZ0NBQWdDLHVDQUF1QyxLQUFLLDZDQUE2QyxhQUFhLHdDQUF3Qyw0TEFBNEwsMEZBQTBGLDJLQUEySyx3Q0FBd0MsaUNBQWlDLDJMQUEyTCxzQ0FBc0MsNENBQTRDLGtDQUFrQyx5Q0FBeUMsT0FBTyxLQUFLLFdBQVcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsS0FBSyx1QkFBdUIsdUJBQXVCLHlCQUF5QixLQUFLLGNBQWMsd0NBQXdDLHNLQUFzSyxrQ0FBa0MsYUFBYSxpQkFBaUIseUJBQXlCLDRDQUE0QyxzQkFBc0Isd0JBQXdCLEtBQUssMEJBQTBCLGdDQUFnQyxrQ0FBa0MsMEJBQTBCLG9CQUFvQixLQUFLLG1CQUFtQixxQkFBcUIsNEJBQTRCLEtBQUssNkNBQTZDLFlBQVksMkJBQTJCLE9BQU8sS0FBSyx1QkFBdUI7QUFDcHJOO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzg1ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tbWF4LXdpZHRoOiAxMTAwcHg7XFxyXFxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAtLWZvbnQtbW9ubzogdWktbW9ub3NwYWNlLCBNZW5sbywgTW9uYWNvLCAnQ2FzY2FkaWEgTW9ubycsICdTZWdvZSBVSSBNb25vJyxcXHJcXG4gICAgJ1JvYm90byBNb25vJywgJ094eWdlbiBNb25vJywgJ1VidW50dSBNb25vc3BhY2UnLCAnU291cmNlIENvZGUgUHJvJyxcXHJcXG4gICAgJ0ZpcmEgTW9ubycsICdEcm9pZCBTYW5zIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxyXFxuXFxyXFxuICAtLWZvcmVncm91bmQtcmdiOiAwLCAwLCAwO1xcclxcbiAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogMjE0LCAyMTksIDIyMDtcXHJcXG4gIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcclxcblxcclxcbiAgLS1wcmltYXJ5LWdsb3c6IGNvbmljLWdyYWRpZW50KFxcclxcbiAgICBmcm9tIDE4MGRlZyBhdCA1MCUgNTAlLFxcclxcbiAgICAjMTZhYmZmMzMgMGRlZyxcXHJcXG4gICAgIzA4ODVmZjMzIDU1ZGVnLFxcclxcbiAgICAjNTRkNmZmMzMgMTIwZGVnLFxcclxcbiAgICAjMDA3MWZmMzMgMTYwZGVnLFxcclxcbiAgICB0cmFuc3BhcmVudCAzNjBkZWdcXHJcXG4gICk7XFxyXFxuICAtLXNlY29uZGFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXHJcXG4gICk7XFxyXFxuXFxyXFxuICAtLXRpbGUtc3RhcnQtcmdiOiAyMzksIDI0NSwgMjQ5O1xcclxcbiAgLS10aWxlLWVuZC1yZ2I6IDIyOCwgMjMyLCAyMzM7XFxyXFxuICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXHJcXG4gICAgIzAwMDAwMDgwLFxcclxcbiAgICAjMDAwMDAwNDAsXFxyXFxuICAgICMwMDAwMDAzMCxcXHJcXG4gICAgIzAwMDAwMDIwLFxcclxcbiAgICAjMDAwMDAwMTAsXFxyXFxuICAgICMwMDAwMDAxMCxcXHJcXG4gICAgIzAwMDAwMDgwXFxyXFxuICApO1xcclxcblxcclxcbiAgLS1jYWxsb3V0LXJnYjogMjM4LCAyNDAsIDI0MTtcXHJcXG4gIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxNzIsIDE3NSwgMTc2O1xcclxcbiAgLS1jYXJkLXJnYjogMTgwLCAxODUsIDE4ODtcXHJcXG4gIC0tY2FyZC1ib3JkZXItcmdiOiAxMzEsIDEzNCwgMTM1O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICA6cm9vdCB7XFxyXFxuICAgIC0tZm9yZWdyb3VuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQgc3RhcnQgd291bGRudCBjaGFuZ2UgY29sb3VyPyBub3Qgc3VyZSB3aHkgaXRzIHN0dWNrIGF0IGJsYWNrLCBzbyBpIGFkZGVkIGEgYmFja2dyb3VuZCBjb2xvdXIgaW5zdGVhZCBpbiB0aGUgYm9keSBjbGFzcy4gKi9cXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDEwMCwgMjM2LCAyNDc7XFxyXFxuXFxyXFxuICAgIC0tcHJpbWFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQocmdiYSgxLCA2NSwgMjU1LCAwLjQpLCByZ2JhKDEyMSwgODMsIDIyNywgMCkpO1xcclxcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcclxcbiAgICAgIHJnYmEoMCwgNjQsIDI1NSwgMCksXFxyXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXHJcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuNTc1KVxcclxcbiAgICApO1xcclxcblxcclxcbiAgICAtLXRpbGUtc3RhcnQtcmdiOiAyLCAxMywgNDY7XFxyXFxuICAgIC0tdGlsZS1lbmQtcmdiOiAyLCA1LCAxOTtcXHJcXG4gICAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxyXFxuICAgICAgI2ZmZmZmZjgwLFxcclxcbiAgICAgICNmZmZmZmY0MCxcXHJcXG4gICAgICAjZmZmZmZmMzAsXFxyXFxuICAgICAgI2ZmZmZmZjIwLFxcclxcbiAgICAgICNmZmZmZmYxMCxcXHJcXG4gICAgICAjZmZmZmZmMTAsXFxyXFxuICAgICAgI2ZmZmZmZjgwXFxyXFxuICAgICk7XFxyXFxuXFxyXFxuICAgIC0tY2FsbG91dC1yZ2I6IDIwLCAyMCwgMjA7XFxyXFxuICAgIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxMDgsIDEwOCwgMTA4O1xcclxcbiAgICAtLWNhcmQtcmdiOiAxMDAsIDEwMCwgMTAwO1xcclxcbiAgICAtLWNhcmQtYm9yZGVyLXJnYjogMjAwLCAyMDAsIDIwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgY29sb3I6IHJnYih2YXIoLS1mb3JlZ3JvdW5kLXJnYikpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1lbmQtcmdiKSlcXHJcXG4gICAgKVxcclxcbiAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1zdGFydC1yZ2IpKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4MjM3YjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi50aXRsZXMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJztcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1iYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDA5NDc7XFxyXFxuICBib3JkZXI6IHRoaWNrIHNvbGlkICM2ODIzN2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckI7OzREQUUwRDs7RUFFMUQseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxtQ0FBbUM7O0VBRW5DOzs7Ozs7O0dBT0M7RUFDRDs7O0dBR0M7O0VBRUQsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3Qjs7Ozs7Ozs7R0FRQzs7RUFFRCw0QkFBNEI7RUFDNUIsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQix1SUFBdUk7SUFDdkksbUNBQW1DOztJQUVuQyw2RUFBNkU7SUFDN0U7Ozs7O0tBS0M7O0lBRUQsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs7S0FRQzs7SUFFRCx5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakM7Ozs7O29DQUtrQztJQUNoQyx5QkFBeUI7O0FBRTdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOzs7O0FBSUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcclxcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgJ0Nhc2NhZGlhIE1vbm8nLCAnU2Vnb2UgVUkgTW9ubycsXFxyXFxuICAgICdSb2JvdG8gTW9ubycsICdPeHlnZW4gTW9ubycsICdVYnVudHUgTW9ub3NwYWNlJywgJ1NvdXJjZSBDb2RlIFBybycsXFxyXFxuICAgICdGaXJhIE1vbm8nLCAnRHJvaWQgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcclxcblxcclxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXHJcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxyXFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXHJcXG5cXHJcXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXHJcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXHJcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxyXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXHJcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXHJcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXHJcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxyXFxuICApO1xcclxcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxyXFxuICApO1xcclxcblxcclxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXHJcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcclxcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxyXFxuICAgICMwMDAwMDA4MCxcXHJcXG4gICAgIzAwMDAwMDQwLFxcclxcbiAgICAjMDAwMDAwMzAsXFxyXFxuICAgICMwMDAwMDAyMCxcXHJcXG4gICAgIzAwMDAwMDEwLFxcclxcbiAgICAjMDAwMDAwMTAsXFxyXFxuICAgICMwMDAwMDA4MFxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxyXFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXHJcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxyXFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgOnJvb3Qge1xcclxcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kIHN0YXJ0IHdvdWxkbnQgY2hhbmdlIGNvbG91cj8gbm90IHN1cmUgd2h5IGl0cyBzdHVjayBhdCBibGFjaywgc28gaSBhZGRlZCBhIGJhY2tncm91bmQgY29sb3VyIGluc3RlYWQgaW4gdGhlIGJvZHkgY2xhc3MuICovXFxyXFxuICAgIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAxMDAsIDIzNiwgMjQ3O1xcclxcblxcclxcbiAgICAtLXByaW1hcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KHJnYmEoMSwgNjUsIDI1NSwgMC40KSwgcmdiYSgxMjEsIDgzLCAyMjcsIDApKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktZ2xvdzogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSByaWdodCxcXHJcXG4gICAgICByZ2JhKDAsIDY0LCAyNTUsIDApLFxcclxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxyXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwLjU3NSlcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcclxcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxyXFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcclxcbiAgICAgICNmZmZmZmY4MCxcXHJcXG4gICAgICAjZmZmZmZmNDAsXFxyXFxuICAgICAgI2ZmZmZmZjMwLFxcclxcbiAgICAgICNmZmZmZmYyMCxcXHJcXG4gICAgICAjZmZmZmZmMTAsXFxyXFxuICAgICAgI2ZmZmZmZjEwLFxcclxcbiAgICAgICNmZmZmZmY4MFxcclxcbiAgICApO1xcclxcblxcclxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcclxcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXHJcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXHJcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICB0byBib3R0b20sXFxyXFxuICAgICAgdHJhbnNwYXJlbnQsXFxyXFxuICAgICAgcmdiKHZhcigtLWJhY2tncm91bmQtZW5kLXJnYikpXFxyXFxuICAgIClcXHJcXG4gICAgcmdiKHZhcigtLWJhY2tncm91bmQtc3RhcnQtcmdiKSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODIzN2I7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGVzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bSc7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBjb250ZW50cztcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtYmFja2dyb3VuZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQwOTQ3O1xcclxcbiAgYm9yZGVyOiB0aGljayBzb2xpZCAjNjgyMzdiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./styles/globals.css\n"));

/***/ })

});