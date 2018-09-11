exports.id = "main";
exports.modules = {

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * This File is NOT need to Edit\n * 这个文件不需要被编辑\n */\nlet app = __webpack_require__(/*! ./server */ \"./server/server.js\").default;\n\nconst server = app.listen(3000);\nconsole.log('Your Server is Running At http://localhost:3000');\n\nif (true) {\n    module.hot.accept(/*! ./server */ \"./server/server.js\", () => {\n        try {\n            server.removeAllListeners(\"request\", server);\n            app = __webpack_require__(/*! ./server */ \"./server/server.js\").default;\n            server.on(\"request\", app.callback());\n        } catch (err) {\n            console.log(err);\n        }\n    });\n    module.hot.accept();\n    module.hot.dispose(() => {\n        server.close()\n    })\n}\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

};