import express from "express";
import mongoose from "mongoose";

const app = express();

app

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:test@cluster0.oisd0yl.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to mongoDB.");
  } catch {
    console.log("Connection Error");
  }
};
/*app.get("/welcome", (req, res) => {
  res.send("Hello From Backend");
});*/
app.listen(5000, () => {
  connect();
  console.log(`Server Listen on port ${5000}`);
  console.log("Connected to backend.");
});
