function complementaryDNA(strand) {
  console.log(strand)
  const comp = {
    A: "T",
    C: "G",
    T: "A",
    G: "C"

  }
 let result =  strand.split("").map(char => comp[char]).join("")
 console.log(result)
  return strand.split("").map(char => comp[char]).join("");
}


complementaryDNA("ACGT"); // should return "TGCA"
complementaryDNA("TTTT"); // should return "AAAA"
complementaryDNA("AGCT"); // should return "TCGA"
complementaryDNA("CGTA"); // should return "GCAT"
complementaryDNA("GATTACA"); // should return "CTAATGT"