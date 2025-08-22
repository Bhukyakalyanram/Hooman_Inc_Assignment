import express from 'express';
import { addMed, getMeds } from '../controllers/medController.js';
const router = express.Router();
router.post('/', addMed);
router.get('/', getMeds);
export default router;
