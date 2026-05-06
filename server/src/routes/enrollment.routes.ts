import { Router } from "express";
import {getAllEnrollmens} from '../controllers/enrollment.controller';

const router = Router();

router.get('/',getAllEnrollmens);

export default router;