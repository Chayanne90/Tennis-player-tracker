import { pool } from '../config/db';

export const fetchAllLevels = async () => {
const [rows] = await pool.query('SELECT * FROM Level');
  return rows;
};