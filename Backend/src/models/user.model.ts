import { Schema, model } from "mongoose";
const userShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export const userModel = model("user", userShema);
