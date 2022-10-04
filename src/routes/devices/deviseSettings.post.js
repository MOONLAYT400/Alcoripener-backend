const express = require("express");
const router = express.Router();

module.exports = router.post(
  "/devices/device-settings",
  async (req, res, next) => {
    try {
      console.log(req.body);
      res.status(200).send({ asd: "asdasd" });
    } catch (err) {
      next(err);
    }
  }
);
