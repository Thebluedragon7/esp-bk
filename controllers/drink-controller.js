const Drink = require("../models/Drink");

const getDrinks = async (req, res, next) => {
  let drinks = await Drink.find();
  if (!drinks) {
    return res.status(404).json({
      message: "No Drinks Available!",
    });
  }
  res.status(200).json({ drinks });
};

const addDrinks = async (req, res, next) => {
  let drinks = new Drink({
    category: req.body.category,
    items: req.body.items,
  });

  drinks = await drinks.save();

  if (!drinks) {
    return res.status(500).json({
      message: "Cannot Add the Drink",
    });
    next();
  }

  res.status(201).json({ drinks });
};

const getDrinkById = async (req, res, next) => {
  const drinkID = req.params.id;

  let drink = await Drink.findById(drinkID);
  if (!drink) {
    res.status(404).json({
      message: `No drinks with id: ${drinkID} was found`,
    });
  }

  res.status(200).json({ drink });
};

const updateDrinkById = async (req, res, next) => {
  const drinkID = req.params.id;

  let drink = await Drink.findByIdAndUpdate(drinkID, {
    category: req.body.category,
    items: req.body.items,
  });

  drink = await drink.save();

  if (!drink) {
    res.status(500).json({
      message: "Cannot Save the drink",
    });
  }

  res.status(200).json({ drink });
};

exports.getDrinks = getDrinks;
exports.addDrinks = addDrinks;
exports.getDrinkById = getDrinkById;
exports.updateDrinkById = updateDrinkById;
