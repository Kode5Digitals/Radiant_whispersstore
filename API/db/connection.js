const mongoose = require("mongoose");
const {CONNECTION_URL}=require("../config/env")
const connect =
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,  
  socketTimeoutMS: 45000, })
  .then((res) => {
    console.log("Database connected")
  })
  .catch((err) => {
    console.log(`Database  connection ERR :${err}`);
  });
module.exports = connect;
