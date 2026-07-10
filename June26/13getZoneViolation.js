function findZoningViolations(grid) {
  const restrictions = {
    i: new Set(["R", "I"]),
    A: new Set(["C"]),
    R: new Set(["i", "C"]),
    I: new Set(["i"]),
    C: new Set(["R", "A"]),
    "": new Set(),
  };

  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1],  // right
  ];

  const violations = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const building = grid[row][col];

      // Undeveloped cells have no restrictions
      if (building === "") continue;

      let isViolation = false;

      for (const [rowChange, colChange] of directions) {
        const neighborRow = row + rowChange;
        const neighborCol = col + colChange;

        const isInsideGrid =
          neighborRow >= 0 &&
          neighborRow < grid.length &&
          neighborCol >= 0 &&
          neighborCol < grid[neighborRow].length;

        if (!isInsideGrid) continue;

        const neighbor = grid[neighborRow][neighborCol];

        if (restrictions[building].has(neighbor)) {
          isViolation = true;
          break;
        }
      }

      if (isViolation) {
        violations.push([row, col]);
      }
    }
  }

  return violations;
}
//example 
