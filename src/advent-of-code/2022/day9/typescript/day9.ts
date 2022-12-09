import { readAndFormatInputs } from '../../../../utils/deno-file.ts';
import { renderCoordinates } from './renderCoordinates.ts';

const __dirname = new URL('.', import.meta.url).pathname;

const { data, testData } = readAndFormatInputs(
  __dirname,
  (data) =>
    data.split('\n').map((x) => [x.split(' ')[0], Number(x.split(' ')[1])]) as [
      string,
      number
    ][]
);

type Pos = [number, number];

const simulateTailMovement = (newHead: Pos, tail: Pos): Pos => {
  // if head is close, do nothing
  if (
    Math.abs(newHead[0] - tail[0]) < 2 &&
    Math.abs(newHead[1] - tail[1]) < 2
  ) {
    return tail;
  }

  // If the head is ever two steps directly up, down, left, or right from the tail, the tail must also move one step in that direction so it remains close enough:

  if (newHead[0] === tail[0] + 2 && newHead[1] === tail[1]) {
    return [tail[0] + 1, tail[1]];
  }

  if (newHead[0] === tail[0] - 2 && newHead[1] === tail[1]) {
    return [tail[0] - 1, tail[1]];
  }

  if (newHead[1] === tail[1] + 2 && newHead[0] === tail[0]) {
    return [tail[0], tail[1] + 1];
  }

  if (newHead[1] === tail[1] - 2 && newHead[0] === tail[0]) {
    return [tail[0], tail[1] - 1];
  }

  // Otherwise, if the head and tail aren't touching and aren't in the same row or column, the tail always moves one step diagonally to keep up:

  if (newHead[0] > tail[0] && newHead[1] > tail[1]) {
    return [tail[0] + 1, tail[1] + 1];
  }

  if (newHead[0] > tail[0] && newHead[1] < tail[1]) {
    return [tail[0] + 1, tail[1] - 1];
  }

  if (newHead[0] < tail[0] && newHead[1] > tail[1]) {
    return [tail[0] - 1, tail[1] + 1];
  }

  if (newHead[0] < tail[0] && newHead[1] < tail[1]) {
    return [tail[0] - 1, tail[1] - 1];
  }

  throw new Error('Should not be here');
};

const simulateHeadMovement = (head: Pos, direction: string): Pos => {
  if (direction === 'U') {
    return [head[0], head[1] - 1];
  } else if (direction === 'D') {
    return [head[0], head[1] + 1];
  } else if (direction === 'L') {
    return [head[0] - 1, head[1]];
  } else if (direction === 'R') {
    return [head[0] + 1, head[1]];
  }

  throw new Error('Should not be here');
};

export const step1 = (rawData: typeof data) => {
  let head: Pos = [0, 0];
  let tail: Pos = [0, 0];

  const tailHistory = new Set<string>();
  const headHistory = new Set<string>();

  tailHistory.add(tail.join(','));
  headHistory.add(head.join(','));

  for (const [direction, steps] of rawData) {
    for (let i = 0; i < steps; i++) {
      const newHead = simulateHeadMovement(head, direction);
      const newTail = simulateTailMovement(newHead, tail);

      head = newHead;
      tail = newTail;
      // console.log(`Head: ${head.join(',')}` + ` Tail: ${tail.join(',')}`);
      // renderCoordinates([
      //   '0,0,0',
      //   head.join(',') + ',H',
      //   tail.join(',') + ',T',
      // ]);

      tailHistory.add(tail.join(','));
      headHistory.add(head.join(','));
    }
  }

  return tailHistory.size;
};

export const step2 = (rawData: typeof data) => {
  const rope: Pos[] = [];

  for (let i = 0; i < 10; i++) {
    rope.push([0, 0] as Pos);
  }

  const tailHistory = new Set<string>();

  tailHistory.add('0,0');

  for (const [direction, steps] of rawData) {
    for (let i = 0; i < steps; i++) {
      const head = rope[0];
      const newHead = simulateHeadMovement(head, direction);

      rope[0] = newHead;

      for (let j = 1; j < rope.length; j++) {
        const previousLink = rope[j - 1];
        const currentLink = rope[j];
        const newLinkPos = simulateTailMovement(previousLink, currentLink);

        rope[j] = newLinkPos;

        tailHistory.add(rope.slice(-1).join(','));
      }
    }
  }

  // console.log(renderCoordinates(Array.from(tailHistory)));

  return tailHistory.size;
};

console.log('Step 1: test=' + step1(testData) + ' data=' + step1(data));
console.log('Step 2: test=' + step2(testData) + ' data=' + step2(data));
