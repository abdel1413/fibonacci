function parseRomanNumeral(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
            total -= values[s[i]];
        } else {
            total += values[s[i]];
        }
    }

    console.log(total)

    return total;
}

parseRomanNumeral("III")
// should return 3 (I + I + I)
parseRomanNumeral("IV")
// should return 4 (V - I)
parseRomanNumeral("IX")
// should return 9 (X - I)
parseRomanNumeral("LVIII")
// should return 58 (L + V + I + I + I)
parseRomanNumeral("MCMXCIV")
// should return 1994 (M + CM + XC + IV)    