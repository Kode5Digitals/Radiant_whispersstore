const express=require("express")
const bodyparser=require("body-parser")
const cookiesparser=require("cookie-parser")
const userRouter=require("./router/userRouter")
const productRouter=require("./router/productRouter")
const adminRouter=require("./router/adminRouter")
const {PORT}=require("./config/env")
const cors=require("cors")
const connect=require("./db/connection")
const app=express()
app.use(bodyparser.json())
app.use(cookiesparser())


app.use(cors(
    {
    origin:  ['https://radiant-whispersstore-nine.vercel.app','http://localhost:5173'],
    credentials: true
  }
));


app.use("/api/user",userRouter)
app.use("/api/products",productRouter)
app.use("/admin",adminRouter)
app.use("/admin/product",adminRouter)


connect.then((res)=>{
    app.listen(PORT,()=>{
        console.log(`server is running on Port ${PORT}`)
    })
}).catch((err)=>{
    console.log(`Database err : ${err}`)
})
