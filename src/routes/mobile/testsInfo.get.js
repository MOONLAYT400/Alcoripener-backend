const express = require("express");
const { models } = require("../../models/index");
const router = express.Router();

module.exports = router.get("/devices/tests/:ref", async (req, res, next) => {
  try {
    console.log(req.params);

    const { user } = req;
    const { ref } = req.params;

    const device = await models.Device.findOne({
      where: { deviceRef: +ref, userId: user.id },
    });

    const parsedTestResult = JSON.parse(device.deviceTests);

    const testsResult = {
      lid: parsedTestResult[0],
      vacuum: parsedTestResult[1],
      temperature: parsedTestResult[2],
    };

    res.status(200).send(testsResult);
  } catch (err) {
    next(err);
  }
});
