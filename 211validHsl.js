function isValidHSL(hsl) {
const regex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)\s*;?$/


let matched = hsl.match(regex)
console.log(matched)

if(!matched) return false;
const h = Number(matched[1])
const s = Number(matched[2])
const l = Number(matched[3])

console.log(h, s, l)

  return h >=0 && h<=360 && s >=0 && s<100&& l >=0 && l<=100;

}

isValidHSL("hsl(240, 50%, 50%)")