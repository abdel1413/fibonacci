function goldilocksZone(mass) {
  const luminosity = Math.pow(mass, 3.5);
  const root = Math.sqrt(luminosity);

  const start = +(0.95 * root).toFixed(2);
  const end = +(1.37 * root).toFixed(2);

  return [start, end];
}
// Example usage:
console.log(goldilocksZone(1));    // should return [0.95, 1.37]
console.log(goldilocksZone(0.5));  // should return [0.32, 0.46]
console.log(goldilocksZone(2));    // should return [2.54, 3.66]
console.log(goldilocksZone(5));    // should return [10.12, 14.58]
console.log(goldilocksZone(10));   // should return [30.05, 43.29]