const express = require("express");
const router = express.Router();
const db = require("../../models/index");
const { body, validationResult } = require("express-validator");
const { comparePassword } = require("../../services/Passswords");
const { generateAccessToken } = require("../../services/JWTCreator");
const { AUTH_ERRORS } = require("../../constants/errors");

module.exports = router.post("/auth/delete", async (req, res, next) => {
  try {
    const { body } = req;

    await db.User.destroy({
      where: { id: body.id },
    });

    res.status(200).send({ message: "deleted" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
