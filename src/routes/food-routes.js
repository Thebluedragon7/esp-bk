const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadImage");
const FoodController = require("../controllers/food-controller");

router.get("/", FoodController.get);

router.post("/", upload.single("image"), FoodController.post);

router.get("/:id", FoodController.getByID);

router.put("/:id", upload.single("image"), FoodController.put);

module.exports = router;
