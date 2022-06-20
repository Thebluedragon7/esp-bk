const Payment = require("../models/Payment");

module.exports = {
  // GET payments
  get: async (req, res, next) => {
    let payments = await Payment.find();
    if (!payments) {
      return res.status(404).json({
        message: "No Items Available!",
      });
    }
    res.status(200).json(payments);
  },

  // GET payment detail
  getByID: async (req, res, next) => {
    const paymentID = req.params.id;

    let payment = await Payment.findById(paymentID);
    if (!payment) {
      res.status(404).json({
        message: `No category with id: ${paymentID} was found`,
      });
    }

    res.status(200).json(payment);
  },

  // POST payment detail
  post: async (req, res, next) => {
    let payment = new Payment({
      price: req.body.price,
      isCleared: req.body.isCleared,
    });

    payment = await payment.save();

    if (!payment) {
      return res.status(500).json({
        message: "Cannot Save the Payment",
      });
      next();
    }

    res.status(201).json({
      message: "Payment Saved Successfully!",
    });
  },

  // UPDATE payment detail
  put: async (req, res, next) => {
    const paymentID = req.params.id;

    let payment = await Payment.findByIdAndUpdate(paymentID, {
      price: req.body.price,
      isCleared: req.body.isCleared,
    });

    payment = await payment.save();

    if (!payment) {
      res.status(500).json({
        message: "Cannot Save the Payment",
      });
    }

    res.status(200).json({
      message: "Payment saved Successfully!",
    });
  },
};
