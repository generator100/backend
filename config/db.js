import mongoose from "mongoose"

export const connectDB = async() => {
  await mongoose.connect('mongodb+srv://ericgne250:12345@cluster0.s5ni9gx.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}