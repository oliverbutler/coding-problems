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
15
```

Not the most efficient solution, improvement via usage of Map to store the best path (so far) to reach each position, saves recalculating the same position multiple times.
