const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const AdminModel = require('../models/AdminModel');
require('dotenv').config();
const {JWT_KEY}=require("../config/env")

const auth = async(req, res, next)=> {
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

        const decoded = jwt.verify(token,JWT_KEY, { algorithms: ["HS256"] });

        const userId = decoded.id;

        let user = await UserModel.findOne({ _id: userId });
      
        if (!user) {
          const admin = await AdminModel.findOne({ _id: userId });
          if (!admin) {
              return res.status(401).json({ message: "Unauthorized: User not found" });
          }
          // req.user = admin
          req.user = admin.toObject(); // Convert admin object to plain JavaScript object
          req.user.isAdmin = true; 
      } else {
          // req.user = user
          req.user = user.toObject(); // Convert user object to plain JavaScript object
          req.user.isAdmin = false;
      }

        console.log("req:",req)

        next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Unauthorized: Token has expired" });
      }
      console.error("Auth error:", error);
      return res.status(401).json({ message: "Unauthorizeddkkk" });
    
      
    }
}


module.exports = auth