import { Request, Response } from "express";
import {fetchAllEnrollments} from '../services/enrollment.service';

export const getAllEnrollmens = async (req: Request, res: Response) => {
  try {
    const enrollments = await fetchAllEnrollments();
    res.json({status: 'ok', data: enrollments});
  } catch (error) {
    res.status(500).json({status:  'error', message: String(error)})
  }
}