function oddLengthWords(str) {
  return str
    .split(" ")
    .filter(word => word.length % 2 === 1)
    .join(" ");
}