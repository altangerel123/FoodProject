import { RequestHandler } from "express";
import { userModel } from "../models";
import jwt from "jsonwebtoken";

export const signup: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
  });

  if (user) {
    return res.status(409).json({
      message: "User already exists",
    });
  }
  await userModel.create({
    name,
    email,
    password,
  });
  const token = jwt.sign({ email }, "Signup");
  res.json({
    message: "User created",
    token,
  });
};
export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
    password: password,
  });
  if (!user) {
    return res.status(409).json({
      message: "Aldaa garlaa",
    });
  }
  const token = jwt.sign({ email }, "Signup");
  res.json({
    message: "User signed in",
    token,
  });
};
