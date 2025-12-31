function digitsOrLetters(str) {
  let dig = (str).match(/\d+/)
  let digitCount = 0; 
  let charCount = 0;
   for(let i =0; i< str.length;i++){
      if(/\d/.test(str[i])){
        digitCount++
      }else if(/[a-z]/i.test(str[i])){
        charCount++
      }
   }
   console.log(digitCount)
   console.log(charCount)

    if(digitCount > charCount){
      return "digits"
    }else if(digitCount === charCount){
      return "tie"
    }else {
      return "letters"
    }

}

digitsOrLetters("abc123") // should return "tie"    
digitsOrLetters("abcd1234ef") // should return "letters"
digitsOrLetters("1234567") // should return "digits"
digitsOrLetters("a1b2c3d4e5f6g7h8i9j0") // should return "tie"
digitsOrLetters("hello2021world") // should return "letters"
digitsOrLetters("202120212021") // should return "digits"
digitsOrLetters("JavaScript2023Rocks") // should return "letters"
digitsOrLetters("2023isTheYear") // should return "letters"
digitsOrLetters("123abc456def789") // should return "tie"
digitsOrLetters("noDigitsHere") // should return "letters"