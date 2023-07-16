import express from "express";
import { login, signup, verifyAccount, resendVerificationCode, updateEmail, restorePassword, updatePassword } from "../controllers/auth.js";
import { verifyJWT } from "../middleware/auth.js";

const router = express.Router();

router.post("/log-in", login);
router.post("/sign-up", signup);
router.post("/restore-password", restorePassword)

router.put("/verify", verifyAccount);
router.put("/verify/resend", resendVerificationCode)
router.put("/update-password", updatePassword)
router.put("/update-email", updateEmail)

router.get("/protected", verifyJWT, (req, res) => {
   res.status(200).json({error: false, message: "Access granted"});
})

export default router;