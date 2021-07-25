"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _userLoginDetails = require("../actionTypes/userLoginDetails");

var _userRegistration = require("../actionTypes/userRegistration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var signup = function signup(data) {
  return function _callee(dispatch) {
    var _ref, res, message;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: _userRegistration.USER_REGISTRATION_PENDING
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:5000/user/signup", _objectSpread({}, data)));

          case 4:
            _ref = _context.sent;
            res = _ref.data;
            dispatch({
              type: _userRegistration.USER_REGISTRATION_FULFILLED,
              payload: res
            });
            dispatch({
              type: _userLoginDetails.USER_LOGIN_FULFILLED,
              payload: res
            });
            localStorage.setItem("userInfo", JSON.stringify(res));
            _context.next = 16;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            message = _context.t0.response.data.message;
            dispatch({
              type: _userLoginDetails.USER_LOGIN_REJECTED,
              payload: message
            });
            dispatch({
              type: _userRegistration.USER_REGISTRATION_REJECTED,
              payload: message
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.signup = signup;