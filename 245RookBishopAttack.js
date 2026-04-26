function rookBishopAttack(rook, bishop) {
   
    let col0 = rook.charCodeAt(0)
    let row0 = +rook[1]

    let col1 = bishop.charCodeAt(0)
    let row1 = +bishop[1]
   
    //if on align vertically or horizontaly
    // rook attack bishop
    if(col0 ===col1|| row0 === row1){
      return "rook"
      //check if the difference of 
      //abs value of columns === abs row difference
    }else if(Math.abs(col0 - col1)=== Math.abs(row0-row1)){

  return "bishop";
    }else {
      return "neither"
    }
}

rookBishopAttack("A1", "A5")