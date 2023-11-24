import express from 'express';
import { verifyAdmin } from '../Utilities/Verifyusers.js';
import { createRoom, deleteRoom, getRoom, updateRoom } from '../MyControllers/roomController.js';

const router = express.Router();

//CREATE
router.post('/:hotelid', verifyAdmin, createRoom);
//UPDATE 
router.put('/:roomid/:hotelid', verifyAdmin, updateRoom );
//DELETE
router.delete('/:roomid/:hotelid', verifyAdmin, deleteRoom);
//GET
router.get('/:id', verifyAdmin, getRoom)


export default router;