function countMedals(results) {
  const table = {};

  // Count medals
  results.forEach(([gold, silver, bronze]) => {
 
    [gold, silver, bronze].forEach(country => {
    
      if (!table[country]) {
        table[country] = { gold: 0, silver: 0, bronze: 0 };
      }
    });

    table[gold].gold++;
    table[silver].silver++;
    table[bronze].bronze++;
  });

  // Convert to sortable array
  const sorted = Object.entries(table).map(([country, m]) => ({
    country,
    gold: m.gold,
    silver: m.silver,
    bronze: m.bronze,
    total: m.gold + m.silver + m.bronze
  }));

  // Sort by gold desc, then country name asc
  sorted.sort((a, b) =>
    b.gold - a.gold || a.country.localeCompare(b.country)
  );

  // Build CSV
  const header = "Country,Gold,Silver,Bronze,Total";

  const rows = sorted.map(c =>
    `${c.country},${c.gold},${c.silver},${c.bronze},${c.total}`
  );

  return [header, ...rows].join("\n");
}


