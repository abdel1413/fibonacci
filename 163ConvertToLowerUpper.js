function toConsonantCase(str) {

 let vowels =/[aeiou]/i
  return str.split("").map(char => {
    if(char ==='-') return "_";
    if(vowels.test(char)) return char.toLowerCase();
    return char.toUpperCase()
  }).join("");
  
  
}


toConsonantCase("helloworld") // "HeLLoWoRLD"
toConsonantCase("_hElLO-WOrlD-") //"_HeLLo_WoRLD_".