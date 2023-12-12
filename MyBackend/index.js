import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./MyRoutes/AuthRoutes.js";
import userRoutes from "./MyRoutes/UserRoutes.js";
import HotelRoutes from "./MyRoutes/HotelRoutes.js";
import roomRoutes from "./MyRoutes/roomRoutes.js";
import bookingRoutes from "./MyRoutes/BookingRoutes.js";
const app = express();
dotenv.config();

// Middelware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoutes);
app.use("/api/hotel", HotelRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/booking", bookingRoutes);

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://muhammad-rafiq:sameergg704@cluster0.d9pmu9q.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to database");
  } catch {
    console.log("Doesn't connected to database");
  }
};
app.get("/welcome", (req, res) => {
  res.send("Hello from Backend rafiq");
});
app.listen(5000, () => {
  connect();
  console.log(`serever listen on port ${5000}`);
  console.log(`Connected to backend`);
});
