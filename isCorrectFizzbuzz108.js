function isFizzBuzz(arr) {
  for (let i = 0; i < arr.length; i++) {
    const num = i + 1;

    let expected;
    if (num % 15 === 0) {
      expected = "FizzBuzz";
    } else if (num % 3 === 0) {
      expected = "Fizz";
    } else if (num % 5 === 0) {
      expected = "Buzz";
    } else {
      expected = num;
    }

    if (arr[i] !== expected) {
      return false;
    }
  }

  return true;
}
// Example usage:
console.log(isFizzBuzz([1, 2, "Fizz", 4])); // true
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])); // true
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"])); // true
console.log(isFizzBuzz([1])); // true
console.log(isFizzBuzz([])); // true    
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz"])); // true
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11]  )); // false