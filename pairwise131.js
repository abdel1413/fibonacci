function pairwise(arr, target) {
  let indices =0
  for(let i = 0; i< arr.length;i++){
    for(let j = i+1; j< arr.length;j++){

    if(  arr[i] + arr[j] ===target){
     indices += (i+j)

    }
    }
  }
 console.log(indices)
  return indices
}

// Example usage:   
pairwise([2, 3, 4, 6, 8], 10) // should return 9
pairwise([0, 0, 0, 0, 1, 1], 1) // should return 10
pairwise([1, 1, 1], 2) // should return 1
pairwise([1, 4, 2, 3, 0, 5], 7) // should return 15 
pairwise([4, 1, 5, 2, 6, 3], 7)