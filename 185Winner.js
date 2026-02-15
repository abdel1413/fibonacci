function skiJumpMedal(distance, style, wind, kPoint) {
  const myScore = distance + style + wind + kPoint;

  const others = [
    165.5, 172.0, 158.0, 180.0,
    169.5, 175.0, 162.0, 170.0
  ];

  const allScores = [...others, myScore].sort((a, b) => b - a);

  const position = allScores.indexOf(myScore);

  if (position === 0) return "Gold";
  if (position === 1) return "Silver";
  if (position === 2) return "Bronze";
  return "No Medal";
}
