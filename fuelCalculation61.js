function launchFuel(payloadMass) {
  let totalMass = payloadMass;
  let totalFuel = 0;

  while (true) {
    const requiredFuel = totalMass / 5;
    const additionalFuel = requiredFuel - totalFuel;

    if (additionalFuel < 1) {
      totalFuel = requiredFuel;
      break;
    }

    totalFuel = requiredFuel;
    totalMass = payloadMass + totalFuel;
  }

  return Number(totalFuel.toFixed(1));
}

// Example usage:
console.log(launchFuel(1000)); // should return 250.0
console.log(launchFuel(5000)); // should return 1250.0
console.log(launchFuel(750));  // should return 187.5
console.log(launchFuel(2000)); // should return 500.0
console.log(launchFuel(300));  // should return 75.0        