function decompress(str) {
const splitted = str.split(" ")

let result = [];
for(let word of splitted){
 if(!isNaN(word)){
  let position = Number(word)
  result.push(result[position -1])
 }else{
  result.push(word)
 }
}
console.log(result)
  return result.join(" ");
}

decompress("practice makes perfect and 3 1 2 3")//"practice makes perfect and perfect practice makes perfect"