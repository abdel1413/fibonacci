function knightMoves(pos) {
  const col = pos[0].toUpperCase().charCodeAt(0) - 64; // 'A'->1, 'B'->2, ...
  const row = parseInt(pos[1]); // '1'->1, '8'->8

  const moves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  let count = 0;

  for (const [dx, dy] of moves) {
    const newX = col + dx;
    const newY = row + dy;
    if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
      count++;
    }
  }

  return count;
}

// Examples
console.log(knightMoves("A1")); // 2
console.log(knightMoves("D4")); // 8
console.log(knightMoves("H8")); // 2
