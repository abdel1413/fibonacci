function sendMessage(distances) {
  const SPEED = 300000; // km/s

  const totalDistance = distances.reduce((sum, d) => sum + d, 0);
  const travelTime = totalDistance / SPEED;

  const satelliteDelays = (distances.length - 1) * 0.5;

  const totalTime = travelTime + satelliteDelays;

  return Number(totalTime.toFixed(4));
}

// Example usage:
console.log(sendMessage([1500000, 3000000, 4500000])); // should return 0.0500
console.log(sendMessage([6000000])); // should return 0.0200
console.log(sendMessage([1000000, 2000000])); // should return 0.0133
console.log(sendMessage([500000, 1500000, 2500000, 3500000])); // should return 0.0433
console.log(sendMessage([3000000, 3000000, 3000000])); // should return 0.0600
console.log(sendMessage([0])); // should return 0.0000
console.log(sendMessage([750000, 1250000, 1750000])); // should return 0.0250   