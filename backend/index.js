//Imports
import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"

//Configurations
const app = express();
dotenv.config();

//Middleware
app.use(cors());
app.use(express.json())

//Routes
app.use("/auth", authRoutes);

//Database setup
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => {
      console.log("Database connection has been established");
      const PORT = process.env.PORT || 6000;
      app.listen(PORT,  () => {
         console.log("App is listening on PORT", PORT)
      });
   }
   )
   .catch(err => {
      console.log("Database connection failed: ", err)
   })
   