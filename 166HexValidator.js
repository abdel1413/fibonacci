function isValidHex(str) {
 let regex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i
 console.log(regex.test(str))
  return  regex.test(str);
}

isValidHex("#12G") // false

isValidHex("#123abc") //true