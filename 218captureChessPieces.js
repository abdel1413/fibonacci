function getCapturedValue(pieces) {
  const initial = {
    P: 8,
    R: 2,
    N: 2,
    B: 2,
    Q: 1,
    K: 1
  };

  const values = {
    P: 1,
    R: 5,
    N: 3,
    B: 3,
    Q: 9,
    K: 0
  };

  // Count pieces you still have
  const count = {};
  for (let p of pieces) {
    count[p] = (count[p] || 0) + 1;
  }

  // Calculate remaining (captured)
  const remaining = {};
  for (let p in initial) {
    remaining[p] = initial[p] - (count[p] || 0);
  }

  // Check if King is captured
  if (remaining["K"] > 0) {
    return "Checkmate";
  }

  // Calculate total value of captured pieces
  let totalValue = 0;
  for (let p in remaining) {
    totalValue += remaining[p] * values[p];
  }

  return totalValue;
}
