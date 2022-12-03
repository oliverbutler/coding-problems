import {
  data,
  exampleData, getPriority, step1,
  step2
} from "./day3";

describe("day3", () => {
  describe("part1", () => {
    it("example", () => {
      const result = step1(exampleData);
      expect(result).toEqual(157);
    });

    it("data", () => {
      const result = step1(data);
      expect(result).toEqual(8053);
    })
  });
  describe('part2', () => {
    it('example', () => {
      const result = step2(exampleData);
      expect(result).toEqual(70);
    });

    it('data', () => {
      const result = step2(data);
      expect(result).toEqual(2425);
    });
  });
});

describe('getPriority', function () {
  it("works", () => {
  })
  expect(getPriority('a')).toEqual(1);
  expect(getPriority('z')).toEqual(26);
  expect(getPriority('A')).toEqual(27);
  expect(getPriority('Z')).toEqual(52);
});
