import Hotel from "../MyModels/hotelModel.js";
import upload from "../Utilities/multer.js";
import mongoose from "mongoose";

export const create_Hotel = async (req, res, next) => {
  try {
    upload.array("photos", 4)(req, res, async function (err) {
      if (req.files.length === 0) {
        //check file field empty or not
        return res.status(400).json({ error: "no files selected yet" });
      }
      if (err) {
        // Handle Multer upload error
        console.error("Error uploading images:", err); // Log the error for debugging
        return res
          .status(500)
          .json({
            error: "May be your file size too large or Invalid file format ",
          });
      }
      // Continue only if there are no Multer upload errors

      try {
        // Get the file path of the uploaded image from req.file
        const photos = req.files.map((file) => file.path);
        const newHotel = new Hotel({
          ...req.body,
          photos: photos,
        });

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
      } catch (error) {
        // Handle any errors that occur during hotel creation
        console.error("Error creating hotel:", error); // Log the error for debugging
        res.status(500).json({ error: "Error creating hotel" });
      }
    });
  } catch (err) {
    console.error("Error in createHotel:", err); // Log the error for debugging
    next(err);
  }
};
export const createHotel = async (req, res, next) => {
  try {
    upload.single("photo")(req, res, async function (err) {
      if (err) {
        // Handle Multer upload error
        console.error("Error uploading image:", err);
        return res.status(500).json({
          error: "May be your file size too large or Invalid file format ",
        });
      }

      // Continue only if there are no Multer upload errors

      try {
        // Get the file path of the uploaded image from req.file
        const photo = req.file;
        const newHotel = new Hotel({
          ...req.body,
          photo: photo,
        });

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
      } catch (error) {
        // Handle any errors that occur during hotel creation
        console.error("Error creating hotel:", error);
        res.status(500).json({ error: "Error creating hotel" });
      }
    });
  } catch (err) {
    console.error("Error in createHotel:", err);
    next(err);
  }
};

//HOTEL UPDATE

export const updateHotel = async (req, res, next) => {
  try {
    const emptyFields = Object.keys(req.body).filter(
      (key) => req.body[key] === undefined || req.body[key] === ""
    );
    if (emptyFields.length > 0) {
      return res
        .status(400)
        .json({ error: `Empty fields: ${emptyFields.join(", ")}` });
    }
    const hotelupdate = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!hotelupdate) {
      res.status(500).json("hotel update failed");
    }
    res.status(200).json(hotelupdate);
  } catch (err) {
    next(err);
  }
};

//DELETE HOTEL
export const deleteHotel = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid id for delete" });
  }
  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).json("hotel has been  deleted");
  } catch (error) {
    next(error);
  }
};

//GET HOTEL

export const getHotel = async (req, res, next) => {
  const { id } = req.params;
  // Check if the id is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid hotel ID" });
  }
  try {
    const hotelGet = await Hotel.findById(id);
    if (!hotelGet) {
      res.status(404).json({ error: "hotel not found" });
    }
    res.status(200).json(hotelGet);
  } catch (error) {
    next(error);
  }
};

//GET ALL HOTEL

export const getHotels = async (req, res, next) => {
  console.log("Request Qeury", req.query);
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
