"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var assert = require("assert");
var sinon = require("sinon");
var _require = require("../controllers/blogController"),
  getAllBlogs = _require.getAllBlogs;
var Blog = require("../models/Blog");
describe("getAllBlogs function", function () {
  it("should return all blogs", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var blogs, req, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          blogs = [{
            title: "Blog 1"
          }, {
            title: "Blog 2"
          }];
          sinon.stub(Blog, "find").resolves(blogs);
          req = {};
          res = {
            send: function send(data) {
              assert.deepEqual(data, blogs);
            }
          };
          _context.next = 6;
          return getAllBlogs(req, res);
        case 6:
          Blog.find.restore();
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});