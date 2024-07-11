const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
    throw new Error(error);
    console.log("Erro ao conectar banco de dados");
  }
};

module.exports = dbConnect;
