const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String },
  productDescription: { type: String },
  productOriginalPrice: { type: Number },
  productDiscountedPrice: { type: Number },
  productImages: { type: Array },
  productBrands: { type: String },
  productCategory: { type: String, required: true },
  partofcart: { type: Boolean },
  productQuantity: { type: Number },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
