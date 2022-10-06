const express = require("express");
const db = require("../../models/index");
const router = express.Router();

module.exports = router.get("/devices/tests/:ref", async (req, res, next) => {
  try {
    console.log(req.params);

    const { user } = req;
    const { ref } = req.params;

    const device = await db.Device.findOne({
      where: { deviceRef: +ref, userId: user.id },
    });

    console.log(device);

    res.status(200).send(testResult);
  } catch (err) {
    next(err);
  }
});
