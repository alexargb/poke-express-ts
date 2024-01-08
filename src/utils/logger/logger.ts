import type { ILogger, LogArguments } from "~/types/logger";
import {
  LOG_LEVELS,
  LOG_LEVEL_HIERARCHY,
  LOG_LEVEL_TRACE,
  LOG_LEVEL_DEBUG,
  LOG_LEVEL_INFO,
  LOG_LEVEL_WARN,
  LOG_LEVEL_ERROR,
  LOG_LEVEL_LOG,
} from "./constants";
import { getTimestamp } from "./helpers";

export class Logger implements ILogger {
  public readonly logLevel: string = LOG_LEVEL_ERROR
  constructor(logLevel?: string) {
    if (LOG_LEVELS.includes(logLevel)) {
      this.logLevel = logLevel;
    } else if (!!logLevel) {
      this.log(`[Error] logLevel provided (${logLevel}) is not valid, using default value instead (${this.logLevel})`);
    }
  }

  // private methods
  private shouldLog(logLevel: string): boolean {
    if (logLevel === LOG_LEVEL_LOG) return true;
    const currentLevel = LOG_LEVEL_HIERARCHY[this.logLevel];
    const proposedLevel = LOG_LEVEL_HIERARCHY[logLevel];

    return proposedLevel <= currentLevel;
  }

  private baseLog(logLevel: string, ...args: LogArguments) {
    if (!this.shouldLog(logLevel)) return;
    const timestamp = `[${getTimestamp()}]:`;
    console[logLevel](timestamp, ...args);
  }

  // public methods
  public trace(...args: LogArguments) {
    this.baseLog(LOG_LEVEL_TRACE, ...args);
  }

  public debug(...args: LogArguments) {
    this.baseLog(LOG_LEVEL_DEBUG, ...args);
  }

  public info(...args: LogArguments) {
    this.baseLog(LOG_LEVEL_INFO, ...args);
  }

  public warn(...args: LogArguments) {
    this.baseLog(LOG_LEVEL_WARN, ...args);
  }

  public error(...args: LogArguments) {
    this.baseLog(LOG_LEVEL_ERROR, ...args);
  }

  public log(...args: LogArguments) {
    this.baseLog(LOG_LEVEL_LOG, ...args);
  }
}
