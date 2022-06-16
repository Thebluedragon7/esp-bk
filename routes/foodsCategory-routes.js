const express = require("express");
const router = express.Router();
const foodsCategoryController = require("../controllers/foodCategory-controller");

router.get("/", foodsCategoryController.getFoodsCategories);

router.post("/", foodsCategoryController.addFoodsCategories);

router.get("/:id", foodsCategoryController.getFoodsCategoryById);

router.put("/:id", foodsCategoryController.updateFoodsCategoryById);

module.exports = router;
