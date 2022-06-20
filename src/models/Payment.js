const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema(
  {
    price: {
      type: String,
      required: true,
    },
    isCleared: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);
