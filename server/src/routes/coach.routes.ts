import { Router} from "express";
import { getAllcoaches } from "../controllers/coach.controller";

const router = Router();

router.get('/', getAllcoaches);

export default router;

