const express = require("express");
const postsRouter = require("./posts.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/posts", postsRouter);
}
module.exports = routerApi;
