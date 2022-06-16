const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkCategorySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Drink",
    },
  ],
});

module.exports = mongoose.model("DrinkCategory", drinkCategorySchema);
