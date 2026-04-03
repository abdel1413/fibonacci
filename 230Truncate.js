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


//2nd version
const truncateText = s => {
  const w = c =>
    "ilI.".includes(c) ? 1 :
    "fjrt ".includes(c) ? 2 :
    "abcdeghkmnopqrstuvwxyzJL".includes(c) ? 3 : 4;

  let t = 0, res = "";

  for (let c of s) {
    if (t + w(c) + 3 > 50) return res + "...";
    t += w(c);
    res += c;
  }
  return res;
};