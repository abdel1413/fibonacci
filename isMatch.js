function isMatch(str1, str2) {
    // check if the lengths are the same
    if (str1.length !== str2.length) {
        return false;
    }

let differences = 0;
  const maxDifferences = Math.floor(fp1.length * 0.1);

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            differences++;
            if (differences > MaxDifferences) {
                return false;
            }
        }
    }

    return true;

}


// Example usage:
console.log(isMatch("abcdefghij", "abcdxfghij")); // true (1 char difference)
console.log(isMatch("abcdefghij", "abxdxfghij")); // false (2 char differences)
console.log(isMatch("short", "longer")); // false (different lengths)       
console.log(isMatch("1234567890", "1234567891")); // true (1 char difference)
console.log(isMatch("1234567890", "1234567881")); // false (2 char differences)