import { walks } from '../data/store.js';

export const addWalk = (req, res) => {
  console.log(req.body);
  const { minutes, petName } = req.body;
  if (!minutes || !petName)
    return res.status(400).json({ error: 'Minutes and petName required' });
  walks.push({ minutes, petName, time: new Date() });
  res.json({ message: 'Walk added' });
};

export const getWalks = (req, res) => res.json(walks);
