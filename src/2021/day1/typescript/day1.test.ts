import { logAnswer } from "../../../utils/logging";
import {
  data,
  exampleData,
  numberTimesIncreasing,
  numberTimesIncreasingThreeAverage,
} from "./day1";

describe("numberTimesIncreasing", () => {
  it("example", () => {
    const result = numberTimesIncreasing(exampleData);
    expect(result).toEqual(7);
  });
  it("return an answer", () => {
    const result = numberTimesIncreasing(data);

    logAnswer(result);
  });
});

describe("part 2", () => {
  it("example", () => {
    const result = numberTimesIncreasingThreeAverage(exampleData);

    expect(result).toEqual(5);
  });

  it("return an answer", () => {
    const result = numberTimesIncreasingThreeAverage(data);

    logAnswer(result);
  });
});
