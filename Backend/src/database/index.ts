import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://AAGii:Bb80338024@cluster0.s1ac5g5.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
