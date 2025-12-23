function calculateTips(price, customTip) {
  const amount = parseFloat(price.replace("$", ""));
  const custom = parseFloat(customTip.replace("%", "")) / 100;

  const tips = [0.15, 0.20, custom];

  return tips.map(tip =>
    `$${(amount * tip).toFixed(2)}`
  );
}
// Example usage:
console.log(calculateTips("$50.00", "18%"));        
// should return ["$7.50", "$10.00", "$9.00"]
console.log(calculateTips("$23.45", "22%"));        
// should return ["$3.52", "$4.69", "$5.16"]
console.log(calculateTips("$100.00", "25%"));       
// should return ["$15.00", "$20.00", "$25.00"]
console.log(calculateTips("$75.30", "10%"));        
// should return ["$11.30", "$15.06", "$7.53"]
console.log(calculateTips("$60.00", "30%"));        
// should return ["$9.00", "$12.00", "$18.00"]