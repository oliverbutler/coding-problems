import { step1, step2, testData, data } from './day7';

describe('Day 7', () => {
  describe('Step 1', () => {
    it('should work with the example data', () => {
      expect(step1(testData)).toEqual(95437);
    });
    it('should work with the real data', () => {
      expect(step1(data)).toEqual(1581595);
    });
  });
  describe('Step 2', () => {
    it('should work with the example data', () => {
      expect(step2(testData)).toEqual(0);
    });
    it('should work with the real data', () => {
      expect(step2(data)).toEqual(0);
    });
  });
});
