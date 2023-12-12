import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    hotelId: {
        type: String,
    },
    roomId:{
        type: String,
    },
    toDate:{
        type: Date,
    },
    fromDate:{
        type: Date,
    },
})

export default mongoose.model("Booking", BookingSchema);