import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { updateStatus } from "./controllers/orderController.js";

// app config
const app = express()
const port = process.env.PORT || 4000;

//midlleware
app.use(express.json())
app.use(cors())



 // api endpoint

 app.use("/api/food",foodRouter)
 app.use("/images",express.static('uploads'))
 app.use("/api/user",userRouter)
 app.use("/api/cart",cartRouter)
 app.use("/api/order",orderRouter)
 app.use("/api/status",updateStatus)
 
// DB connection
connectDB();

app.get("/",(req,res) => {
  res.send("API WORKING")
})

app.listen(port,()=>{
console.log(`Server Started on http://localhost:${port}`);
})
