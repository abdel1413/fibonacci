function sortNumbers(str) {
  return str
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);
}

// time complexity:
 //split =>O(n)
 // map => O(n)
 // sort() => O(n log n)
  //=>>> time complexity is O(n log n)

  //space complexity :
  // split() : create a new array of string => O(n)
  // map(): return a new array of numbers => O(n)
  // sort(): sort existing array in place 
  // ===>>> space complexity is O(n)
