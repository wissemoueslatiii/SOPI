import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import apartmentsRouter from './routes/apartments';
import projectsRouter from './routes/projects';
import contactsRouter from './routes/contacts';
import leadsRouter from './routes/leads';
import authRouter from './routes/auth';
import aiRouter from './routes/ai';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/apartments', apartmentsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/leads', leadsRouter);
app.use('/api/auth', authRouter);
app.use('/api/ai', aiRouter);

// Health check
app.get('/api/health', (_req: express.Request, res: express.Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Erreur interne du serveur' });
});

app.listen(PORT, () => {
  console.log(`SOPI Backend running on http://localhost:${PORT}`);
});
