import express from "express";
import { signUp, login, readProfile } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validator.middleware.js";
import { loginSchema, signUpSchema } from "../validators/auth.validator.js";

const router = express.Router();

router.post("/signup", validate(signUpSchema), signUp);
router.post("/login", validate(loginSchema), login);
router.get("/profile", authMiddleware, readProfile);

export default router;
