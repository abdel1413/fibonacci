function compress(str) {
   let splitted = str.split(" ")

   let firstSeen = new Map();
   let result = [];
   console.log(firstSeen)
   for(let i = 0; i< splitted.length; i++){
    let word = splitted[i]
   
    if(firstSeen.has(word)){
      result.push(firstSeen.get(word))
    }else{
      firstSeen.set(word, i+1)
      result.push(word)
     
    }
    
   }
   console.log(firstSeen)
   console.log(result.join(" "))
  return result.join(" ");
}

compress("practice makes perfect and perfect practice makes perfect")