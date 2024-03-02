import { RequestHandler } from "express";
import { categoryModel, userModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const signup: RequestHandler = async (req, res) => {
  const { name, email, password, address } = req.body;
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
    address,
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
export const userprofile: RequestHandler = async (req, res) => {
  try {
    const profile = await userModel.find({});
    res.json(profile);
  } catch (err) {
    console.log(err);
  }
};

export const category: RequestHandler = async (req, res) => {
  const { foodName, menu, entrance, price, discount } = req.body;

  try {
    await categoryModel.create({
      foodName,
      menu,
      entrance,
      price,
      discount,
    });
    res.json();
  } catch (err) {
    console.log(err);
  }
};
export const categoryGet: RequestHandler = async (req, res) => {
  try {
    const foods = await categoryModel.find({});
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
};
