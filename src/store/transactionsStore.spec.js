import { calculatePoints } from './transactionsStore';

describe.only('Transactions store', () => {
  describe('calculatePoints', () => {
    it('is calculatePoints', () => {
      expect(calculatePoints(0)).toBe(0);
      expect(calculatePoints(1)).toBe(0);
      expect(calculatePoints(50)).toBe(0);
      expect(calculatePoints(51)).toBe(1);
      expect(calculatePoints(99)).toBe(49);
      expect(calculatePoints(100)).toBe(50);
      expect(calculatePoints(101)).toBe(52);
      expect(calculatePoints(120)).toBe(90);
    });
  });
});
