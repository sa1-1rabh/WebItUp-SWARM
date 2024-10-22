const jwt = require("jsonwebtoken");

function authAdmin(req, res, next) {
  try {
    const userToken = req?.cookies?.token;
    // console.log("userToken->", userToken);
    if (!userToken) {
      return res.status(400).json({ msg: "User Not Logged In!", err: true });
    }
    const userData = jwt.verify(userToken, "secret");

    if (userData.username == "ss") {
      next();
    } else {
      throw new Error("Only Admin Can Upload Products!");
    }
  } catch (error) {
    return res.status(400).json({ msg: error, success: false, err: true });
  }
}

module.exports = authAdmin;
