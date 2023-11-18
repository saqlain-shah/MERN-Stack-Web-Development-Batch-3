import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../Controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/hotels", getHotels);

export default router;
