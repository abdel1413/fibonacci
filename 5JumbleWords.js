function jbelmu(str) {
  return str
    .split(' ')
    .map(word => {
      if (word.length <= 2) return word;

      const middle = word
        .slice(1, -1)
        .split('')
        .sort()
        .join('');

      return word[0] + middle + word[word.length - 1];
    })
    .join(' ');
}
// Example usage:
console.log(jbelmu("hello world")); // should return "hlleo wlrod"
console.log(jbelmu("a")); // should return "a"
console.log(jbelmu("ab")); // should return "ab"
console.log(jbelmu("javascript is fun")); // should return "jacsavpirt is fun"