function truncateText(str) {
  const getWidth = (ch) => {
    if ("ilI.".includes(ch)) return 1;
    if ("fjrt ".includes(ch)) return 2;
    if ("abcdeghkmnopqrstuvwxyzJL".includes(ch)) return 3;
    if ("ABCDEFGHKMNOPQRSTUVWXYZ".includes(ch)) return 4;
    return 0;
  };

  let total = 0;
  let result = "";

  for (let ch of str) {
    let w = getWidth(ch);

    // check if adding this char + "..." exceeds 50
    if (total + w + 3 > 50) {
      return result + "...";
    }

    total += w;
    result += ch;
  }

  return result; // no truncation needed
}