const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "secret";

function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(400).json({ msg: "User Not Logged In!", err: true });
    }
    // console.log("token->", token);
    const data = jwt.verify(token, PRIVATE_KEY);
    req.userId = data._id;
    next();
  } catch (e) {
    return res.json({ msg: e, err: true });
  }
}

module.exports = { authToken };
