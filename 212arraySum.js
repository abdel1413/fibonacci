function sumArray(numbers) {
   
  return numbers.reduce((acc, next)=> acc+next,0);
}

sumArray([1, 2, 3, 4, 5]) 