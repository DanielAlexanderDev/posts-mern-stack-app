const express = require("express");
const routerApi = require("./routes");
const connectDB = require("./db");

const app = express();
const PORT = 3000;
app.use(express.json());
connectDB();

routerApi(app);
app.listen(PORT, () => {
  console.log(`escuchando en puerto ${PORT}`);
});
