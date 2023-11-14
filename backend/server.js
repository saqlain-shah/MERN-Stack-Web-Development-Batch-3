import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/auth.routes.js";
import UsersRoute from "./Routes/users.routes.js";
import HotelRoute from "./Routes/hotel.routes.js";
import roomRoute from "./Routes/room.routes.js";

const app = express();

dotenv.config();

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", UsersRoute);
app.use("/api/hotel", HotelRoute);
app.use("/api/room", roomRoute);
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
const port = process.env.PORT || 5000;
app.listen(port, () => {
  connect();
  console.log(`Server Listen on port ${port}`);
  console.log("Connected to backend.");
});
