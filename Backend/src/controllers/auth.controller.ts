import { RequestHandler } from "express";
import { userModel } from "../models";

export const signupPost: RequestHandler = async (req, res) => {
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
// export const signupGet: RequestHandler = async (req, res) => {
//   const users = await userModel.find({});

//   res.json(users);
// };
