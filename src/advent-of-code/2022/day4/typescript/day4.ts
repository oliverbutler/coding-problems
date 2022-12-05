import { readInputs } from '../../../../utils/file';

// .2345678.  2-8
// ..34567..  3-7

// In this example, 2-8 fully contains 3-7, so the answer is true
const doesOneRangeOverlapTheOther = (
  range1: [number, number],
  range2: [number, number]
) => {
  const [start1, end1] = range1;
  const [start2, end2] = range2;
  const range1Overlaps2 = start1 <= start2 && end1 >= end2;
  const range2Overlaps1 = start2 <= start1 && end2 >= end1;

  return range1Overlaps2 || range2Overlaps1;
};

const doesOneRangeOverlapTheOtherAtAll = (
  range1: [number, number],
  range2: [number, number]
) => {
  const set1 = new Set<number>();

  for (let i = range1[0]; i <= range1[1]; i++) {
    set1.add(i);
  }

  for (let i = range2[0]; i <= range2[1]; i++) {
    if (set1.has(i)) {
      return true;
    }
  }

  return false;
};

export const step1 = (rawData: typeof data) => {
  const data = rawData.slice(0, -1);

  const ranges = data.map((elfs) =>
    elfs.map((elf) => elf.split('-').map(Number))
  );

  const rangesWhereTheresAnOverlap = ranges.filter((range) => {
    const [range1, range2] = range;
    return doesOneRangeOverlapTheOther(
      range1 as [number, number],
      range2 as [number, number]
    );
  });

  return rangesWhereTheresAnOverlap.length;
};

export const step2 = (rawData: typeof data) => {
  const data = rawData.slice(0, -1);

  const ranges = data.map((elfs) =>
    elfs.map((elf) => elf.split('-').map(Number))
  );

  const rangesWhereTheresAnOverlap = ranges.filter((range) => {
    const [range1, range2] = range;
    return doesOneRangeOverlapTheOtherAtAll(
      range1 as [number, number],
      range2 as [number, number]
    );
  });

  return rangesWhereTheresAnOverlap.length;
};

const { dataRaw, testRaw } = readInputs(__dirname);

export const data = dataRaw.split('\n').map((x) => x.split(','));
export const exampleData = testRaw.split('\n').map((x) => x.split(','));
