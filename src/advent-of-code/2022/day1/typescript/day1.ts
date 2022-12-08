import { readRawInputs } from '../../../../utils/file';

const getElfsWithWeights = (weights: number[]) => {
  // Group them splitting by "NaN" (the separator)
  const elfs: number[] = [0];

  let currentElf = 0;

  for (let i = 0; i < weights.length; i++) {
    const weight = weights[i];
    if (isNaN(weight)) {
      currentElf++;
      elfs[currentElf] = 0;
    } else {
      elfs[currentElf] = elfs[currentElf] + weight;
    }
  }

  return elfs;
};

export const getTopElfFromWeights = (weights: number[]): number => {
  const elfs = getElfsWithWeights(weights);

  return Math.max(...elfs);
};

export const getTop3ElfsFromWeights = (weights: number[]): number => {
  const elfs = getElfsWithWeights(weights);

  const top3 = elfs.sort((a, b) => b - a).slice(0, 3);

  return top3.reduce((a, b) => a + b, 0);
};

const { dataRaw, testRaw } = readRawInputs(__dirname);

export const data = dataRaw.split('\n').map((x) => parseInt(x));
export const exampleData = testRaw.split('\n').map((x) => parseInt(x));
