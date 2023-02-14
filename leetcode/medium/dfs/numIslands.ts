function numIslands(grid: string[][]): number {
  let counter: number = 0;

  // loop through the 2D array cols and rows
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // if the current cell is land, increase counter and call dfs
      if (grid[row][col] === "1") {
        counter++;
        dfs(row, col, grid);
      }
    }
  }

  return counter;
}

function dfs(row: number, col: number, grid: string[][]): void {
  // check if row and col are not outbound or the cell is not a water
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === "0"
  ) {
    return;
  }

  // mark the cell as visited
  grid[row][col] = "0";

  // recursive call in all directions

  // right
  dfs(row, col + 1, grid);

  // left
  dfs(row, col - 1, grid);

  // bottom
  dfs(row + 1, col, grid);

  // top
  dfs(row - 1, col, grid);
}

export {};
