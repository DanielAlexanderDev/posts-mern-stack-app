const connectDB = require("./db");
const app = require("./app");
const { PORT } = require("./config");

connectDB();

app.listen(PORT, () => {
  console.log(`escuchando en puerto ${PORT} `);
});
