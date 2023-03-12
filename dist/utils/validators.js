"use strict";

var _require = require('express-validator'),
  validationResult = _require.validationResult;
var validate = function validate(req, res, next) {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }
  next();
};
module.exports = validate;