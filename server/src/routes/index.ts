import { Router } from 'express';
import levelRouter from './level.routes';
import coachesRouter from './coach.routes';
import courtRouter from './court.routes';
import criateriaRouter from './criateria.routes';
import enrollmentRouter from './enrollment.routes';
import personRouter from './user.routes';

// initialize router object
const router = Router();

router.use('/coaches', coachesRouter);
router.use('/levels', levelRouter);
router.use('/courts', courtRouter);
router.use('/criateria', criateriaRouter);
router.use('/enrollments', enrollmentRouter);
router.use('/user', personRouter);



export default router;