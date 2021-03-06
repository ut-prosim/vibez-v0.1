//  SERVER/MODELS/Comment.js  //

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
    },
    like: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

//module.exports = mongoose.model("Comment", commentSchema);
