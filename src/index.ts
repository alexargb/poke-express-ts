import type { Middleware } from '~/types/express';
import type { Application } from 'express';
import express from 'express';
import {
  loggerMiddleware,
  restclientMiddleware,
  errorHandlerMiddleware,
} from './middlewares';
import { apiRouter } from './api';

const app: Application = express();
const port: number = +(process.env.PORT) || 8000;

// base middlewares
app.use(
  loggerMiddleware,
  restclientMiddleware,
);

// health
const healtCheck: Middleware = (req, res) => {
  res.send('Poke Express TS server health-check');
}
app.get('/', healtCheck);

// api
app.use(apiRouter);

// error handling
app.use(errorHandlerMiddleware);

// listen
app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});
