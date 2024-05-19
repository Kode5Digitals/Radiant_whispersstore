require("dotenv").config()
const {
PORT,
jwtKey,
CONNECTION_URL,
Cloud_name,
CloudApi_key,
CloudApi_secret } = process.env
module.exports = {
    PORT,
    jwtKey,
    CONNECTION_URL,
    Cloud_name,
    CloudApi_key,
    CloudApi_secret
}