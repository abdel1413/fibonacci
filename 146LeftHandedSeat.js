function countLeftHandedSeats(seats) {
  let count = 0;

  for (let row = 0; row < seats.length; row++) {
    for (let col = 0; col < seats[row].length; col++) {
      if (seats[row][col] !== "U") continue;

      // Top row (facing down): left is col + 1
      if (row === 0) {
        if (col === seats[row].length - 1 || seats[row][col + 1] !== "R") {
          count++;
        }
      }

      // Bottom row (facing up): left is col - 1
      if (row === 1) {
        if (col === 0 || seats[row][col - 1] !== "R") {
          count++;
        }
      }
    }
  }

  return count;
}
// Example usage:
console.log(
  countLeftHandedSeats([
    ["U", "R", "U", "L"],
    ["L", "U", "R", "U"],
  ])
); // should return 2

console.log(
  countLeftHandedSeats([
    ["U", "U", "L", "R", "U"],
    ["R", "L", "U", "U", "L"],
  ])
); // should return 3