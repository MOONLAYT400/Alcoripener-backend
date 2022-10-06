const { verifyAccessToken } = require("../services/JWTCreator");
const db = require("../models/index");
const { AUTH_ERRORS } = require("../constants/errors");

module.exports = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.replace("Bearer ", "");

    if (token) {
      const userId = verifyAccessToken(token).userId;
      const user = await db.User.findByPk(userId);
      req.user = user;
    }

    next();
  } catch (error) {
    res.status(401).send(AUTH_ERRORS.WRONG_TOKEN);
  }
};
