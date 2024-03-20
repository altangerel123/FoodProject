import { Schema, model } from "mongoose";
const profileShema = new Schema({
  profile: {
    type: String,
    required: true,
  },
});
export const profileModel = model("frofile", profileShema);
