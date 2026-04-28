import { Router } from 'express';
import levelRouter from './level.routes';
import coachesRouter from './coach.routes';
import courtRouter from './court.routes';
import criateriaRouter from './criateria.routes';

const router = Router();

router.use('/coaches', coachesRouter);
router.use('/levels', levelRouter);
router.use('/courts', courtRouter);
router.use('/criateria', criateriaRouter);



export default router;