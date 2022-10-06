const express = require("express");
const router = express.Router();

module.exports = router.delete(
  "/devices/device-delete/:ref",
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
