const res = require("express/lib/response");
const Post = require("../models/post.model");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
};
const createPost = async (req, res) => {
  const { title, description } = req.body;
  const newPost = new Post({ title, description });
  await newPost.save();
  return res.json(newPost);
};
const getPost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  return res.json(post);
};
const updatePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const post = await Post.findByIdAndUpdate(id, body, { new: true });
  return res.json(post);
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  const deletedPost = await Post.findByIdAndDelete(id);
  if (!deletedPost) return res.status(404).send("not found");
  return res.status(204).json({
    deletedPost: id,
  });
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
