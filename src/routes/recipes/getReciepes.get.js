const express = require("express");
const router = express.Router();
const { models } = require("../../models/index");
const { AUTH_ERRORS, DEVICE_ERRORS } = require("../../constants/errors");

module.exports = router.get("/recipes/list", async (req, res, next) => {
  try {
    // if (!req.user) throw new Error(401);

    const recipes = await models.Recipe.findAll();

    console.log(recipes);

    res.status(200).send(recipes);
  } catch (err) {
    if (err.message === "401") {
      res.status(401).send({ message: AUTH_ERRORS.WRONG_TOKEN });
    } else {
      res.status(400).send({ message: DEVICE_ERRORS.ERROR });
    }
  }
});
