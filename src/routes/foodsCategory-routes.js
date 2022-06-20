const express = require("express");
const router = express.Router();
const FoodCategoryController = require("../controllers/foodCategory-controller");

router.get("/", FoodCategoryController.get);

router.post("/", FoodCategoryController.post);

router.get("/:id", FoodCategoryController.getByID);

router.put("/:id", FoodCategoryController.put);

module.exports = router;
