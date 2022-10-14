require("dotenv").config();

const getEnv = (env) => process.env?.[env] || "";

module.exports = {
  PORT: getEnv("PORT"),
  JWT_ACCESS_SECRET: getEnv("JWT_ACCESS_SECRET"),
  DATABASE_URL: getEnv("DATABASE_URL"),
  REMOTE_DATABASE_URL: getEnv("REMOTE_DATABASE_URL"),
};
