"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secret = exports.port = exports.database = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var port = process.env.PORT;
exports.port = port;
var database = process.env.DATABASE;
exports.database = database;
var secret = process.env.JWT_SECRET;
exports.secret = secret;