const express = require("express");
const router = express.Router();
const {
  dummyLink,
  likePost,
  unlikePost,
} = require("../controllers/LikeController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/PostController");
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
module.exports = router;
