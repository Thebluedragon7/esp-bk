const Food = require("../models/Food");

module.exports = {
  // GET foods
  get: async (req, res, next) => {
    let foods = await Food.find();
    if (!foods) {
      return res.status(404).json({
        message: "No Foods Available!",
      });
    }
    res.status(200).json(foods);
  },

  // GET food detail
  getByID: async (req, res, next) => {
    const foodID = req.params.id;

    let food = await Food.findById(foodID);
    if (!food) {
      res.status(404).json({
        message: `No food with id: ${foodID} was found`,
      });
    }

    res.status(200).json(food);
  },

  // POST food detail
  post: async (req, res, next) => {
    let food = new Food({
      title: req.body.title,
      isPlated: req.body.isPlated,
      image: req.file.path,
      price: req.body.price,
    });

    food = await food.save();

    if (!food) {
      return res.status(500).json({
        message: "Cannot Save the food",
      });
      next();
    }

    res.status(201).json({
      message: "Food added Successfully",
    });
  },

  // UPDATE food detail
  put: async (req, res, next) => {
    const foodID = req.params.id;

    let food = await Food.findByIdAndUpdate(foodID, {
      title: req.body.title,
      isPlated: req.body.isPlated,
      image: req.file.path,
      price: req.body.price,
    });

    food = await food.save();

    if (!food) {
      res.status(500).json({
        message: "Cannot Save the Food",
      });
    }

    res.status(200).json({
      message: "Food updated Successfully!",
    });
  },
};
