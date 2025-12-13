function parseBold(str) {
 
  return str
    .replace(/\*\*([^\s][\s\S]*?[^\s])\*\*/g, "<b>$1</b>")
    .replace(/__([^\s][\s\S]*?[^\s])__/g, "<b>$1</b>");


}

//example usage:
console.log(parseBold("This is **bold** text and this is __also bold__."));
// Output: This is <b>bold</b> text and this is <b>also bold</b>.
console.log(parseBold("This is ** bold ** text and this is __ also bold __."));
// Output: This is ** bold ** text and this is __ also bold __.
console.log(parseBold("This is **bold text and this is __also bold__."));
// Output: This is **bold text and this is <b>also bold</b>.
console.log(parseBold("This is **bold** and __also bold__ text."));
// Output: This is <b>bold</b> and <b>also bold</b> text.