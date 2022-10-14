const express = require("express");
const router = express.Router();
const { models } = require("../../models/index");
const { body, validationResult } = require("express-validator");
const { hashPassword } = require("../../services/Passswords");
const { generateAccessToken } = require("../../services/JWTCreator");
const { AUTH_ERRORS } = require("../../constants/errors");

module.exports = router.post(
  "/auth/register",
  body("email").isEmail(),
  body("login").exists({ checkNull: true, checkFalsy: true }),
  body("password").exists({ checkNull: true, checkFalsy: true }),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const { body } = req;
      const hashedPassword = await hashPassword(body.password);

      const existingUser = await models.User.findOne({
        where: { email: body.email },
      });

      if (existingUser) throw new Error(AUTH_ERRORS.EMAIL_EXISTS);

      const newUser = await models.User.create({
        login: body.login,
        password: hashedPassword,
        email: body.email,
        client: body.client,
      });

      const accessToken = generateAccessToken(newUser.id);

      res.status(200).send({ accessToken });
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);
