(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/homeslider.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/homeslider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"homeslider\",\n  data: function data() {\n    return {\n      starStyle: {\n        fullStarColor: \"#f1c420\",\n        starWidth: 30,\n        starHeight: 30\n      }\n    };\n  },\n  props: {\n    forin: Number,\n    name: String,\n    img: String,\n    price: Number,\n    rating: Number,\n    target: String\n  }\n});\n\n//# sourceURL=webpack:///./src/components/homeslider.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/homeslider.vue?vue&type=template&id=649b1890&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/homeslider.vue?vue&type=template&id=649b1890& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"carousel\",\n    {\n      attrs: {\n        autoplay: true,\n        autoplayTimeout: 3000,\n        scrollPerPage: false,\n        perPage: 1,\n        paginationEnabled: false,\n        navigationEnabled: false,\n        loop: true\n      }\n    },\n    _vm._l(_vm.forin, function(i) {\n      return _c(\"slide\", { key: i }, [\n        _c(\"div\", { staticClass: \"container-fluid row p-0 m-0\" }, [\n          _c(\"div\", { staticClass: \"col-md-6 p-4 p-m-0 my-auto\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass:\n                  \"jumbotron-fluid bg-white m-3 m-md-5 pr-0 pr-md-5 m-md-0 ml-0 ml-md-5 pl-0 pl-md-5\"\n              },\n              [\n                _c(\"p\", { staticClass: \"lead\" }, [_vm._v(_vm._s(_vm.name))]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  [\n                    _c(\"star-rating\", {\n                      attrs: { rating: _vm.rating, \"star-style\": _vm.starStyle }\n                    })\n                  ],\n                  1\n                ),\n                _vm._v(\" \"),\n                _c(\"h1\", { staticClass: \"display-3 mb-5 price\" }, [\n                  _vm._v(_vm._s(\"Rp \" + _vm.price))\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", { staticClass: \"lead\" }, [\n                  _c(\n                    \"button\",\n                    {\n                      staticClass: \"btn btn-primary btn-lg px-5 py-3 mt-3 mb-5\",\n                      attrs: {\n                        \"data-toggle\": \"modal\",\n                        \"data-target\": _vm.target\n                      }\n                    },\n                    [_vm._v(\"\\n              Pesan Sekarang\\n            \")]\n                  )\n                ])\n              ]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-md-6 col-sm-12 p-0\" }, [\n            _c(\"img\", {\n              staticClass: \"martabak2\",\n              attrs: { src: _vm.img, alt: _vm.name }\n            })\n          ])\n        ])\n      ])\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/homeslider.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/homeslider.vue":
/*!***************************************!*\
  !*** ./src/components/homeslider.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeslider_vue_vue_type_template_id_649b1890___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeslider.vue?vue&type=template&id=649b1890& */ \"./src/components/homeslider.vue?vue&type=template&id=649b1890&\");\n/* harmony import */ var _homeslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeslider.vue?vue&type=script&lang=js& */ \"./src/components/homeslider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _homeslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _homeslider_vue_vue_type_template_id_649b1890___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _homeslider_vue_vue_type_template_id_649b1890___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/homeslider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/homeslider.vue?");

/***/ }),

/***/ "./src/components/homeslider.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/homeslider.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_homeslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./homeslider.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/homeslider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_homeslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/homeslider.vue?");

/***/ }),

/***/ "./src/components/homeslider.vue?vue&type=template&id=649b1890&":
/*!**********************************************************************!*\
  !*** ./src/components/homeslider.vue?vue&type=template&id=649b1890& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeslider_vue_vue_type_template_id_649b1890___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./homeslider.vue?vue&type=template&id=649b1890& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/homeslider.vue?vue&type=template&id=649b1890&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeslider_vue_vue_type_template_id_649b1890___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeslider_vue_vue_type_template_id_649b1890___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/homeslider.vue?");

/***/ })

}]);