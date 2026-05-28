function isValidISBN13(str) {

    // Only digits and hyphens allowed
    if (!/^[\d-]+$/.test(str)) {
        return false;
    }

    // Remove hyphens
    const digits = str.replace(/-/g, "");

    // Must contain exactly 13 digits
    if (digits.length !== 13) {
        return false;
    }

    let sum = 0;

    for (let i = 0; i < digits.length; i++) {

        const digit = Number(digits[i]);

        // Alternate multipliers: 1,3,1,3...
        if (i % 2 === 0) {
            sum += digit * 1;
        } else {
            sum += digit * 3;
        }
    }

    // Valid if divisible by 10
    return sum % 10 === 0;
}
//  2en version 
function isValidISBN13(str) {

    // Remove hyphens
    const digits = str.replace(/-/g, "");

    // Check format
    if (!/^\d{13}$/.test(digits)) {
        return false;
    }

    const sum = [...digits].reduce((total, digit, index) => {

        const multiplier = index % 2 === 0 ? 1 : 3;

        return total + Number(digit) * multiplier;

    }, 0);

    return sum % 10 === 0;
}
