import express from 'express'
import fileUpload from 'express-fileupload'
import routerApi from './routes/index.js'

const app = express()

//middlewares
app.use(express.json())
app.use(
  fileUpload({
    useTempFiles: true,
    temFileDir: './upload',
  })
)

//routes
routerApi(app)

export default app
