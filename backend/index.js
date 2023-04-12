const express = require("express");
const cors = require("cors");
const multer = require('multer');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const productRouter = require("./router/product");
const newsRouter = require("./router/news");
// const projectRouter = require("./router/projects");
const agencyRouter = require("./router/agency");

app.use(productRouter.router);
app.use(newsRouter.router);
// app.use(projectRouter.router);
app.use(agencyRouter.router);

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
