import { Router } from "express";
import {getAllEnrollments} from '../controllers/enrollments.controller';

const router = Router();

router.get('/',getAllEnrollments);

export default router;