function costToFill(tankSize, fuelLevel, pricePerGallon) {
   const gallonNeeded = tankSize - fuelLevel;
   const cost = gallonNeeded * pricePerGallon
   console.log(cost)
  return `$${cost.toFixed(2)}`;
}

costToFill(20, 0, 4.00) // should return "$80.00"
costToFill(15, 5, 3.50) // should return "$35.00"
costToFill(12, 6, 2.75) // should return "$16.50"
costToFill(18, 10, 3.25) // should return "$26.00"
costToFill(25, 20, 4.10) // should return "$20.50"
costToFill(30, 15, 3.80) // should return "$57.00"