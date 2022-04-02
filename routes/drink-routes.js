const express = require("express");
const router = express.Router();
const drinkController = require("../controllers/drink-controller");

router.get("/", drinkController.getDrinks);

router.post("/", drinkController.addDrinks);

router.get("/:id", drinkController.getDrinkById);

router.put("/:id", drinkController.updateDrinkById);

module.exports = router;
