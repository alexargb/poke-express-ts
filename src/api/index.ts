import express from 'express';
import { example, badExample } from './handlers';

const apiRouter = express.Router();

// routes
apiRouter.use('/example', example);
apiRouter.use('/bad-example', badExample);

export { apiRouter };
