import express from "express";
import { widgetRoutes } from './routes/widgetRoute';
import { pingRoutes } from './routes/pingRoute';
const router = express.Router({mergeParams: true});

router.use('/ping', pingRoutes);
router.use('/widget', widgetRoutes);

export const routes = router;