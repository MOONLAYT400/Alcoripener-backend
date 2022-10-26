const express = require("express");
const router = express.Router();
const { models } = require("../../models/index");
const { body, validationResult } = require("express-validator");
const { AUTH_ERRORS, DEVICE_ERRORS } = require("../../constants/errors");
const { DEVICE_SUCCESS } = require("../../constants/success");

module.exports = router.post(
  "/recipes/add",
  // body("email").isEmail(),
  // body("login").exists({ checkNull: true, checkFalsy: true }),
  // body("password").exists({ checkNull: true, checkFalsy: true }),
  async (req, res, next) => {
    try {
      //   const errors = validationResult(req);
      //   if (!errors.isEmpty()) {
      //     return res.status(400).send({ errors: errors.array() });
      //   }
      //   if (!req.user) throw new Error(401);

      const { body } = req;
      console.log(body);

      const model = await models.Recipe.create({
        recipeRef: body?.recipeRef,
        recipeSettings: body.recipeSettings,
        recipeName: body.recipeName,
      });

      console.log(model);

      res.status(200).send({ message: "рецепт добавленн" });
    } catch (err) {
      if (err.message === "401") {
        res.status(401).send({ message: AUTH_ERRORS.WRONG_TOKEN });
      } else {
        res.status(400).send({ message: "рецепт не добавлен" });
      }
    }
  }
);
