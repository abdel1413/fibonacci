function mirror(str) {
  let reversed =""
    for(let i=str.length-1; i>=0; i--){
     console.log(str[i])
     reversed+=str[i]
   }
   console.log(str+reversed)
  return str+reversed;
}
mirror("freeCodeCamp") // should return "freeCodeCampmpaCodeeerf"