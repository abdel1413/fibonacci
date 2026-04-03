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

//pascalRow(5)
pascalRow(5)