import { getTimestamp } from '../helpers';

describe('Logger helpers', () => {
  describe('getTimestamp()', () => {
    it('should get current date & time timestamp', () => {
      const result = getTimestamp();

      expect(result).toMatch(/\d\d*\/\d\d?\/\d\d? \d\d?-\d\d?-\d\d?/i);
    });
  });
});
