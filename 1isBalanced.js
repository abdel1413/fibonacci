function halvesAreAlike(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let left = 0;
  let right = 0;

  let mid = Math.floor(str.length / 2);

  for (let i = 0; i < mid; i++) {
    if (vowels.has(str[i].toLowerCase())) left++;
    if (vowels.has(str[str.length - 1 - i].toLowerCase())) right++;
  }

  return left === right;
}

// Example usage:
console.log(halvesAreAlike("book")); // should return true
console.log(halvesAreAlike("textbook")); // should return false
console.log(halvesAreAlike("MerryChristmas")); // should return false
