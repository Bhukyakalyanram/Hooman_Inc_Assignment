import express from 'express';
import { addWalk, getWalks } from '../controllers/walkController.js';
const router = express.Router();
router.post('/', addWalk);
router.get('/', getWalks);
export default router;
