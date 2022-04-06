const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.controller");

router.get("/", getPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.get("/:id", getPost);

module.exports = router;
