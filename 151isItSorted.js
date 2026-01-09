function isSorted(arr) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      ascending = false;
    }
    if (arr[i] > arr[i - 1]) {
      descending = false;
    }
  }

  if (ascending) return "Ascending";
  if (descending) return "Descending";
  return "Not sorted";
}
// Example usage:
console.log(isSorted([1, 2, 3, 4, 5])); // should return "Ascending"
console.log(isSorted([5, 4, 3, 2, 1])); // should return "Descending"
console.log(isSorted([1, 3, 2, 4, 5])); // should return "Not sorted"
