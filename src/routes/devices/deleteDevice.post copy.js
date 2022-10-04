const express = require("express");
const router = express.Router();

module.exports = router.post(
  "/devices/device-tests/:ref",
  async (req, res, next) => {
    try {
      console.log(req.params);
      setTimeout(() => {
        res
          .status(200)
          .send({ lid: "opened", temperature: "67", vacuum: "ok" });
      }, 3000);
    } catch (err) {
      next(err);
    }
  }
);
