function getNextBingoNumber(n) {
  //split n
  // check if check the number to a range
  // if it is > upper range go to 
  // next letter
  // otherwise return next number
  let letter = n.substring(0,1), num = Number(n.substring(1))
  let letterNumObj = {
    "B": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,],
    "I": [16,17,18,19,20,21,22,23,24,25,26,27,28.29,30,],
    "N":[31,32,33,34,35,36,37,38,39,40,41,42,43,44, 45,],
    "G":[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
    "O":[61,62,63,64,65,66,67,68,69,70, 71,72,73,74,75],
  }
 
  console.log('let',letter)
  let keys = Object.keys(letterNumObj)
    let result, newLetter; 
    
      console.log('len',letterNumObj[letter])
      let lastDigit = letterNumObj[letter][letterNumObj[letter].length-1]
      console.log('lastd',lastDigit)
    if(num >= lastDigit ){
      //  if(letter === keys[keys.length-1]){
      //      newLetter = keys[0]
      //      result = `${newLetter}1`
      //  }
      let newLetter 
     for(let i = 0; i< keys.length;i++){
        if(letter === keys[i]){
          newLetter = keys[i+1]
        }
     }
     console.log('new',newLetter)
     let newLOb = letterNumObj[newLetter]
   
    

      }else{
        console.log(num)
     result= `${letter}${num +1}`
    }
    console.log('res',result)
  return  result;
}

getNextBingoNumber("B10")
getNextBingoNumber("O75")
getNextBingoNumber("I30")