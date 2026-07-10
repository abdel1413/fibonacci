function sortNumbers(str) {
  return str
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);
}
