function calculateJetLag(departure, arrival, flightDuration, direction) {
  const offsets = {
    "Los Angeles": -8,
    "New York": -5,
    "London": 0,
    "Istanbul": 3,
    "Dubai": 4,
    "Hong Kong": 8,
    "Tokyo": 9,
  };

  const timezoneDifference = Math.abs(
    offsets[arrival] - offsets[departure]
  );

  const multiplier = direction === "east" ? 1.5 : 1.0;

  const jetLag =
    timezoneDifference + (flightDuration * 0.1) * multiplier;

  return Number(jetLag.toFixed(1));
}