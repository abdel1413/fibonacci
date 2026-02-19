function avalancheRisk(snow, slope) {
  const table = {
    Gentle: {
      Shallow: "Safe",
      Moderate: "Safe",
      Deep: "Safe"
    },
    Steep: {
      Shallow: "Safe",
      Moderate: "Risky",
      Deep: "Risky"
    },
    "Very Steep": {
      Shallow: "Safe",
      Moderate: "Risky",
      Deep: "Risky"
    }
  };

  return table[slope][snow];
}
