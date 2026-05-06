import { Router } from "express";
import { getAllCourts} from "../controllers/court.controllers";

const router = Router();

router.get('/',getAllCourts);


export default router;