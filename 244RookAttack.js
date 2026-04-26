function rookAttack(rook1, rook2) {
 console.log(rook1, rook2)
  return rook1[0]===rook2[0] || rook1[1] ===rook2[1];
}

//2nd version
function rookAttack(r1, r2) {
    let col1 = r1[0, row1=r1[1]]
    let col2 = r2[0, row2=r2[1]]

  return col1 === col2 || row1 === row2 ;
}

rookAttack("A1", "A8")