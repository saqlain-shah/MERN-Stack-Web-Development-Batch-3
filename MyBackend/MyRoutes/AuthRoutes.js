import express from 'express';
import { register, login } from '../MyControllers/UserControllers.js';

const router = express.Router();
router.post('/registered', register);
router.post('/loggedin', login);

export default router;