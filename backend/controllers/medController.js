import { meds } from '../data/store.js';

export const addMed = (req, res) => {
  const { petName } = req.body;
  if (!petName) return res.status(400).json({ error: 'Pet name is required' });

  meds.push({ petName, time: new Date() });
  res.json({ message: 'Medication added successfully', meds });
};

export const getMeds = (req, res) => res.json(meds);
