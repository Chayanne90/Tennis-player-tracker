import { pool } from "../config/db";

export const fetchAllCourts = async () => {
  const [rows] = await pool.query('SELECT * FROM Court');
  return rows;
};
