const FoodsCategory = require("../models/FoodCategory");

module.exports = {
  // GET food categories
  get: async (req, res, next) => {
    let foodsCategories = await FoodsCategory.find();
    if (!foodsCategories) {
      return res.status(404).json({
        message: "No Items Available!",
      });
    }
    res.status(200).json(foodsCategories);
  },

  // GET food category detail
  getByID: async (req, res, next) => {
    const foodsCategoryID = req.params.id;

    let foodsCategory = await FoodsCategory.findById(foodsCategoryID);
    if (!foodsCategory) {
      res.status(404).json({
        message: `No category with id: ${foodsCategoryID} was found`,
      });
    }

    res.status(200).json(foodsCategory);
  },

  // POST food category detail
  post: async (req, res, next) => {
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

    res.status(201).json({
      message: "Food Category added Successfully@",
    });
  },

  // UPDATE food category detail
  put: async (req, res, next) => {
    const foodsCategoryID = req.params.id;

    let category = await FoodsCategory.findByIdAndUpdate(foodsCategoryID, {
      category: req.body.category,
      items: req.body.items,
    });

    category = await category.save();

    if (!category) {
      res.status(500).json({
        message: "Cannot Save the FoodsCategory Category",
      });
    }

    res.status(200).json({
      message: "Food Category updated Successfully!",
    });
  },
};
