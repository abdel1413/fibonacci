function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const len = word.length;

  // Directions: [row step, col step]
  const directions = [
    [0, 1],   // left → right
    [0, -1],  // right → left
    [1, 0],   // top → bottom
    [-1, 0]   // bottom → top
  ];

  // Scan every position as a possible starting point
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      // Try each direction
      for (const [dr, dc] of directions) {
        let match = true;

        // Check if word matches from (r, c) in this direction
        for (let k = 0; k < len; k++) {
          const nr = r + dr * k;
          const nc = c + dc * k;

          // Out of bounds?
          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
            match = false;
            break;
          }

          // Character mismatch?
          if (matrix[nr][nc] !== word[k]) {
            match = false;
            break;
          }
        }

        if (match) {
          // Start is (r, c)
          const end = [r + dr * (len - 1), c + dc * (len - 1)];
          return [[r, c], end];
        }
      }
    }
  }
}
