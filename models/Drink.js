const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model("Drink", drinkSchema);
