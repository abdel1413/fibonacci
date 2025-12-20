function purgeMostFrequent(arr) {
  const frequency = {};

  // Count frequencies
  for (const value of arr) {
    frequency[value] = (frequency[value] || 0) + 1;
  }

  // Find the maximum frequency
  const maxFreq = Math.max(...Object.values(frequency));

  // Remove all elements with max frequency
  return arr.filter(value => frequency[value] !== maxFreq);
}
// Example usage:
console.log(purgeMostFrequent([1, 2, 3, 2, 4, 1, 1])); // should return [2, 3, 2, 4]
console.log(purgeMostFrequent([5, 5, 5, 6, 7, 8, 6])); // should return [6, 7, 8, 6]
console.log(purgeMostFrequent([9, 9, 8, 8, 7])); // should return [7]
console.log(purgeMostFrequent([10, 11, 12])); // should return [10, 11, 12]
console.log(purgeMostFrequent([1, 1, 1, 1])); // should return []   

console.log( purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]) )//should return ["a", "b", "b", "c", "c", "c"].
console.log( purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]))// should return ["red", "green", "red", "green"].