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
import { body, validationResult } from 'express-validator';
const app = express();
app.use(express.json());

//CREATE
router.post("/",

verifyAdmin, createHotel,[

  body ('name') .isLength({min:3}),
  
  
 ],
 (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
 
   // Your logic to create a hotel goes here
 
   res.status(201).json({ message: 'Hotel created successfully' });
 }
 
 
 // Your other routes and app configurations...
 
 );

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/hotels", getHotels);


export default router;
