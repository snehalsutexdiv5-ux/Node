const userService = require("../services/user.service");

const { validationResult, check } = require("express-validator");
const userModel = require("../models/user.model");

//register user
module.exports.registerUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { username, email, password,role } = req.body;
  //check user is already registered or available in database or not

  let isExist = await userModel.findOne({ email: email });
  if (isExist) {
    return res.status(400).json({ error: "User already exist" });
  }
  const hashPassword = await userModel.hashPassword(password);
  const user = await userService.createuser({
    username,
    email,
    password: hashPassword,
    role
  });

  let token = await user.generateJwtToken();
  res
    .status(200)
    .json({ message: "User registered successfully", token, user });
};
//login user
module.exports.loginUser = async (req, res) => {
  let error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  // console.log(password);

  let checkUser = await userModel.findOne({ email: email }).select("+password");
  // console.log(checkUser);

  if (!checkUser) {
    return res.status(401).json({ message: "email is invalid" });
  }

  const isMatch = await checkUser.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "password is invalid" });
  }
  const token = checkUser.generateJwtToken();
  res.cookie("token", token);

  res
    .status(200)
    .json({ message: "User logged in successfully", token, checkUser });
};

//profile user
module.exports.profileUser = async (req, res) => {
  res.status(200).json({ user: req.user });
};

//update user profile

module.exports.updateProfile = async (req, res) => {
  const userId = req.user.id;
  const { username, email } = req.body;
  const user = await userService.updateUser({ userId, username, email });

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ message: "user updated successfully", user });
};

//logout
module.exports.logoutUser = async (req, res) => {
  res.clearCookie();
  return res.status(200).json({ message: "user logged out successfully" });
};
