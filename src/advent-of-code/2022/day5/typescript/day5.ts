import { readAndFormatInputs } from '../../../../utils/file';

const executeMoveCommandOneByOne = (
  command: typeof data['moveCommands'][0],
  stacks: string[][]
) => {
  const deepCopyStacks: string[][] = JSON.parse(JSON.stringify(stacks));

  for (let i = 0; i < command.num; i++) {
    const popped = deepCopyStacks[command.from].pop();

    if (popped !== undefined) {
      deepCopyStacks[command.to].push(popped);
    }
  }

  return deepCopyStacks;
};

const executeMoveCommandRetainOrder = (
  command: typeof data['moveCommands'][0],
  stacks: string[][]
) => {
  const deepCopyStacks: string[][] = JSON.parse(JSON.stringify(stacks));

  const pickedUp = [];

  for (let i = 0; i < command.num; i++) {
    const popped = deepCopyStacks[command.from].pop();

    if (popped !== undefined) {
      pickedUp.push(popped);
    }
  }

  deepCopyStacks[command.to] = [
    ...deepCopyStacks[command.to],
    ...pickedUp.reverse(),
  ];

  return deepCopyStacks;
};

export const step1 = (rawData: typeof data) => {
  const newStacks = rawData.moveCommands.reduce((acc, command) => {
    return executeMoveCommandOneByOne(command, acc);
  }, rawData.stacks);

  return newStacks.reduce((acc, stack) => {
    return acc + stack.pop()!;
  }, '');
};

export const step2 = (rawData: typeof data) => {
  const newStacks = rawData.moveCommands.reduce((acc, command) => {
    return executeMoveCommandRetainOrder(command, acc);
  }, rawData.stacks);

  return newStacks.reduce((acc, stack) => {
    return acc + stack.pop()!;
  }, '');
};

const { data, testData } = readAndFormatInputs(__dirname, (data) => {
  const splitByRow = data.split('\n');

  const moveCommands = splitByRow.reduce((acc, row) => {
    if (row.startsWith('move')) {
      const [_move, num, _from, from, _to, to] = row.split(' ');
      return [
        ...acc,
        { num: parseInt(num), from: parseInt(from) - 1, to: parseInt(to) - 1 },
      ];
    }

    return acc;
  }, [] as { num: number; from: number; to: number }[]);

  const columnIdRow =
    splitByRow.findIndex((row) => {
      return row.startsWith('move');
    })! - 2;

  const numberOfColumns = splitByRow[columnIdRow]
    .split('')
    .reduce((acc, char) => {
      if (Number.isSafeInteger(parseInt(char))) {
        return acc + 1;
      }

      return acc;
    }, 0);

  const stacks: string[][] = [];

  for (let i = 0; i < numberOfColumns; i++) {
    const column = [];

    for (let row = columnIdRow - 1; row >= 0; row--) {
      const char = splitByRow[row][i * 4 + 1];

      column.push(char);
    }

    stacks.push(column.filter(Boolean).filter((x) => x !== ' '));
  }

  return { stacks, moveCommands };
});
export { data, testData };
