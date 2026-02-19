function startDelays(scores) {
  const best = Math.max(...scores);

  return scores.map(score =>
    Math.ceil((best - score) * 1.5)
  );
}
