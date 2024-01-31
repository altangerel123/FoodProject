import { RequestHandler } from "express";
import { userModel } from "../models";

export const sigUp: RequestHandler = async (req, res) => {
  const { email, password, name } = req.body;
  const user = await userModel.create({
    name,
    email,
    password,
  });
  return res.json(user);
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email,
    password,
  });
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  return res.json(user);
};
