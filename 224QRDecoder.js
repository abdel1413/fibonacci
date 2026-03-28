function decodeQr(qrCode) {
   //convert to array of array
   let grid = qrCode.map(r => r.split(""))
   console.log(grid)

   //rotate to 90 deg clockwise
   // 1 transpose 
   // 2 reverse
   const rotate = m => m[0].map((_ , i)=>m.map(r => r[i]).reverse())

   console.log('g',rotate(grid))

   //check orientation markers
   let isValid = m =>
    m[0][0] === '1'&& m[0][1] === "1"&&
    m[1][0] === '1'&& m[1][1] === '1'&&

    m[0][4] === '1' && m[0][5] === '1'&&
    m[1][4] === '1'&& m[1][5] === '1'&&

    m[4][0] === '1' && m[4][1] ==='1'&&
    m[5][0] === '1' && m[5][1] === '1'

    //try all the rotation
    for(let i = 0 ; i< 4; i++){
      if(isValid(grid)) break;

      //udate grid
      grid = rotate(grid)
    }

    //collect data excluding 3 markers 
    let result='' ;
    for(let i = 0 ; i< 6 ; i++){
      for(let j = 0; j<6; j++){
        //skip top-left
        if(i < 2 && j< 2) continue;
        //skip top-right
        if(i < 2 && j >= 4) continue;
        //skip bottom-left
        if(i >=4 && j< 2) continue
        result+= grid[i][j]
      }
    }
  console.log(result)


  return result;
}

decodeQr(["110011", "110011", "000000", "000000", "110000", "110001"])