"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var request = require('supertest');
var app = require('../app'); // assuming this is the main app file that uses the above module

describe('Blog API', function () {
  var savedBlog;
  test('should create a new blog', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var newBlog, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          newBlog = {
            title: 'Test Blog',
            content: 'Lorem ipsum dolor sit amet',
            author: 'John Doe',
            image: 'https://example.com/image.png'
          };
          _context.next = 3;
          return request(app).post('/api/blog/create').send(newBlog);
        case 3:
          res = _context.sent;
          expect(res.statusCode).toEqual(200);
          expect(res.body.title).toEqual(newBlog.title);
          expect(res.body.content).toEqual(newBlog.content);
          expect(res.body.author).toEqual(newBlog.author);
          expect(res.body.image).toEqual(newBlog.image);
          savedBlog = res.body; // save the created blog for later tests
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  test('should get all blogs', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return request(app).get('/api/blogs');
        case 2:
          res = _context2.sent;
          expect(res.statusCode).toEqual(200);
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  test('should get a blog by ID', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var res;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return request(app).get("/api/blog/".concat(savedBlog._id));
        case 2:
          res = _context3.sent;
          expect(res.statusCode).toEqual(200);
          expect(res.body.title).toEqual(savedBlog.title);
          expect(res.body.content).toEqual(savedBlog.content);
          expect(res.body.author).toEqual(savedBlog.author);
          expect(res.body.image).toEqual(savedBlog.image);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  test('should update a blog', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var updatedBlog, res;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          updatedBlog = {
            title: 'Updated Blog',
            content: 'Dolor sit amet lorem ipsum',
            author: 'Jane Smith',
            image: 'https://example.com/new-image.png'
          };
          _context4.next = 3;
          return request(app).put("/api/blog/update/".concat(savedBlog._id)).send(updatedBlog);
        case 3:
          res = _context4.sent;
          expect(res.statusCode).toEqual(200);
          expect(res.body.title).toEqual(updatedBlog.title);
          expect(res.body.content).toEqual(updatedBlog.content);
          expect(res.body.author).toEqual(updatedBlog.author);
          expect(res.body.image).toEqual(updatedBlog.image);
          savedBlog = res.body; // update the saved blog with the new data
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  test('should delete a blog', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var res, res2;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return request(app)["delete"]("/api/blog/delete/".concat(savedBlog._id));
        case 2:
          res = _context5.sent;
          expect(res.statusCode).toEqual(200);
          expect(res.body.title).toEqual(savedBlog.title);
          expect(res.body.content).toEqual(savedBlog.content);
          expect(res.body.author).toEqual(savedBlog.author);
          expect(res.body.image).toEqual(savedBlog.image);
          _context5.next = 10;
          return request(app).get("/api/blogs/".concat(savedBlog._id));
        case 10:
          res2 = _context5.sent;
          expect(res2.statusCode).toEqual(404);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
});