import { RequestHandler } from "express";
import { userModel } from "../models";
const jwt = require("jsonwebtoken");

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

  res.json({
    message: "User created",
  });
};
export const login: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
    password: password,
  });
  if (!user) {
    return res.status(409).json({
      message: "e-mail buruu bn",
    });
  }
  const token = jwt.sign({ email }, "login");
  res.json({
    message: "User signed in",
    token,
  });
};
