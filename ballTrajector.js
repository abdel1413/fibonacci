// function getNextLocation(matrix) {
//     let prev = null;
//     let curr = null;

//     for(let r = 0; r < matrix.length;r++){
//       for (let c = 0; c < matrix[r].length; c++){
//          if(matrix[r][c] === 1) prev = [r,c];
//          if(matrix[r][c] === 2) curr = [r,c] ; 
//       }
//        if (!prev || !curr) throw new Error("Matrix must contain 1 and 2");

//        let[pr,pc] = prev;
//        let[cr,cc] = curr;
     
//        //compute the direction movement
//        let dr = cr-pr;
//        let dc = cc - pc;

      

//         //height and withd 
//         let H = matrix.length;
//         let width = matrix[0].length;
//         //bounce vertical wall (top/bottom)
//          if (cr + dr < 0 || cr + dr >= H) dr = -dr;
//      if (cc + dc < 0 || cc + dc >= W) dc = -dc;
//     }
    
//   return [cr + dr , cc + dc];
// }


///

function getNextLocation(matrix) {
    let prev = null;
    let curr = null;

    // Find previous (1) and current (2)
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 1) prev = [r, c];
            if (matrix[r][c] === 2) curr = [r, c];
        }
    }

    if (!prev || !curr) throw new Error("Matrix must contain 1 and 2");

    let [pr, pc] = prev;
    let [cr, cc] = curr;

    // Direction from prev → current
    let dr = cr - pr;
    let dc = cc - pc;

    const H = matrix.length;
    const W = matrix[0].length;

    // BEFORE MOVING, detect if next step would hit a wall
    if (cr + dr < 0 || cr + dr >= H) dr = -dr;
    if (cc + dc < 0 || cc + dc >= W) dc = -dc;

    // Now move in the (possibly corrected) direction
    return [cr + dr, cc + dc];
}



  getNextLocation([[0,0,0,0],[0,0,0,0],[0,1,2,0],[0,0,0,0]])
