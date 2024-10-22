const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "secret";

async function handleSignUpNewUser(req, res) {
  try {
    if (!req.body) {
      return res.status(400).json({ msg: "No User Data Sent!", err: true });
    }
    const { username, email, password } = req.body;
    // console.log("req.file->", req.file);
    if (!username) {
      throw new Error("Username not Found!");
    }
    if (!email) {
      throw new Error("Email not Found!");
    }
    if (!password) {
      throw new Error("Password not Found!");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await userModel.findOne({ username });

    // console.log("req.body->", req.body);
    // console.log("user->", user);

    if (user) {
      return res.status(400).json({ msg: "User Already Exists", err: true });
    }

    await userModel.create({
      username,
      email,
      hashedPassword,
      userProfilePic: "",
    });
    res.json({ msg: "User Created Successfully!", err: false });
  } catch (err) {
    toast.error(err);
  }
}

async function handleLogin(req, res) {
  try {
    if (!req.body) {
      return res.json({ msg: "No Data Sent!", err: true });
    }

    const { username, password } = req.body;

    if (!username) {
      return res.json({ msg: "No Username Sent!", err: true });
    }
    if (!password) {
      return res.json({ msg: "No Password Sent!", err: true });
    }

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.json({ msg: "No User Found!", err: true });
    }

    const validPassword = bcrypt.compareSync(password, user.hashedPassword);

    if (validPassword) {
      const tokenData = { _id: user._id, username };
      const token = jwt.sign(tokenData, PRIVATE_KEY);
      return res
        .cookie("token", token)
        .json({ msg: "Login Successful!", err: false, token });
    } else {
      return res.json({ msg: "Invalid Username or Password!", err: true });
    }
  } catch (err) {
    toast.error(err);
  }
}

function handleLogout(req, res) {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ msg: "Successfull Logout!", success: true, error: false });
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

module.exports = { handleSignUpNewUser, handleLogin, handleLogout };
