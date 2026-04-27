import express from 'express';
import dotenv from 'dotenv';
import { pool } from './config/db';
import router from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', router);             // add this

// Server health
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// DB health
app.get('/health/db', async (_req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.ping();
    res.json({ status: 'ok', message: 'Database connection established' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: String(error) });
  } finally {
    if (connection) connection.release(); // always release back to pool
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});