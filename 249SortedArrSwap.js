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

//2nd version
function sortAndSwap(arr) {
  let sorted = arr.sort((a, b) => a - b);

  for (let i = 2; i < sorted.length; i += 3) {
    [sorted[i - 1], sorted[i]] = [sorted[i], sorted[i - 1]];
  }

  return sorted;
}

//3rd version
function sortAndSwap(arr) {
  let sorted = arr.sort((a, b) => a - b);

  for (let i = 2; i < sorted.length; i += 3) {
    let temp = sorted[i - 1];
    sorted[i - 1] = sorted[i];
    sorted[i] = temp;
  }

  return sorted;
}
sortAndSwap([3, 1, 2, 4, 6, 5])
 sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8]) //[1, 2, 4, 3, 5, 7, 6, 8, 9]. 