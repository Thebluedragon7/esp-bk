const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order-controller");

router.get("/", OrderController.get);

router.post("/", OrderController.post);

router.get("/:id", OrderController.getByID);

module.exports = router;
