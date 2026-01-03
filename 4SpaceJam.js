function spaceJam(str) {
  return str
    .replace(/\s+/g, '')        // remove all spaces
    .toUpperCase()              // convert letters to uppercase
    .split('')                  // split into characters
    .join('  ');                // insert two spaces between characters
}
// Example usage:
console.log(spaceJam("I love coding"));