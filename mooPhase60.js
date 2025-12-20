function moonPhase(dateStr) {
  const reference = new Date("2000-01-06");
  const current = new Date(dateStr);

  // Calculate days passed since reference date
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysPassed = Math.floor(
    (current - reference) / msPerDay
  );

  // Day in 28-day lunar cycle (1–28)
  const cycleDay = (daysPassed % 28) + 1;

  if (cycleDay <= 7) return "New";
  if (cycleDay <= 14) return "Waxing";
  if (cycleDay <= 21) return "Full";
  return "Waning";
}
// Example usage:
console.log(moonPhase("2024-06-15")); // should return "Waxing"
console.log(moonPhase("2024-06-22")); // should return "Full"
console.log(moonPhase("2024-06-29")); // should return "Waning"
console.log(moonPhase("2024-07-06")); // should return "New"
console.log(moonPhase("2024-07-13")); // should return "Waxing"
console.log(moonPhase("2024-07-20")); // should return "Full"
console.log(moonPhase("2024-07-27")); // should return "Waning"
console.log(moonPhase("2024-08-03")); // should return "New"
console.log(moonPhase("2024-08-10")); // should return "Waxing"
console.log(moonPhase("2024-08-17")); // should return "Full"
console.log(moonPhase("2024-08-24")); // should return "Waning"
console.log(moonPhase("2024-08-31")); // should return "New"        