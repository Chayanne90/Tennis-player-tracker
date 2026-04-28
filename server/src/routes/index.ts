import { Router } from 'express';
import levelRouter from './level.routes';
import coachesRouter from './coach.routes';

const router = Router();


router.use('/coaches', coachesRouter);
router.use('/levels', levelRouter);




export default router;