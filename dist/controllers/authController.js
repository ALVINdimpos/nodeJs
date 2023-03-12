"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _User = _interopRequireDefault(require("../models/User"));
var _generateToken = _interopRequireDefault(require("../utils/generateToken"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
// const User = require('../models/User');

var login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, user, passwordMatches, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return _User["default"].findOne({
            email: email
          }).exec();
        case 4:
          user = _context.sent;
          if (user) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            message: "Invalid email or password"
          }));
        case 7:
          _context.next = 9;
          return _bcrypt["default"].compare(password, user.password);
        case 9:
          passwordMatches = _context.sent;
          if (passwordMatches) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            message: "Invalid email or password"
          }));
        case 12:
          // If the email and password are valid, generate a JWT token and send it in the response
          token = (0, _generateToken["default"])(user);
          res.status(200).json({
            token: token
          });
          _context.next = 20;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 16]]);
  }));
  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.login = login;