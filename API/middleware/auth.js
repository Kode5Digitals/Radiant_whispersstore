
const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel");
const adminModel = require("../models/AdminModel");
const { jwtKey } = require("../config/env");



async function auth(req, res, next) {
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
  let user
  let Admin
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
    Admin= await adminModel.findOne({_id:id})
    console.log(user)
    if (!user && ! Admin) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    else {
      req["user"] = user
      req["admin"]=Admin
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized"});
  }


}
module.exports = auth