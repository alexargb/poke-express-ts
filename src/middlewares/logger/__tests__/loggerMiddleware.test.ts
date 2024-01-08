import type { Req, Res } from '~/types/express';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { loggerMiddleware } from '../loggerMiddleware';

describe('loggerMiddleware', () => {
  const { res, next } = getMockRes<Res>();

  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  it('should set req.logger', () => {
    const req = getMockReq<Req>();

    expect(req.logger).toBeUndefined();
    loggerMiddleware(req, res, next);
    expect(req.logger).toBeDefined();

    expect(next).toHaveBeenCalledWith();
  });

  it('should log when calling req.logger', () => {
    const req = getMockReq<Req>();
    loggerMiddleware(req, res, next);

    req.logger.log('test');

    expect(consoleLogSpy).toHaveBeenCalled();
  });
});
