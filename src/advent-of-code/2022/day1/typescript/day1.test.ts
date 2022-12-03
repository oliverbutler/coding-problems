import {
  data,
  exampleData,
  getTopElfFromWeights
} from "./day1";

describe("maxWeightsForASingleElf", () => {
  it("example", () => {
    const result = getTopElfFromWeights(exampleData);
    expect(result).toEqual(24000);
  });

  it("data", () => {
    const result = getTopElfFromWeights(data);
    expect(result).toEqual(72602);
  })
});



