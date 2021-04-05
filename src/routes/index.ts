import { Router } from 'express';
import recipesRouter from './recipes';

const routes = Router();

routes.use('/', recipesRouter);

export default routes;
