import { Router } from "express";
import {
  login,
  profileImage,
  signup,
  userprofile,
} from "../controllers/auth.controller";

const authRouter = Router();
authRouter.post("/signup", signup);
authRouter.get("/userprofile", userprofile);
authRouter.post("/login", login);
authRouter.post("/profileImage", profileImage);
export default authRouter;
