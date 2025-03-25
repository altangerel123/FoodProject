import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect.bind(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
