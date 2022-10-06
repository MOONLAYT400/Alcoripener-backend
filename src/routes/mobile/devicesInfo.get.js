const express = require("express");
const router = express.Router();
const db = require("../../models/index");
const axios = require("axios");
const { AUTH_ERRORS, DEVICE_ERRORS } = require("../../constants/errors");
const { deviceData } = require("../../mockData/mockDevice");

module.exports = router.get("/devices/info", async (req, res, next) => {
  try {
    if (!req.user) throw new Error(401);

    const { user } = req;

    const devices = await db.Device.findAll({ where: { userId: user.id } });

    console.log(devices);

    Promise.all(devices.map((device) => device.deviceAddress)).then((res) =>
      console.log(res)
    );

    res.status(200).send({ deviceData: devices });
  } catch (err) {
    if (err.message === "401") {
      res.status(401).send({ message: AUTH_ERRORS.WRONG_TOKEN });
    } else {
      res.status(400).send({ message: DEVICE_ERRORS.ERROR });
    }
  }
});

// приняли запрос на получение инфы по устройствам

// нашли все устройства - которые привязанны к нашему юзеру

// отправили на каждое запрос на получение инфы от устройства

// из респнсов от устройств сформировали респонс для фронта

// отправили респонс на фронт

//
//
//
//
//
//
//
//
