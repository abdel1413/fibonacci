function findPawnMoves(position) {
  const col = position[0];              // "A" - "H"
  const row = Number(position[1]);      // 1 - 8

  const moves = [];

  // Move one square forward
  if (row + 1 <= 8) {
    moves.push(`${col}${row + 1}`);
  }

  // If starting row (2), can move two squares forward
  if (row === 2 && row + 2 <= 8) {
    moves.push(`${col}${row + 2}`);
  }

  return moves;
}

// Example usage:
console.log(findPawnMoves("A2")); // should return ["A3", "A4"]
console.log(findPawnMoves("B3")); // should return ["B4"]
console.log(findPawnMoves("H7")); // should return ["H8"]
console.log(findPawnMoves("C8")); // should return []
console.log(findPawnMoves("D1")); // should return ["D2", "D3"]