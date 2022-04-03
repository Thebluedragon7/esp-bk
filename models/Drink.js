const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  items: [
    {
      name: String,
      price: Number,
      image: String,
    },
  ],
});

module.exports = mongoose.model("Drink", drinkSchema);
