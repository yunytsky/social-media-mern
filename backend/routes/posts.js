import express from "express";
import { comment, createPost, like } from "../controllers/posts.js";
import { verifyJWT } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", verifyJWT, createPost);

router.patch("/:postId/like", verifyJWT, like);
router.patch("/:postId/comment", verifyJWT, comment);

export default router;
