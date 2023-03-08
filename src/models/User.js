// user model
import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt-nodejs";

// user schema
var UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Email is invalid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [3, "Password should have at least 8 characters"],
  },
  confirmpassword: {
    type: String,
    unique: true,
    required: [true, "confim password is required"],
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
