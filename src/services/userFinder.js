const { models } = require("../models/index");

module.exports = async (ref) => {
  const device = await models.Device.findOne({
    where: { deviceRef: +ref },
  });

  const user = await models.User.findByPk(device.userId);

  return user;
};
