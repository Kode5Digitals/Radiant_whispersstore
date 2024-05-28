require("dotenv").config()
const {
PORT,
jwtKey,
CONNECTION_URL,
Cloud_name,
CloudApi_key,
CloudApi_secret ,
PAYSTACK_PUBLIC_KEY,
REFRESH_TOKEN_PUBLIC_KEY_PATH,
REFRESH_TOKEN_PRIVATE_KEY_PATH
} = process.env
module.exports = {
    PORT,
    jwtKey,
    CONNECTION_URL,
    Cloud_name,
    CloudApi_key,
    CloudApi_secret,
    PAYSTACK_PUBLIC_KEY,
    REFRESH_TOKEN_PUBLIC_KEY_PATH,
    REFRESH_TOKEN_PRIVATE_KEY_PATH
}