export type LogArgument = string | number | boolean | null | undefined;
export type LogArguments = LogArgument[];

export interface ILogger {
  trace(...args: LogArguments): void;
  debug(...args: LogArguments): void;
  info(...args: LogArguments): void;
  warn(...args: LogArguments): void;
  error(...args: LogArguments): void;
  log(...args: LogArguments): void;
}
