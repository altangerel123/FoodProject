import { Schema, model } from "mongoose";
const foodShema = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  entrance: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});
export const foodModel = model("/food", foodShema);
