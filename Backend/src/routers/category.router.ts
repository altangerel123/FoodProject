import { Router } from "express";
import { category } from "../controllers";

const categoryRouter = Router();
categoryRouter.post("/category", category);
categoryRouter.get("/category", category);

export default categoryRouter;
