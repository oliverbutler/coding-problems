# Problem

There exists a matrix size N \* M.

Beginning at [0,0] and ending at [N-1, M-1] (bottom right), find the highest sum path between the two points using exactly N+M-2 moves.

Each cell the path takes has an integer value, the total is the sum of each of these cells across the whole path.

Create an efficient solution to the problem.

Valid Player Moves:

- Right [0,1]
- Diagonal [1,1]
- Down [1,0]

## Example Output

Input

```
const A = [
  [2, 2, 4, 2],
  [0, 3, 0, 1],
  [1, 2, 2, 1],
  [4, 1, 2, 2],
];

```

output

```
path for total of 15: [
  [ 0, 0 ], [ 0, 1 ],
  [ 1, 1 ], [ 2, 1 ],
  [ 2, 2 ], [ 3, 2 ],
  [ 3, 3 ]
]

result = 15
```

## Implementation Notes

Not the most efficient solution, improvement via usage of Map to store the best path (so far) to reach each position, saves recalculating the same position multiple times.

Current recursive solution is believed to be accurate as of 21/04/21.
