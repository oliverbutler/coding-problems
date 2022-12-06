import { readAndFormatInputs } from '../../../../utils/file';

const slidingWindowForXUniqueCharacters = (x: number, input: string) => {
  for (let i = 0; i < input.length; i++) {
    const window = input.slice(i, i + x);
    const uniqueValues = new Set(window);
    const uniqueValuesCount = uniqueValues.size;

    if (uniqueValuesCount === x) {
      return i + x; // end of the window
    }
  }
};
export const step1 = (data: string) => {
  return slidingWindowForXUniqueCharacters(4, data);
};

export const step2 = (data: string) => {
  return slidingWindowForXUniqueCharacters(14, data);
};

const { data, testData } = readAndFormatInputs(__dirname, (data) => {
  const processed = data.split('\n').map((x) => x);
  return processed[0];
});
export { data, testData };
