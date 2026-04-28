import {Request, Response } from "express";
import { fetchAllCriateria } from "../services//criateria.service";

export const getAllCriateria = async (req: Request, res: Response) => {
  try {
    const criateria = await fetchAllCriateria();
    res.json({ status: 'ok', data: criateria });
  } catch (error) {
    res.status(500).json({ status: 'error', message: String(error) });
  }
};