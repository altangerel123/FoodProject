import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { userModel } from "../models";

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
  })
  if(user){
    if(user.password ==password){
      const token = jwt.sign({ email }, "Signup");
      res.json({
        message: "User signed in",
        token,
      });
    }else{
      return res.status(409).json({
        message: "Нууц үг таарахгүй байна",
      });
    }
    }else{
    return res.status(409).json({
      message: "Хэрэглэгч олдсонгүй",
    });
  }
};
export const userprofile: RequestHandler = async (req, res) => {
  try {
    const profile = await userModel.find({});
    res.json(profile);
  } catch (err) {
    console.log(err);
  }
};
