const express = require("express");
const router = express.Router();
const findUser = require("../../services/userFinder");
const { models } = require("../../models/index");
const { sendMessage } = require("../../middlewares/sendPush");
const { DEVICE_ERRORS } = require("../../constants/errors");

module.exports = router.post(
  "/devices/send-push/:ref",
  async (req, res, next) => {
    try {
      const { ref } = req.params;

      const user = await findUser(ref);

      const response = await sendMessage(user.client, "test", "test");

      res.status(200).send(response.results);
    } catch (err) {
      res.status(400).send({ message: DEVICE_ERRORS.ERROR });
    }
  }
);
