"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCapacity = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _capacity = require("../actionTypes/capacity");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : {
  token: "token",
  userInfo: {
    _id: 12345
  }
},
    token = _ref.token,
    id = _ref.userInfo._id;

var addCapacity = function addCapacity(capacity) {
  return function _callee(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("token=>" + token);
            console.log("id=>" + id);
            console.log(capacity);
            _context.prev = 3;
            dispatch({
              type: _capacity.ADD_CAPACITY_INFO_PENDING
            });
            _context.next = 7;
            return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:5000/user/capacity/".concat(id), _objectSpread({}, capacity, {
              user: id
            }), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            }));

          case 7:
            _ref2 = _context.sent;
            data = _ref2.data;
            console.log(data);
            dispatch({
              type: _capacity.ADD_CAPACITY_INFO_FULFILLED,
              payload: data.capacity
            });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            dispatch({
              type: _capacity.ADD_CAPACITY_INFO_REJECTED,
              payload: _context.t0
            });
            console.log(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 13]]);
  };
}; // import { ADD_CAPACITY_DETAILS } from "../actionTypes"
// export const addCapacityDetails=(data)=>{
//     console.log('action calisyr' ,data)
//     return {type:ADD_CAPACITY_DETAILS,payload:data}
// }


exports.addCapacity = addCapacity;