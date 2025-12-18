function classification(temp) {
  if (temp >= 30000) return "O";
  if (temp >= 10000) return "B";
  if (temp >= 7500)  return "A";
  if (temp >= 6000)  return "F";
  if (temp >= 5200)  return "G";
  if (temp >= 3700)  return "K";
  return "M";
}
// Example usage:
console.log(classification(35000)); // should return "O"
console.log(classification(15000)); // should return "B"
console.log(classification(8000));  // should return "A"
console.log(classification(6500));  // should return "F"
console.log(classification(5400));  // should return "G"
console.log(classification(4000));  // should return "K"
console.log(classification(3000));  // should return "M"        