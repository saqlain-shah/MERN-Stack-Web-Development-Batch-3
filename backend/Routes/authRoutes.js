import express from "express";
import { Register , Login  } from "./authRoutes"


const router = express.Router();
router.post("/register", register);
router.post("/login", login);

export default router;
