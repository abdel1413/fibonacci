function compare(secret, guess) {
  const result = Array(secret.length).fill("0");
  const used = Array(secret.length).fill(false);

  // Step 1: Exact matches ("2")
  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      result[i] = "2";
      used[i] = true;
    }
  }

  // Step 2: Partial matches ("1")
  for (let i = 0; i < guess.length; i++) {
    if (result[i] !== "0") continue;

    for (let j = 0; j < secret.length; j++) {
      if (!used[j] && guess[i] === secret[j]) {
        result[i] = "1";
        used[j] = true;
        break;
      }
    }
  }

  return result.join("");
}
// Example usage:
console.log(compare("1807", "7810")); // should return "1111"
console.log(compare("1234", "4321")); // should return "1111"
console.log(compare("1122", "2211")); // should return "1111"
console.log(compare("1234", "1234"));