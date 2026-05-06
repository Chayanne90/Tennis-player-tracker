import { pool } from '../config/db';

export const fetchAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM Person');
  return rows;
};