import express from 'express';
import {verifyUser, } from '../Utilities/Verifyusers.js';
import { CreateBooking, bookingLists } from '../MyControllers/BookingController.js';

const router = express.Router();
//create
router.post('/', verifyUser, CreateBooking);
//get all booking list
router.get('/list', verifyUser, bookingLists);
export default router;