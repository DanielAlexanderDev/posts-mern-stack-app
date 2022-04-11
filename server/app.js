const express = require("express");
const fileUpload = require("express-fileupload");
const routerApi = require("./routes/index");

const app = express();

//middlewares
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    temFileDir: "./upload",
  })
);

//routes
routerApi(app);

module.exports = app;
