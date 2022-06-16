const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodCategorySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "food",
    },
  ],
});

module.exports = mongoose.model("FoodCategory", foodCategorySchema);
