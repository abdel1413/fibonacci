function arrayDiff(arr1, arr2) {
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));

  return [...onlyInArr1, ...onlyInArr2].sort();
}


//2nd approach
function uniqueToEachArray(arr1, arr2) {
    const count = new Map();

    for (const val of arr1) {
        count.set(val, (count.get(val) || 0) + 1);
    }

    for (const val of arr2) {
        count.set(val, (count.get(val) || 0) + 1);
    }

    return Array.from(count.entries())
        .filter(([_, occurrences]) => occurrences === 1)
        .map(([value]) => value)
        .sort();
}



// Example usage:
console.log(arrayDiff([1, 2, 3], [2]));          // should return [1, 3]
console.log(arrayDiff([1, 2, 2, 3], [2]));       // should return [1, 3]
console.log(arrayDiff([1, 2, 3, 4], [5]));       // should return [1, 2, 3, 4]
console.log(arrayDiff([1, 2, 3], [1, 2, 3]));    // should return []
console.log(arrayDiff([], [1, 2]));              // should return []
console.log(arrayDiff([1, 2, 3], []));           // should return [1, 2, 3]