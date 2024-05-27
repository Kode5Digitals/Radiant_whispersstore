// authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_KEY=require("../config/env")
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user;
        next(); 
    });
};

module.exports = authenticateToken;
