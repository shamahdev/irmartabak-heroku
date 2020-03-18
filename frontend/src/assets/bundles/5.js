(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/homeslider.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/homeslider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"homeslider\",\n  data: function data() {\n    return {\n      martabakhome: [],\n      rating: 4.6,\n      errored: false,\n      loading: true,\n      starStyle: {\n        emptyStarColor: \"#111111\",\n        starWidth: 30,\n        starHeight: 30\n      }\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$axios.get('http://127.0.0.1:8000/api/martabak/bestseller/').then(function (response) {\n      _this.martabakhome = response.data;\n    })[\"catch\"](function (error) {\n      console.log(error);\n      _this.errored = true;\n    })[\"finally\"](function () {\n      return _this.loading = false;\n    });\n  },\n  props: {\n    target: String\n  }\n});\n\n//# sourceURL=webpack:///./src/components/homeslider.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/homeslider.vue?vue&type=template&id=649b1890&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/homeslider.vue?vue&type=template&id=649b1890& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"carousel\",\n    {\n      attrs: {\n        autoplay: true,\n        autoplayTimeout: 3000,\n        scrollPerPage: false,\n        perPage: 1,\n        paginationEnabled: false,\n        navigationEnabled: false,\n        loop: true\n      }\n    },\n    _vm._l(_vm.martabakhome, function(martabak) {\n      return _c(\"slide\", { key: martabak.id }, [\n        _c(\"div\", { staticClass: \"container-fluid row p-0 m-0\" }, [\n          _c(\"div\", { staticClass: \"col-md-6 p-sm-4 p-md-2 p-lg-4 my-auto\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass:\n                  \"jumbotron-fluid bg-white m-3 m-lg-5 pr-0 pr-md-3 m-md-0 ml-2 ml-lg-5 pl-0 pl-md-5\"\n              },\n              [\n                _c(\"p\", { staticClass: \"lead\" }, [\n                  _vm._v(_vm._s(martabak.name))\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  [\n                    _c(\"star-rating\", {\n                      attrs: { rating: _vm.rating, \"star-style\": _vm.starStyle }\n                    })\n                  ],\n                  1\n                ),\n                _vm._v(\" \"),\n                _c(\"h1\", { staticClass: \"display-3 mb-5 price\" }, [\n                  _vm._v(_vm._s(\"Rp \" + martabak.price))\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"btn-group mt-3 mb-5\" },\n                  [\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \" btn btn-primary btn-lg px-5 py-3\",\n                        attrs: {\n                          \"data-toggle\": \"modal\",\n                          \"data-target\": _vm.target\n                        }\n                      },\n                      [_vm._v(\"\\n              Pesan Sekarang\\n            \")]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"router-link\",\n                      {\n                        staticClass: \"my-auto\",\n                        attrs: { to: \"/menu/\" + martabak.slug }\n                      },\n                      [\n                        _c(\n                          \"button\",\n                          { staticClass: \"btn btn-dark btn-lg px-5 py-3\" },\n                          [_vm._v(\"\\n              Detail\\n            \")]\n                        )\n                      ]\n                    )\n                  ],\n                  1\n                )\n              ]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-md-6 p-0\" }, [\n            _c(\"img\", {\n              staticClass: \"martabak2\",\n              attrs: { src: martabak.image, alt: martabak.name }\n            })\n          ])\n        ])\n      ])\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/homeslider.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

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