function parseUrlQuery(url) {
    const result = {};

    // Get everything after '?'
    const queryString = url.split("?")[1];

    // If no query string exists
    if (!queryString) {
        return result;
    }

    // Split into key=value pairs
    const pairs = queryString.split("&");

    for (let pair of pairs) {
        const [key, value] = pair.split("=");
        result[key] = value;
    }

    return result;
}