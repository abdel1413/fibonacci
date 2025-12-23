function wiseSpeak(sentence) {
  const triggerWords = ["have", "must", "are", "will", "can"];

  // Extract punctuation
  const punctuation = sentence.slice(-1);
  const words = sentence.slice(0, -1).split(" ");

  // Find first trigger word
  let index = -1;
  for (let i = 0; i < words.length; i++) {
    if (triggerWords.includes(words[i].toLowerCase())) {
      index = i;
      break;
    }
  }

  // Split sentence
  const firstPart = words.slice(0, index + 1);
  const secondPart = words.slice(index + 1);

  // Build new sentence
  const newFirst = secondPart[0];
  const capitalizedFirst =
    newFirst.charAt(0).toUpperCase() + newFirst.slice(1).toLowerCase();

  const main = [capitalizedFirst, ...secondPart.slice(1).map(w => w.toLowerCase())].join(" ");
  const moved = firstPart.map(w => w.toLowerCase()).join(" ");

  return `${main}, ${moved}${punctuation}`;
}
// Example usage:
console.log(wiseSpeak("You must learn to code.")); // should return "Learn to code, you must."
console.log(wiseSpeak("We will overcome challenges!")); // should return "Overcome challenges, we will!"
console.log(wiseSpeak("They can achieve greatness.")); // should return "Achieve greatness, they can."
console.log(wiseSpeak("I have a dream.")); // should return "A dream, I have."
console.log(wiseSpeak("People are capable of amazing things.")); // should return "Capable of amazing things, people are."