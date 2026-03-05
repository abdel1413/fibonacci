function isFlat(arr) {
  //Write a function that takes an array as input and 
  // returns true if the array is flat (i.e. it does 
  // not contain any nested arrays), and false otherwise.
  // Hint: You can use the Array.isArray() method 
  // to check if an element is an array.
  return !arr.some(Array.isArray);;
}

isFlat([1, 0, false, true, "a", "b"]) // should return true
isFlat([1, [0], false, true, "a", "b"]) // should return false
isFlat([[1], 0, false, true, "a", "b"]) // should return false