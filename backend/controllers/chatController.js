import { chats } from '../data/chatStore.js';

export const addMessage = (req, res) => {
  const { user, bot } = req.body;
  if (!user || !bot)
    return res.status(400).json({ error: 'Missing user or bot message' });
  chats.push({ user, bot, time: new Date() });
  res.json(chats);
};

export const getMessages = (req, res) => res.json(chats);
