function separateLettersAndNumbers(str) {
 let result =str[0]
     for(let i = 1; i< str.length; i++){
       let prev = str[i-1]
       let curr = str[i];
       let prevIsLetter = /[a-zA-Z]/.test(prev)
       let currIsLetter = /[a-zA-Z]/.test(curr)
       let prevIsNum = /[0-9]/.test(prev)
       let currIsNum = /[0-9]/.test(curr)
    

       if((prevIsLetter&& currIsNum)||(prevIsNum&& currIsLetter)){
          result +="-"
       }
         result += curr;
       

     }
  return result;
}


separateLettersAndNumbers("ABC123") // should return "ABC-123"
separateLettersAndNumbers("A1B2C3") // should return "A-1-B-2-C-3"
separateLettersAndNumbers("123ABC") // should return "123-ABC"

//2nd solution advanced regex lookahead and lookbehind
function separateLettersAndNumbers(str) {
  return str.replace(/([a-zA-Z])(0-9)|(0-9)(a-zA-Z))/g, "$1$3-$2$4")    ;
}