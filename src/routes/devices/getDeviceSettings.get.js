const express = require("express");
const router = express.Router();
const { models } = require("../../models/index");
const { DEVICE_ERRORS } = require("../../constants/errors");

module.exports = router.get(
  "/devices/change-settings/:ref",
  async (req, res, next) => {
    try {
      const { ref } = req.params;

      const device = await models.Device.findOne({
        where: { deviceRef: +ref },
      });

      const deviceSettings = JSON.parse(device.deviceSettings);

      res.status(200).send(deviceSettings);
    } catch (err) {
      res.status(400).send({ message: DEVICE_ERRORS.DEVICE_SETTINGS_ERROR });
    }
  }
);
