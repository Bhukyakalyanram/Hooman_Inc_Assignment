import { walks, meals, meds } from '../data/store.js';

export const getSummary = (req, res) => {
  const { petName } = req.query;
  if (!petName) return res.status(400).json({ error: 'Pet name required' });
  const totalWalk = walks
    .filter((w) => w.petName === petName)
    .reduce((acc, w) => acc + Number(w.minutes), 0);
  const totalMeals = meals.filter((m) => m.petName === petName).length;
  const totalMeds = meds.filter((m) => m.petName === petName).length;
  res.json({
    totalWalk,
    meals: totalMeals,
    meds: totalMeds,
  });
};
