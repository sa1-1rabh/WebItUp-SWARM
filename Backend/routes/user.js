const express = require("express");
const {
  handleSignUpNewUser,
  handleLogin,
  handleLogout,
} = require("../controllers/user");
const { authToken } = require("../middleware/auth");
const {
  getUserDetails,
  getAllUsers,
  handleUpdateUserDetails,
} = require("../controllers/userDetails");

const router = express.Router();

router.post("/signup", handleSignUpNewUser);

router.post("/login", handleLogin);

router.get("/user-details", authToken, getUserDetails);

router.post("/update-user-details", handleUpdateUserDetails);

router.get("/all-users-details", authToken, getAllUsers);

router.get("/logout", authToken, handleLogout);

module.exports = router;
