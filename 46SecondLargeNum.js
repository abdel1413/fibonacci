function secondLargest(arr) {
  // remove duplicates
  const arrSet = [...new Set(arr)]
  console.log(arrSet)
  //check if length is less than 2
  if(arrSet.length < 2) return null;
  // sort in descending order
   arrSet.sort((a,b)=> b-a)
   
 console.log(arrSet)
  return arrSet[1];
}

secondLargest([1, 2, 3, 4])  // should return 3 
secondLargest([10, 5, 10, 8])  // should return 8
secondLargest([7, 7, 7])  // should return null
secondLargest([-1, -2, -3, -4])  // should return -2
secondLargest([5])  // should return null
secondLargest([0, 0, 0, 1])  // should return 0 