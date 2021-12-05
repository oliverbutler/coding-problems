import { readFileSync } from "fs";
import * as path from "path";

export const readInputs = (
  currDir: string
): { dataRaw: string; testRaw: string } => {
  return {
    dataRaw: readFileSync(path.resolve(currDir, "../input.txt"), "utf-8"),
    testRaw: readFileSync(path.resolve(currDir, "../test.txt"), "utf-8"),
  };
};
