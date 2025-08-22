import express from 'express';
import cors from 'cors';
import walkRoutes from './routes/walkRoutes.js';
import mealRoutes from './routes/mealRoutes.js';
import medRoutes from './routes/medRoutes.js';
import summaryRoutes from './routes/summaryRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/walks', walkRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/meds', medRoutes);
app.use('/api/summary', summaryRoutes);
app.use('/api/chats', chatRoutes);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(` Backend running on http://localhost:${PORT}`)
);
