import type { Req, Res } from '~/types/express';
import { AxiosError } from 'axios';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { loggerMiddleware } from '~/middlewares/logger';
import { errorHandlerMiddleware } from '../errorHandlerMiddleware';

describe('errorHandlerMiddleware', () => {
  const { res, next } = getMockRes<Res>();
  const req = getMockReq<Req>();
  // set req.logger
  loggerMiddleware(req, res, next);

  let consoleErrorSpy: jest.SpyInstance;
  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('should log a server error', () => {
    const err = new Error('test error');
    errorHandlerMiddleware(err, req, res, next);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(err);
  });

  it('should log an axios common error', () => {
    const err = new AxiosError('test error', 'TEST_ERR', null);
    errorHandlerMiddleware(err, req, res, next);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(err);
  });

  it('should log an axios request error', () => {
    const err = new AxiosError('test error', 'TEST_ERR', null, { message: 'test request error' });
    errorHandlerMiddleware(err, req, res, next);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(err);
  });

  it('should log an axios 404 request error', () => {
    const err = new AxiosError('test error', 'ENOTFOUND', null, { message: 'test request error' });
    errorHandlerMiddleware(err, req, res, next);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(err);
  });

  it('should log an axios response error', () => {
    const err = new AxiosError(
      'test error',
      'TEST_ERR',
      null,
      null,
      {
        headers: null,
        config: null,
        status: 500,
        statusText: 'SERVER ERROR',
        data: { messages: ['test response error 1', 'add on'] },
      },
    );
    errorHandlerMiddleware(err, req, res, next);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(err);
  });
});
