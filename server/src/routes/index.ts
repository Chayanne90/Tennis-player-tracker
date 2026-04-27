import { Router } from 'express';
import levelRouter from './level.routes';

const router = Router();

router.use('/levels', levelRouter);

export default router;