(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/menuslider.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menuslider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"menuslider\",\n  components: {\n    menucard: function menucard() {\n      return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../components/menucard.vue */ \"./src/components/menucard.vue\"));\n    }\n  },\n  props: {\n    title: String,\n    forin: Number,\n    name: String,\n    slug: String,\n    price: Number,\n    rating: Number,\n    img: String\n  }\n});\n\n//# sourceURL=webpack:///./src/components/menuslider.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/menuslider.vue?vue&type=template&id=5a62cde0&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menuslider.vue?vue&type=template&id=5a62cde0& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"section\", { attrs: { id: \"favorite\" } }, [\n    _c(\"div\", { staticClass: \"container-fluid row p-0 m-0 mx-auto\" }, [\n      _c(\"div\", { staticClass: \"col-md-12 p-0\" }, [\n        _c(\"h1\", { staticClass: \"text-center display-4 my-5\" }, [\n          _vm._v(_vm._s(_vm.title))\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"container-fluid row p-0 m-0 mx-auto\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"col-md-9 col-sm-12 p-0 mx-auto mb-5 pb-5\" },\n        [\n          _c(\n            \"carousel\",\n            {\n              staticClass: \"mdi\",\n              attrs: {\n                autoplay: true,\n                scrollPerPage: false,\n                perPageCustom: [\n                  [480, 2],\n                  [768, 3]\n                ],\n                navigationEnabled: true,\n                navigationNextLabel: \"\",\n                navigationPrevLabel: \"\",\n                paginationEnabled: false,\n                loop: true\n              }\n            },\n            _vm._l(_vm.forin, function(i) {\n              return _c(\n                \"slide\",\n                { key: i },\n                [\n                  _c(\"menucard\", {\n                    attrs: {\n                      price: _vm.price,\n                      name: _vm.name,\n                      rating: _vm.rating,\n                      img: _vm.img,\n                      slug: _vm.slug\n                    }\n                  })\n                ],\n                1\n              )\n            }),\n            1\n          )\n        ],\n        1\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/menuslider.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/menuslider.vue":
/*!***************************************!*\
  !*** ./src/components/menuslider.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuslider.vue?vue&type=template&id=5a62cde0& */ \"./src/components/menuslider.vue?vue&type=template&id=5a62cde0&\");\n/* harmony import */ var _menuslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuslider.vue?vue&type=script&lang=js& */ \"./src/components/menuslider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _menuslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/menuslider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/menuslider.vue?");

/***/ }),

/***/ "./src/components/menuslider.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/menuslider.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./menuslider.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/menuslider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/menuslider.vue?");

/***/ }),

/***/ "./src/components/menuslider.vue?vue&type=template&id=5a62cde0&":
/*!**********************************************************************!*\
  !*** ./src/components/menuslider.vue?vue&type=template&id=5a62cde0& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./menuslider.vue?vue&type=template&id=5a62cde0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/menuslider.vue?vue&type=template&id=5a62cde0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menuslider_vue_vue_type_template_id_5a62cde0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/menuslider.vue?");

/***/ })

}]);