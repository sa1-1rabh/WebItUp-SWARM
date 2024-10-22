const userModel = require("../models/user");
const { handleUpdateProduct } = require("./products");

async function getUserDetails(req, res) {
  try {
    // console.log(req.userId);
    const userDetails = await userModel.findById(req.userId);
    if (!userDetails) {
      return res.status(400).json({ msg: "No User Data Found!", err: true });
    }
    res.status(200).json({ data: userDetails, err: false, success: true });
    // console.log("userDetails->", userDetails);
  } catch (error) {
    return res.json({ msg: error, err: true });
  }
}

async function handleUpdateUserDetails(req, res) {
  try {
    if (!req?.body) {
      throw new Error("No Updating Data Sent!");
    }
    const newData = req.body;
    await userModel.findByIdAndUpdate(newData._id, newData);
    return res.status(200).json({
      msg: "User Details Updated Successfully!",
      success: true,
      err: false,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

async function getAllUsers(req, res) {
  try {
    const allUsers = (await userModel.find()) || [];
    // console.log("All Users->", allUsers);
    return res.status(200).json({
      msg: "Fetched All Users!",
      success: true,
      err: false,
      data: allUsers,
    });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

module.exports = { getUserDetails, getAllUsers, handleUpdateUserDetails };
