"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var request = require('supertest');
var app = require('../app'); // assuming your Express app is defined in app.js
var User = require('../models/User');
describe('POST /api/login', function () {
  test('should return a JWT token when valid email and password are provided', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var email, password, hashedPassword, user, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          email = 'test@example.com';
          password = 'password123';
          _context.next = 4;
          return bcrypt.hash(password, 10);
        case 4:
          hashedPassword = _context.sent;
          user = new User({
            email: email,
            password: hashedPassword
          });
          _context.next = 8;
          return user.save();
        case 8:
          _context.next = 10;
          return request(app).post('/api/login').send({
            email: email,
            password: password
          }).expect(200);
        case 10:
          response = _context.sent;
          expect(response.body.token).toBeDefined();
          // you may also want to check if the token is a valid JWT token using a library like jsonwebtoken
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  test('should return a 401 error when invalid email or password are provided', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var email, password, hashedPassword, user, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          email = 'test@example.com';
          password = 'password123';
          _context2.next = 4;
          return bcrypt.hash(password, 10);
        case 4:
          hashedPassword = _context2.sent;
          user = new User({
            email: email,
            password: hashedPassword
          });
          _context2.next = 8;
          return user.save();
        case 8:
          _context2.next = 10;
          return request(app).post('/api/login').send({
            email: 'invalid@example.com',
            password: password
          }).expect(401);
        case 10:
          response = _context2.sent;
          expect(response.body.message).toBe('Invalid email or password');
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});