function getSemifinalMatchups(teams) {
  const ranked = teams.map(entry => {
    const [team, record] = entry.split(": ");
    const [W, OTW, OTL, L] = record.split("-").map(Number);

    const points = (W * 3) + (OTW * 2) + (OTL * 1);
   console.log({team,record})
    return { team, points };
  });

  // Sort by points descending
  ranked.sort((a, b) => b.points - a.points);
  console.log(ranked)

  return `The semi-final games will be ${ranked[0].team} vs ${ranked[3].team} and ${ranked[1].team} vs ${ranked[2].team}.`;
}

getSemifinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]) 
