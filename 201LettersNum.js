function countLettersAndNumbers(str) {
  let letters = 0;
  let numbers = 0;

  for (let ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      letters++;
    } else if (/[0-9]/.test(ch)) {
      numbers++;
    }
  }

  const letterWord = letters === 1 ? "letter" : "letters";
  const numberWord = numbers === 1 ? "number" : "numbers";

  return `The string has ${letters} ${letterWord} and ${numbers} ${numberWord}.`;
}
