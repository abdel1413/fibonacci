function fibonacciSequence(start, length) {
  if (length === 0) return [];

  if (length === 1) return [start[0]];

  const result = [start[0], start[1]];

  for (let i = 2; i < length; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}   
// Example usage:
console.log(fibonacciSequence([0, 1], 5)); 
// should return [0, 1, 1, 2, 3]

console.log(fibonacciSequence([2, 3], 6)); 
// should return [2, 3, 5, 8, 13, 21]
