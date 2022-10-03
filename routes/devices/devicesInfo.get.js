const express = require("express");
const router = express.Router();

module.exports = router.get("/devices/device-info", async (req, res, next) => {
  try {
    setTimeout(() => {
      res.status(200).send({ asd: "asdasd" });
    }, 5000);
  } catch (err) {
    next(err);
  }
});
