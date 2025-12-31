function speeding(speeds, speedLimit) {
  const speeding = speeds.filter(speed => speed > speedLimit);

  if (speeding.length === 0) {
    return [0, 0];
  }

  const totalOver = speeding.reduce(
    (sum, speed) => sum + (speed - speedLimit),
    0
  );

  const averageOver = totalOver / speeding.length;

  return [speeding.length, averageOver];
}
// Example usage:
console.log(speeding([50, 60, 70, 80, 90], 65)); // should return [3, 15]
console.log(speeding([30, 40, 50], 60)); // should return [0, 0]
console.log(speeding([100, 120, 80, 90], 90)); // should return [2, 15]
console.log(speeding([55, 65, 75, 85], 70)); // should return [2, 10]
console.log(speeding([45, 55, 65], 50)); // should return [2, 10]   