function buildAcronym(phrase) {
    const ignore = new Set(["a", "for", "an", "and", "by", "of"]);
    
    return phrase
        .split(" ")
        .filter((word, index) => index === 0 || !ignore.has(word.toLowerCase()))
        .map(word => word[0].toUpperCase())
        .join("");
}


 buildAcronym("Search Engine Optimization") // should return "SEO"
 buildAcronym("As Soon As Possible") // should return "ASAP"
 buildAcronym("Read The Fine Manual") // should return "RTFM"
 buildAcronym("Complementary Metal Oxide Semiconductor") // should return "CMOS"    
 buildAcronym("Frequently Asked Questions")  // should return "FAQ"
 buildAcronym("Graphics Interchange Format") // should return "GIF"
 buildAcronym("For Your Information") // should return "FYI"