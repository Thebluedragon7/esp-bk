const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food-controller");

router.get("/", foodController.getFoods);

router.post("/", foodController.addFoods);

router.get("/:id", foodController.getFoodById);

router.put("/:id", foodController.updateFoodById);

module.exports = router;
