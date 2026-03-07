function followTrail(map) {
  const grid = map.map(row => row.split(""));
  const rows = grid.length;
  const cols = grid[0].length;

  const dirs = [
    [0, 1, "R"],
    [1, 0, "D"],
    [0, -1, "L"],
    [-1, 0, "U"]
  ];

  let r, c;

  // find C
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "C") {
        r = i;
        c = j;
      }
    }
  }

  let result = "";

  while (grid[r][c] !== "G") {
    for (let [dr, dc, move] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        (grid[nr][nc] === "T" || grid[nr][nc] === "G")
      ) {
        result += move;
        grid[r][c] = "-"; // mark visited
        r = nr;
        c = nc;
        break;
      }
    }
  }

  return result;
}
