require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const foodRoutes = require("./routes/food-routes");
const drinkRoutes = require("./routes/drink-routes");
const foodsCategoryRoutes = require("./routes/foodsCategory-routes");
const drinksCategoryRoutes = require("./routes/drinksCategory-routes");
const orderRoutes = require("./routes/order-routes");
const paymentRoutes = require("./routes/payment-routes");

// App Initialisation
const app = express();

// Middleware
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(morgan(":method :url :status :user-agent - :response-time ms"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.use("/api/foods", foodRoutes);
app.use("/api/drinks", drinkRoutes);
app.use("/api/foodcategories", foodsCategoryRoutes);
app.use("/api/drinkcategories", drinksCategoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

// Connections
mongoose
  .connect(process.env.DB_CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("[+] Connected to MDB successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening to port ${port}`));
