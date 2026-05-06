// 25 Vowel repeater
//Longest word 
//Hidden treasure
//100 characters
//125 Game of life
//150 Markdown unordered list Parser 
//175 digital detox 
//200 Letter and number count 
// 225 no consecutive repeats
// 250 Hidden key


function decode(encoded) {
  const key = "VLHCGMDLNH";
  let result = "";
  let keyIndex = 0;

  for (let char of encoded) {
    if (char === " ") {
      result += " ";
      continue;
    }

    let shift = key.charCodeAt(keyIndex % key.length) - 64; 
    // A=1, B=2 ... Z=26

    let code = char.charCodeAt(0) - 65; 
    // A=0 ... Z=25

    let decoded = (code - shift + 26) % 26;

    result += String.fromCharCode(decoded + 65);

    keyIndex++;
  }

  return result;
}