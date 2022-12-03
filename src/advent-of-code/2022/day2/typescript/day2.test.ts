import {
  data,
  exampleData, modelTheGame, step1,
  step2
} from "./day2";

describe("day2", () => {
  describe("part1", () => {
    it("example", () => {
      const result = step1(exampleData);
      expect(result).toEqual(15);
    });

    it("data", () => {
      const result = step1(data);
      expect(result).toEqual(14297);
    })
  });
  describe('part2', () => {
    it('example', () => {
      const result = step2(exampleData);
      expect(result).toEqual(12);
    });

    it('data', () => {
      const result = step2(data);
      expect(result).toEqual(10498);
    });
  });
});


describe("modelTheGame", () => {
  it('modelTheGame', () => {
    const result = modelTheGame("ROCK", "SCISSORS");

    expect(result).toEqual(0);
  })

  it('modelTheGame', () => {
    const result = modelTheGame("ROCK", "ROCK");

    expect(result).toEqual(3);
  })
})
