function scoreCurling(house) {
  const stones = [];

  // Collect all stones with their distance
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const team = house[r][c];

      if (team === "R" || team === "Y") {
        const dist = Math.max(Math.abs(r - 2), Math.abs(c - 2));
        stones.push({ team, dist });
      }
    }
  }

  if (!stones.length) return "No points awarded";

  // Sort by distance (closest first)
  stones.sort((a, b) => a.dist - b.dist);

  const closestDist = stones[0].dist;

  // If both teams are equally closest → no score
  const closestTeams = stones
    .filter(s => s.dist === closestDist)
    .map(s => s.team);

  if (new Set(closestTeams).size > 1) {
    return "No points awarded";
  }

  const scoringTeam = stones[0].team;

  // Find opponent's closest distance
  const opponent = scoringTeam === "R" ? "Y" : "R";

  const opponentStone = stones.find(s => s.team === opponent);
  const opponentDist = opponentStone ? opponentStone.dist : Infinity;

  // Count scoring stones
  const points = stones.filter(
    s => s.team === scoringTeam && s.dist < opponentDist
  ).length;

  return points > 0
    ? `${scoringTeam}: ${points}`
    : "No points awarded";
}
