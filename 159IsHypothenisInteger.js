function isIntegerHypotenuse(a, b) {
 const hypothenis = Math.sqrt(a*a + b*b)
  return Number.isInteger(hypothenis);
}

isIntegerHypotenuse(3, 4) // should return true
isIntegerHypotenuse(5, 12) // should return true
isIntegerHypotenuse(1, 1) // should return false
isIntegerHypotenuse(2, 2) // should return false