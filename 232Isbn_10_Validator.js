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

//2nd version
function isValidIsbn10(str) {
  const cleaned = str.replace(/-/g, '');
  if (!/^\d{9}[\dX]$/.test(cleaned)) return false;

  const total = cleaned.split('').reduce((sum, char, index) => {
    return sum + (char === 'X' ? 10 : Number(char)) * (index + 1);
  }, 0);

  return total % 11 === 0;
}

//3rd version
const isValidIsbn10 = s => {
  s = s.replace(/-/g, "");
  return s.length === 10 &&
    [...s].every((c,i) =>
      (i<9 && /\d/.test(c)) || (i===9 && (/\d/.test(c)||c==="X"))
    ) &&
    [...s].reduce((t,c,i)=>
      t + (c==="X"?10:Number(c))*(i+1), 0) % 11 === 0;
};
 isValidIsbn10("0-306-40615-2")
 isValidIsbn10("0-8044-2957-X")
 isValidIsbn10("0-306-40615-1")