const Drink = require("../models/Drink");

module.exports = {
  // GET drinks
  get: async (req, res, next) => {
    let drinks = await Drink.find();
    if (!drinks) {
      return res.status(404).json({
        message: "No Drinks Available!",
      });
    }
    res.status(200).json(drinks);
  },

  // GET drink detail
  getByID: async (req, res, next) => {
    const drinkID = req.params.id;

    let drink = await Drink.findById(drinkID);
    if (!drink) {
      res.status(404).json({
        message: `No drinks with id: ${drinkID} was found`,
      });
    }

    res.status(200).json(drink);
  },

  // POST drink detail
  post: async (req, res, next) => {
    let drink = new Drink({
      title: req.body.title,
      image: req.file.path,
      price: req.body.price,
    });

    drink = await drink.save();

    if (!drink) {
      return res.status(500).json({
        message: "Cannot Add the Drink",
      });
      next();
    }

    res.status(201).json({
      message: "Drink added Successfully",
    });
  },

  // UPDATE drink detail
  put: async (req, res, next) => {
    const drinkID = req.params.id;

    let drink = await Drink.findByIdAndUpdate(drinkID, {
      title: req.body.title,
      image: req.file.path,
      price: req.body.price,
    });

    drink = await drink.save();

    if (!drink) {
      res.status(500).json({
        message: "Cannot Save the drink",
      });
    }

    res.status(200).json({
      message: "Drink updated Successfully",
    });
  },
};
