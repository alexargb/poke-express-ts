export const LOG_LEVEL_TRACE = 'trace';
export const LOG_LEVEL_DEBUG = 'debug';
export const LOG_LEVEL_INFO = 'info';
export const LOG_LEVEL_WARN = 'warn';
export const LOG_LEVEL_ERROR = 'error';
export const LOG_LEVEL_LOG = 'log';

export const LOG_LEVELS = [
  LOG_LEVEL_TRACE,
  LOG_LEVEL_DEBUG,
  LOG_LEVEL_INFO,
  LOG_LEVEL_WARN,
  LOG_LEVEL_ERROR,
];

export const LOG_LEVEL_HIERARCHY = {
  [LOG_LEVEL_ERROR]: 0,
  [LOG_LEVEL_WARN]: 1,
  [LOG_LEVEL_INFO]: 2,
  [LOG_LEVEL_DEBUG]: 3,
  [LOG_LEVEL_TRACE]: 4,
}