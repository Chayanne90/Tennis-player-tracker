import { Request, Response } from 'express';
import { fetchAllLevels } from '../services/level.service';

export const getAllLevels = async (req: Request, res: Response) => {
  try {
    const levels = await fetchAllLevels();
    res.json({ status: 'ok', data: levels });
  } catch (error) {
    res.status(500).json({ status: 'error', message: String(error) });
  }
};