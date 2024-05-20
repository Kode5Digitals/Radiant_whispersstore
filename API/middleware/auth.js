
const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel");
const { jwtKey } = require("../config/env");



async function auth(req, res, next) {
  let user
  try {

    const token = req.headers.authorization && String(req.headers.authorization).split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "unauthorised 1" });
    }
    const decoded = jwt.verify(token, jwtKey, { algorithms: "RS256" });
    const id = decoded.id
    user = await UserModel.findOne({ _id: id })
    if (!user) {
      return res.status(401).json({ message: "unauthorised 2" });
    }
    else {
      req["user"] = user;
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }


}
module.exports = auth