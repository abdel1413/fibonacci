function fuelToAdd(currentGallons, requiredLiters) {
 //1 =>3.78541
 //? 40

 const liters= 3.78541
 const currentLiters = currentGallons * liters
 if(currentLiters >= requiredLiters) return 0
 const neededLiters = requiredLiters- currentLiters
 const neededGallons = neededLiters/liters
 
  return Math.ceil(neededGallons);
}

// Example usage:
fuelToAdd(5, 40) // should return 6
fuelToAdd(10, 20) // should return 0
fuelToAdd(0, 15) // should return 4
fuelToAdd(7.5, 30) // should return 2
fuelToAdd(3, 50) // should return 10
fuelToAdd(12, 45) // should return 0