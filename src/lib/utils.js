const { default: mongoose } = require("mongoose");
const connection = {};

export const connecTodb = async () => {
  console.log({ t: process.env.MONGO_URL });
  console.log(`COnnect to MD`);
  try {
    if (connection.isConnected == 1) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log({ y: db.connection.readyState });
    connection.isConnected = db.connection.readyState;
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};
