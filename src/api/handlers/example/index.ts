import express from 'express';
import { getExampleHandler } from './handlers/getExampleHandler';

const example = express.Router();

example.get('/', getExampleHandler);

export { example };
