"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _comment = _interopRequireDefault(require("../models/comment"));
var _joi = _interopRequireDefault(require("joi"));
// Create a comment
exports.createComment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _validateComment, error, comment, savedComment;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _validateComment = validateComment(req.body), error = _validateComment.error;
          if (!error) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).send(error.details[0].message));
        case 4:
          comment = new _comment["default"]({
            blog: req.params.blogId,
            commentBody: req.body.commentBody
          });
          _context.next = 7;
          return comment.save();
        case 7:
          savedComment = _context.sent;
          res.status(201).json(savedComment);
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Get all comments for a blog
exports.getComments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var comments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _comment["default"].find({
            blog: req.params.blogId
          });
        case 3:
          comments = _context2.sent;
          res.status(200).json(comments);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Delete a comment
exports.deleteComment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var comment;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _comment["default"].findOne({
            _id: req.params.commentId,
            blog: req.params.blogId
          });
        case 3:
          comment = _context3.sent;
          if (comment) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).send("Comment not found"));
        case 6:
          _context3.next = 8;
          return comment.remove();
        case 8:
          res.status(200).send("Comment deleted successfully");
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// Joi validation schema for comments
function validateComment(comment) {
  var schema = _joi["default"].object({
    commentBody: _joi["default"].string().min(10).max(2000).required()
  });
  return schema.validate(comment);
}