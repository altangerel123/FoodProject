import { Router } from "express";
import {
  foodget,
  foodpost,
  menuget,
  menupost,
} from "../controllers/food.controller";

const foodRouter = Router();
foodRouter.post("/foodpost", foodpost);
foodRouter.get("/foodget", foodget);
foodRouter.post("/menupost", menupost);
foodRouter.get("/menuget", menuget);
export default foodRouter;
