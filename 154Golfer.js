function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole in one!";
  }

  const diff = strokes - par;

  if (diff === -2) return "Eagle";
  if (diff === -1) return "Birdie";
  if (diff === 0) return "Par";
  if (diff === 1) return "Bogey";
  if (diff === 2) return "Double bogey";
}
// Example usage:
console.log(golfScore(4, 3)); // should return "Birdie"
console.log(golfScore(5, 5)); // should return "Par"
console.log(golfScore(3, 1)); // should return "Hole in one!"
console.log(golfScore(4, 6)); // should return "Double bogey"
console.log(golfScore(5, 7)); // should return undefined