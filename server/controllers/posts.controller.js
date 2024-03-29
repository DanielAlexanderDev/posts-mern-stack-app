import { Post } from '../models/post.model.js'
import { uploadImage, deleteImage } from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.send(posts)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
}
export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body
    let image
    if (req.files?.image) {
      const response = await uploadImage(req.files.image.tempFilePath)
      await fs.remove(req.files.image.tempFilePath)
      image = {
        url: response.secure_url,
        public_id: response.public_id,
      }
    }
    const newPost = new Post({ title, description, image })

    await newPost.save()
    return res.json(newPost)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
}
export const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (!post) return res.status(404).send('not found')
    return res.json(post)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
}
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const post = await Post.findByIdAndUpdate(id, body, { new: true })
    return res.json(post)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
}
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deletedPost = await Post.findByIdAndDelete(id)

    if (deletedPost && deletedPost.image.public_id) {
      await deleteImage(deletedPost.image.public_id)
    }
    if (!deletedPost) return res.sendStatus(404)
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}
