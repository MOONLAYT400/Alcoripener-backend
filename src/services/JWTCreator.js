const jwt = require("jsonwebtoken");
const { JWT_ACCESS_SECRET } = require("../config");

module.exports = {
  generateAccessToken: (payload) =>
    jwt.sign({ userId: payload }, JWT_ACCESS_SECRET, {
      expiresIn: "365d",
    }),

  verifyAccessToken: (accessToken) =>
    jwt.verify(accessToken, JWT_ACCESS_SECRET),
};
