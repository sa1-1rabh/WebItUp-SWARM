const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productId: { type: String, required: true },
  stars: { type: Number },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  productImage: { type: String, required: true },
  productCategory: { type: String, required: true },
});

const cartModel = mongoose.model("cartProducts", cartSchema);

module.exports = cartModel;
