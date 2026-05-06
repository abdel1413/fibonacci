function findSum(arr, target) {
  
  function backtrack(start, subset, sum) {
    // valid subset
    if (sum === target && subset.length >= 2) {
      return subset;
    }

    // try remaining numbers
    for (let i = start; i < arr.length; i++) {
      let result = backtrack(
        i + 1,
        [...subset, arr[i]],
        sum + arr[i]
      );

      if (result) return result;
    }

    return null;
  }

  return backtrack(0, [], 0) || "Sum not found";
}
