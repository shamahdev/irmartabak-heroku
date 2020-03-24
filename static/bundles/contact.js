(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./src/views/Contact.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./src/views/Contact.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ \"../node_modules/emailjs-com/source/index.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n // @ is an alias to /src\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Contact\",\n  methods: {\n    sendEmail: function sendEmail(e) {\n      emailjs_com__WEBPACK_IMPORTED_MODULE_0___default.a.sendForm(\"gmail\", \"template_GaUFC35R\", e.target, \"user_DhqUjJcMjEIxzBcZlAtt8\").then(function (result) {\n        console.log(\"SUCCESS!\", result.status, result.text);\n      }, function (error) {\n        console.log(\"FAILED...\", error);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Contact.vue?../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../node_modules/emailjs-com/source/index.js":
/*!***************************************************!*\
  !*** ../node_modules/emailjs-com/source/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar EmailJSResponseStatus_1 = __webpack_require__(/*! ./models/EmailJSResponseStatus */ \"../node_modules/emailjs-com/source/models/EmailJSResponseStatus.js\");\nexports.EmailJSResponseStatus = EmailJSResponseStatus_1.EmailJSResponseStatus;\nvar UI_1 = __webpack_require__(/*! ./services/ui/UI */ \"../node_modules/emailjs-com/source/services/ui/UI.js\");\nvar _userID = null;\nvar _origin = 'https://api.emailjs.com';\nfunction sendPost(url, data, headers) {\n    if (headers === void 0) { headers = {}; }\n    return new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n        xhr.addEventListener('load', function (event) {\n            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);\n            if (responseStatus.status === 200 || responseStatus.text === 'OK') {\n                resolve(responseStatus);\n            }\n            else {\n                reject(responseStatus);\n            }\n        });\n        xhr.addEventListener('error', function (event) {\n            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));\n        });\n        xhr.open('POST', url, true);\n        for (var key in headers) {\n            xhr.setRequestHeader(key, headers[key]);\n        }\n        xhr.send(data);\n    });\n}\nfunction appendGoogleCaptcha(templatePrams) {\n    var element = document.getElementById('g-recaptcha-response');\n    if (element && element.value) {\n        templatePrams['g-recaptcha-response'] = element.value;\n    }\n    element = null;\n    return templatePrams;\n}\n/**\n * Initiation\n * @param {string} userID - set the EmailJS user ID\n * @param {string} origin - set the EmailJS origin\n */\nfunction init(userID, origin) {\n    _userID = userID;\n    _origin = origin || 'https://api.emailjs.com';\n}\nexports.init = init;\n/**\n * Send a template to the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {Object} templatePrams - the template params, what will be set to the EmailJS template\n * @param {string} userID - the EmailJS user ID\n * @returns {Promise<EmailJSResponseStatus>}\n */\nfunction send(serviceID, templateID, templatePrams, userID) {\n    var params = {\n        lib_version: '2.4.1',\n        user_id: userID || _userID,\n        service_id: serviceID,\n        template_id: templateID,\n        template_params: appendGoogleCaptcha(templatePrams)\n    };\n    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {\n        'Content-type': 'application/json'\n    });\n}\nexports.send = send;\n/**\n * Send a form the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {string | HTMLFormElement} form - the form element or selector\n * @param {string} userID - the EmailJS user ID\n * @returns {Promise<EmailJSResponseStatus>}\n */\nfunction sendForm(serviceID, templateID, form, userID) {\n    if (typeof form === 'string') {\n        form = document.querySelector(form);\n    }\n    if (!form || form.nodeName !== 'FORM') {\n        throw 'Expected the HTML form element or the style selector of form';\n    }\n    UI_1.UI.progressState(form);\n    var formData = new FormData(form);\n    formData.append('lib_version', '2.4.1');\n    formData.append('service_id', serviceID);\n    formData.append('template_id', templateID);\n    formData.append('user_id', userID || _userID);\n    return sendPost(_origin + '/api/v1.0/email/send-form', formData)\n        .then(function (response) {\n        UI_1.UI.successState(form);\n        return response;\n    }, function (error) {\n        UI_1.UI.errorState(form);\n        return Promise.reject(error);\n    });\n}\nexports.sendForm = sendForm;\nexports.default = {\n    init: init,\n    send: send,\n    sendForm: sendForm\n};\n\n\n//# sourceURL=webpack:///../node_modules/emailjs-com/source/index.js?");

/***/ }),

/***/ "../node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":
/*!**************************************************************************!*\
  !*** ../node_modules/emailjs-com/source/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar EmailJSResponseStatus = /** @class */ (function () {\n    function EmailJSResponseStatus(httpResponse) {\n        this.status = httpResponse.status;\n        this.text = httpResponse.responseText;\n    }\n    return EmailJSResponseStatus;\n}());\nexports.EmailJSResponseStatus = EmailJSResponseStatus;\n\n\n//# sourceURL=webpack:///../node_modules/emailjs-com/source/models/EmailJSResponseStatus.js?");

/***/ }),

/***/ "../node_modules/emailjs-com/source/services/ui/UI.js":
/*!************************************************************!*\
  !*** ../node_modules/emailjs-com/source/services/ui/UI.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar UI = /** @class */ (function () {\n    function UI() {\n    }\n    UI.clearAll = function (form) {\n        form.classList.remove(this.PROGRESS);\n        form.classList.remove(this.DONE);\n        form.classList.remove(this.ERROR);\n    };\n    UI.progressState = function (form) {\n        this.clearAll(form);\n        form.classList.add(this.PROGRESS);\n    };\n    UI.successState = function (form) {\n        form.classList.remove(this.PROGRESS);\n        form.classList.add(this.DONE);\n    };\n    UI.errorState = function (form) {\n        form.classList.remove(this.PROGRESS);\n        form.classList.add(this.ERROR);\n    };\n    UI.PROGRESS = 'emailjs-sending';\n    UI.DONE = 'emailjs-success';\n    UI.ERROR = 'emailjs-error';\n    return UI;\n}());\nexports.UI = UI;\n\n\n//# sourceURL=webpack:///../node_modules/emailjs-com/source/services/ui/UI.js?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./src/views/Contact.vue?vue&type=template&id=df212a54&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./src/views/Contact.vue?vue&type=template&id=df212a54& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"contact\" }, [\n    _c(\"section\", { staticClass: \"py-3 py-md-5\", attrs: { id: \"contactus\" } }, [\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"container-fluid row p-0 m-0 mx-auto\" }, [\n        _c(\"div\", { staticClass: \"col-8 col-md-6 mx-auto p-0\" }, [\n          _c(\n            \"form\",\n            {\n              on: {\n                submit: function($event) {\n                  $event.preventDefault()\n                  return _vm.sendEmail($event)\n                }\n              }\n            },\n            [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _vm._m(2),\n              _vm._v(\" \"),\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"input\", {\n                staticClass: \"btn btn-primary btn-lg px-5 py-3 mt-3 mb-5\",\n                attrs: { type: \"submit\", value: \"Send\" }\n              })\n            ]\n          )\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"container-fluid row p-0 m-0 mx-auto my-5\" },\n      [\n        _c(\"div\", { staticClass: \"col-10 mx-auto my-auto p-0 text-center\" }, [\n          _c(\"img\", {\n            staticClass: \"img-fluid my-2\",\n            attrs: { src: \"/static/img/logo.png\", width: \"200px\", alt: \"\" }\n          }),\n          _vm._v(\" \"),\n          _c(\"p\", { staticClass: \"display-4 my-5\" }, [\n            _vm._v(\"Berikan kami kritik dan saran!\")\n          ])\n        ])\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\n        \"label\",\n        { staticClass: \"lead3\", attrs: { for: \"formGroupExampleInput\" } },\n        [_vm._v(\"Nama\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        staticClass: \"form-control form-control-lg\",\n        attrs: {\n          required: \"\",\n          name: \"user_name\",\n          type: \"text\",\n          id: \"formGroupExampleInput\",\n          placeholder: \"Nama Kamu\"\n        }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\n        \"label\",\n        { staticClass: \"lead3\", attrs: { for: \"formGroupExampleInput\" } },\n        [_vm._v(\"Email\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        staticClass: \"form-control form-control-lg\",\n        attrs: {\n          required: \"\",\n          name: \"user_email\",\n          type: \"email\",\n          id: \"formGroupExampleInput\",\n          placeholder: \"namakamu@email.com\"\n        }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\n        \"label\",\n        { staticClass: \"lead3\", attrs: { for: \"exampleFormControlTextarea1\" } },\n        [_vm._v(\"Masukan\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"textarea\", {\n        staticClass: \"form-control\",\n        attrs: {\n          required: \"\",\n          name: \"message\",\n          id: \"exampleFormControlTextarea1\",\n          rows: \"7\"\n        }\n      })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Contact.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/Contact.vue":
/*!*******************************!*\
  !*** ./src/views/Contact.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact_vue_vue_type_template_id_df212a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=df212a54& */ \"./src/views/Contact.vue?vue&type=template&id=df212a54&\");\n/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ \"./src/views/Contact.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Contact_vue_vue_type_template_id_df212a54___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Contact_vue_vue_type_template_id_df212a54___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Contact.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Contact.vue?");

/***/ }),

/***/ "./src/views/Contact.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/views/Contact.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./src/views/Contact.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Contact.vue?");

/***/ }),

/***/ "./src/views/Contact.vue?vue&type=template&id=df212a54&":
/*!**************************************************************!*\
  !*** ./src/views/Contact.vue?vue&type=template&id=df212a54& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_df212a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=df212a54& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./src/views/Contact.vue?vue&type=template&id=df212a54&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_df212a54___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_df212a54___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Contact.vue?");

/***/ })

}]);