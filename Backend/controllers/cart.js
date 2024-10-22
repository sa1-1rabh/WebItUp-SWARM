const cartModel = require("../models/cart");
const productModel = require("../models/products");

async function handleFetchAllCartProducts(req, res) {
  try {
    const allCartProducts = await cartModel.find({});
    if (!allCartProducts) {
      throw new Error("No Cart Products Found!");
    }
    // console.log("cartProducts->", allCartProducts);
    return res.status(200).json({
      msg: "Cart Products Fetched Successfully!",
      success: true,
      err: false,
      data: allCartProducts,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

async function handleAddCartProduct(req, res) {
  try {
    const body = req.body;
    if (!body) {
      throw new Error("No Cart Product Sent!");
    }
    // console.log("body->", body);
    await cartModel.create(body);
    await productModel.findOneAndUpdate(
      { _id: body.productId },
      { partofcart: true, productQuantity: 1 }
    );
    return res.status(200).json({
      msg: "Added Product to Cart!",
      success: true,
      err: false,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

async function handleUpdateCartItem(req, res) {
  try {
    const toUpdate = req.body;
    // console.log("toUpdate->", toUpdate);
    await cartModel.findOneAndUpdate(
      { productId: toUpdate.productId },
      {
        quantity: toUpdate.quantity,
      }
    );
    await productModel.findOneAndUpdate(
      { _id: toUpdate.productId },
      { productQuantity: toUpdate.quantity }
    );
    return res.status(200).json({
      msg: "Updated Quantity Successfully",
      success: true,
      err: false,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

async function handleDeleteCartProduct(req, res) {
  try {
    const body = req.body;
    // console.log("body->", body);
    if (!body) {
      throw new Error("No Product ID sent to delete!");
    }
    // await cartModel.findByIdAndDelete(body.cartproductId);
    await cartModel.deleteOne({ productId: body.productId });
    await productModel.findOneAndUpdate(
      { _id: body.productId },
      { productQuantity: 0 }
    );
    return res
      .status(200)
      .json({ msg: "Deleted Product from Cart!", success: true, err: false });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

async function handleDeleteAllCartItems(req, res) {
  try {
    await cartModel.deleteMany({});
    await productModel.updateMany({}, { productQuantity: 0 });
    return res.status(200).json({
      msg: "Deleted All Cart Items Successfully!",
      success: true,
      err: false,
    });
  } catch {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

// async function handleCalculateAmount(req,res){
//   try{

//   }catch(error){
//     return res.status(400).json({msg : error,success:false,err:true});
//   }
// }

module.exports = {
  handleFetchAllCartProducts,
  handleAddCartProduct,
  handleUpdateCartItem,
  handleDeleteCartProduct,
  handleDeleteAllCartItems,
};
