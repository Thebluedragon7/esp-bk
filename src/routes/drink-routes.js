const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadImage");
const DrinkController = require("../controllers/drink-controller");

router.get("/", DrinkController.get);

router.post("/", upload.single("image"), DrinkController.post);

router.get("/:id", DrinkController.getByID);

router.put("/:id", upload.single("image"), DrinkController.put);

module.exports = router;
