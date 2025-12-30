function findMissingNumbers(arr) {
  const missArr = []
 for(let i =0; i<=Math.max(...arr);i++){
   console.log(i,arr[i])
   if(!arr.includes(i) && i> 0){
      missArr.push(i)
   }
 }
 console.log(missArr)
  return missArr;
}


//2ns approach
function findMissingNumbers(arr) {
  if (arr.length === 0) return [];

  const max = Math.max(...arr);
  const seen = new Set(arr);
  const missing = [];

  for (let i = 1; i <= max; i++) {
    if (!seen.has(i)) {
      missing.push(i);
    }
  }

  return missing;
}


findMissingNumbers([1, 3, 5]) // should return [2, 4]
findMissingNumbers([0, 2, 3, 7]) // should return [1, 4, 5, 6]
findMissingNumbers([4, 5, 6, 8, 9]) // should return [1, 2, 3, 7]
findMissingNumbers([1, 2, 3, 4, 5]) // should return []
findMissingNumbers([]) // should return []
findMissingNumbers([0, 1, 2]) // should return []
findMissingNumbers([10, 12, 13]) // should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]