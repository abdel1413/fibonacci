function getNextLocation(matrix) {
    let prev = null;
    let curr = null;

     // find previous  1 and 2
     for(let r= 0; r< matrix.length; r++){
       for(let c=0; c< matrix[r].length; c++){
         if(matrix[r][c]=== 1) prev=[r,c]
         if(matrix[r][c]=== 2) curr=[r,c]
       }
     }

     //destructure the prev and curr
     let [pr,pc] = prev;
     let [cr, cc] = curr;

     // find the direction from prev to curr
     let dr = cr - pr;
     let dc = cc - pc;


// get the height and width;
let height = matrix.length;
let width = matrix[0].length;

     //Before returning the next position check if it's within bounds
     //check if next step will hit the wall
     if(cr + dr < 0 || cr + dr >= height) dr = -dr;
     if(cc + dc < 0 ||cc + dc >= width) dc= -dc
    
    
  //now move to next position
  return [cr + dr , cc + dc];
}



  getNextLocation([[0,0,0,0],[0,0,0,0],[0,1,2,0],[0,0,0,0]])
