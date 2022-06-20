const express = require("express");
const router = express.Router();
const DrinkCategoryController = require("../controllers/drinkCategory-controller");

router.get("/", DrinkCategoryController.get);

router.post("/", DrinkCategoryController.post);

router.get("/:id", DrinkCategoryController.getByID);

router.put("/:id", DrinkCategoryController.put);

module.exports = router;
