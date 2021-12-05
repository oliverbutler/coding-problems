import { logAnswer } from "../../../utils/logging";
import { day2, day2part2 } from "./day2";
import { day2data, day2test } from "./day2.data";

describe("day2 part 1", () => {
  it("example", () => {
    const result = day2(day2test);

    expect(result).toEqual(150);
  });
  it("return an answer", () => {
    const result = day2(day2data);

    logAnswer(result);
  });
});

describe("day 2 part 2", () => {
  it("example", () => {
    const result = day2part2(day2test);

    expect(result).toEqual(900);
  });

  it("return an answer", () => {
    const result = day2part2(day2data);

    logAnswer(result);
  });
});
