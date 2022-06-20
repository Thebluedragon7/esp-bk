const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    table: {
      type: String,
      required: true,
    },
    foods: [
      {
        type: Schema.Types.ObjectId,
        ref: "Food",
      },
    ],
    drinks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Drink",
      },
    ],
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
