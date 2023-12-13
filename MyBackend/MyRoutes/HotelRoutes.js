import express from "express";
import { verifyAdmin, verifyToken } from "../Utilities/Verifyusers.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../MyControllers/hotelController.js";

const router = express.Router();

//CREATE
router.post("/create", createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL HOTEL
router.get("/", getHotels);

export default router;
