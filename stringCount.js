function count(text, pattern) {

    /**
     * Loop through the main string one character at a time

Check substrings of the same length as the pattern

Count matches

Move forward one character, allowing overlaps
     */
  let count = 0;

  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (text.slice(i, i + pattern.length) === pattern) {
      count++;
    }
  }


  return count;
}


console.log(count("ababab", "ab")); // should return 3
console.log(count("aaaaa", "aa"));  // should return 4
console.log(count("hello world", "o")); // should return 2
console.log(count("mississippi", "issi")); // should return 2
console.log(count("abcdef", "gh")); // should return 0      
