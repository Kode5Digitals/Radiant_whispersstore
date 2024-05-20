
const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel");
const { jwtKey } = require("../config/env");



async function auth(req, res, next) {
  let user
  try {

    const  authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ message: " No token provided" });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token not provided" });
      }  
    const decoded = jwt.verify(token, jwtKey, { algorithms: "HS256" });
    const id = decoded.id
    user = await UserModel.findOne({ _id: id })
    console.log(user)
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    else {
      req["user"] = user;
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "unautorized"});
  }


}
module.exports = auth