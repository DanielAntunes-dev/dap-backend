const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database conectado com sucesso!");
  } catch (error) {
    throw new Error(error);
    console.log("Db error");
  }
};

module.exports = dbConnect;
