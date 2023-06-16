//Imports
import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Configurations
const app = express();
dotenv.config();

//Middleware
app.use(cors());

//Database setup
mongoose.connect(process.env.MONGO_URL, {useNewUrlParcer: true, useUnifiedTopology: true})
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
   