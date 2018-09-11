exports.id = "main";
exports.modules = {

/***/ "./page/index.js":
/*!***********************!*\
  !*** ./page/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet app = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.get('/',ctx => {\n    ctx.body = 'Begin From Here';\n}).get('/help',ctx => {\n    ctx.body = 'help';\n}).get('/self',ctx => {\n    ctx.body = 'abc123123';\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./page/index.js?");

/***/ })

};