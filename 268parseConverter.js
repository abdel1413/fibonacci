function convertParsecs(parsecs) {

    // Odd = time
    if (parsecs % 2 !== 0) {
        return parsecs * 2;
    }

    // Even = distance
    return parsecs * 3;
}