import { readInputs } from '../../../../utils/file';

const splitStringInHalf = (str: string): [string, string] => {
  const half = Math.floor(str.length / 2);
  return [str.slice(0, half), str.slice(half)];
};

const commonCharsInStrings = (...strings: string[]): string => {
  const sets = strings.map((str) => new Set(str.split('')));

  const commonChars = sets.reduce((acc, set) => {
    return new Set([...acc].filter((char) => set.has(char)));
  });

  return [...commonChars].join('');
};

export const getPriority = (item: string): number => {
  return item === item.toLowerCase()
    ? item.charCodeAt(0) - 96
    : item.charCodeAt(0) - 38;
};

export const step1 = (rawData: typeof data) => {
  return rawData
    .slice(0, rawData.length - 1)
    .map((line) => {
      const [leftHalf, rightHalf] = splitStringInHalf(line);

      return commonCharsInStrings(leftHalf, rightHalf)[0];
    })
    .reduce((sum, letter) => sum + getPriority(letter), 0);
};

export const step2 = (rawData: typeof data) => {
  return rawData.slice(0, rawData.length - 1).reduce((sum, _, i, arr) => {
    if (i % 3 === 0) {
      const common = commonCharsInStrings(...arr.slice(i, i + 3));
      return sum + getPriority(common[0]);
    }

    return sum;
  }, 0);
};

const { dataRaw, testRaw } = readInputs(__dirname);

export const data = dataRaw.split('\n').map((x) => x);
export const exampleData = testRaw.split('\n').map((x) => x);
