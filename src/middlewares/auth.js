const { verifyAccessToken } = require("../services/JWTCreator");
const db = require("../models/index");

module.exports = {
  auth: async (req, res, next) => {
    const token = req?.headers?.authorization?.replace("Bearer ", "");

    if (token) {
      const userId = verifyAccessToken(token).userId;
      const user = await db.User.findByPk(userId);
      req.user = user;
    }

    next();
  },
};
