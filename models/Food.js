const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  items: [
    {
      name: String,
      isPlated: Boolean,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Food", foodSchema);
