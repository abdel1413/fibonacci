function oddLengthWords(str) {
  return str
    .split(" ")
    .filter(word => word.length % 2 === 1)
    .join(" ");
}

//shortest version
const oddLengthWords = str => str.split(" ").filter(w => w.length % 2).join(" ");