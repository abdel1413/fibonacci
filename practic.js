function duplicateCharacterCount(first, second) {
  let count = 0;

  for (const char of second) {
    if (first.includes(char)) {
      count++;
    }
  }

  return count;
}