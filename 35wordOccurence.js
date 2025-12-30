function getWords(paragraph) {
  const cleaned = paragraph
    .toLowerCase()
    .replace(/[,.!]/g, "");

  const counts = {};

  for (const word of cleaned.split(" ")) {
    if (word === "") continue;
    counts[word] = (counts[word] || 0) + 1;
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([word]) => word);
}
// Example usage:
console.log(getWords("Hello, hello! This is a test. This test is only a test.")); // should return ["test", "this", "is"]
console.log(getWords("One fish two fish red fish blue fish.")); // should return ["fish", "one", "two"]
console.log(getWords("To be, or not to be, that is the question.")); // should return ["be", "to", "or"]
console.log(getWords("It was the best of times, it was the worst of times.")); // should return ["the", "of", "it"]
console.log(getWords("A quick brown fox jumps over the lazy dog.")); // should return ["a", "quick", "brown"]
console.log(getWords("Wow! Such excitement, much fun, very code.")); // should return ["wow", "such", "excitement"] 