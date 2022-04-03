const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  items: [
    {
      name: String,
      isPlated: Boolean,
      image: String,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Food", foodSchema);
