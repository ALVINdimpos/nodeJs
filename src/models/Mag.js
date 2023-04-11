
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
  },
  { timestamps: true }
);

const magModel = mongoose.model("magqueries", queriesSchema);

export default magModel;
