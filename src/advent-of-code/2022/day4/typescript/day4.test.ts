import {
  data,
  exampleData, step1,
  step2
} from "./day4";

describe("day4", () => {
  describe("part1", () => {
    it("example", () => {
      const result = step1(exampleData);
      expect(result).toEqual(2);
    });

    it("data", () => {
      const result = step1(data);
      expect(result).toEqual(490);
    })
  });
  describe('part2', () => {
    it('example', () => {
      const result = step2(exampleData);
      expect(result).toEqual(4);
    });

    it('data', () => {
      const result = step2(data);
      expect(result).toEqual(921);
    });
  });
});


