//Imports
import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import multer from "multer";
import { createPost } from "./controllers/posts.js";
import { verifyJWT } from "./middleware/auth.js";
import { fileURLToPath } from "url";

//Configurations
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use("/images", express.static(path.join(__dirname, "public/images")));
dotenv.config();
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "public/images");
   },
   filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + "_" + file.originalname);
   }
});

const upload = multer({storage: storage});

//Middleware
app.use(cors());
app.use(express.json())

//Routes
app.use("/auth", authRoutes);

app.use("/users", userRoutes);
app.post("/users/:id/upload-profile-pic", verifyJWT, upload.single("profile-pic"), (req, res) => {
   res.status(200).json({ error: false, message: "Picture has been successfully uploaded" });
});

app.use("/posts", postRoutes);
app.post("/posts/:userId/create", verifyJWT, upload.single("file"), createPost)

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
   