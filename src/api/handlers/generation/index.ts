import express from 'express';
import { getGenerationsHandler } from './getGenerations';

const generations = express.Router();

generations.get('/', getGenerationsHandler);

export { generations };
