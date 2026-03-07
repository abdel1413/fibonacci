function smallestGap(str) {
  let minGap = Infinity
  let result =''
  for(let i = 0; i< str.length;i++){
    for(let j = i+1; j< str.length; j++ ){
      if(str[i]=== str[j]){
        let gap = j-i-1;
        if(gap < minGap){
          minGap = gap
          result = str.slice(i+1,j)
        }
      }
    }
  }

  return result;
}


//time complexity O(n^2) space complexity O(n) 


//2nd solution
function smallestGap(str) {
  const charIndices = {};
  let minGap = Infinity;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in charIndices) {
      const gap = i - charIndices[char] - 1;
      if (gap < minGap) {
        minGap = gap;
        result = str.slice(charIndices[char] + 1, i);
      }
    }
    charIndices[char] = i;
  }

  return result;
}

//time complexity O(n) space complexity O(n)    
