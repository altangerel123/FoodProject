import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
