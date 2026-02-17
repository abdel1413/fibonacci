function getHillRating(drop, distance, type) {
  const steepness = drop / distance;

  let adjusted;

  if (type === "Downhill") {
    adjusted = steepness * 1.2;
  } else if (type === "Slalom") {
    adjusted = steepness * 0.9;
  } else {
    adjusted = steepness * 1.0;
  }

  let color;

  if (adjusted <= 0.1) {
    color = "Green";
  } else if (adjusted <= 0.25) {
    color = "Blue";
  } else {
    color = "Black";
  }

  return color;
}
