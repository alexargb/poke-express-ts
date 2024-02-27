import express from 'express';
import { generations } from './handlers';

const apiRouter = express.Router();

// routes
apiRouter.use('/generation', generations);

export { apiRouter };
