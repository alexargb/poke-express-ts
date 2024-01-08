import type { ErrorMiddleware } from '~/types/express';
import axios from 'axios';
import { handleRequestError, handleResponseError } from './helpers';

export const errorHandlerMiddleware: ErrorMiddleware = (err, req, res, next) => {
  const { logger } = req;

  if (!axios.isAxiosError(err)) {
    logger.error('[SERVER ERROR]:', err.message);
    return next(err);
  }

  if (err.response)
    return handleResponseError(req, res, err);
  if (err.request)
    return handleRequestError(req, res, err);

  const errorMessage = `[AXIOS ERROR]: ${err.message}`;
  logger.error(errorMessage);
  res.status(500).send(errorMessage);
};
