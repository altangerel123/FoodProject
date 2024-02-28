import { Router } from "express";
import { Profile, login, signup } from "../controllers";

const authRouter = Router();
authRouter.post("/signup", signup);
authRouter.get("/profile", Profile);
authRouter.post("/login", login);
export default authRouter;
