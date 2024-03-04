import { RequestHandler } from "express";
import { foodModel } from "../models";

export const foodpost: RequestHandler = async (req, res) => {
  const { foodName, entrance, price, discount } = req.body;
  try {
    await foodModel.create({
      foodName,
      entrance,
      price,
      discount,
    });
    res.json();
  } catch (err) {
    console.log(err);
  }
};
export const foodget: RequestHandler = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
};

export const menupost: RequestHandler = async (req, res) => {
  const { menu } = req.body;
  try {
    await foodModel.create({
      menu,
    });
    res.json();
  } catch (err) {
    console.log(err);
  }
};
export const menuget: RequestHandler = async (req, res) => {
  try {
    const menu = await foodModel.find({});
    res.json(menu);
  } catch (err) {
    console.log(err);
  }
};
