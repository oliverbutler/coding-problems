import { step1, step2, testData, data } from './day8';

describe('Day 8', () => {
  describe('Step 1', () => {
    it('should work with the example data', () => {
      expect(step1(testData)).toEqual(21);
    });
    it('should work with the real data', () => {
      // 2995 wrong
      expect(step1(data)).toEqual(0);
    });
  });
  describe('Step 2', () => {
    it('should work with the example data', () => {
      expect(step2(testData)).toEqual(8);
    });
    it('should work with the real data', () => {
      expect(step2(data)).toEqual(0);
    });
  });
});
