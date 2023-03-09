"use strict";

var _config = require("../config/config");
var jwt = require("jsonwebtoken");
function generateToken(user) {
  var token = jwt.sign({
    sub: user._id,
    name: user.name,
    email: user.email,
    password: user.password
  }, _config.secret, {
    expiresIn: "1h"
  });
  return token;
}
module.exports = generateToken;