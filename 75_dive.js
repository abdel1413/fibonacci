function dive(map, [row, col]) {
  const cell = map[row][col];

  // If no treasure at this location
  if (cell === "-") return "Empty";

  // Count how many unfound treasure parts exist
  let remaining = 0;
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] === "O") remaining++;
    }
  }

  // If this dive finds the last unfound part
  if (cell === "O" && remaining === 1) {
    return "Recovered";
  }

  // Otherwise, treasure found but not fully recovered
  return "Found";
}
// Example usage:
console.log(dive([
  ['-', '-', 'O', '-'],
  ['-', 'X', 'O', '-'],
  ['-', '-', '-', '-']
], [0, 2])); // should return "Found"

console.log(dive([
  ['-', '-', 'O', '-'],
  ['-', 'X', 'O', '-'],
  ['-', '-', '-', '-']
], [1, 1])); // should return "Empty"

console.log(dive([
  ['-', '-', 'O', '-'],
  ['-', 'X', 'O', '-'],
  ['-', '-', '-', '-']
], [1, 2])); // should return "Recovered"

console.log(dive([
  ['-', '-', '-', '-'],
  ['-', 'X', '-', '-'],
  ['-', '-', '-', '-']
], [0, 0])); // should return "Empty"

console.log(dive([
  ['O', 'O', 'O'],
  ['O', 'X', 'O'],
  ['O', 'O', 'O']
], [2, 2])); // should return "Found"   