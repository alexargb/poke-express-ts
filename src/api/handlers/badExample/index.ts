import express from 'express';
import { getBadExampleHandler } from './handlers/getBadExampleHandler';

const badExample = express.Router();

badExample.get('/', getBadExampleHandler);

export { badExample };
