import expresss from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = expresss.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
