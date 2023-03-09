"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var queriesModel = require('../models/querries');
var nodemailer = require('nodemailer');
var queriesController = {};

// Retrieve all queries
queriesController.getAllQueries = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var queries;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return queriesModel.find();
        case 3:
          queries = _context.sent;
          res.json(queries);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Create a new query
queriesController.createQuery = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body, name, email, message, query, transporter, mailOptions;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;
          query = new queriesModel({
            name: name,
            email: email,
            message: message
          });
          _context2.next = 5;
          return query.save();
        case 5:
          // Send email notification to website owner
          transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_PASS
            }
          });
          mailOptions = {
            from: "".concat(email),
            to: 'fistonalvin@gmail.com',
            subject: 'New Query',
            text: "You have a new query from ".concat(name, " (").concat(email, "): ").concat(message)
          };
          _context2.next = 9;
          return transporter.sendMail(mailOptions);
        case 9:
          res.json({
            message: 'Query created successfully'
          });
          _context2.next = 15;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Update an existing query
queriesController.updateQuery = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var id, _req$body2, name, email, message, query;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, message = _req$body2.message;
          _context3.next = 5;
          return queriesModel.findByIdAndUpdate(id, {
            name: name,
            email: email,
            message: message
          });
        case 5:
          query = _context3.sent;
          res.json({
            message: 'Query updated successfully'
          });
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// Delete a query
queriesController.deleteQuery = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return queriesModel.findByIdAndDelete(id);
        case 4:
          res.json({
            message: 'Query deleted successfully'
          });
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
module.exports = queriesController;