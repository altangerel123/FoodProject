import { Router } from "express";
import { login, sigUp } from "../controllers/auth.controller";

const authRouter = Router();
authRouter.post("/signup", sigUp).post("/login", login);

export default authRouter;
