function difference(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);

  const result = [];

  // Items in a but not in b
  for (const item of a) {
    if (!setB.has(item)) {
      result.push(item);
    }
  }

  // Items in b but not in a
  for (const item of b) {
    if (!setA.has(item)) {
      result.push(item);
    }
  }

  return result;
}

difference([1, 2, 3], [3, 4, 5])