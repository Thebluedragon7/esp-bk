require("dotenv").config(); // process.env.ENV_VARIABLE
const express = require("express");
const mongoose = require("mongoose");
const foodRoutes = require("./routes/food-routes");
const drinkRoutes = require("./routes/drink-routes");
const foodsCategoryRoutes = require("./routes/foodsCategory-routes");
const drinksCategoryRoutes = require("./routes/drinksCategory-routes");
const orderRoutes = require("./routes/order-routes");

// Middleware
const app = express();
app.use(express.json());

// ROUTES
app.use("/api/foods", foodRoutes);
app.use("/api/drinks", drinkRoutes);
app.use("/api/foods/categories", foodsCategoryRoutes);
app.use("/api/drinks/categories", drinksCategoryRoutes);
app.use("/api/orders", orderRoutes);

// Connections
mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.igjlq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MDB successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening to port ${port}`));
