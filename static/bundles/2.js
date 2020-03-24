(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./src/components/menuslider.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./src/components/menuslider.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"menuslider\",\n  data: function data() {\n    return {\n      martabakmenu: [],\n      ratingdata: [],\n      errored: false,\n      loading: true\n    };\n  },\n  components: {\n    menucard: function menucard() {\n      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/menucard.vue */ \"./src/components/menucard.vue\"));\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$axios.get('http://127.0.0.1:8000/api/rating/').then(function (response) {\n      _this.ratingdata = response.data;\n    });\n    this.$axios.get('http://127.0.0.1:8000/api/martabak/').then(function (response) {\n      _this.martabakmenu = response.data;\n    })[\"catch\"](function (error) {\n      console.log(error);\n      _this.errored = true;\n    })[\"finally\"](function () {\n      return _this.loading = false;\n    });\n  },\n  props: {\n    currentMartabak: Number\n  }\n});\n\n//# sourceURL=webpack:///./src/components/menuslider.vue?../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./src/components/menuslider.vue?vue&type=template&id=5a62cde0&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./src/components/menuslider.vue?vue&type=template&id=5a62cde0& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"section\", { attrs: { id: \"favorite\" } }, [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"container-fluid row p-0 m-0 mx-auto\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"col-md-9 col-sm-12 p-0 mx-auto mb-5 pb-5\" },\n        [\n          _c(\n            \"carousel\",\n            {\n              staticClass: \"mdi\",\n              attrs: {\n                autoplay: true,\n                scrollPerPage: false,\n                perPageCustom: [\n                  [480, 2],\n                  [1080, 3]\n                ],\n                navigationEnabled: true,\n                navigationNextLabel: \"\",\n                navigationPrevLabel: \"\",\n                paginationEnabled: false,\n                loop: true\n              }\n            },\n            _vm._l(_vm.martabakmenu, function(martabak) {\n              return _c(\n                \"slide\",\n                {\n                  directives: [\n                    {\n                      name: \"show\",\n                      rawName: \"v-show\",\n                      value: martabak.id != _vm.currentMartabak,\n                      expression: \"martabak.id != currentMartabak\"\n                    }\n                  ],\n                  key: martabak.id\n                },\n                _vm._l(_vm.ratingdata, function(rating) {\n                  return _c(\"div\", { key: rating.object_id }, [\n                    rating.object_id == martabak.id\n                      ? _c(\n                          \"div\",\n                          [\n                            _c(\"menucard\", {\n                              attrs: {\n                                price: martabak.price,\n                                name: martabak.name,\n                                rating: parseFloat(rating.average),\n                                img: martabak.image,\n                                slug: martabak.slug\n                              }\n                            })\n                          ],\n                          1\n                        )\n                      : _vm._e()\n                  ])\n                }),\n                0\n              )\n            }),\n            1\n          )\n        ],\n        1\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"container-fluid row p-0 m-0 mx-auto\" }, [\n      _c(\"div\", { staticClass: \"col-md-12 p-0\" }, [\n        _c(\"h1\", { staticClass: \"text-center display-4 my-5\" }, [\n          _vm._v(\"Menu Paling Populer\")\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/menuslider.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/menuslider.vue":
/*!***************************************!*\
  !*** ./src/components/menuslider.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuslider.vue?vue&type=template&id=5a62cde0& */ \"./src/components/menuslider.vue?vue&type=template&id=5a62cde0&\");\n/* harmony import */ var _menuslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuslider.vue?vue&type=script&lang=js& */ \"./src/components/menuslider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _menuslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/menuslider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/menuslider.vue?");

/***/ }),

/***/ "./src/components/menuslider.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/menuslider.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./menuslider.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./src/components/menuslider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/menuslider.vue?");

/***/ }),

/***/ "./src/components/menuslider.vue?vue&type=template&id=5a62cde0&":
/*!**********************************************************************!*\
  !*** ./src/components/menuslider.vue?vue&type=template&id=5a62cde0& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./menuslider.vue?vue&type=template&id=5a62cde0& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./src/components/menuslider.vue?vue&type=template&id=5a62cde0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/menuslider.vue?");

/***/ })

}]);