exports.id = "main";
exports.modules = {

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page/index */ \"./page/index.js\");\n/* harmony import */ var _page_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/step */ \"./page/step.js\");\n/**\n * This is a module Entry\n * 这个是模块入口文件\n */\n\n\n\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\nconst Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n \nconst app = new Koa();\nconst router = new Router();\n\nrouter.use('/',_page_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].routes());\nrouter.use('/step',_page_step__WEBPACK_IMPORTED_MODULE_1__[\"default\"].routes());\n\napp.use(router.routes()).use(router.allowedMethods());\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ })

};