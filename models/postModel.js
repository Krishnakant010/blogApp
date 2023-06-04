const mongoose = require("mongoose");
// route handler

const postSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
