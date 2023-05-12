import express from 'express'
import postsRouter from './posts.routes.js'

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/posts', postsRouter)
}
export default routerApi
