import { Request,Response } from "express";
import{ fetchAllCourts } from "../services/court.service";

export const getAllCourts = async (req: Request, res: Response) => {

  try {
    const courts = await fetchAllCourts();
    res.json({ status: 'ok', data: courts });
  } catch (error) {
    res.status(500).json({ status: 'error', message: String(error) });
  }

};