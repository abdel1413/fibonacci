function spookify(str) {
  let result = "";
  let letterIndex = 0;

  for (const char of str) {
    if (char === "_" || char === "-") {
      result += "~";
    } else {
      if (letterIndex % 2 === 0) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
      letterIndex++;
    }
  }

  return result;
}
// Example usage:
console.log(spookify("hello_world"));   // should return "HeLlO~WoRlD"
console.log(spookify("Java-Script_Rules"));