function checkEligibility(athletes, sledWeight) {
  const teamSize = athletes.length;

  const minSled = {
    1: 162,
    2: 170,
    4: 210
  };

  const maxTotal = {
    1: 247,
    2: 390,
    4: 630
  };

  // Invalid team size safety (optional)
  if (!minSled[teamSize]) return "Not Eligible";

  const athletesWeight = athletes.reduce((sum, w) => sum + w, 0);
  const totalWeight = athletesWeight + sledWeight;

  if (sledWeight < minSled[teamSize]) return "Not Eligible";
  if (totalWeight > maxTotal[teamSize]) return "Not Eligible";

  return "Eligible";
}
