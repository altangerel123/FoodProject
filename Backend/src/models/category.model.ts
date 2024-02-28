import { Schema, model } from "mongoose";
const categoryShema = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  menu: {
    type: String,
    required: true,
  },
  entrance: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
});
export const categoryModel = model("category", categoryShema);
