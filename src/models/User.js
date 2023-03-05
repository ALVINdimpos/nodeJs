// user model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

// user schema
var UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Email is invalid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password should have at least 8 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// hash the password before the user is saved
UserSchema.pre("save", function (next) {
  var user = this;

  // hash the password only if the password has been changed or user is new
  if (!user.isModified("password")) return next();

  // generate the hash
  bcrypt.hash(user.password, null, null, function (err, hash) {
    if (err) return next(err);

    // change the password to the hashed version
    user.password = hash;
    next();
  });
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function (password) {
  var user = this;

  return bcrypt.compareSync(password, user.password);
};

// return the model
module.exports = mongoose.model("User", UserSchema);
