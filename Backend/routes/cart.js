const express = require("express");
const {
  handleFetchAllCartProducts,
  handleAddCartProduct,
  handleUpdateCartItem,
  handleDeleteCartProduct,
  handleDeleteAllCartItems,
} = require("../controllers/cart");

const router = express.Router();

router.get("/get-all-cart-products", handleFetchAllCartProducts);

router.post("/add-cart-product", handleAddCartProduct);

router.post("/update-cart-item", handleUpdateCartItem);

router.post("/delete-cart-item", handleDeleteCartProduct);

router.delete("/delete-all-cart-items", handleDeleteAllCartItems);

// router.get("/calculate-amount",handleCalculateAmount)

module.exports = router;
