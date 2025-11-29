import express from "express";
import { signUp, login, readProfile } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/profile", authMiddleware, readProfile);

export default router;
