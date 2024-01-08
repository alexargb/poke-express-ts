import axios from 'axios';
import { RestClient } from '../restclient';

const returnValue = { data: 'test value' };
const errorValue = new Error('test error');

const mockHeaders = { 'Custom-Header': ['value-x'] };
const mockParams = { param1: 'valueParam1' };
const mockBody = { prop1: 'valueProp1' };

describe('RestClient', () => {
  const restClient = new RestClient();

  describe('GET', () => {
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValue(returnValue);
    afterAll(() => {
      getSpy.mockClear();
    });

    it('SUCCESS', async () => {
      const result = await restClient.get('test-url', {
        params: mockParams,
        headers: mockHeaders,
      });
  
      expect(result).toEqual(returnValue.data);
      expect(getSpy).toHaveBeenCalledWith('test-url', {
        params: mockParams,
        headers: mockHeaders,
      });
    });

    it('FAIL', async () => {
      getSpy.mockRejectedValue(errorValue);
      try {
        await restClient.get('test-url', {
          params: mockParams,
          headers: mockHeaders,
        });
      } catch (error) {
        expect(error).toEqual(errorValue);
      }
  
      expect(getSpy).toHaveBeenCalledWith('test-url', {
        params: mockParams,
        headers: mockHeaders,
      });
    });
  });

  describe('DELETE', () => {
    const deleteSpy = jest.spyOn(axios, 'delete').mockResolvedValue(returnValue);
    afterAll(() => {
      deleteSpy.mockClear();
    });

    it('SUCCESS', async () => {
      const result = await restClient.delete('test-url', {
        params: mockParams,
        headers: mockHeaders,
      });
  
      expect(result).toEqual(returnValue.data);
      expect(deleteSpy).toHaveBeenCalledWith('test-url', {
        params: mockParams,
        headers: mockHeaders,
      });
    });

    it('FAIL', async () => {
      deleteSpy.mockRejectedValue(errorValue);
      try {
        await restClient.delete('test-url', {
          params: mockParams,
          headers: mockHeaders,
        });
      } catch (error) {
        expect(error).toEqual(errorValue);
      }
  
      expect(deleteSpy).toHaveBeenCalledWith('test-url', {
        params: mockParams,
        headers: mockHeaders,
      });
    });
  });

  describe('POST', () => {
    const postSpy = jest.spyOn(axios, 'post').mockResolvedValue(returnValue);
    afterAll(() => {
      postSpy.mockClear();
    });

    it('SUCCESS', async () => {
      const result = await restClient.post('test-url', {
        params: mockParams,
        body: mockBody,
        headers: mockHeaders,
      });
  
      expect(result).toEqual(returnValue.data);
      expect(postSpy).toHaveBeenCalledWith('test-url', mockBody, {
        params: mockParams,
        headers: mockHeaders,
      });
    });

    it('FAIL', async () => {
      postSpy.mockRejectedValue(errorValue);
      try {
        await restClient.post('test-url', {
          params: mockParams,
          body: mockBody,
          headers: mockHeaders,
        });
      } catch (error) {
        expect(error).toEqual(errorValue);
      }
  
      expect(postSpy).toHaveBeenCalledWith('test-url', mockBody, {
        params: mockParams,
        headers: mockHeaders,
      });
    });
  });

  describe('PUT', () => {
    const putSpy = jest.spyOn(axios, 'put').mockResolvedValue(returnValue);
    afterAll(() => {
      putSpy.mockClear();
    });

    it('SUCCESS', async () => {
      const result = await restClient.put('test-url', {
        params: mockParams,
        body: mockBody,
        headers: mockHeaders,
      });
  
      expect(result).toEqual(returnValue.data);
      expect(putSpy).toHaveBeenCalledWith('test-url', mockBody, {
        params: mockParams,
        headers: mockHeaders,
      });
    });

    it('FAIL', async () => {
      putSpy.mockRejectedValue(errorValue);
      try {
        await restClient.put('test-url', {
          params: mockParams,
          body: mockBody,
          headers: mockHeaders,
        });
      } catch (error) {
        expect(error).toEqual(errorValue);
      }
  
      expect(putSpy).toHaveBeenCalledWith('test-url', mockBody, {
        params: mockParams,
        headers: mockHeaders,
      });
    });
  });
});
