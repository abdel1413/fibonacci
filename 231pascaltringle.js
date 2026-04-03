function pascalRow(n) {

    //new row is bult from the previous row
    //first and last element is always 1
    //each element is the sum of the two elements above it
  let row = [1]
 for(let i = 1 ; i< n; i++){
    let newRow = [1]
    for(let j = 1 ; j < row.length;j++){
      newRow.push(row[j-1] + row[j])
     console.log(row)
     
    }
    newRow.push(1)
    row = newRow;
 }
  console.log(row)
  return row;
}


//2nd version 

function pascalRow(n) {
  let row = [1]
  for(let i = 1; i< n; i++){
    row = [1, ...row.slice(1).map((num, index)=> num + (row[index -1]||0)),1]
  }
 console.log(row)
  return row;
}


//3rd version
function pascalRow(n) {
  let row = [1]
  while(--n){

    row = [1, ...row.slice(1).map((num, index)=> num + (row[index])),1]
  }
  }
pascalRow(5)




//pascalRow(5)
pascalRow(5) // [1, 4, 6, 4, 1]