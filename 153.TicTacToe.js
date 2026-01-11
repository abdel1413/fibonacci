function ticTacToe(board) {
  const lines = [
    // Rows
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],

    // Columns
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],

    // Diagonals
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
  ];

  for (let line of lines) {
    if (line.every(cell => cell === "X")) {
      return "X wins";
    }
    if (line.every(cell => cell === "O")) {
      return "O wins";
    }
  }

  return "Draw";
}
// Example usage:
console.log(
  ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ])
); // should return "X wins"

console.log(
  ticTacToe([
    ["O", "X", "X"],
    ["X", "O", "O"],
    ["X", "O", "O"],
  ])
); // should return "O wins"

console.log(
  ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "O"],
  ])
); // should return "Draw"