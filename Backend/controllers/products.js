const productModel = require("../models/products");

async function handleAddNewProduct(req, res) {
  try {
    const productInfo = req.body;
    // console.log(productInfo);
    await productModel.create({
      productName: productInfo.productName,
      productBrands: productInfo.productBrands,
      productDescription: productInfo.productDescription,
      productOriginalPrice: productInfo.productOriginalPrice,
      productDiscountedPrice: productInfo.productDiscountedPrice,
      productImages: productInfo.productImages,
      productCategory: productInfo.productCategory,
    });
    return res.status(200).json({
      msg: "Added New Product Successfully!",
      success: true,
      err: false,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

async function handleUpdateProduct(req, res) {
  try {
    if (!req?.body) {
      throw new Error("No Updating Data Sent!");
    }
    const newData = req.body;
    await productModel.findByIdAndUpdate(newData._id, newData);
    return res.status(200).json({
      msg: "Product Details Updated Successfully!",
      success: true,
      err: false,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

async function handleGetAllProducts(req, res) {
  try {
    const allProducts = (await productModel.find()) || [];
    return res.status(200).json({
      msg: "Fetched All Users Successfully!",
      success: true,
      err: false,
      data: allProducts,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

async function handleGetCategoryProducts(req, res) {
  try {
    const body = req.body;
    if (!body) {
      throw new Error("No Category Sent!");
    }
    const products = await productModel.find({ productCategory: body.cat });
    // console.log("products->", products);
    if (!products) {
      throw new Error("No Products Found!");
    }
    return res.status(200).json({
      msg: "Fetched Category Products",
      success: true,
      err: false,
      data: products,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

module.exports = {
  handleAddNewProduct,
  handleGetAllProducts,
  handleUpdateProduct,
  handleGetCategoryProducts,
};
