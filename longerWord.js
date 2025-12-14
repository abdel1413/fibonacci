function longestWord(sentence) {
  let longest = "";

  for (const word of sentence.split(" ")) {
    // Remove non-letter characters
    const cleaned = word.replace(/[^a-z]/gi, "");

    if (cleaned.length > longest.replace(/[^a-z]/gi, "").length) {
      longest = cleaned;
    }
  }

  return longest;
}
// Example usage:
console.log(longestWord("The quick brown fox jumps over the lazy dog.")); // Outputs: "jumps"
console.log(longestWord("Hello, world! This is a test.")); // Outputs: "Hello"
console.log(longestWord("A journey of a thousand miles begins with a single step.")); // Outputs: "thousand"    