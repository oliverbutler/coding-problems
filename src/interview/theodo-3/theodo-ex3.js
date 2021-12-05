const map = new Map();
const valMap = new Map();

// Available Directions
const dir = [
  [0, 1],
  [1, 1],
  [1, 0],
];

function solution(A) {
  // Calculate the target position
  const endPos = [A[0].length - 1, A.length - 1];

  // Start bottom right (the end)
  scoreOf(A, endPos, 6, A[endPos[0]][endPos[1]], [endPos]);

  // Fetch the max from the Map
  const maxTotal = Math.max(...[...map.keys()]);
  console.log(`path for total of ${maxTotal}: `, map.get(maxTotal));

  return maxTotal;
}

/**
 * Recursive function to work out optimal solution
 *
 * todo: store best value for each node in a map
 *
 * @param {*} A - Board
 * @param {*} pos - Current Position
 * @param {*} remain - How many moves remain
 * @param {*} total - Total from pos -> end
 * @param {*} path - current path taken ([[pos], ..., [end]])
 */
function scoreOf(A, pos, remain, total, path) {
  // If we used the correct number && we are at the start (otherwise incomplete)
  if (remain == 0 && pos[0] == 0 && pos[1] == 0) map.set(total, path);

  // console.log(
  //   `pos: [${pos}] rem: ${remain} total: ${total} path: ${printPath(path)}`
  // );

  var possibleOrigins = [];
  dir.forEach((d) => {
    const nextPos = [pos[0] - d[0], pos[1] - d[1]];
    if (nextPos[0] >= 0 && nextPos[1] >= 0)
      possibleOrigins.push({ pos: nextPos, dir: d });
  });

  // console.log(possibleOrigins);

  // For each possible starting position recursively call scoreOf
  possibleOrigins.forEach((po) => {
    var newPath = [...path];
    newPath.unshift(po.pos);

    // Recursively check the next possible origin position
    scoreOf(A, po.pos, remain - 1, total + A[po.pos[0]][po.pos[1]], newPath);
  });
}

// Input Arr
const A = [
  [2, 2, 4, 2],
  [0, 3, 0, 1],
  [1, 2, 2, 1],
  [4, 1, 2, 2],
];

// Output
console.log(solution(A));
