function tireStatus(psiPressures, barRange) {
  const PSI_PER_BAR = 14.5038;

  const minPsi = barRange[0] * PSI_PER_BAR;
  const maxPsi = barRange[1] * PSI_PER_BAR;

  return psiPressures.map(psi => {
    if (psi < minPsi) return "Low";
    if (psi > maxPsi) return "High";
    return "Good";
  });
}
// Example usage:
console.log(tireStatus([30, 32, 28, 35], [2, 2.5]));
// should return ["Good", "Good", "Low", "High"]

console.log(tireStatus([25, 27, 29, 31], [1.8, 2.2]));
// should return ["Low", "Low", "Good", "Good"]

console.log(tireStatus([40, 42, 38, 36], [2.5, 3]));
// should return ["High", "High", "Good", "Good"]