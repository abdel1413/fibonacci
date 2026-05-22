function isNarcissistic(num) {
    // Convert number to array of digits
    const digits = String(num).split("");

    // Number of digits
    const power = digits.length;

    // Sum each digit raised to the power
    const sum = digits.reduce((total, digit) => {
        return total + Number(digit) ** power;
    }, 0);

    return sum === num;
}