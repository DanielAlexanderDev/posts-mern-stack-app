import express from 'express'
const router = express.Router()

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts.controller.js'

router.get('/', getPosts)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.put('/:id', updatePost)
router.get('/:id', getPost)

export default router
