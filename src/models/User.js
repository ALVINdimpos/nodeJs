import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const { Schema } = mongoose;

const UserSchema = new Schema({
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
    required: [true, "Confirm password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password") && !user.isModified("confirmpassword")) return next();

  try {
    const salt = await bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(user.password, salt);
    user.confirmpassword = await bcrypt.hashSync(user.confirmpassword, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

export default mongoose.model("User", UserSchema);
