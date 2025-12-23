function daylightHours(latitude) {
  const table = [
    [-90, 24],
    [-75, 23],
    [-60, 21],
    [-45, 15],
    [-30, 13],
    [-15, 12],
    [0, 12],
    [15, 11],
    [30, 10],
    [45, 9],
    [60, 6],
    [75, 2],
    [90, 0]
  ];

  let closest = table[0];

  for (let i = 1; i < table.length; i++) {
    if (Math.abs(latitude - table[i][0]) < Math.abs(latitude - closest[0])) {
      closest = table[i];
    }
  }

  return closest[1];
}
// Example usage:
console.log(daylightHours(0));    // should return 12
console.log(daylightHours(23.5)); // should return 10
console.log(daylightHours(-45));  // should return 15
console.log(daylightHours(60));   // should return 6
console.log(daylightHours(-75));  // should return 23   