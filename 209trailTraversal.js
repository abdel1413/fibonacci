function navigateTrail(map) {
  console.log(map)

  let grid = map.map(r => r.split(""))
  console.log('g',grid)
  let rows = grid.length;
  console.log('ros',rows)
  let cols = grid[0].length;
  console.log('cols',cols)

  const directions = [
    [0,1, "R"],
    [1,0, "D"],
    [0,-1, "L"],
    [-1,0, "U"],
  ]

  let ro, co;
  //find C or current location
  for(let i = 0; i< rows;i++){
    for(let j = 0; j< cols;j++){
      if(grid[i][j]==="C"){
        ro = i;
        co = j;
      }
    }
  }
  console.log('ro', ro, 'co', co)

  let result = ""
  while(grid[ro][co] !=="G"){
    for(let [dr, dc,move] of directions){
      console.log('dr',dr, 'dc', dc, 
      'moves', move)
      const nr = ro + dr;
      const nc = co + dc;
      console.log('nr', nr, 'nc', nc)
      if(
        nr >=0 && nr < rows 
        && nc >= 0 && nc < cols
        && (grid[nr][nc] === "T" || grid[nr][nc] ==="G") ){
        result +=move
        console.log('res',result)
        grid[ro][co] ="-" //marked as visited
        ro = nr;
        co = nc;

        console.log("nro", ro, 'nco', co)
     break;

      }

    }
  }


 console.log('ress',result)
  return result;
}

navigateTrail([
  "-----", 
  "--TTG",
   "--T--", 
   "--T--", 
   "CTT--"])
   //RRUUURR


   //shortest version
   function trailMoves(map) {
  map = map.map(r => r.split(""));
  
  let r = map.findIndex(row => row.includes("C"));
  let c = map[r].indexOf("C");
  
  const dirs = [[0,1,"R"],[1,0,"D"],[0,-1,"L"],[-1,0,"U"]];
  let res = "";

  while (map[r][c] !== "G") {
    for (let [dr,dc,m] of dirs) {
      let nr = r + dr, nc = c + dc;
      if (map[nr]?.[nc] === "T" || map[nr]?.[nc] === "G") {
        res += m;
        map[r][c] = "-";
        r = nr; c = nc;
        break;
      }
    }
  }
  return res;
}

