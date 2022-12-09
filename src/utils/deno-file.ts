import * as path from 'https://deno.land/std@0.167.0/path/mod.ts';

export const readRawInputs = (
  currDir: string
): { dataRaw: string; testRaw: string } => {
  return {
    dataRaw: Deno.readTextFileSync(
      Deno.realPathSync(path.join(currDir, '../input.txt'))
    ),
    testRaw: Deno.readTextFileSync(path.join(currDir, '../test.txt')),
  };
};

export const readAndFormatInputs = <T>(
  currDir: string,
  format: (data: string) => T
): {
  data: T;
  testData: T;
} => {
  const { dataRaw, testRaw } = readRawInputs(currDir);
  return {
    data: format(dataRaw),
    testData: format(testRaw),
  };
};
