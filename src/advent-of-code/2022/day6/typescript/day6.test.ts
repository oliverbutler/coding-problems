import { step1, step2, testData, data } from './day6';

describe('Day 6', () => {
  describe('Step 1', () => {
    it('should work with the example data', () => {
      expect(step1('bvwbjplbgvbhsrlpgdmjqwftvncz')).toEqual(5);
      expect(step1('nppdvjthqldpwncqszvftbrmjlhg')).toEqual(6);
      expect(step1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toEqual(10);
      expect(step1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toEqual(11);
    });
    it('should work with the real data', () => {
      expect(step1(data)).toEqual(1892);
    });
  });
  describe('Step 2', () => {
    it('should work with the example data', () => {
      expect(step2('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toEqual(19);
    });
    it('should work with the real data', () => {
      expect(step2(data)).toEqual(2313);
    });
  });
});
