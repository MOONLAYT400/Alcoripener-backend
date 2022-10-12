const express = require("express");
const router = express.Router();
const { models } = require("../../models/index");
const { body, validationResult } = require("express-validator");
const { hashPassword } = require("../../services/Passswords");
const { generateAccessToken } = require("../../services/JWTCreator");

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

      const user = await models.User.create({
        login: body.login,
        password: hashedPassword,
        email: body.email,
        client: body.client,
      });

      const accessToken = generateAccessToken(user.id);

      res.status(200).send({ accessToken });
    } catch (err) {
      next(err);
    }
  }
);
