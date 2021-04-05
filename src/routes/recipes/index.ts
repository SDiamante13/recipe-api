import { Router, Request, Response } from 'express';

const recipesRouter = Router();

recipesRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default recipesRouter;
