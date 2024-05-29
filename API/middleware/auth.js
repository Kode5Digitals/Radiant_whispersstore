const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const AdminModel = require('../models/AdminModel');
require('dotenv').config();
const {JWT_KEY,REFRESH_TOKEN_SECRET}=require("../config/env")

const auth=async(req, res, next)=> {
    console.log("auth testing");
    console.log("Auth middleware invoked")
    try {
        // const authHeader = req.headers.authorization;
        // if (!authHeader) {
        //     return res.status(401).json({ message: "Unauthorized: No token provided" });
        // }
        
        // const token = authHeader.split(' ')[1];
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDc1OTA5NWE0M2EwMjI3NGM1ZTA1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjk2OTQ3OSwiZXhwIjoxNzE3NTc0Mjc5fQ.essjNL61AUQPAN9EKaLOJsf4iAtcqEu2SB-nrlkPA6Q"
        console.log("token:",token)
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: Token not provided" });
        }

        const decoded = jwt.verify(token,REFRESH_TOKEN_SECRET, { algorithms: ["HS256"] });
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
    
      
    }
}


module.exports = auth