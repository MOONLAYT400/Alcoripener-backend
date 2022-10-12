const admin = require("firebase-admin");
const { DATABASE_URL } = require("../config/index");

const serviceAccount = require("../../alcoripener-firebase-adminsdk-5px7i-81e5663bfd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: DATABASE_URL,
});

module.exports = {
  sendMessage: async (client, title, text, data) => {
    try {
      const payload = {
        notification: {
          title: title,
          body: text,
        },
      };

      const options = {
        priority: "high",
        timeToLive: 60 * 60,
      };

      const response = admin.messaging().sendToDevice(client, payload, options);

      return response;
    } catch (error) {
      console.log("Error sending message:", error);
    }
  },
};
