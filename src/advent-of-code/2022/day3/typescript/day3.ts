import { readInputs } from '../../../../utils/file';

const splitStringInHalf = (str: string): [string, string] => {
  const half = Math.floor(str.length / 2);
  return [str.slice(0, half), str.slice(half)];
};

const findCommonCharacters = (str1: string, str2: string): string => {
  const commonCharacters = [];

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      commonCharacters.push(str1[i]);
    }
  }

  return commonCharacters.join('');
};

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

export const getPriority = (item: string): number => {
  const code = item.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    return code - 38;
  }

  if (code >= 97 && code <= 122) {
    return code - 96;
  }

  throw new Error(`Invalid item: ${item}`);
};

export const step1 = (rawData: typeof data) => {
  const data = rawData.slice(0, rawData.length - 1);

  const result = data.map((line) => {
    const [leftHalf, rightHalf] = splitStringInHalf(line);

    const commonCharacters = findCommonCharacters(leftHalf, rightHalf);

    return commonCharacters;
  });

  const lettersWeCareAbout = result.map((common) => common[0]);

  const sumPriorities = lettersWeCareAbout.reduce(
    (sum, letter) => sum + getPriority(letter),
    0
  );

  return sumPriorities;
};

export const step2 = (rawData: typeof data) => {
  const data = rawData.slice(0, rawData.length - 1);
  const commonChars = [];

  for (let i = 0; i < data.length; i += 3) {
    const string1 = data[i];
    const string2 = data[i + 1];
    const string3 = data[i + 2];

    const commonBetween1And2 = findCommonCharacters(string1, string2);
    const commonBetween2And3 = findCommonCharacters(string2, string3);

    const common = findCommonCharacters(commonBetween1And2, commonBetween2And3);

    commonChars.push(common[0]);
  }

  return commonChars.reduce((sum, letter) => sum + getPriority(letter), 0);
};

const { dataRaw, testRaw } = readInputs(__dirname);

export const data = dataRaw.split('\n').map((x) => x);
export const exampleData = testRaw.split('\n').map((x) => x);
