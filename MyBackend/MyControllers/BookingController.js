import Booking from '../MyModels/BookingModel.js';
import Room from '../MyModels/roomModel.js';

export const CreateBooking = async (req, res, next) => {
    try{
        const{hotelId, roomId, toDate, fromDate} = req.body;
        const room =await Room.findById(roomId);
        if(!room){
            return res.status(404).json({
                status: false,
                message: `Room with ID ${roomId} not found`,
            });
        }
        const existingBooking = await Booking.find({
            hotelId, roomId,
            $or: [
                {
                  fromDate: { $gte: fromDate, $lt: toDate },
                  toDate: { $gt: fromDate, $lte: toDate },
                },
                {
                  fromDate: { $lte: fromDate },
                  toDate: { $gte: toDate },
                },
              ],
        });
        if(existingBooking.length > 0){
            return res.status(200).json({
                status: false,
                message: `Rooms are not available for selected date`
            });
        }
        const newBooking =new Booking({
            hotelId, roomId, fromDate, toDate
        });

        await newBooking.save();
        res.status(201).json({
            status: true,
            message: 'Booking created successfully',
            data: newBooking,
        })
    }catch(err){
        next(err);
    }
};

// GET ALL BOOKING LIST
export const bookingLists = async(req, res, next) => {
    try{
        const bookings = await Booking.find();
        res.status(200).json({
            status: true,
            message: 'All Booking list',
            data: bookings
        })
    }catch(err){
        next(err)
    }
}



