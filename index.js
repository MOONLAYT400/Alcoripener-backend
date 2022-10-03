const express = require("express");
const cors = require("cors");
const recursive = require("recursive-readdir-sync");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

recursive(`${__dirname}/routes`).forEach((file) => {
  app.use("/", require(file));
});

app.post("");

app.listen(PORT, () => console.log("server is up"));
