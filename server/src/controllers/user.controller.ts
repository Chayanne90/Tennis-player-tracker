import {Request, Response} from "express";
import {fetchAllUsers} from '../services/user.service';


export const getAllUsers = async (req: Request, res: Response) => {
  
  try {

    const persons = await fetchAllUsers();
    res.json({status: 'ok', data: persons});
  } catch (error) {
    res.status(500).json({ status: 'error', message: String(error) });
  }
}

