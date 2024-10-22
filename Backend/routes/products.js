const express = require("express");
const {
  handleAddNewProduct,
  handleGetAllProducts,
  handleUpdateProduct,
  handleGetCategoryProducts,
} = require("../controllers/products");
const authAdmin = require("../middleware/authAdmin");

const router = express.Router();

router.post("/add-product", authAdmin, handleAddNewProduct);
router.post("/update-product", authAdmin, handleUpdateProduct);

router.get("/get-allProducts", handleGetAllProducts);

router.post("/get-category-products", handleGetCategoryProducts);

module.exports = router;
