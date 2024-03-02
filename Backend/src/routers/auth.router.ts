import { Router } from "express";
import { login, signup, userprofile } from "../controllers";

const authRouter = Router();
authRouter.post("/signup", signup);
authRouter.get("/userprofile", userprofile);
authRouter.post("/login", login);
export default authRouter;
