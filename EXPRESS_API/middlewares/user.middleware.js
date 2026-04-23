const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports.authenticateUser = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(400).json({ message: "token expire re-signin" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await userModel.findOne({ _id: decoded._id });

    if (!user) {
      return res.status(401).json({ message: "unauthorized" });
    }

    req.user = user;
    return next();
  } 
  catch (error) {
    return res.status(400).json({ error });
  }
};
