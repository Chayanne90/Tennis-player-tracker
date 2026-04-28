import { pool } from "../config/db";  

export const fetchAllCoaches = async () => {
  const [rows] = await pool.query('SELECT * FROM Coach');
  return rows;
}