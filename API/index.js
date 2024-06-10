const express=require("express")
const bodyparser=require("body-parser")
const cookiesparser=require("cookie-parser")
const userRouter=require("./router/userRouter")
const adminRouter=require("./router/adminRoute")
const productRouter=require("./router/productRouter")
const paystackRouter=require("./router/paymentRoute")
const cartRouter=require("./router/cartRouter")
const whishListRouter=require("./router/whishlistRouter")
const {PORT}=require("./config/env")
const cors=require("cors")
const connect=require("./db/connection")
const app=express()
app.use(bodyparser.json())
app.use(cookiesparser())

function handler(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*')
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Request,Content-Type,Accept,Authorization")
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS,DELETE")
    next()
}
app.use(handler)

const corsOptions = {
    origin: [
      'https://radiant-whispersstore-nine.vercel.app',
      "https://api.paystack.co",
      'http://localhost:5173'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };



app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  
app.use("/api/user",userRouter)
app.use("/api",userRouter)
app.use("/api",cartRouter)
app.use("/api/wishlists",whishListRouter)
app.use("/api/products",productRouter)
app.use("/api/product",productRouter)
app.use("/user",userRouter)
app.use("/api/paystack",paystackRouter)
app.use("/admin",adminRouter)

connect.then((res)=>{
    app.listen(PORT,()=>{
        console.log(`server is running on Port `)
    })
}).catch((err)=>{
    console.log(`Database err : ${err}`)
})
