const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: Number,
        size: String,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Não processado",
      enum: [
        "Não processado",
        "Pagamento na entrega",
        "Processando",
        "Despachado",
        "Cancelado",
        "Entregue",
      ],
    },
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
