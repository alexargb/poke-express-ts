import type { Req, Res } from '~/types/express';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { restclientMiddleware } from '../restclientMiddleware';

describe('restclientMiddleware', () => {
  const { res, next } = getMockRes<Res>();

  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  it('should set req.restClient', () => {
    const req = getMockReq<Req>();

    expect(req.restClient).toBeUndefined();
    restclientMiddleware(req, res, next);
    expect(req.restClient).toBeDefined();

    expect(next).toHaveBeenCalledWith();
  });
});
