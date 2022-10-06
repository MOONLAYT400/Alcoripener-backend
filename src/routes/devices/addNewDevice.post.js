const express = require("express");
const router = express.Router();
const db = require("../../models/index");
const { body, validationResult } = require("express-validator");
const { AUTH_ERRORS, DEVICE_ERRORS } = require("../../constants/errors");
const { DEVICE_SUCCESS } = require("../../constants/success");

module.exports = router.get(
  "/devices/add",
  // body("email").isEmail(),
  // body("login").exists({ checkNull: true, checkFalsy: true }),
  // body("password").exists({ checkNull: true, checkFalsy: true }),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      if (!req.user) throw new Error(401);

      const { body } = req;

      await db.Device.create({
        deviceRef: +body.deviceRef,
        userId: req.user.id,
      });

      res.status(200).send({ message: DEVICE_SUCCESS.DEVICE_ADDED });
    } catch (err) {
      if (err.message === "401") {
        res.status(401).send({ message: AUTH_ERRORS.WRONG_TOKEN });
      } else {
        res.status(400).send({ message: DEVICE_ERRORS.ERROR });
      }
    }
  }
);
