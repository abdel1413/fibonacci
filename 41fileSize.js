function numberOfFiles(fileSize, unit, driveCapacityGB) {
  const unitToBytes = {
    B: 1,
    KB: 1000,
    MB: 1000 * 1000,
    GB: 1000 * 1000 * 1000
  };

  const fileSizeBytes = fileSize * unitToBytes[unit];
  const driveBytes = driveCapacityGB * unitToBytes.GB;

  return Math.floor(driveBytes / fileSizeBytes);
}
// Example usage:
console.log(numberOfFiles(500, "MB", 2)); // should return 4
console.log(numberOfFiles(1, "GB", 5)); // should return 5
console.log(numberOfFiles(200, "KB", 1)); // should return 5000
console.log(numberOfFiles(2, "GB", 10)); // should return 5
console.log(numberOfFiles(100, "MB", 3)); // should return 30
console.log(numberOfFiles(50, "KB", 0.5)); // should return 10000