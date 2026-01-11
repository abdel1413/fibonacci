
function isCircularPrime(num) {
  // Single-digit primes are circular primes
  if (num < 10) return isPrime(num);

  // Optimization: eliminate obvious failures
  if (/[024568]/.test(num.toString())) return false;
  const rotations = getRotations(num);
  return rotations.every(isPrime);
}


function getRotations(num) {
  const str = num.toString();
  const rotations = [];

  for (let i = 0; i < str.length; i++) {

    
    const rotated = str.slice(i) + str.slice(0, i);
    console.log('s', str.slice(i) + str.slice(0,i))
    console.log(rotated)
    rotations.push(Number(rotated));
    console.log(rotations)
  }

  return rotations;
}

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

 isCircularPrime(197); // should return true
 isCircularPrime(23);  // should return false
 isCircularPrime(7);   // should return true
 isCircularPrime(1193); // should return true