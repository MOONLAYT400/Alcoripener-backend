const express = require("express");
const router = express.Router();
const { models } = require("../../models/index");
const { AUTH_ERRORS, DEVICE_ERRORS } = require("../../constants/errors");
const { DEVICE_SUCCESS } = require("../../constants/success");

module.exports = router.patch(
  "/devices/change-settings/:ref",
  async (req, res, next) => {
    try {
      if (!req.user) throw new Error(401);

      const { body, user } = req;
      const { ref } = req.params;

      console.log(body);
      console.log(user);

      const deviceSettings = JSON.stringify(body);

      console.log(deviceSettings);

      await models.Device.update(
        {
          deviceSettings: deviceSettings,
        },
        {
          where: { deviceRef: +ref, userId: user.id },
        }
      );

      res.status(200).send({ message: DEVICE_SUCCESS.DEVICE_SETTINGS_UPDATED });
    } catch (err) {
      if (err.message === "401") {
        res.status(401).send({ message: AUTH_ERRORS.WRONG_TOKEN });
      } else {
        res.status(400).send({ message: DEVICE_ERRORS.DEVICE_SETTINGS_ERROR });
      }
    }
  }
);
