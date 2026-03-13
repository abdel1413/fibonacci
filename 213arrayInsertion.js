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

 insertIntoArray([2, 4, 8, 10], 6, 2)