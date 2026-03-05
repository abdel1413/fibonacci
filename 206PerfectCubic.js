function countPerfectCubes(a, b) {
 let min= Math.min(a,b)
 let max = Math.max(a,b)
 let start = Math.ceil(Math.cbrt(min))
 let end = Math.floor(Math.cbrt(max))
  
  return Math.max(0, end-start+1);
}   
