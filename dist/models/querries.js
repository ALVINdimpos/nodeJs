"use strict";

var mongoose = require('mongoose');
var queriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
var queriesModel = mongoose.model('Queries', queriesSchema);
module.exports = queriesModel;