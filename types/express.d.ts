import type { NextFunction, Request, Response } from 'express';
import type { AxiosError } from 'axios';
import type { ILogger } from './logger';
import type { IRestClient } from './axios';

export interface Req extends Request {
  logger?: ILogger;
  restClient?: IRestClient,
}

export interface Res extends Response {}

export type Next = NextFunction;

export type Middleware = (req: Req, res: Res, next: Next) => void;
export type ErrorMiddleware = (err: AxiosError | Error, req: Req, res: Res, next: Next) => void;
