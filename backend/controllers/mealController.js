import { meals } from '../data/store.js';

export const addMeal = (req, res) => {
  const { petName } = req.body;
  if (!petName) return res.status(400).json({ error: 'Pet name is required' });

  meals.push({ petName, time: new Date() });
  res.json({ message: 'Meal added successfully', meals });
};

export const getMeals = (req, res) => res.json(meals);
