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

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalData\": function() { return /* binding */ GlobalData; },\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Nav */ \"./src/pages/components/Nav.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst GlobalData = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [FeaturedPost, setFeaturedPost] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [Article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [CateGory, setCateGory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [CateGoryToggle, setCateGoryToggle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalData.Provider, {\n            value: {\n                CateGoryToggle,\n                setCateGoryToggle,\n                CateGory,\n                setCateGory,\n                FeaturedPost,\n                setFeaturedPost,\n                Article,\n                setArticle\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 21,\n                    columnNumber: 3\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(App, \"HB8YtwesdSvoz8Wzu9JghzFaDfA=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNrQjtBQUNiO0FBRTNCLE1BQU1HLDJCQUFhSCxvREFBYUEsR0FBRTtBQUUxQixTQUFTSSxJQUFJLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBQzVCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBS3hELHFCQUNFO2tCQUNBLDRFQUFDRSxXQUFXWSxRQUFRO1lBQUNDLE9BQU87Z0JBQUNIO2dCQUFnQkM7Z0JBQWtCSDtnQkFBVUM7Z0JBQVlMO2dCQUFjQztnQkFBZ0JDO2dCQUFTQztZQUFVOzs4QkFFeEksOERBQUNSLHVEQUFHQTs7Ozs7OEJBQ0osOERBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFLMUIsQ0FBQztHQW5CdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvTmF2XCJcblxuZXhwb3J0IGNvbnN0IEdsb2JhbERhdGEgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuY29uc3QgW0ZlYXR1cmVkUG9zdCwgc2V0RmVhdHVyZWRQb3N0XSA9IHVzZVN0YXRlKCcnKVxuY29uc3QgW0FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUoJycpXG5jb25zdCBbQ2F0ZUdvcnksIHNldENhdGVHb3J5XSA9IHVzZVN0YXRlKCcnKVxuY29uc3QgW0NhdGVHb3J5VG9nZ2xlLCBzZXRDYXRlR29yeVRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEdsb2JhbERhdGEuUHJvdmlkZXIgdmFsdWU9e3tDYXRlR29yeVRvZ2dsZSwgc2V0Q2F0ZUdvcnlUb2dnbGUsQ2F0ZUdvcnksIHNldENhdGVHb3J5LEZlYXR1cmVkUG9zdCwgc2V0RmVhdHVyZWRQb3N0LEFydGljbGUsIHNldEFydGljbGV9fT5cblxuICA8TmF2Lz5cbiAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvR2xvYmFsRGF0YS5Qcm92aWRlcj5cbiAgXG4gIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiTmF2IiwiR2xvYmFsRGF0YSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkZlYXR1cmVkUG9zdCIsInNldEZlYXR1cmVkUG9zdCIsIkFydGljbGUiLCJzZXRBcnRpY2xlIiwiQ2F0ZUdvcnkiLCJzZXRDYXRlR29yeSIsIkNhdGVHb3J5VG9nZ2xlIiwic2V0Q2F0ZUdvcnlUb2dnbGUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ }),

/***/ "./src/pages/components/Nav.jsx":
/*!**************************************!*\
  !*** ./src/pages/components/Nav.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Nav() {\n    _s();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const intervalId = setInterval(()=>{\n            setTime(new Date());\n        }, 1000);\n        return ()=>clearInterval(intervalId);\n    }, []);\n    const days = [\n        \"Sunday\",\n        \"Monday\",\n        \"Tuesday\",\n        \"Wednesday\",\n        \"Thursday\",\n        \"Friday\",\n        \"Saturday\"\n    ];\n    const day = days[time.getUTCDay()];\n    const date = time.toLocaleDateString(\"en-GB\", {\n        day: \"2-digit\",\n        month: \"2-digit\",\n        year: \"2-digit\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"navbar bg-base-100 bg-[#11e29] sticky shadow-md top-0 z-50\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-start\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" hidden md:block Laato font-semibold \",\n                        children: \"\".concat(day, \",\").concat(date)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-center flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"lg:h-[40px] h-[30px]\",\n                                    src: \"/logo.svg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 5\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"ml-1 normal-case loho text-2xl\",\n                                        children: \"The DU Express\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 5\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 5\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" md:hidden font-semibold \",\n                            children: \"\".concat(day, \",\").concat(date)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-end\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 3\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\components\\\\Nav.jsx\",\n            lineNumber: 28,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Nav, \"I0+7QaEsXHXB0XO5JypI3yBHjPI=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OYXYuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUNKO0FBQ2tCO0FBRTNDLFNBQVNJLE1BQU07O0lBSWIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDLElBQUlJO0lBRXJDTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTU0sYUFBYUMsWUFBWSxJQUFNO1lBQ25DSCxRQUFRLElBQUlDO1FBQ2QsR0FBRztRQUNILE9BQU8sSUFBTUcsY0FBY0Y7SUFDN0IsR0FBRyxFQUFFO0lBRUwsTUFBTUcsT0FBTztRQUFDO1FBQVU7UUFBVTtRQUFXO1FBQWE7UUFBWTtRQUFVO0tBQVc7SUFDM0YsTUFBTUMsTUFBTUQsSUFBSSxDQUFDTixLQUFLUSxTQUFTLEdBQUc7SUFDbEMsTUFBTUMsT0FBT1QsS0FBS1Usa0JBQWtCLENBQUMsU0FBUztRQUFFSCxLQUFLO1FBQVdJLE9BQU87UUFBV0MsTUFBTTtJQUFVO0lBTWxHLHFCQUNFO2tCQUNBLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDakIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUViLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYixHQUFVTCxPQUFQRixLQUFJLEtBQVEsT0FBTEU7Ozs7Ozs7Ozs7OzhCQVFkLDhEQUFDSTtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDZiw4REFBQ0M7b0NBQUlELFdBQVU7b0NBQXVCRSxLQUFJOzs7Ozs7OENBQzFDLDhEQUFDckIsa0RBQUlBO29DQUFDc0IsTUFBSzs4Q0FDWCw0RUFBQ0M7d0NBQUdKLFdBQVU7a0RBQWtDOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNaEQsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLEdBQVVMLE9BQVBGLEtBQUksS0FBUSxPQUFMRTs7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDSTtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OztBQW1CakI7R0FyRVNmO0tBQUFBO0FBdUVULCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL05hdi5qc3g/ZjUzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE5hdigpIHtcclxuICAgIFxyXG5cclxuXHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VGltZShuZXcgRGF0ZSgpKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG4gIGNvbnN0IGRheSA9IGRheXNbdGltZS5nZXRVVENEYXkoKV07XHJcbiAgY29uc3QgZGF0ZSA9IHRpbWUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1HQicsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnMi1kaWdpdCcsIHllYXI6ICcyLWRpZ2l0JyB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgYmctYmFzZS0xMDAgYmctWyMxMWUyOV0gc3RpY2t5IHNoYWRvdy1tZCAgdG9wLTAgei01MFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XHJcbiAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIGhpZGRlbiBtZDpibG9jayBMYWF0byBmb250LXNlbWlib2xkICcgPlxyXG4gICAgeyBgJHtkYXl9LCR7ZGF0ZX1gfVxyXG4gICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgXHJcbiAgXHJcbiAgIFxyXG4gIFxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNlbnRlciBmbGV4IGZsZXgtY29sXCI+XHJcbiAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyICc+XHJcbiAgICA8aW1nIGNsYXNzTmFtZT0nbGc6aC1bNDBweF0gaC1bMzBweF0nIHNyYz0nL2xvZ28uc3ZnJy8+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cIm1sLTEgbm9ybWFsLWNhc2UgbG9obyAgdGV4dC0yeGxcIj5UaGUgRFUgRXhwcmVzczwvaDE+XHJcbiAgICA8L0xpbms+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gXHJcbiAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nICBtZDpoaWRkZW4gIGZvbnQtc2VtaWJvbGQgJyA+XHJcbiAgICB7IGAke2RheX0sJHtkYXRlfWB9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmRcIj5cclxuICB7LyogPHVsIGNsYXNzTmFtZT1cIm1lbnUgbWVudS1ob3Jpem9udGFsIHB4LTFcIj5cclxuICAgICAgPGxpPjxhPkl0ZW0gMTwvYT48L2xpPlxyXG4gICAgICA8bGkgdGFiSW5kZXg9ezB9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgUGFyZW50XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcIi8+PC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwLTIgYmctYmFzZS0xMDBcIj5cclxuICAgICAgICAgIDxsaT48YT5TdWJtZW51IDE8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YT5TdWJtZW51IDI8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+PGE+SXRlbSAzPC9hPjwvbGk+XHJcbiAgICA8L3VsPiAqL31cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2Il0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2IiwidGltZSIsInNldFRpbWUiLCJEYXRlIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRheXMiLCJkYXkiLCJnZXRVVENEYXkiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibW9udGgiLCJ5ZWFyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaHJlZiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/Nav.jsx\n"));

/***/ })

});