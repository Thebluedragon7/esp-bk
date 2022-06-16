const Order = require("../models/Order");

const getOrders = async (req, res, next) => {
  let orders = await Order.find();
  if (!orders) {
    return res.status(404).json({
      message: "No Orders Available!",
    });
  }
  res.status(200).json({ orders });
};

const placeOrder = async (req, res, next) => {
  let orders = new Order({
    category: req.body.category,
    items: req.body.items,
  });

  orders = await orders.save();

  if (!orders) {
    return res.status(500).json({
      message: "Cannot place the order",
    });
    next();
  }

  res.status(201).json({ orders });
};

const getOrderById = async (req, res, next) => {
  const orderID = req.params.id;

  let order = await Order.findById(orderID);
  if (!order) {
    res.status(404).json({
      message: `No order with id: ${orderID} was found`,
    });
  }

  res.status(200).json({ order });
};

// const updateOrderById = async (req, res, next) => {
//   const orderID = req.params.id;

//   let order = await Order.findByIdAndUpdate(orderID, {
//     category: req.body.category,
//     items: req.body.items,
//   });

//   order = await order.save();

//   if (!order) {
//     res.status(500).json({
//       message: "Cannot Save the order",
//     });
//   }

//   res.status(200).json({ order });
// };

exports.getOrders = getOrders;
exports.placeOrder = placeOrder;
exports.getOrderById = getOrderById;
// exports.updateOrderById = updateOrderById;
