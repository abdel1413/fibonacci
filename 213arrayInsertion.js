function insertIntoArray(arr, value, index) {
  if(!arr.length && !value && !index) return [0]
   for(let i = 0; i< arr.length;i++){
     if(i === index ){
       arr.splice(index, 0, value)
     }
   }
   console.log(arr)
  return arr;
}

//2nd solution
function insertIntoArray(arr, value, index) {
  if(!arr.length && !value && !index) return [0]
  arr.splice(index, 0, value)
  console.log(arr)
 return arr;
}   
//3rd solution
function insertValue(arr, value, index) {
  return [
    ...arr.slice(0, index),
    value,
    ...arr.slice(index)
  ];
}


 insertIntoArray([2, 4, 8, 10], 6, 2)