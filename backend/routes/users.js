import express from "express";
import { updateProfileInfo, getAllUsers, getSingleUser, follow, unfollow, getFollowers, getFollowings } from "../controllers/users.js";
import { verifyJWT } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id",getSingleUser);
router.get("/", getAllUsers);
router.get("/:id/followers", verifyJWT, getFollowers);
router.get("/:id/followings", verifyJWT, getFollowings);

router.patch("/:id/follow/:idToFollow", verifyJWT, follow);
router.patch("/:id/unfollow/:idToUnfollow", verifyJWT, unfollow);
router.patch("/:id/update-profile-info", verifyJWT, updateProfileInfo);


export default router;

