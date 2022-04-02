const Food = require("../models/Food");

const getFoods = async (req, res, next) => {
  let foods = await Food.find();
  if (!foods) {
    return res.status(404).json({
      message: "No Items Available!",
    });
  }
  res.status(200).json({ foods });
};

const addFoods = async (req, res, next) => {
  let foods = new Food({
    category: req.body.category,
    items: req.body.items,
  });

  foods = await foods.save();

  if (!foods) {
    return res.status(500).json({
      message: "Cannot Add the Item",
    });
    next();
  }

  res.status(201).json({ foods });
};

const getFoodById = async (req, res, next) => {
  const foodID = req.params.id;

  let food = await Food.findById(foodID);
  if (!food) {
    res.status(404).json({
      message: `No category with id: ${foodID} was found`,
    });
  }

  res.status(200).json({ food });
};

const updateFoodById = async (req, res, next) => {
  const foodID = req.params.id;

  let food = await Food.findByIdAndUpdate(foodID, {
    category: req.body.category,
    items: req.body.items,
  });

  food = await food.save();

  if (!food) {
    res.status(500).json({
      message: "Cannot Save the Food",
    });
  }

  res.status(200).json({ food });
};

exports.getFoods = getFoods;
exports.addFoods = addFoods;
exports.getFoodById = getFoodById;
exports.updateFoodById = updateFoodById;
