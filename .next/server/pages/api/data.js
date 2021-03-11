module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/data.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/data.js":
/*!***************************!*\
  !*** ./pages/api/data.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst handler = (req, res) => {\n  return res.json([{\n    id: \"p1\",\n    title: \"Product 1\",\n    description: \"This is product 1\"\n  }, {\n    id: \"p2\",\n    title: \"Product 2\",\n    description: \"This is product 2\"\n  }, {\n    id: \"p3\",\n    title: \"Product 3\",\n    description: \"This is product 3\"\n  }]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZGF0YS5qcz9mMDU1Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUM1QixTQUFPQSxHQUFHLENBQUNDLElBQUosQ0FBUyxDQUNkO0FBQUVDLE1BQUUsRUFBRSxJQUFOO0FBQVlDLFNBQUssRUFBRSxXQUFuQjtBQUFnQ0MsZUFBVyxFQUFFO0FBQTdDLEdBRGMsRUFFZDtBQUFFRixNQUFFLEVBQUUsSUFBTjtBQUFZQyxTQUFLLEVBQUUsV0FBbkI7QUFBZ0NDLGVBQVcsRUFBRTtBQUE3QyxHQUZjLEVBR2Q7QUFBRUYsTUFBRSxFQUFFLElBQU47QUFBWUMsU0FBSyxFQUFFLFdBQW5CO0FBQWdDQyxlQUFXLEVBQUU7QUFBN0MsR0FIYyxDQUFULENBQVA7QUFLRCxDQU5EOztBQU9lTixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFuZGxlciA9IChyZXEsIHJlcykgPT4ge1xuICByZXR1cm4gcmVzLmpzb24oW1xuICAgIHsgaWQ6IFwicDFcIiwgdGl0bGU6IFwiUHJvZHVjdCAxXCIsIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgcHJvZHVjdCAxXCIgfSxcbiAgICB7IGlkOiBcInAyXCIsIHRpdGxlOiBcIlByb2R1Y3QgMlwiLCBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHByb2R1Y3QgMlwiIH0sXG4gICAgeyBpZDogXCJwM1wiLCB0aXRsZTogXCJQcm9kdWN0IDNcIiwgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBwcm9kdWN0IDNcIiB9LFxuICBdKTtcbn07XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/data.js\n");

/***/ })

/******/ });