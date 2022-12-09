export function renderCoordinates(coords: string[]) {
  // Find the minimum and maximum x and y coordinates
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  for (const coord of coords) {
    const x = parseInt(coord.split(',')[0]);
    const y = parseInt(coord.split(',')[1]);
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  // Create a 2D array to hold the grid, and fill it with dots
  const grid: string[][] = [];

  for (let i = 0; i <= maxY - minY; i++) {
    grid.push([]);
    for (let j = 0; j <= maxX - minX; j++) {
      grid[i].push('.');
    }
  }

  // Populate the grid with the coordinates
  for (const coord of coords) {
    const x = parseInt(coord.split(',')[0]);
    const y = parseInt(coord.split(',')[1]);
    grid[y - minY][x - minX] = coord.split(',')[2] || 'X';
  }
  // Print out the grid to the JavaScript terminal
  for (const row of grid) {
    console.log(row.join(''));
  }
}
