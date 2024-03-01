import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "altangerelg203@gmail.com",
        pass: "aliy etnr kkbz foev",
      },
    });
    const milOPtions = {
      from: "altangerelg203@gmail.com",
      to: email,
      subject: "Hello from nodemailer",
      text: "This is a test email send using Nodemailer",
    };
    await transporter.sendMail(milOPtions);
    res.json("Email sent!");
  } catch (error) {}
};
