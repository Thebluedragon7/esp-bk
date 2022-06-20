const DrinksCategory = require("../models/DrinkCategory");

module.exports = {
  // GET drink categories
  get: async (req, res, next) => {
    let categories = await DrinksCategory.find();
    if (!categories) {
      return res.status(404).json({
        message: "No Items Available!",
      });
    }
    res.status(200).json(categories);
  },

  // GET drink category detail
  getByID: async (req, res, next) => {
    const drinksCategoryID = req.params.id;

    let category = await DrinksCategory.findById(drinksCategoryID);
    if (!category) {
      res.status(404).json({
        message: `No category with id: ${drinksCategoryID} was found`,
      });
    }

    res.status(200).json(category);
  },

  // POST drink category detail
  post: async (req, res, next) => {
    let category = new DrinksCategory({
      category: req.body.category,
      items: req.body.items,
    });

    category = await category.save();

    if (!category) {
      return res.status(500).json({
        message: "Cannot Add the Item",
      });
      next();
    }

    res.status(201).json({
      message: "Drink Category added Successfully",
    });
  },

  // UPDATE drink category detail
  put: async (req, res, next) => {
    const drinksCategoryID = req.params.id;

    let category = await DrinksCategory.findByIdAndUpdate(drinksCategoryID, {
      category: req.body.category,
      items: req.body.items,
    });

    category = await category.save();

    if (!category) {
      res.status(500).json({
        message: "Cannot Save the drink",
      });
    }

    res.status(200).json({
      message: "Drink Category updated Successfully",
    });
  },
};
