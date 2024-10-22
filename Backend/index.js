const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/user");
const productRoute = require("./routes/products");
const cartRoute = require("./routes/cart");

const app = express();
const PORT = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/FullStack-Ecommerce")
  .then(console.log("MongoDB Connected!"));

app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

app.use("/", userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);

app.listen(PORT, () => {
  console.log("Server Started at " + PORT);
});
