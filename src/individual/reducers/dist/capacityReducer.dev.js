"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capacityReducer = capacityReducer;

var _capacity = require("../actionTypes/capacity");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  capacity: {},
  loading: false,
  error: {}
};

function capacityReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _capacity.ADD_CAPACITY_INFO_PENDING:
      return _objectSpread({}, state, {
        loading: true
      });

    case _capacity.ADD_CAPACITY_INFO_FULFILLED:
      return _objectSpread({}, state, {
        loading: false,
        capacity: action.payload
      });

    case _capacity.ADD_CAPACITY_INFO_REJECTED:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
}