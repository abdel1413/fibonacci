function sumLetters(str) {
 let sum = 0;
 for(let ch of str){
   if(/[A-Z]/i.test(ch)){
     sum += ch.toUpperCase().charCodeAt(0)-64
   }
 }
 console.log(sum)
  return sum;
}
sumLetters("Hello")
sumLetters("freeCodeCamp")
sumLetters("</404>")