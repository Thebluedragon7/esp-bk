const express = require("express");
const router = express.Router();
const PaymentController = require("../controllers/payment-controller");

router.get("/", PaymentController.get);

router.post("/", PaymentController.post);

router.get("/:id", PaymentController.getByID);

router.put("/:id", PaymentController.put);

module.exports = router;
