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

//second version
function countItineraries(stops) {
  const n = stops.length;

  function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  let count = 0;

  // For each ordering of the optional stops
  const arrangementsOfStops = factorial(n);

  for (let afterDinner = 0; afterDinner <= 1; afterDinner++) {
    const beforeDinnerAndLunch = n - afterDinner;

    // Need at least 1 stop before lunch
    // Need at least 1 stop between lunch and dinner
    for (let beforeLunch = 1; beforeLunch < beforeDinnerAndLunch; beforeLunch++) {
      count += arrangementsOfStops;
    }
  }

  return count;
}