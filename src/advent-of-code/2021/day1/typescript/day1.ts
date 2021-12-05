import { readInputs } from "../../../../utils/file";

export const numberTimesIncreasing = (numbers: number[]): number => {
  let count = 0;
  for (let x = 1; x < numbers.length; x++) {
    if (numbers[x] > numbers[x - 1]) count++;
  }
  return count;
};

export const numberTimesIncreasingThreeAverage = (
  numbers: number[]
): number => {
  let sums: number[] = [];
  for (let x = 2; x < numbers.length; x++) {
    sums.push(numbers[x] + numbers[x - 1] + numbers[x - 2]);
  }

  return numberTimesIncreasing(sums);
};

const { dataRaw, testRaw } = readInputs(__dirname);

export const data = dataRaw.split("\n").map((x) => parseInt(x));
export const exampleData = testRaw.split("\n").map((x) => parseInt(x));
