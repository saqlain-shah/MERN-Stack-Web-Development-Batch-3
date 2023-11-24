import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
  updateRoomnum,
} from "../Controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id/:hotelid", verifyAdmin, updateRoom);
router.put("/:roomNumId/:roomId/:hotelId",verifyAdmin,updateRoomnum);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;