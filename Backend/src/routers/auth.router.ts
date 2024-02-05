import { Router } from "express";
import { signupPost } from "../controllers";

const authRouter = Router();
authRouter.post("/signup", signupPost);

export default authRouter;
