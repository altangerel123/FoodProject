import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import { connect } from "./database";

const app = express();
app.use(cors());
app.use(json());

connect();

app.use("/", authRouter);
export default app;
