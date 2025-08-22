import express from 'express';
import { addMeal, getMeals } from '../controllers/mealController.js';
const router = express.Router();
router.post('/', addMeal);
router.get('/', getMeals);
export default router;
