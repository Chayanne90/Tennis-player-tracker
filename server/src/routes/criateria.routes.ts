import { Router } from "express";
import {getAllCriateria} from "../controllers/criateria.controller";

const router  = Router();

router.get('/',getAllCriateria);

export default router;