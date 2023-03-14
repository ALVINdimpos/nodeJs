// ../models/queries.js

import mongoose from "mongoose";

const { Schema } = mongoose;

const queriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const queriesModel = mongoose.model("queries", queriesSchema);

export { queriesModel };
