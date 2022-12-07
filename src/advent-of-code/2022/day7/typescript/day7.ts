import { readAndFormatInputs } from '../../../../utils/file';

type Dir = {
  path: string[];
  size: number;
};

export const step1 = (rawData: typeof data) => {
  let currentLocation: string[] = [];
  let mode: 'ls' | null = null;

  const directories = new Map<string, number>();

  const recordNewFileSize = (path: string[], size: number) => {
    let pathString = path.join('/');

    if (directories.has(pathString)) {
      directories.set(pathString, directories.get(pathString)! + size);
    } else {
      directories.set(pathString, size);
    }

    if (path.length >= 1) {
      recordNewFileSize(path.slice(0, -1), size);
    }
  };

  for (let i = 0; i < rawData.length - 1; i++) {
    const line = rawData[i];

    // enter LS mode here
    if (line.startsWith('$ ls')) {
      mode = 'ls';
    } else if (line.startsWith('$')) {
      mode = null;
    }

    if (mode === 'ls' && !line.startsWith('$')) {
      const [typeOrSize, name] = line.split(' ');

      if (typeOrSize === 'dir') {
        // nothing?
      } else {
        console.log(`recordNewFileSize(${currentLocation}, ${typeOrSize})`);
        recordNewFileSize(currentLocation, parseInt(typeOrSize));
        console.log(directories);
      }
    }

    if (line.startsWith('$ cd')) {
      const target = line.split(' ')[2];

      if (target === '..') {
        currentLocation.pop();
      } else if (target === '/') {
        currentLocation = [];
      } else {
        currentLocation.push(target);
      }
    }
  }
  // find all directories with size <= 100000
  return Array.from(directories.entries())
    .filter(([_, size]) => size <= 100000)
    .reduce((acc, [path, size]) => {
      return acc + size;
    }, 0);
};

export const step2 = (rawData: typeof data) => {
  let currentLocation: string[] = [];
  let mode: 'ls' | null = null;

  const directories = new Map<string, number>();

  const recordNewFileSize = (path: string[], size: number) => {
    let pathString = path.join('/');

    if (directories.has(pathString)) {
      directories.set(pathString, directories.get(pathString)! + size);
    } else {
      directories.set(pathString, size);
    }

    if (path.length >= 1) {
      recordNewFileSize(path.slice(0, -1), size);
    }
  };

  for (let i = 0; i < rawData.length - 1; i++) {
    const line = rawData[i];

    // enter LS mode here
    if (line.startsWith('$ ls')) {
      mode = 'ls';
    } else if (line.startsWith('$')) {
      mode = null;
    }

    if (mode === 'ls' && !line.startsWith('$')) {
      const [typeOrSize, name] = line.split(' ');

      if (typeOrSize === 'dir') {
        // nothing?
      } else {
        recordNewFileSize(currentLocation, parseInt(typeOrSize));
      }
    }

    if (line.startsWith('$ cd')) {
      const target = line.split(' ')[2];

      if (target === '..') {
        currentLocation.pop();
      } else if (target === '/') {
        currentLocation = [];
      } else {
        currentLocation.push(target);
      }
    }
  }

  const sumOfAllDirectories = directories.get('')!;

  console.log(sumOfAllDirectories);

  const remainingSpace = 70_000_000 - sumOfAllDirectories;

  const requiredToDelete = 30_000_000 - remainingSpace;

  const smallest = Array.from(directories.entries())
    .filter(([_, size]) => size >= requiredToDelete)
    .sort((a, b) => a[1] - b[1]);

  return smallest[0][1];
};

const { data, testData } = readAndFormatInputs(__dirname, (data) =>
  data.split('\n').map((x) => x)
);
export { data, testData };
