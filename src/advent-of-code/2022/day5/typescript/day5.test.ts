import { step1, step2, testData, data } from './day5';

describe('Day 5', () => {
  describe('Step 1', () => {
    it('should work with the example data', () => {
      expect(step1(testData)).toEqual('CMZ');
    });
    it('should work with the real data', () => {
      expect(step1(data)).toEqual('QNHWJVJZW');
    });
  });
  describe('Step 2', () => {
    it('should work with the example data', () => {
      expect(step2(testData)).toEqual('MCD');
    });
    it('should work with the real data', () => {
      expect(step2(data)).toEqual('BPCZJLFJW');
    });
  });
});
