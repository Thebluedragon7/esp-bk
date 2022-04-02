require("dotenv").config(); // process.env.ENV_VARIABLE
const express = require("express");
const mongoose = require("mongoose");
const routerFood = require("./routes/food-routes");
const routerDrink = require("./routes/drink-routes");

// Middleware
const app = express();
app.use(express.json());

// ROUTES
app.use("/api/foods", routerFood);
app.use("/api/drinks", routerDrink);

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
