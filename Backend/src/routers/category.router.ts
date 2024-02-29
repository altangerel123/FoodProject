import { Router } from "express";
import { category, categoryGet } from "../controllers";

const categoryRouter = Router();
categoryRouter.post("/category", category);
categoryRouter.get("/categoryGet", categoryGet);
export default categoryRouter;
