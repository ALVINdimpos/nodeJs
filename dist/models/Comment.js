"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
var commentSchema = new _mongoose["default"].Schema({
  blog: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Blog",
    required: true
  },
  commentBody: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 2000
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = _mongoose["default"].model("Comment", commentSchema);