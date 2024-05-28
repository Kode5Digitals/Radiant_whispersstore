const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const AdminModel = require('../models/AdminModel');
require('dotenv').config();
const {jwtKey}=require("../config/env")

async function auth(req, res, next) {
    console.log("auth testing");
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: Token not provided" });
        }

        const decoded = jwt.verify(token, jwtKey, { algorithms: ["HS256"] });
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
        console.error("Auth error:", error);
        return res.status(401).json({ message: "Unauthorized" });
    }
}


module.exports = auth