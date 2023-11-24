import Room from "../MyModels/roomModel.js";
import Hotel from "../MyModels/hotelModel.js";
import { CreateError } from "../Utilities/Errors.js";
import mongoose from "mongoose";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  // Check if hotelId is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(hotelId)) {
    return res.status(400).json({ error: "Invalid hotel ID" });
  }

  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        hotelId,
        {
          $push: { rooms: savedRoom },
        },
        { new: true }
      );
      //   check if hotel exist
      if (!updatedHotel) {
        return res.status(404).json({ error: "Hotel not found" });
      }

      // Check if the room has been added to the rooms array
      const isRoomAdded = updatedHotel.rooms.includes(savedRoom._id);
      if (!isRoomAdded) {
        res.status(200).json({
          status: true,
          message: `Room has been created successfully in Hotel`,
          data: savedRoom,
        });
      } else {
        res.status(500).json({ error: "Room was not added to the hotel" });
      }
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateRoom = async (req, res, next) => {
  const hotelId = req.param.hotelid;
  const roomId = req.params.roomid;
  if (!mongoose.Types.ObjectId.isValid(roomId)) {
    res.status(400).json({
      status: false,
      message: `Room ID ${roomId} is not match`,
    });
  }
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      { $set: req.body },
      { new: true }
    );
    const updatedHotel = await Hotel.findOneAndUpdate(
      { _hotelid: hotelId, "rooms._id": updatedRoom._id },
      { $set: { "rooms.$": updatedRoom } },
      { new: true }
    );
    res.status(200).json({
      data: "room updated",
      message: `Room ID ${roomId} is updated`,
      updatedRoomData: updatedRoom,
      updatedHotelData: updatedHotel,
    });
  } catch (err) {
    console.log("error in room");
    next(err);
  }
};
//DELETE
export const deleteRoom = async (req, res, next) => {
  const roomId = req.params.roomid;
  const hotelId = req.params.hotelid;

  if (!mongoose.Types.ObjectId.isValid(roomId)) {
    res.status(400).json({
      status: false,
      message: `Hotel ID ${roomId} does not matched`,
    });
  }
  try {
    const deletedRoom = await Room.findByIdAndDelete(roomId);

    if(!deletedRoom){
      return res.status(404).json({message: "room not found"})
    }
    //Remove the room from the hotel room array
    await Hotel.findByIdAndUpdate(
      hotelId,
      { $pull: { rooms: { _id: deletedRoom._id }} },
    );
    res.status(200).json({
      status: true,
      message: `Room ID ${roomId} deleted succesfully`,
    });
  } catch (err) {
    console.error(err);p
    next(err);
  }
};

//GET ROOM
export const getRoom = async (req, res, next) => {
  const RoomId = req.params.id;
  //check the room id with database id
  if (!mongoose.Types.ObjectId.isValid(RoomId)) {
    res
      .status(400)
      .json({ status: false, message: `Your Room ID ${RoomId} does'nt match` });
  }
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: `Room ID matched`,
      date: room,
    });
  } catch (err) {
    next(err);
  }
};
