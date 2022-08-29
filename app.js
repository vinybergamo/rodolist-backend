const express = require("express");
const rootRouter = require("./src/routes/index");
const app = express();
const cors = require("cors");
const methodOverride = require("method-override");
require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
app.use(cors());
app.use("/", rootRouter);

app.listen(3001, () => {
  console.log("Servidor ativo");
});
