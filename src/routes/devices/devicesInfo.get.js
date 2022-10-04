const express = require("express");
const router = express.Router();
const { AUTH_ERRORS } = require("../../constants/errors");

module.exports = router.get("/devices/devices-info", async (req, res, next) => {
  try {
    if (!req.user) throw new Error(401);

    setTimeout(() => {
      res.status(200).send({ asd: "asdasd" });
    }, 5000);
  } catch (err) {
    if (err.message === "401") {
      res.status(401).send({ message: AUTH_ERRORS.WRONG_TOKEN });
    } else {
      console.log(err);
    }
  }
});
