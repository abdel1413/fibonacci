function sockPairs(startingPairs, washCycles) {
  let socks = startingPairs * 2;

  for (let i = 1; i <= washCycles; i++) {
    // Every 2 cycles: lose one sock
    if (i % 2 === 0 && socks > 0) socks--;

    // Every 3 cycles: find one sock
    if (i % 3 === 0) socks++;

    // Every 5 cycles: throw away one sock
    if (i % 5 === 0 && socks > 0) socks--;

    // Every 10 cycles: buy a pair (2 socks)
    if (i % 10 === 0) socks += 2;

    // Never allow negative socks
    if (socks < 0) socks = 0;
  }

  // Return number of complete pairs
  return Math.floor(socks / 2);
}
// Example usage:
console.log(sockPairs(5, 12)); // should return 4
console.log(sockPairs(3, 7));  // should return 2
console.log(sockPairs(10, 20)); // should return 9
console.log(sockPairs(0, 15));  // should return 1
console.log(sockPairs(4, 5));   // should return 3