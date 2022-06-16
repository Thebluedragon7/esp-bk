const FoodsCategory = require("../models/FoodCategory");

const getFoodsCategories = async (req, res, next) => {
  let foodsCategories = await FoodsCategory.find();
  if (!foodsCategories) {
    return res.status(404).json({
      message: "No Items Available!",
    });
  }
  res.status(200).json({ foodsCategories });
};

const addFoodsCategories = async (req, res, next) => {
  let foodsCategories = new FoodsCategory({
    category: req.body.category,
    items: req.body.items,
  });

  foodsCategories = await foodsCategories.save();

  if (!foodsCategories) {
    return res.status(500).json({
      message: "Cannot Add the Item",
    });
    next();
  }

  res.status(201).json({ foodsCategories });
};

const getFoodsCategoryById = async (req, res, next) => {
  const foodsCategoryID = req.params.id;

  let foodsCategory = await FoodsCategory.findById(foodsCategoryID);
  if (!foodsCategory) {
    res.status(404).json({
      message: `No category with id: ${foodsCategoryID} was found`,
    });
  }

  res.status(200).json({ foodsCategory });
};

const updateFoodsCategoryById = async (req, res, next) => {
  const foodsCategoryID = req.params.id;

  let foodsCategory = await FoodsCategory.findByIdAndUpdate(foodsCategoryID, {
    category: req.body.category,
    items: req.body.items,
  });

  foodsCategory = await foodsCategory.save();

  if (!foodsCategory) {
    res.status(500).json({
      message: "Cannot Save the FoodsCategory Category",
    });
  }

  res.status(200).json({ foodsCategory });
};

exports.getFoodsCategories = getFoodsCategories;
exports.addFoodsCategories = addFoodsCategories;
exports.getFoodsCategoryById = getFoodsCategoryById;
exports.updateFoodsCategoryById = updateFoodsCategoryById;
