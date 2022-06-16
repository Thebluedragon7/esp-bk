const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
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
});

module.exports = mongoose.model("Order", orderSchema);
