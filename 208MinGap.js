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