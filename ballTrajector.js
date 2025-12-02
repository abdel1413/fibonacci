function getNextLocation(matrix) {
    let prev = null;
    let curr = null;
    for(let r = 0; r< matrix.length;r++){
      for (let c = 0; c< matrix[0].length; c++){
         if(matrix[r][c] === 1) prev = [r,c]
         if(matrix[r][c] === 2) curr = [r,c]
      }


      if (!prev || !curr) {
        throw new Error("Matrix must contain a previous location (1) and a current location (2)");
    }

       let[pr,pc] = prev;
       let[cr,cc] = curr;
     
       //compute the direction movement
       let dr = pc -pr;
       let dc = cc - cr;

       //find next positon;
      let nextR = dr + cr;
      let nextCol = dc + cc;

        //height and withd 
        let height = matrix.length;
        let width = matrix[0].length;
        //bounce vertical wall (top/bottom)
        if(nextR < 0 ||nextR > height ){
          dr *=-1;
          nextR = dr + cr;
        }

        if(nextCol < 0 || nextCol > width){
          dc *= -1;
          nextCol = dc + cc;
        }
    }
  return [nextR, nextCol];
}



console.log(
  getNextLocation([[0,0,0,0],[0,0,0,0],[0,1,2,0],[0,0,0,0]])
);