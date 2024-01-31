import { Router } from "express";
import { sigUp } from "../controllers/auth.controller";

const authRouter = Router();
authRouter.get("/signUp", sigUp);

export default authRouter;
