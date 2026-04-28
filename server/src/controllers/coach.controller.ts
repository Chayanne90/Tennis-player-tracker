import { Request, Response } from "express";
import { fetchAllCoaches } from "../services/coach.service";  

export const getAllcoaches = async (req: Request, res: Response) => {
  try {
    const coaches = await fetchAllCoaches();
    res.json({ status: 'ok', data: coaches });
  } catch (error) {
    res.status(500).json({ status: 'error', message: String(error) });
  }
};