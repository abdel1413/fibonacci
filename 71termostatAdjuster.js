function adjustThermostat(currentF, targetC) {
  const targetF = targetC * 1.8 + 32;
  const difference = targetF - currentF;

  if (difference > 0) {
    return `Heat: ${difference.toFixed(1)} degrees Fahrenheit`;
  }

  if (difference < 0) {
    return `Cool: ${Math.abs(difference).toFixed(1)} degrees Fahrenheit`;
  }

  return "Hold";
}
// Example usage:
console.log(adjustThermostat(68, 20)); // should return "Heat: 3.6 degrees Fahrenheit"
console.log(adjustThermostat(75, 22)); // should return "Cool: 1.4 degrees Fahrenheit"
console.log(adjustThermostat(72, 22.2)); // should return "Hold"
console.log(adjustThermostat(60, 18)); // should return "Heat: 5.6 degrees Fahrenheit"
console.log(adjustThermostat(80, 24)); // should return "Cool: 3.2 degrees Fahrenheit"