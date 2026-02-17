function getDifficulty(track) {
  let score = 0;

  for (let i = 0; i < track.length; i++) {
    const current = track[i];
    const prev = track[i - 1];

    if (current === "L" || current === "R") {
      if (
        (prev === "L" && current === "R") ||
        (prev === "R" && current === "L")
      ) {
        score += 15;
      } else {
        score += 5;
      }
    }
  }

  if (score <= 100) return "Easy";
  if (score <= 200) return "Medium";
  return "Hard";
}
