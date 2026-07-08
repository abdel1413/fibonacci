function countItineraries(stops) {
  const n = stops.length;

  function factorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
      result *= i;
    }

    return result;
  }

  const validSplits = 2 * n - 3;

  return factorial(n) * validSplits;
}