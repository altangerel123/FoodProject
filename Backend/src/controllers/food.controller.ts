import { RequestHandler } from "express";
import { foodModel, menuModel } from "../models";

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
    await menuModel.create({
      menu
    });
    res.json();
  }catch(error){
    console.log(error)
  }
};
export const menuget: RequestHandler = async (req, res) => {
  try {
    const menus = await menuModel.find({});
    res.json(menus);
  } catch (err) {
    console.log(err);
  }
};
