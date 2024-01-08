import { LOG_LEVEL_DEBUG, LOG_LEVEL_ERROR } from '../constants';
import { Logger } from '../logger';

describe('Logger', () => {
  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  const consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation(() => {});
  const consoleDebugSpy = jest.spyOn(console, 'debug').mockImplementation(() => {});
  const consoleTraceSpy = jest.spyOn(console, 'trace').mockImplementation(() => {});

  afterAll(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleInfoSpy.mockRestore();
    consoleDebugSpy.mockRestore();
    consoleTraceSpy.mockRestore();
  });

  describe('Constructor', () => {
    it('should instance new logger with default logLevel', () => {
      const logger = new Logger();

      expect(logger.logLevel).toBe(LOG_LEVEL_ERROR);
      expect(consoleLogSpy).not.toHaveBeenCalled();
    });
  
    it('should instance new logger with valid logLevel', () => {
      const logger = new Logger(LOG_LEVEL_DEBUG);

      expect(logger.logLevel).toBe(LOG_LEVEL_DEBUG);
      expect(consoleLogSpy).not.toHaveBeenCalled();
    });
  
    it('should instance new logger with invalid logLevel', () => {
      const logger = new Logger('random_string');

      expect(logger.logLevel).toBe(LOG_LEVEL_ERROR);
      expect(consoleLogSpy).toHaveBeenCalled();
    });
  });

  describe('Log Levels', () => {
    const logger = new Logger(LOG_LEVEL_DEBUG);

    it('should log if logLevel is lower than or equal to the one set on instance', () => {
      logger.error('error');
      expect(consoleErrorSpy).toHaveBeenCalled();

      logger.warn('warn');
      expect(consoleWarnSpy).toHaveBeenCalled();

      logger.info('info');
      expect(consoleInfoSpy).toHaveBeenCalled();

      logger.debug('debug');
      expect(consoleDebugSpy).toHaveBeenCalled();
    });

    it('should NOT log if logLevel is NOT lower than or equal to the one set on instance', () => {
      logger.trace('trace');
      expect(consoleTraceSpy).not.toHaveBeenCalled();
    });
  });
});
