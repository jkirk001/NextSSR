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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/test/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"];\nconst userSchema = new Schema({\n  email: {\n    type: String,\n    required: true\n  },\n  username: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__[\"models\"].User || Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"User\", userSchema)); //! If model has already been initialized  -- export that model\n//! OR -- If it hasnt -- create and export model(name, schema)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlci5qcz8xZjY5Il0sIm5hbWVzIjpbIlNjaGVtYSIsIl9TY2hlbWEiLCJ1c2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1c2VybmFtZSIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxNQUFNQSxNQUFNLEdBQUdDLCtDQUFmO0FBRUEsTUFBTUMsVUFBVSxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUM1QkcsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRUMsTUFERDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQURxQjtBQUs1QkMsVUFBUSxFQUFFO0FBQ1JILFFBQUksRUFBRUMsTUFERTtBQUVSQyxZQUFRLEVBQUU7QUFGRjtBQUxrQixDQUFYLENBQW5CO0FBV2VFLDhHQUFNLENBQUNDLElBQVAsSUFBZUMsc0RBQUssQ0FBQyxNQUFELEVBQVNSLFVBQVQsQ0FBbkMsRSxDQUNBO0FBQ0EiLCJmaWxlIjoiLi9tb2RlbHMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSBhcyBfU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5jb25zdCBTY2hlbWEgPSBfU2NoZW1hO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RlbHMuVXNlciB8fCBtb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG4vLyEgSWYgbW9kZWwgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCAgLS0gZXhwb3J0IHRoYXQgbW9kZWxcbi8vISBPUiAtLSBJZiBpdCBoYXNudCAtLSBjcmVhdGUgYW5kIGV4cG9ydCBtb2RlbChuYW1lLCBzY2hlbWEpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/user.js\n");

/***/ }),

/***/ "./pages/api/test/index.js":
/*!*********************************!*\
  !*** ./pages/api/test/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/user */ \"./models/user.js\");\n\n\nasync function handler(req, res) {\n  const {\n    method\n  } = req;\n  await Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  switch (method) {\n    case \"GET\":\n      try {\n        const users = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        /* find all the data in our database */\n\n        res.status(200).json({\n          success: true,\n          data: users\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case \"POST\":\n      try {\n        const newUser = await new _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          email: req.body.email,\n          username: req.body.username\n        });\n        newUser.save();\n        /* create a new model in the database */\n\n        res.status(201).json({\n          success: true,\n          data: newUser\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false,\n          error: error\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdGVzdC9pbmRleC5qcz9mN2RkIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYkNvbm5lY3QiLCJ1c2VycyIsIlVzZXIiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJuZXdVc2VyIiwiZW1haWwiLCJib2R5IiwidXNlcm5hbWUiLCJzYXZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsUUFBTTtBQUFFQztBQUFGLE1BQWFGLEdBQW5CO0FBRUEsUUFBTUcsZ0VBQVMsRUFBZjs7QUFFQSxVQUFRRCxNQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU1FLEtBQUssR0FBRyxNQUFNQyxvREFBSSxDQUFDQyxJQUFMLENBQ2xCLEVBRGtCLENBQXBCO0FBRUc7O0FBQ0hMLFdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQkMsY0FBSSxFQUFFTjtBQUF2QixTQUFyQjtBQUNELE9BTEQsQ0FLRSxPQUFPTyxLQUFQLEVBQWM7QUFDZFYsV0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0Q7O0FBQ0Q7O0FBQ0YsU0FBSyxNQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU1HLE9BQU8sR0FBRyxNQUFNLElBQUlQLG9EQUFKLENBQVM7QUFDN0JRLGVBQUssRUFBRWIsR0FBRyxDQUFDYyxJQUFKLENBQVNELEtBRGE7QUFFN0JFLGtCQUFRLEVBQUVmLEdBQUcsQ0FBQ2MsSUFBSixDQUFTQztBQUZVLFNBQVQsQ0FBdEI7QUFJQUgsZUFBTyxDQUFDSSxJQUFSO0FBQWdCOztBQUNoQmYsV0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUVFO0FBQXZCLFNBQXJCO0FBQ0QsT0FQRCxDQU9FLE9BQU9ELEtBQVAsRUFBYztBQUNkVixXQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLEtBQVg7QUFBa0JFLGVBQUssRUFBRUE7QUFBekIsU0FBckI7QUFDRDs7QUFDRDs7QUFDRjtBQUNFVixTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBekJKO0FBMkJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Rlc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvdXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG5cbiAgYXdhaXQgZGJDb25uZWN0KCk7XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZChcbiAgICAgICAgICB7fVxuICAgICAgICApOyAvKiBmaW5kIGFsbCB0aGUgZGF0YSBpbiBvdXIgZGF0YWJhc2UgKi9cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1c2VycyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IG5ldyBVc2VyKHtcbiAgICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgICAgICAgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXJuYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgbmV3VXNlci5zYXZlKCk7IC8qIGNyZWF0ZSBhIG5ldyBtb2RlbCBpbiB0aGUgZGF0YWJhc2UgKi9cbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdVc2VyIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/test/index.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function dbConnect() {\n  // check if we have a connection to the database or if it's currently\n  // connecting or disconnecting (readyState 1, 2 and 3)\n  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.readyState >= 1) {\n    return;\n  }\n\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb://localhost:27017/yelp-camp\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false,\n    useCreateIndex: true\n  }).then(console.log(\"open and connected\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsInRoZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxlQUFlQSxTQUFmLEdBQTJCO0FBQ3pCO0FBQ0E7QUFDQSxNQUFJQywrQ0FBUSxDQUFDQyxVQUFULENBQW9CQyxVQUFwQixJQUFrQyxDQUF0QyxFQUF5QztBQUN2QztBQUNEOztBQUVELFNBQU9GLCtDQUFRLENBQ1pHLE9BREksQ0FDSSxxQ0FESixFQUMyQztBQUM5Q0MsbUJBQWUsRUFBRSxJQUQ2QjtBQUU5Q0Msc0JBQWtCLEVBQUUsSUFGMEI7QUFHOUNDLG9CQUFnQixFQUFFLEtBSDRCO0FBSTlDQyxrQkFBYyxFQUFFO0FBSjhCLEdBRDNDLEVBT0pDLElBUEksQ0FPQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosQ0FQRCxDQUFQO0FBUUQ7O0FBRWNYLHdFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvZGJDb25uZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIC8vIGNoZWNrIGlmIHdlIGhhdmUgYSBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSBvciBpZiBpdCdzIGN1cnJlbnRseVxuICAvLyBjb25uZWN0aW5nIG9yIGRpc2Nvbm5lY3RpbmcgKHJlYWR5U3RhdGUgMSwgMiBhbmQgMylcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA+PSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIG1vbmdvb3NlXG4gICAgLmNvbm5lY3QoXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3llbHAtY2FtcFwiLCB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgIH0pXG4gICAgLnRoZW4oY29uc29sZS5sb2coXCJvcGVuIGFuZCBjb25uZWN0ZWRcIikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });