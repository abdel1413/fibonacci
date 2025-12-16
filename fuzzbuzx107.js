function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  console.log(result)
  return result;
}

// Example usage:    

fizzBuzz(4) // should return [1, 2, "Fizz", 4].
fizzBuzz(15) // should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"].  

fizzBuzz(10) // should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"].  
fizzBuzz(1) // should return [1].   
fizzBuzz(0) // should return [].
fizzBuzz(5) // should return [1, 2, "Fizz", 4, "Buzz"].

