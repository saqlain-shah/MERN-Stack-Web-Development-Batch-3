import Hotel from "../Models/hotelModel.js";
import upload from "../Utils/multer.js";

export const createHotel = async (req, res, next) => {
  try {
    console.log("Passed check 1");
    upload.array("photos")(req, res, async function (err) {
      if (err) {
        // Handle Multer upload error
        console.error("Error uploading images:", err); // Log the error for debugging
        return res.status(500).json({ error: "Error uploading images" });
      }
      console.log("Passed check 2");

      // Continue only if there are no Multer upload errors
      try {
        // Get the file path of the uploaded image from req.file
        const photo = req.files.map((file) => file.path);
        console.log("Request Body: ", req.body);
        console.log("Request Files: ", photo);
        console.log("Passed check 3");

        const newHotel = new Hotel({
          ...req.body,
          photos: [photo],
        });
        console.log("Passed check 4");

        const savedHotel = await newHotel.save();
        res.status(200).json("Hotel Creating Hotel");
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

export const updateHotel = async (req, res, next) => {
  console.log("Request Body ", req.body);
  console.log("Request file ", req.file);
  
  const emptyFields = Object.keys(req.body).filter(field => req.body[field] === "");

  if (emptyFields.length > 0) {
    return res.status(400).send({ message: "Empty field(s): " + emptyFields.join(', ') });
  }

   try {
     const updatedHotel = await Hotel.findByIdAndUpdate(
       req.params.id,
       { $set: req.body },
       { new: true }
     );
    res.status(200).json({message: "Hotel updated"});
   } catch (err) {
     res.status(404).send({message: "Hotel not found" });
   }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    res.status(404).send({message: "Hotel not found" });
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(404).send({message: "Hotel not found" });
  }
};
export const getHotels = async (req, res, next) => {
  console.log("Request Queries", req.query);
  const { min, max, ...others } = req.query;

  try {
    const hotels = await Hotel.find().limit(req.query.limit);

    // const HOTELS = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(401).send({message: "Hotel not found" });
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    res.status(401).send({message: "Hotel not found in this city" });
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    res.status(401).send({message: "This types of hotelHotel not found" });
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    res.status(401).send({message: "Room not ala" });
  }
};