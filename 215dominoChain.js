function isValidDominoChain(dominoes) {

for(let i = 0 ;i< dominoes.length-1; i++){
if( dominoes[i][1] !== dominoes[i+1][0]){
  return false
} 

}
return true
}

//2nd solution
const isValidDominoChain = d => d.every((v,i)=>!i || d[i-1][1]===v[0]);

//3rd solution
const isValidDominoChain = d => d.every((v,i) => i === d.length-1 || v[1] === d[i+1][0]);


 isValidDominoChain([[6, 2], [3, 4], [4, 1]])