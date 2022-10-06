const express = require("express");
const { models } = require("../../models/index");
const router = express.Router();
const { AUTH_ERRORS, DEVICE_ERRORS } = require("../../constants/errors");
const { DEVICE_SUCCESS } = require("../../constants/success");

module.exports = router.patch("/devices/tests/:ref", async (req, res, next) => {
  try {
    const { body } = req;
    const { ref } = req.params;

    const device = await models.Device.update(
      {
        deviceTests: body.testResults,
      },
      {
        where: { deviceRef: +ref },
      }
    );

    console.log(device);

    res.status(200).send({ message: DEVICE_SUCCESS.TEST_RESULTS_SET });
  } catch (err) {
    res.status(400).send({ message: DEVICE_ERRORS.ERROR });
  }
});
