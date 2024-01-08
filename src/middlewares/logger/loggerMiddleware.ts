import type { Middleware } from "~/types/express";
import type { ILogger } from "~/types/logger";
import { Logger } from "~/utils/logger";

let logger: ILogger = null;

export const loggerMiddleware: Middleware = (req, res, next) => {
  if (!logger) logger = new Logger(process.env.LOG_LEVEL);
  req.logger = logger;
  next();
};
