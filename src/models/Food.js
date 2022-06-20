const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isPlated: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
