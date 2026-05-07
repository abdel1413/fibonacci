function findOrg(acronym) {
  const organizations = [
    "National Avocado Storage Authority",
    "Cats Infiltration Agency",
    "Fluffy Beanbag Inspectors",
    "Department Of Jelly",
    "Wild Honey Organization",
    "Eating Pancakes Administration"
  ];

  for (let org of organizations) {

    let initials = org
      .split(" ")
      .map(word => word[0])
      .join("");

    if (initials === acronym) {
      return org;
    }
  }
}