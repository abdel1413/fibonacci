function parseBlockquote(line) {
  const match = line.match(/^\s*>\s+(.+)$/);

  if (!match) return null;

  return `<blockquote>${match[1]}</blockquote>`;
}
 

//export default parseBlockquote; 
//exaple usage:
console.log(parseBlockquote("> This is a blockquote.")); // should return "<blockquote>This is a blockquote.</blockquote>"
console.log(parseBlockquote("  > Another blockquote here.")); // should return "<blockquote>Another blockquote here.</blockquote>"
console.log(parseBlockquote("No blockquote here.")); // should return null
console.log(parseBlockquote(">")); // should return null
console.log(parseBlockquote(" >    Leading spaces in blockquote.")); // should return "<blockquote>Leading spaces in blockquote.</blockquote>"console.log(parseBlockquote(" >Trailing spaces in blockquote.   ")); // should return "<blockquote>Trailing spaces in blockquote.   </blockquote>"
console.log(parseBlockquote(" >   Mixed   spaces   in   blockquote.   ")); // should return "<blockquote>Mixed   spaces   in   blockquote.   </blockquote>"
console.log(parseBlockquote(">> Nested blockquote.")); // should return null
console.log(parseBlockquote(" > > Incorrect blockquote.")); // should return null 
console.log(parseBlockquote(" > Blockquote with punctuation!")); // should return "<blockquote>Blockquote with punctuation!</blockquote>"console.log(parseBlockquote(" > Blockquote with numbers 12345")); // should return "<blockquote>Blockquote with numbers 12345</blockquote>"