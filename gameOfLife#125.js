function gameOfLife(board) {
  const rows = board.length;
  const cols = board[0].length;

  // Directions for the 8 neighbors
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1]
  ];

  // Create a deep copy for the next state
  const next = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let liveNeighbors = 0;

      // Count live neighbors
      for (let [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          board[nr][nc] === 1
        ) {
          liveNeighbors++;
        }
      }

      // Apply the rules
      if (board[r][c] === 1) {
        // Live cell
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          next[r][c] = 1;
        } else {
          next[r][c] = 0;
        }
      } else {
        // Dead cell
        if (liveNeighbors === 3) {
          next[r][c] = 1;
        }
      }
    }
  }

  return next;
}
// Example usage:
const initialBoard = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
];

const nextBoard = gameOfLife(initialBoard);
console.log(nextBoard);
// Output:
// [
//   [0, 0, 0],
//   [1, 0, 1],
//   [0, 1, 1],
//   [0, 1, 0]
// ]            
