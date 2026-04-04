function isValidIsbn10(str) {
  //cleaned by removing - 
  //check if first ch is not digit to return false
  //loop thru clened str 
  //check if the last is X
  // if so, multiply 10 by  (index +1)
  //else  check if each char is digit
  // multiply each char by is (index+1)
  // add them up
  // check if total is divisible by 11
  let cleaned = str.replace(/-/g,"")
  let total = 0;
  if(!/\d/.test(cleaned[0])) return false;
  for(let i = 0; i< cleaned.length;i++){
    if(i === 9&& cleaned[i] ==="X"){
        total += 10 * (i+1)
    }else if(/\d/.test(cleaned[i])){
      total +=Number(cleaned[i])*(i+1)
    }else {
      return false
    }
  }
   console.log(total %11 ===0)
  return total %11 ===0;
}

 isValidIsbn10("0-306-40615-2")
 isValidIsbn10("0-8044-2957-X")
 isValidIsbn10("0-306-40615-1")