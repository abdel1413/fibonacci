function countPermutations(str) {
  // Count frequency of each character
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Factorial using BigInt to avoid precision errors
  const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const n = BigInt(str.length);
  let numerator = factorial(n);

  // Divide by factorial of each frequency
  let denominator = 1;
  for (const count of Object.values(freq)) {
    denominator *= factorial((count));
  }

  return Number(numerator / denominator);
}

countPermutations("abb")

countPermutations("racecar")