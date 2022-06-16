const express = require("express");
const router = express.Router();
const drinksCategoryController = require("../controllers/drinkCategory-controller");

router.get("/", drinksCategoryController.getDrinksCategories);

router.post("/", drinksCategoryController.addDrinksCategories);

router.get("/:id", drinksCategoryController.getDrinksCategoryById);

router.put("/:id", drinksCategoryController.updateDrinksCategoryById);

module.exports = router;
