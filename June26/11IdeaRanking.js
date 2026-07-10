function analyzeIdeas(ideas) {
  return ideas
    .sort((a, b) => {
      const expectedA =
        ((a[1] + 4 * a[2] + a[3]) / 6) * a[0].length;

      const expectedB =
        ((b[1] + 4 * b[2] + b[3]) / 6) * b[0].length;

      return expectedA - expectedB;
    })
    .map(idea => idea[0]);
}