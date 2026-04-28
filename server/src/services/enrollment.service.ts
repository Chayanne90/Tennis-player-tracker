import { pool } from '../config/db';

export const fetchAllEnrollments = async () => {
  const [rows] = await pool.query('SELECT * FROM Enrollment');
  return rows;
};