import express from "express";
import { comment, createPost, deletePost, likeUnlike, getAllPosts, getUserPosts } from "../controllers/posts.js";
import { verifyJWT } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:userId", getUserPosts);


router.delete("/:postId/delete", verifyJWT, deletePost);

router.patch("/:postId/like", verifyJWT, likeUnlike);
router.patch("/:postId/comment", verifyJWT, comment);

export default router;
