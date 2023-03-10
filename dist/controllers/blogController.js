"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Blog = _interopRequireDefault(require("../models/Blog"));
var _joi = _interopRequireDefault(require("joi"));
exports.getAllBlogs = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var blogs;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Blog["default"].find();
        case 2:
          blogs = _context.sent;
          res.send(blogs);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getBlogById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var blog;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Blog["default"].findById(req.params.id);
        case 2:
          blog = _context2.sent;
          if (blog) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(404).send("Blog not found"));
        case 5:
          res.send(blog);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createBlog = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _validateBlog, error, blog;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _validateBlog = validateBlog(req.body), error = _validateBlog.error;
          if (!error) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(400).send(error.details[0].message));
        case 3:
          blog = new _Blog["default"]({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            image: req.body.image
          });
          _context3.next = 6;
          return blog.save();
        case 6:
          res.send(blog);
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateBlog = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _validateBlog2, error, blog;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _validateBlog2 = validateBlog(req.body), error = _validateBlog2.error;
          if (!error) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(400).send(error.details[0].message));
        case 3:
          _context4.next = 5;
          return _Blog["default"].findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            image: req.body.image
          }, {
            "new": true
          });
        case 5:
          blog = _context4.sent;
          if (blog) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).send("Blog not found"));
        case 8:
          res.send(blog);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteBlog = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var blog;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _Blog["default"].findByIdAndRemove(req.params.id);
        case 2:
          blog = _context5.sent;
          if (blog) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", res.status(404).send("Blog not found"));
        case 5:
          res.send(blog);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
function validateBlog(blog) {
  var schema = _joi["default"].object({
    title: _joi["default"].string().min(5).max(255).required(),
    content: _joi["default"].string().min(10).max(2000).required(),
    author: _joi["default"].string().min(2).max(100).required(),
    image: _joi["default"].string().min(2).max(2000).required()
  });
  return schema.validate(blog);
}