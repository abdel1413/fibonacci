function sortAndSwap(arr) {  
let sorted =   arr.sort((a,b)=>  a-b)
console.log(sorted)
  for(let i =1; i< sorted.length; i++){
 
    if(i %3 ===0){
      let bf = sorted[i-1]


      sorted[i-1] = sorted[i]
      sorted[i] = bf
    }
  }
  console.log(sorted)
  return sorted;
}

sortAndSwap([3, 1, 2, 4, 6, 5])
 sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8]) //[1, 2, 4, 3, 5, 7, 6, 8, 9]. 