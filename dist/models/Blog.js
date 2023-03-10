"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
var blogSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 2000
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100
  },
  image: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 400
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var Blog = _mongoose["default"].model("Blog", blogSchema);
module.exports = Blog;