function findLandingSpot(matrix) {
  console.log(matrix)
  const rows = matrix.length;
  console.log(rows)
  const cols = matrix[0].length;
  console.log(cols)

  let minDanger = Infinity;
  let safest = [];

  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        let dangerSum = 0;

        for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;

          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            dangerSum += matrix[nr][nc];
          }
        }

        if (dangerSum < minDanger) {
          minDanger = dangerSum;
          safest = [r, c];
        }
      }
    }
  }
 console.log(safest)
  return safest;
}


// Example usage:   

findLandingSpot([
  [1, 2, 0, 3],
  [0, 1, 4, 2],
  [3, 0, 1, 0],
  [2, 4, 3, 1]
]); 
// should return [2, 3]

findLandingSpot([
  [0, 1, 2],
  [3, 0, 1],
  [2, 3, 0]
]); 
// should return [0, 0]

findLandingSpot([
  [4, 3, 2],
  [1, 0, 1],
  [2, 3, 4]
]); 
// should return [1, 1]

findLandingSpot([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]); 
// should return [0, 0]
