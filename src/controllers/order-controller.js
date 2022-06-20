const Order = require("../models/Order");

module.exports = {
  // GET orders
  get: async (req, res, next) => {
    let orders = await Order.find();
    if (!orders) {
      return res.status(404).json({
        message: "No Orders Available!",
      });
    }
    res.status(200).json(orders);
  },

  // GET order detail
  getByID: async (req, res, next) => {
    const orderID = req.params.id;

    let order = await Order.findById(orderID);
    if (!order) {
      res.status(404).json({
        message: `No order with id: ${orderID} was found`,
      });
    }

    res.status(200).json(order);
  },

  // POST order detail
  post: async (req, res, next) => {
    let orders = new Order({
      table: req.body.table,
      foods: req.body.foods,
      drinks: req.body.drinks,
      payment: req.body.payment,
    });

    orders = await orders.save();

    if (!orders) {
      return res.status(500).json({
        message: "Cannot place the order",
      });
      next();
    }

    res.status(201).json({
      message: "Order Placed Successfully!",
    });
  },
};
