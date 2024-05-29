const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const AdminModel = require('../models/AdminModel');
require('dotenv').config();
// const {JWT_KEY}=require("../config/env")
JWT_KEY='00048aae9eb05a3ef4766b098bd93ae6016627985579182e1c58a6a5a1489492'

const auth=async(req, res, next)=> {
    console.log("auth testing");
    console.log("Auth middleware invoked")
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        
        const token = authHeader.split(' ')[1];
        console.log("token:",token)
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: Token not provided" });
        }

        const decoded = jwt.verify(token, JWT_KEY, { algorithms: ["HS256"] });
        console.log("decoded:",decoded)

        const userId = decoded.id;

        let user = await UserModel.findOne({ _id: userId });
        if (!user) {
            // If user is not found, check if it's an admin
            const admin = await AdminModel.findOne({ _id: userId });
            if (!admin) {
                return res.status(401).json({ message: "Unauthorized: User not found" });
            }
            req.admin = admin; // Add admin to request object
        } else {
            req.user = user; // Add user to request object
        }

        next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Unauthorized: Token has expired" });
      }
      console.error("Auth error:", error);
      return res.status(401).json({ message: "Unauthorized" });
    
      s
    }
}


module.exports = auth