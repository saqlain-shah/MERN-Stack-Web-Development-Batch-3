import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB.");
  } catch {
    console.log("Connection Error");
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!");
});

app.get("/welcome", (req, res) => {
  res.send("Hello From Backend");
});

app.listen(process.env.PORT, () => {
  connect();
  console.log(`server listen on port ${process.env.PORT}`);
  console.log("Connected to backend.");
});
