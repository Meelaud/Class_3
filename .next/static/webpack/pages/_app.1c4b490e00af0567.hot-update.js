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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --max-width: 1100px;\\r\\n  --border-radius: 12px;\\r\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\r\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\r\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\r\\n\\r\\n  --foreground-rgb: 0, 0, 0;\\r\\n  --background-start-rgb: 214, 219, 220;\\r\\n  --background-end-rgb: 255, 255, 255;\\r\\n\\r\\n  --primary-glow: conic-gradient(\\r\\n    from 180deg at 50% 50%,\\r\\n    #16abff33 0deg,\\r\\n    #0885ff33 55deg,\\r\\n    #54d6ff33 120deg,\\r\\n    #0071ff33 160deg,\\r\\n    transparent 360deg\\r\\n  );\\r\\n  --secondary-glow: radial-gradient(\\r\\n    rgba(255, 255, 255, 1),\\r\\n    rgba(255, 255, 255, 0)\\r\\n  );\\r\\n\\r\\n  --tile-start-rgb: 239, 245, 249;\\r\\n  --tile-end-rgb: 228, 232, 233;\\r\\n  --tile-border: conic-gradient(\\r\\n    #00000080,\\r\\n    #00000040,\\r\\n    #00000030,\\r\\n    #00000020,\\r\\n    #00000010,\\r\\n    #00000010,\\r\\n    #00000080\\r\\n  );\\r\\n\\r\\n  --callout-rgb: 238, 240, 241;\\r\\n  --callout-border-rgb: 172, 175, 176;\\r\\n  --card-rgb: 180, 185, 188;\\r\\n  --card-border-rgb: 131, 134, 135;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --foreground-rgb: 255, 255, 255;\\r\\n    --background-start-rgb: rgb(0, 255, 0);\\r\\n    --background-end-rgb: 0, 0, 0;\\r\\n\\r\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\r\\n    --secondary-glow: linear-gradient(\\r\\n      to bottom right,\\r\\n      rgba(0, 64, 255, 0),\\r\\n      rgba(1, 65, 255, 0),\\r\\n      rgba(1, 65, 255, 0.3)\\r\\n    );\\r\\n\\r\\n    --tile-start-rgb: 2, 13, 46;\\r\\n    --tile-end-rgb: 2, 5, 19;\\r\\n    --tile-border: conic-gradient(\\r\\n      #ffffff80,\\r\\n      #ffffff40,\\r\\n      #ffffff30,\\r\\n      #ffffff20,\\r\\n      #ffffff10,\\r\\n      #ffffff10,\\r\\n      #ffffff80\\r\\n    );\\r\\n\\r\\n    --callout-rgb: 20, 20, 20;\\r\\n    --callout-border-rgb: 108, 108, 108;\\r\\n    --card-rgb: 100, 100, 100;\\r\\n    --card-border-rgb: 200, 200, 200;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  max-width: 100vw;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: rgb(var(--foreground-rgb));\\r\\n  background: linear-gradient(\\r\\n      to bottom,\\r\\n      transparent,\\r\\n      rgb(var(--background-end-rgb))\\r\\n    )\\r\\n    rgb(var(--background-start-rgb));\\r\\n}\\r\\n\\r\\n.titles {\\r\\n  font-family: 'Franklin Gothic Medium';\\r\\n  font-size: 50px;\\r\\n}\\r\\n\\r\\n.text-background {\\r\\n  background-color: #56494E;\\r\\n  border-color: #DB324D;\\r\\n  border-radius: 5px;\\r\\n  box-shadow:0 20px 0 20px black;\\r\\n  \\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  html {\\r\\n    color-scheme: dark;\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,qBAAqB;EACrB;;4DAE0D;;EAE1D,yBAAyB;EACzB,qCAAqC;EACrC,mCAAmC;;EAEnC;;;;;;;GAOC;EACD;;;GAGC;;EAED,+BAA+B;EAC/B,6BAA6B;EAC7B;;;;;;;;GAQC;;EAED,4BAA4B;EAC5B,mCAAmC;EACnC,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE;IACE,+BAA+B;IAC/B,sCAAsC;IACtC,6BAA6B;;IAE7B,2EAA2E;IAC3E;;;;;KAKC;;IAED,2BAA2B;IAC3B,wBAAwB;IACxB;;;;;;;;KAQC;;IAED,yBAAyB;IACzB,mCAAmC;IACnC,yBAAyB;IACzB,gCAAgC;EAClC;AACF;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC;;;;;oCAKkC;AACpC;;AAEA;EACE,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;EAClB,8BAA8B;;AAEhC;;;;;;AAMA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF\",\"sourcesContent\":[\":root {\\r\\n  --max-width: 1100px;\\r\\n  --border-radius: 12px;\\r\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\r\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\r\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\r\\n\\r\\n  --foreground-rgb: 0, 0, 0;\\r\\n  --background-start-rgb: 214, 219, 220;\\r\\n  --background-end-rgb: 255, 255, 255;\\r\\n\\r\\n  --primary-glow: conic-gradient(\\r\\n    from 180deg at 50% 50%,\\r\\n    #16abff33 0deg,\\r\\n    #0885ff33 55deg,\\r\\n    #54d6ff33 120deg,\\r\\n    #0071ff33 160deg,\\r\\n    transparent 360deg\\r\\n  );\\r\\n  --secondary-glow: radial-gradient(\\r\\n    rgba(255, 255, 255, 1),\\r\\n    rgba(255, 255, 255, 0)\\r\\n  );\\r\\n\\r\\n  --tile-start-rgb: 239, 245, 249;\\r\\n  --tile-end-rgb: 228, 232, 233;\\r\\n  --tile-border: conic-gradient(\\r\\n    #00000080,\\r\\n    #00000040,\\r\\n    #00000030,\\r\\n    #00000020,\\r\\n    #00000010,\\r\\n    #00000010,\\r\\n    #00000080\\r\\n  );\\r\\n\\r\\n  --callout-rgb: 238, 240, 241;\\r\\n  --callout-border-rgb: 172, 175, 176;\\r\\n  --card-rgb: 180, 185, 188;\\r\\n  --card-border-rgb: 131, 134, 135;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --foreground-rgb: 255, 255, 255;\\r\\n    --background-start-rgb: rgb(0, 255, 0);\\r\\n    --background-end-rgb: 0, 0, 0;\\r\\n\\r\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\r\\n    --secondary-glow: linear-gradient(\\r\\n      to bottom right,\\r\\n      rgba(0, 64, 255, 0),\\r\\n      rgba(1, 65, 255, 0),\\r\\n      rgba(1, 65, 255, 0.3)\\r\\n    );\\r\\n\\r\\n    --tile-start-rgb: 2, 13, 46;\\r\\n    --tile-end-rgb: 2, 5, 19;\\r\\n    --tile-border: conic-gradient(\\r\\n      #ffffff80,\\r\\n      #ffffff40,\\r\\n      #ffffff30,\\r\\n      #ffffff20,\\r\\n      #ffffff10,\\r\\n      #ffffff10,\\r\\n      #ffffff80\\r\\n    );\\r\\n\\r\\n    --callout-rgb: 20, 20, 20;\\r\\n    --callout-border-rgb: 108, 108, 108;\\r\\n    --card-rgb: 100, 100, 100;\\r\\n    --card-border-rgb: 200, 200, 200;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  max-width: 100vw;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: rgb(var(--foreground-rgb));\\r\\n  background: linear-gradient(\\r\\n      to bottom,\\r\\n      transparent,\\r\\n      rgb(var(--background-end-rgb))\\r\\n    )\\r\\n    rgb(var(--background-start-rgb));\\r\\n}\\r\\n\\r\\n.titles {\\r\\n  font-family: 'Franklin Gothic Medium';\\r\\n  font-size: 50px;\\r\\n}\\r\\n\\r\\n.text-background {\\r\\n  background-color: #56494E;\\r\\n  border-color: #DB324D;\\r\\n  border-radius: 5px;\\r\\n  box-shadow:0 20px 0 20px black;\\r\\n  \\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  html {\\r\\n    color-scheme: dark;\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxMV0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzExXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGlEQUFpRCwwQkFBMEIsNEJBQTRCLDhOQUE4TixvQ0FBb0MsNENBQTRDLDBDQUEwQywyTUFBMk0sNkdBQTZHLDBDQUEwQyxvQ0FBb0MseUtBQXlLLHVDQUF1QywwQ0FBMEMsZ0NBQWdDLHVDQUF1QyxLQUFLLDZDQUE2QyxhQUFhLHdDQUF3QywrQ0FBK0Msc0NBQXNDLHdGQUF3Rix5S0FBeUssd0NBQXdDLGlDQUFpQywyTEFBMkwsc0NBQXNDLDRDQUE0QyxrQ0FBa0MseUNBQXlDLE9BQU8sS0FBSyxXQUFXLDZCQUE2QixpQkFBaUIsZ0JBQWdCLEtBQUssdUJBQXVCLHVCQUF1Qix5QkFBeUIsS0FBSyxjQUFjLHdDQUF3QyxzS0FBc0ssS0FBSyxpQkFBaUIsNENBQTRDLHNCQUFzQixLQUFLLDBCQUEwQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QixxQ0FBcUMsV0FBVywyQkFBMkIscUJBQXFCLDRCQUE0QixLQUFLLDZDQUE2QyxZQUFZLDJCQUEyQixPQUFPLEtBQUssV0FBVyxtRkFBbUYsWUFBWSxhQUFhLE9BQU8sUUFBUSxhQUFhLGFBQWEsY0FBYyxZQUFZLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLFVBQVUsTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxVQUFVLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxnQ0FBZ0MsMEJBQTBCLDRCQUE0Qiw4TkFBOE4sb0NBQW9DLDRDQUE0QywwQ0FBMEMsMk1BQTJNLDZHQUE2RywwQ0FBMEMsb0NBQW9DLHlLQUF5Syx1Q0FBdUMsMENBQTBDLGdDQUFnQyx1Q0FBdUMsS0FBSyw2Q0FBNkMsYUFBYSx3Q0FBd0MsK0NBQStDLHNDQUFzQyx3RkFBd0YseUtBQXlLLHdDQUF3QyxpQ0FBaUMsMkxBQTJMLHNDQUFzQyw0Q0FBNEMsa0NBQWtDLHlDQUF5QyxPQUFPLEtBQUssV0FBVyw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLHVCQUF1Qix1QkFBdUIseUJBQXlCLEtBQUssY0FBYyx3Q0FBd0Msc0tBQXNLLEtBQUssaUJBQWlCLDRDQUE0QyxzQkFBc0IsS0FBSywwQkFBMEIsZ0NBQWdDLDRCQUE0Qix5QkFBeUIscUNBQXFDLFdBQVcsMkJBQTJCLHFCQUFxQiw0QkFBNEIsS0FBSyw2Q0FBNkMsWUFBWSwyQkFBMkIsT0FBTyxLQUFLLHVCQUF1QjtBQUN2ek07QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/ODVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1tYXgtd2lkdGg6IDExMDBweDtcXHJcXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC0tZm9udC1tb25vOiB1aS1tb25vc3BhY2UsIE1lbmxvLCBNb25hY28sICdDYXNjYWRpYSBNb25vJywgJ1NlZ29lIFVJIE1vbm8nLFxcclxcbiAgICAnUm9ib3RvIE1vbm8nLCAnT3h5Z2VuIE1vbm8nLCAnVWJ1bnR1IE1vbm9zcGFjZScsICdTb3VyY2UgQ29kZSBQcm8nLFxcclxcbiAgICAnRmlyYSBNb25vJywgJ0Ryb2lkIFNhbnMgTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXHJcXG5cXHJcXG4gIC0tZm9yZWdyb3VuZC1yZ2I6IDAsIDAsIDA7XFxyXFxuICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAyMTQsIDIxOSwgMjIwO1xcclxcbiAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxyXFxuXFxyXFxuICAtLXByaW1hcnktZ2xvdzogY29uaWMtZ3JhZGllbnQoXFxyXFxuICAgIGZyb20gMTgwZGVnIGF0IDUwJSA1MCUsXFxyXFxuICAgICMxNmFiZmYzMyAwZGVnLFxcclxcbiAgICAjMDg4NWZmMzMgNTVkZWcsXFxyXFxuICAgICM1NGQ2ZmYzMyAxMjBkZWcsXFxyXFxuICAgICMwMDcxZmYzMyAxNjBkZWcsXFxyXFxuICAgIHRyYW5zcGFyZW50IDM2MGRlZ1xcclxcbiAgKTtcXHJcXG4gIC0tc2Vjb25kYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIC0tdGlsZS1zdGFydC1yZ2I6IDIzOSwgMjQ1LCAyNDk7XFxyXFxuICAtLXRpbGUtZW5kLXJnYjogMjI4LCAyMzIsIDIzMztcXHJcXG4gIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcclxcbiAgICAjMDAwMDAwODAsXFxyXFxuICAgICMwMDAwMDA0MCxcXHJcXG4gICAgIzAwMDAwMDMwLFxcclxcbiAgICAjMDAwMDAwMjAsXFxyXFxuICAgICMwMDAwMDAxMCxcXHJcXG4gICAgIzAwMDAwMDEwLFxcclxcbiAgICAjMDAwMDAwODBcXHJcXG4gICk7XFxyXFxuXFxyXFxuICAtLWNhbGxvdXQtcmdiOiAyMzgsIDI0MCwgMjQxO1xcclxcbiAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDE3MiwgMTc1LCAxNzY7XFxyXFxuICAtLWNhcmQtcmdiOiAxODAsIDE4NSwgMTg4O1xcclxcbiAgLS1jYXJkLWJvcmRlci1yZ2I6IDEzMSwgMTM0LCAxMzU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gIDpyb290IHtcXHJcXG4gICAgLS1mb3JlZ3JvdW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogcmdiKDAsIDI1NSwgMCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAwLCAwLCAwO1xcclxcblxcclxcbiAgICAtLXByaW1hcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KHJnYmEoMSwgNjUsIDI1NSwgMC40KSwgcmdiYSgxLCA2NSwgMjU1LCAwKSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWdsb3c6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICB0byBib3R0b20gcmlnaHQsXFxyXFxuICAgICAgcmdiYSgwLCA2NCwgMjU1LCAwKSxcXHJcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDApLFxcclxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMC4zKVxcclxcbiAgICApO1xcclxcblxcclxcbiAgICAtLXRpbGUtc3RhcnQtcmdiOiAyLCAxMywgNDY7XFxyXFxuICAgIC0tdGlsZS1lbmQtcmdiOiAyLCA1LCAxOTtcXHJcXG4gICAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxyXFxuICAgICAgI2ZmZmZmZjgwLFxcclxcbiAgICAgICNmZmZmZmY0MCxcXHJcXG4gICAgICAjZmZmZmZmMzAsXFxyXFxuICAgICAgI2ZmZmZmZjIwLFxcclxcbiAgICAgICNmZmZmZmYxMCxcXHJcXG4gICAgICAjZmZmZmZmMTAsXFxyXFxuICAgICAgI2ZmZmZmZjgwXFxyXFxuICAgICk7XFxyXFxuXFxyXFxuICAgIC0tY2FsbG91dC1yZ2I6IDIwLCAyMCwgMjA7XFxyXFxuICAgIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxMDgsIDEwOCwgMTA4O1xcclxcbiAgICAtLWNhcmQtcmdiOiAxMDAsIDEwMCwgMTAwO1xcclxcbiAgICAtLWNhcmQtYm9yZGVyLXJnYjogMjAwLCAyMDAsIDIwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgY29sb3I6IHJnYih2YXIoLS1mb3JlZ3JvdW5kLXJnYikpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1lbmQtcmdiKSlcXHJcXG4gICAgKVxcclxcbiAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1zdGFydC1yZ2IpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlcyB7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nO1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1iYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjQ5NEU7XFxyXFxuICBib3JkZXItY29sb3I6ICNEQjMyNEQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OjAgMjBweCAwIDIwcHggYmxhY2s7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckI7OzREQUUwRDs7RUFFMUQseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxtQ0FBbUM7O0VBRW5DOzs7Ozs7O0dBT0M7RUFDRDs7O0dBR0M7O0VBRUQsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3Qjs7Ozs7Ozs7R0FRQzs7RUFFRCw0QkFBNEI7RUFDNUIsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMsNkJBQTZCOztJQUU3QiwyRUFBMkU7SUFDM0U7Ozs7O0tBS0M7O0lBRUQsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs7S0FRQzs7SUFFRCx5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakM7Ozs7O29DQUtrQztBQUNwQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsOEJBQThCOztBQUVoQzs7Ozs7O0FBTUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcclxcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgJ0Nhc2NhZGlhIE1vbm8nLCAnU2Vnb2UgVUkgTW9ubycsXFxyXFxuICAgICdSb2JvdG8gTW9ubycsICdPeHlnZW4gTW9ubycsICdVYnVudHUgTW9ub3NwYWNlJywgJ1NvdXJjZSBDb2RlIFBybycsXFxyXFxuICAgICdGaXJhIE1vbm8nLCAnRHJvaWQgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcclxcblxcclxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXHJcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxyXFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXHJcXG5cXHJcXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXHJcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXHJcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxyXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXHJcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXHJcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXHJcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxyXFxuICApO1xcclxcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxyXFxuICApO1xcclxcblxcclxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXHJcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcclxcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxyXFxuICAgICMwMDAwMDA4MCxcXHJcXG4gICAgIzAwMDAwMDQwLFxcclxcbiAgICAjMDAwMDAwMzAsXFxyXFxuICAgICMwMDAwMDAyMCxcXHJcXG4gICAgIzAwMDAwMDEwLFxcclxcbiAgICAjMDAwMDAwMTAsXFxyXFxuICAgICMwMDAwMDA4MFxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxyXFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXHJcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxyXFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgOnJvb3Qge1xcclxcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcclxcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiByZ2IoMCwgMjU1LCAwKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDAsIDAsIDA7XFxyXFxuXFxyXFxuICAgIC0tcHJpbWFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQocmdiYSgxLCA2NSwgMjU1LCAwLjQpLCByZ2JhKDEsIDY1LCAyNTUsIDApKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktZ2xvdzogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSByaWdodCxcXHJcXG4gICAgICByZ2JhKDAsIDY0LCAyNTUsIDApLFxcclxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxyXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwLjMpXFxyXFxuICAgICk7XFxyXFxuXFxyXFxuICAgIC0tdGlsZS1zdGFydC1yZ2I6IDIsIDEzLCA0NjtcXHJcXG4gICAgLS10aWxlLWVuZC1yZ2I6IDIsIDUsIDE5O1xcclxcbiAgICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXHJcXG4gICAgICAjZmZmZmZmODAsXFxyXFxuICAgICAgI2ZmZmZmZjQwLFxcclxcbiAgICAgICNmZmZmZmYzMCxcXHJcXG4gICAgICAjZmZmZmZmMjAsXFxyXFxuICAgICAgI2ZmZmZmZjEwLFxcclxcbiAgICAgICNmZmZmZmYxMCxcXHJcXG4gICAgICAjZmZmZmZmODBcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgLS1jYWxsb3V0LXJnYjogMjAsIDIwLCAyMDtcXHJcXG4gICAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDEwOCwgMTA4LCAxMDg7XFxyXFxuICAgIC0tY2FyZC1yZ2I6IDEwMCwgMTAwLCAxMDA7XFxyXFxuICAgIC0tY2FyZC1ib3JkZXItcmdiOiAyMDAsIDIwMCwgMjAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBjb2xvcjogcmdiKHZhcigtLWZvcmVncm91bmQtcmdiKSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gYm90dG9tLFxcclxcbiAgICAgIHRyYW5zcGFyZW50LFxcclxcbiAgICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLWVuZC1yZ2IpKVxcclxcbiAgICApXFxyXFxuICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYikpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGVzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bSc7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NDk0RTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI0RCMzI0RDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6MCAyMHB4IDAgMjBweCBibGFjaztcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./styles/globals.css\n"));

/***/ })

});