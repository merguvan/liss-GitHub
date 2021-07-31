const jwt = require("jsonwebtoken");
const User = require("../models/user/user");
module.exports = async (req, res, next) => {
  try {
    const token = req.params.token || req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY || "secret");

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
