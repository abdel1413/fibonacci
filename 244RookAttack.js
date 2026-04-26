function rookAttack(rook1, rook2) {
 console.log(rook1, rook2)
  return rook1[0]===rook2[0] || rook1[1] ===rook2[1];
}


rookAttack("A1", "A8")