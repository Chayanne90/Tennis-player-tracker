import { pool } from '../config/db';

export const fetchAllCriateria = async () => {
  const [rows] = await pool.query('SELECT * from Criteria');
  return rows;
}
