import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { categoryModel } from "../models/category.model";

export const category: RequestHandler = async (req, res) => {
  const { foodName, menu, entrance, price, discount } = req.body;
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Aldaa",
    });
  }
  try {
    const payload = jwt.verify(authorization, "Signup");
    const { email } = payload as JwtPayload;
    await categoryModel.create({
      foodName,
      menu,
      entrance,
      price,
      discount,
    });
    const category = await categoryModel.find({ email: email });
    res.json(category);
  } catch (err) {
    console.log(err);
  }
};
