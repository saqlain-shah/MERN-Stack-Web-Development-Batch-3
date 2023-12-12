import Room from "../Models/roomModel.js";
import Hotel from "../Models/hotelModel.js";


export const createRoom = async (req, res, next) => {
  console.log(req.body)
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {

    const emptyFields = Object.keys(req.body).filter(field => req.body[field] === "");

    if (emptyFields.length > 0) {
      return res.status(400).send({ message: "Empty field(s): " + emptyFields.join(', ') });
    }


    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room Created");
  } catch (err) {
    next(err);
  }
};




export const updateRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const roomId = req.params.id;

  try {
    const emptyFields = Object.keys(req.body).filter(field => req.body[field] === "");
    if (emptyFields.length > 0) {
      return res.status(400).send({ message: "Empty field(s): " + emptyFields.join(', ') });
    }

    // Update the room
    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      { $set: req.body },
      { new: true }
    );

    // Update the hotel's reference to the room
    const updatedHotel = await Hotel.findOneAndUpdate(
      { _id: hotelId, "rooms._id": updatedRoom._id },
      { $set: { "rooms.$": updatedRoom } },
      { new: true }
    );

    res.status(200).json({ updatedRoom, updatedHotel });
  } catch (err) {
    next(err);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const roomId = req.params.id;

  try {
    // Delete the room
    const deletedRoom = await Room.findByIdAndDelete(roomId);

    if (!deletedRoom) {
      return res.status(404).json({ message: "Room not found." });
    }

    // Remove the room from the hotel's rooms array
    await Hotel.findByIdAndUpdate(
      hotelId,
      { $pull: { rooms: { _id: deletedRoom._id } } },
      { new: true }
    );

    res.status(200).json("Room has been deleted.");
  } catch (err) {
    console.error(err);
    next(err);
  }
};





export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};