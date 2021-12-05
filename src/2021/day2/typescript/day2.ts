import { readInputs } from "../../../utils/file";

export const day2 = (directions: SubmarineDirection[]) => {
  const [horizontal, vertical] = directions.reduce(
    ([horizontal, vertical], direction) => {
      switch (direction.dir) {
        case "vertical":
          return [horizontal, vertical + direction.dist];
        case "horizontal":
          return [horizontal + direction.dist, vertical];
      }
    },
    [0, 0]
  );

  return Math.abs(horizontal) * Math.abs(vertical);
};

export const day2part2 = (directions: SubmarineDirection[]) => {
  const [aim, horizontal, vertical] = directions.reduce(
    ([aim, horizontal, vertical], direction) => {
      switch (direction.dir) {
        case "vertical":
          return [aim + direction.dist, horizontal, vertical];
        case "horizontal":
          return [
            aim,
            horizontal + direction.dist,
            vertical + direction.dist * aim,
          ];
      }
    },
    [0, 0, 0]
  );

  return Math.abs(horizontal) * Math.abs(vertical);
};

export type SubmarineDirection = {
  dir: "vertical" | "horizontal";
  dist: number;
};

export const formatData = (rawData: string): SubmarineDirection[] =>
  rawData.split("\n").map((line) => {
    const [dir, dist] = line.split(" ");

    switch (dir) {
      case "up":
        return { dir: "vertical", dist: parseInt(dist) };
      case "down":
        return { dir: "vertical", dist: -parseInt(dist) };
      case "forward":
        return { dir: "horizontal", dist: parseInt(dist) };
      default:
        throw new Error(`Unknown direction ${dir}`);
    }
  });

const { dataRaw, testRaw } = readInputs(__dirname);

export const day2data = formatData(dataRaw);
export const day2test = formatData(testRaw);
