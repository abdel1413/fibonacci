function scaleRecipe(ingredients, scale) {
  return ingredients.map(item => {
    const parts = item.split(" ");
    const quantity = parseFloat(parts[0]);
    const unit = parts[1];
    const ingredient = parts.slice(2).join(" ");

    const scaledQty = quantity * scale;

    // Remove trailing zeros (e.g. 2.0 → 2, 1.50 → 1.5)
    const formattedQty = Number.isInteger(scaledQty)
      ? scaledQty.toString()
      : scaledQty.toString().replace(/\.0+$|(\.\d*[1-9])0+$/, "$1");

    return `${formattedQty} ${unit} ${ingredient}`;
  });
}
// Example usage:
const originalRecipe = [
  "2 cup flour",
  "1.5 cup sugar",
  "0.5 tsp salt",
  "1 cup milk"
];

const scaledRecipe = scaleRecipe(originalRecipe, 2);
console.log(scaledRecipe);
// Output:  
// [ '4 cup flour',
//   '3 cup sugar',
//   '1 tsp salt',
//   '2 cup milk' ]

const halfRecipe = scaleRecipe(originalRecipe, 0.5);
console.log(halfRecipe);
// Output:
// [ '1 cup flour',
//   '0.75 cup sugar',
//   '0.25 tsp salt',
//   '0.5 cup milk' ]       