function getNumberWords(num) {
    const ones = [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen",
        "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy",
        "eighty", "ninety"
    ];

    // 0–19
    if (num < 20) {
        return ones[num];
    }

    const ten = Math.floor(num / 10);
    const one = num % 10;

    // multiples of 10
    if (one === 0) {
        return tens[ten];
    }

    // 21–99
    return tens[ten] + "-" + ones[one];
}