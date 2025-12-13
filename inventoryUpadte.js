function updateInventory(inventory, shipment) {
  // Create a map for quick lookup
  const inventoryMap = new Map();

  // Add existing inventory to the map
  for (let [qty, item] of inventory) {
    inventoryMap.set(item, qty);
  }

  // Process shipment
  for (let [qty, item] of shipment) {
    if (inventoryMap.has(item)) {
      inventoryMap.set(item, inventoryMap.get(item) + qty);
    } else {
      inventoryMap.set(item, qty);
    }
  }

  // Build result while preserving order
  const result = [];
  const added = new Set();

  // Original inventory order
  for (let [, item] of inventory) {
    result.push([inventoryMap.get(item), item]);
    added.add(item);
  }

  // New items in shipment order
  for (let [, item] of shipment) {
    if (!added.has(item)) {
      result.push([inventoryMap.get(item), item]);
      added.add(item);
    }
  }

  return result;
}
// Example usage:
const currentInventory = [
  [5, "apple"],
  [10, "banana"],
  [2, "orange"]
];

const newShipment = [
  [3, "banana"],
  [7, "kiwi"],
  [4, "apple"]
];

console.log(updateInventory(currentInventory, newShipment));
// Output:
// [
//   [9, "apple"],   // 5 + 4 from shipment
//   [13, "banana"], // 10 + 3 from shipment
//   [2, "orange"],  // unchanged
//   [7, "kiwi"]     // new item from shipment
// ]        