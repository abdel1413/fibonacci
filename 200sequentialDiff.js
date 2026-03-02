function findDifferences(arr) {
  return arr.map((num, i) =>
    i === arr.length - 1 ? 0 : arr[i + 1] - num
  );
}
