import { Router } from "express";
import { sendEmail } from "../controllers";
const emailRouter = Router().post("/send", sendEmail);
export default emailRouter;
