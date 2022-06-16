const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: String,
  isPlated: Boolean,
  image: String,
  price: Number,
});

module.exports = mongoose.model("Food", foodSchema);
