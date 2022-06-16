const DrinksCategory = require("../models/DrinkCategory");

const getDrinksCategories = async (req, res, next) => {
  let drinksCategories = await DrinksCategory.find();
  if (!drinksCategories) {
    return res.status(404).json({
      message: "No Items Available!",
    });
  }
  res.status(200).json({ drinksCategories });
};

const addDrinksCategories = async (req, res, next) => {
  let drinksCategories = new DrinksCategory({
    category: req.body.category,
    items: req.body.items,
  });

  drinksCategories = await drinksCategories.save();

  if (!drinksCategories) {
    return res.status(500).json({
      message: "Cannot Add the Item",
    });
    next();
  }

  res.status(201).json({ drinksCategories });
};

const getDrinksCategoryById = async (req, res, next) => {
  const drinksCategoryID = req.params.id;

  let drinksCategory = await DrinksCategory.findById(drinksCategoryID);
  if (!drinksCategory) {
    res.status(404).json({
      message: `No category with id: ${drinksCategoryID} was found`,
    });
  }

  res.status(200).json({ drinksCategory });
};

const updateDrinksCategoryById = async (req, res, next) => {
  const drinksCategoryID = req.params.id;

  let drinksCategory = await DrinksCategory.findByIdAndUpdate(
    drinksCategoryID,
    {
      category: req.body.category,
      items: req.body.items,
    }
  );

  drinksCategory = await DrinksCategory.save();

  if (!drinksCategory) {
    res.status(500).json({
      message: "Cannot Save the drink",
    });
  }

  res.status(200).json({ drinksCategory });
};

exports.getDrinksCategories = getDrinksCategories;
exports.addDrinksCategories = addDrinksCategories;
exports.getDrinksCategoryById = getDrinksCategoryById;
exports.updateDrinksCategoryById = updateDrinksCategoryById;
