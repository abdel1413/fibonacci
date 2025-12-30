function adjustThermostat(current, target) {
  if (current < target) {
    return "heat";
  }
  
  if (current > target) {
    return "cool";
  }

  return "hold";
}
// Example usage:
console.log(adjustThermostat(65, 72)); // should return "heat"
console.log(adjustThermostat(75, 70)); // should return "cool"
console.log(adjustThermostat(68, 68)); // should return "hold"
console.log(adjustThermostat(60, 65)); // should return "heat"
console.log(adjustThermostat(80, 75)); // should return "cool"
console.log(adjustThermostat(70, 70)); // should return "hold"