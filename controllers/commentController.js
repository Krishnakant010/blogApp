const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    // fetch data
    const { post, user, body } = req.body;
    const comment = new Comment({
      post,
      user,
      body,
    });
    const savedComment = await comment.save();

    // post ke  comment array me daldete hai
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment._id },
      },
      { new: true }
    )
      .populate("comments") //populate the comments array with comment documents
      .exec();
    res.json({
      post: updatedPost,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: err.message,
      message: "Error making comment",
    });
  }
};
