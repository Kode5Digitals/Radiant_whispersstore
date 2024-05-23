require("dotenv").config()
const {
PORT,
jwtKey,
CONNECTION_URL,
Cloud_name,
CloudApi_key,
CloudApi_secret ,
PAYSTACK_PUBLIC_KEY} = process.env
module.exports = {
    PORT,
    jwtKey,
    CONNECTION_URL,
    Cloud_name,
    CloudApi_key,
    CloudApi_secret,
    PAYSTACK_PUBLIC_KEY
}