function detectAI(text) {
  // Rule 1: two or more dashes
  const dashCount = (text.match(/-/g) || []).length;
  if (dashCount >= 2) return "AI";

  // Rule 2: two or more sets of parentheses
  const openParens = (text.match(/\(/g) || []).length;
  const closeParens = (text.match(/\)/g) || []).length;
  const parenSets = Math.min(openParens, closeParens);
  if (parenSets >= 2) return "AI";

  // Rule 3: three or more words with 7+ letters
  const words = text.split(" ");
  let longWordCount = 0;

  for (const word of words) {
    if (/^[A-Za-z]+$/.test(word) && word.length >= 7) {
      longWordCount++;
      if (longWordCount >= 3) return "AI";
    }
  }

  return "Human";
}
// Example usage:
console.log(detectAI("This is a simple test.")); // should return "Human"
console.log(detectAI("This test contains multiple longwords suchasexample and anotherlongword.")); // should return "AI"
console.log(detectAI("An example with (parentheses) and (more parentheses).")); // should return "AI"
console.log(detectAI("A sentence with -- dashes.")); // should return "AI"
console.log(detectAI("Short words only here.")); // should return "Human"           