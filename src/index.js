const express = require("express");
const cors = require("cors");
const recursive = require("recursive-readdir-sync");
const app = express();

const { PORT } = require("../src/config");
const { auth } = require("./middlewares/auth");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth);

recursive(`${__dirname}/routes`).forEach((file) => {
  app.use("/", require(file));
});

app.listen(PORT, () => console.log("server is up"));
