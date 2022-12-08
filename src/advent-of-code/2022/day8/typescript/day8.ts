import { readAndFormatInputs } from '../../../../utils/file';

export const step1 = (rawData: typeof data) => {
  const heightMap: Record<string, boolean> = {};

  for (let i = 1; i < rawData.length - 1; i++) {
    for (let j = 1; j < rawData[i].length - 1; j++) {
      const tree = rawData[i][j];

      const isVisible = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ].some(([x, y]) => {
        let isVisibleInDirection = true;
        let hasHitEdge = false;
        let newX = i + x;
        let newY = j + y;

        while (!hasHitEdge) {
          const leftTheMap =
            newX < 0 ||
            newY < 0 ||
            newX >= rawData.length ||
            newY >= rawData[i].length;

          if (leftTheMap) {
            hasHitEdge = true;
            break;
          } else {
            if (rawData[newX][newY] >= tree) {
              isVisibleInDirection = false;
              hasHitEdge = true;
              break;
            } else {
              newX += x;
              newY += y;
            }
          }
        }

        return isVisibleInDirection;
      });

      heightMap[`${i},${j}`] = isVisible;
    }
  }

  return Object.values(heightMap).filter((x) => x === true).length;
};

export const step2 = (rawData: typeof data) => {
  const heightMap: Record<string, number> = {};

  for (let i = 0; i < rawData.length; i++) {
    for (let j = 0; j < rawData[i].length; j++) {
      const tree = rawData[i][j];

      const scores = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ].map(([x, y]) => {
        let viewingDistance = 0;
        let hasHitEdge = false;
        let newX = i + x;
        let newY = j + y;

        while (!hasHitEdge) {
          const leftTheMap =
            newX < 0 ||
            newY < 0 ||
            newX >= rawData.length ||
            newY >= rawData[i].length;

          if (leftTheMap) {
            hasHitEdge = true;
            break;
          } else {
            viewingDistance += 1;

            if (rawData[newX][newY] >= tree) {
              hasHitEdge = true;
              break;
            } else {
              newX += x;
              newY += y;
            }
          }
        }

        return viewingDistance;
      });

      const multipliedScores = scores.reduce((acc, x) => acc * x, 1);

      heightMap[`${i},${j}`] = multipliedScores;
    }
  }

  return Object.values(heightMap).reduce((acc, x) => Math.max(acc, x), 0);
};

const { data, testData } = readAndFormatInputs(__dirname, (data) =>
  data.split('\n').map((x) => x.split('').map((y) => parseInt(y, 10)))
);
export { data, testData };
