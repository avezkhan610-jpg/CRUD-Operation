// src/controllers/auth.controller.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

const SECRET_KEY = "MY_SECRET_KEY";

// SIGNUP
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const checkUser = await User.findOne({ where: { email } });

    if (checkUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPass,
    });

    res.json({
      message: "Signup successful",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PROFILE
export const readProfile = (req, res) => {
  res.json({
    message: "Profile fetched",
    user: req.user,
  });
};
