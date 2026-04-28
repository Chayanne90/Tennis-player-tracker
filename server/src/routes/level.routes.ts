import { Router } from 'express';
import { getAllLevels } from '../controllers/level.controller';

const router = Router();

router.get('/', getAllLevels);

export default router;