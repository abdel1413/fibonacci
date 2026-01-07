function vowelCase(str) {
const vowels = new Set(['o','e','u','i','a'])
const regex = /[a-z]/i

let result = ''
for(let char of str){
  if(regex.test(char)){
   
    if(vowels.has(char.toLowerCase())){
      result +=char.toUpperCase()
      console.log(result)
    }else{
      result +=char.toLowerCase()
    }
  }else{
    result+=char
  }
 
}
  return result;
}

vowelCase("coding is fun")  // should return "cOdIng Is fUn"