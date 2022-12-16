const express = require("express");
const router = express.Router();
const { models } = require("../../models/index");
const { body, validationResult } = require("express-validator");
const { comparePassword } = require("../../services/Passswords");
const { generateAccessToken } = require("../../services/JWTCreator");
const { AUTH_ERRORS } = require("../../constants/errors");

module.exports = router.post(
  "/auth/login",
  body("email").isEmail(),
  body("password").exists({ checkNull: true, checkFalsy: true }),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.errors[0].param });
      }

      const { body } = req;

      const user = await models.User.findOne({
        where: { email: body.email },
      });

      if (!user) {
        throw new Error(AUTH_ERRORS.USER_NOT_FOUND);
      }

      const isPasswordMatch = await comparePassword(
        body.password,
        user.password
      );

      if (!isPasswordMatch) {
        throw new Error(AUTH_ERRORS.WRONG_PASSWORD);
      }

      const accessToken = generateAccessToken(user.id);
      res.status(200).send({ accessToken });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  }
);
