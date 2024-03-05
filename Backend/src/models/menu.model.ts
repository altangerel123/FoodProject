import { Schema, model } from "mongoose";
const menuShema = new Schema({
  menu: {
    type: String,
    required: true,
  },
});
export const menuModel = model("/menu", menuShema);
