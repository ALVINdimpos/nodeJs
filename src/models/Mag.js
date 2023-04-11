import mongoose from "mongoose";

const { Schema } = mongoose;

const queriesSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    tel: {
      type: String,
    },
    subject: {
      type: String,
    },
  },
  { timestamps: true }
);

const magModel = mongoose.model("magqueries", queriesSchema);

export { magModel};
